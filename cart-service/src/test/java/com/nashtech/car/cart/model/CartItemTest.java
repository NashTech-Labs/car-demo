package com.nashtech.car.cart.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class CartItemTest {
    @Test
    public void test_createCartItemWithAllAttributes() {
        CartItem cartItem = new CartItem();
        cartItem.setId(1L);
        cartItem.setProductId("123");
        cartItem.setBrand("Brand");
        cartItem.setModel("Model");
        cartItem.setYear(2021);
        cartItem.setColor("Color");
        cartItem.setMileage(1000.0);
        cartItem.setBasePrice(10000.0);
        cartItem.setQuantity(1);
        cartItem.setTax(0.1f);
        cartItem.setUserId("user1");

        assertNotNull(cartItem.getId());
        assertEquals(1L, cartItem.getId().longValue());
        assertEquals("123", cartItem.getProductId());
        assertEquals("Brand", cartItem.getBrand());
        assertEquals("Model", cartItem.getModel());
        assertEquals(2021, cartItem.getYear());
        assertEquals("Color", cartItem.getColor());
        assertEquals(1000.0, cartItem.getMileage(), 0.01);
        assertEquals(10000.0, cartItem.getBasePrice(), 0.01);
        assertEquals(1, cartItem.getQuantity());
        assertEquals(0.1f, cartItem.getTax(), 0.01);
        assertEquals("user1", cartItem.getUserId());
    }
}
