package com.nashtech.shipment.util;

import com.nashtech.common.event.ShipmentCreatedEvent;
import com.nashtech.common.model.User;
import com.nashtech.shipment.entity.ShipmentEntity;

public class ObjectCreator {

    public static ShipmentCreatedEvent getShipmentCreatedEvent() {
        ShipmentCreatedEvent shipmentCreatedEvent = ShipmentCreatedEvent.builder()
                .shipmentId("123456")
                .paymentId("789012")
                .orderId("456789")
                .user(User.builder()
                        .userId("user123")
                        .firstName("John")
                        .lastName("Doe")
                        .address("123 Main St")
                        .emailId("john.doe@example.com")
                        .mobileNumber("1234567890")
                        .build())
                .productId("ABC123")
                .subTotal(100.0)
                .total(120.0)
                .tax(0.08f)
                .totalTax(10.0f)
                .basePrice(50.0)
                .quantity(2)
                .build();

        return shipmentCreatedEvent;
    }

    public static User getUser() {
        User user = User.builder()
                .userId("123")
                .firstName("John")
                .lastName("Doe")
                .address("123 Main St")
                .emailId("john.doe@example.com")
                .mobileNumber("1234567890")
                .build();
        return user;
    }


    public static ShipmentEntity getShipmentEntity() {

        ShipmentEntity shipmentEntityWithValues = new ShipmentEntity(
                "12345",
                "ABC123",
                "PAY456",
                "user123",
                "John",
                "Doe",
                "123 Main St",
                "john.doe@example.com",
                "1234567890",
                "P123",
                "BrandXYZ",
                2,
                10.0,
                20.0,
                30.0,
                5.0f,
                1.5f
        );

        return shipmentEntityWithValues;
    }
}
