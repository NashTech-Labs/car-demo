package com.nashtech.car.cart.data;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ProductsSummaryTest {
    @Test
    public void test_set_values() {
        ProductsSummary productsSummary = new ProductsSummary();
        productsSummary.setProductId("123");
        productsSummary.setBrand("Brand");
        productsSummary.setModel("Model");
        productsSummary.setYear(2021);
        productsSummary.setColor("Red");
        productsSummary.setMileage(10000.0d);
        productsSummary.setBasePrice(10000.0d);
        productsSummary.setQuantity(5);
        productsSummary.setTax(0.1f);

        assertEquals("123", productsSummary.getProductId());
        assertEquals("Brand", productsSummary.getBrand());
        assertEquals("Model", productsSummary.getModel());
        assertEquals(Integer.valueOf(2021), productsSummary.getYear());
        assertEquals("Red", productsSummary.getColor());
        assertEquals(10000.0d, productsSummary.getMileage(), 0.0);
        assertEquals(10000.0d, productsSummary.getBasePrice(), 0.0);
        assertEquals(5, productsSummary.getQuantity());
        assertEquals(0.1f, productsSummary.getTax(), 0.0);
    }
}
