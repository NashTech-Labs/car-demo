package com.nashtech.order.commands;

import lombok.Builder;
import lombok.Value;
import org.axonframework.modelling.command.TargetAggregateIdentifier;

@Value
@Builder
public class CreateOrderCommand {
    @TargetAggregateIdentifier
    String orderId;
    String productId;
    Integer quantity;
    String userId;

}