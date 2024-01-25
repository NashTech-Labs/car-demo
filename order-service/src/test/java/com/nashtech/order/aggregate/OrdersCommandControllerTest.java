package com.nashtech.order.aggregate;

import com.nashtech.common.utils.OrderStatus;
import com.nashtech.order.commands.CreateOrderCommand;
import com.nashtech.order.restapi.OrdersCommandController;
import com.nashtech.order.restapi.request.OrderCreateRequest;
import com.nashtech.order.restapi.response.OrderSummary;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.axonframework.queryhandling.QueryGateway;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.concurrent.CompletableFuture;

import static org.hamcrest.Matchers.any;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class OrdersCommandControllerTest {

    @Mock
    private CommandGateway commandGateway;

    @Mock
    private QueryGateway queryGateway;

    @InjectMocks
    private OrdersCommandController controller;

    public OrdersCommandControllerTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createOrder_shouldCreateOrderAndReturnOrderSummary() {

        OrderCreateRequest orderRequest = new OrderCreateRequest("123", 2, "user123");

        when(commandGateway.send(any(CreateOrderCommand.class))).thenReturn(CompletableFuture.completedFuture(null));

        OrderSummary result = controller.createOrder(orderRequest);

        assertEquals(OrderStatus.ORDER_PLACED.toString(), result.getOrderStatus());
        assertEquals("Thank you for your order! We’ll let you know as soon as it ships. " +
                "You can track your order here,review us here, or shop again here.", result.getMessage());

        ArgumentCaptor<CreateOrderCommand> commandCaptor = ArgumentCaptor.forClass(CreateOrderCommand.class);
        verify(commandGateway).send(commandCaptor.capture());
        CreateOrderCommand sentCommand = commandCaptor.getValue();
        assertEquals(orderRequest.getProductId(), sentCommand.getProductId());
        assertEquals(orderRequest.getUserId(), sentCommand.getUserId());
        assertEquals(orderRequest.getQuantity(), sentCommand.getQuantity());
    }

}