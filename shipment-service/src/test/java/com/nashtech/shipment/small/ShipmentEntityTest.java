package com.nashtech.shipment.small;

import com.nashtech.shipment.entity.ShipmentEntity;
import com.nashtech.shipment.util.ObjectCreator;
import com.nashtech.shipment.util.TestTag;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@Tag(TestTag.SMALL_TESTS)
public class ShipmentEntityTest {

    @Test
    public void test_instantiation_with_valid_input() {
        ShipmentEntity shipmentEntity = ObjectCreator.getShipmentEntity();

        assertNotNull(shipmentEntity);
    }
}
