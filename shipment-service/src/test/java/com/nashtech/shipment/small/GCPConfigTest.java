package com.nashtech.shipment.small;

import com.nashtech.shipment.config.GCPConfig;
import com.nashtech.shipment.util.TestTag;
import org.junit.Test;
import org.junit.jupiter.api.Tag;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Tag(TestTag.SMALL_TESTS)
public class GCPConfigTest {
    @Test
    public void test_projectIdFieldProperlySet() {
        GCPConfig config = new GCPConfig();
        config.setProjectId("testProjectId");
        assertEquals("testProjectId", config.getProjectId());
    }

    @Test
    public void test_topicIdFieldProperlySet() {
        GCPConfig config = new GCPConfig();
        config.setTopicId("testTopicId");
        assertEquals("testTopicId", config.getTopicId());
    }
}
