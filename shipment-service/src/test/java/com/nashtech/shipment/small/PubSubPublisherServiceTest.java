package com.nashtech.shipment.small;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.api.core.ApiFutures;
import com.google.cloud.pubsub.v1.Publisher;
import com.google.pubsub.v1.PubsubMessage;
import com.nashtech.shipment.config.GCPConfig;
import com.nashtech.shipment.entity.ShipmentEntity;
import com.nashtech.shipment.service.PubSubPublisherService;
import com.nashtech.shipment.util.ObjectCreator;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.*;

public class PubSubPublisherServiceTest {

    @Mock
    private Publisher mockPublisher;

    @Mock
    private GCPConfig mockGCPConfig;

    @Mock
    private ObjectMapper mockObjectMapper;

    private PubSubPublisherService pubSubPublisherService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @After
    public void tearDown() {
        pubSubPublisherService.cleanup();
    }

    @Test
    public void testMessagePublisher() throws Exception {
        ShipmentEntity shipmentEntity = ObjectCreator.getShipmentEntity();
        when(mockGCPConfig.getProjectId()).thenReturn("testProjectId");
        when(mockGCPConfig.getTopicId()).thenReturn("testTopicId");
        when(mockPublisher.publish(any(PubsubMessage.class)))
                .thenReturn(ApiFutures.immediateFuture("FutureValue"));

        pubSubPublisherService = new PubSubPublisherService(mockGCPConfig, mockPublisher);
        pubSubPublisherService.messagePublisher(shipmentEntity);

        verify(mockPublisher, times(1)).publish(any(PubsubMessage.class));
    }


}
