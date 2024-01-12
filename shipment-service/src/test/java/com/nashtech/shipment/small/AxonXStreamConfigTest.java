package com.nashtech.shipment.small;

import com.nashtech.shipment.config.AxonXStreamConfig;
import com.nashtech.shipment.util.TestTag;
import com.thoughtworks.xstream.XStream;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@Tag(TestTag.SMALL_TESTS)
public class AxonXStreamConfigTest {

    @Test
    void testXStreamConfiguration() {

        AxonXStreamConfig axonXStreamConfig = new AxonXStreamConfig();
        XStream xStream = axonXStreamConfig.xStream();
        assertNotNull(xStream);

    }
}
