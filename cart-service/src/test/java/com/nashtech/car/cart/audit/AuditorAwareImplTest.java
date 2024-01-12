package com.nashtech.car.cart.audit;

import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AuditorAwareImplTest {
    @Test
    void getCurrentAuditorShouldReturnSystem() {
        // Create an instance of AuditorAwareImpl
        AuditorAwareImpl auditorAware = new AuditorAwareImpl();

        // Call the getCurrentAuditor method
        Optional<String> result = auditorAware.getCurrentAuditor();

        // Assert that the result is present and equals "System"
        assertEquals("System", result.orElse(null));
    }
}
