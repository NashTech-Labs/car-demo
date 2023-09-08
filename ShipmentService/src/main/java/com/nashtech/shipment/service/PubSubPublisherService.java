package com.nashtech.shipment.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.google.api.core.ApiFuture;
import com.google.cloud.pubsub.v1.Publisher;
import com.google.protobuf.ByteString;
import com.google.pubsub.v1.PubsubMessage;
import com.google.pubsub.v1.TopicName;
import com.nashtech.shipment.config.PubSubConfig;
import com.nashtech.shipment.entity.ShipmentEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
@Slf4j
public class PubSubPublisherService {
    private Publisher publisher;
    @Inject
    private PubSubConfig pubSubConfig;

    private ObjectMapper objectMapper;

    public void messagePublisher(final ShipmentEntity shipmentEntity) {
        log.info("Publishing data to topic: {}", pubSubConfig.getTopicId());
        TopicName topicName = TopicName.of(pubSubConfig.getProjectId(), pubSubConfig.getTopicId());
        objectMapper = new ObjectMapper();

        try {
            publisher = Publisher.newBuilder(topicName).build();
            objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
            String shipmentData = objectMapper.writeValueAsString(shipmentEntity);
            PubsubMessage pubsubMessage = PubsubMessage.newBuilder().setData(ByteString.copyFromUtf8(shipmentData)).build();
            ApiFuture<String> publishedMessage = publisher.publish(pubsubMessage);
            log.info("Message id generated:{}", publishedMessage.get());
        } catch (Exception exception) {
            log.error("Error : {} while publishing data to pub sub topic : {}", exception.getMessage(), pubSubConfig.getTopicId());
        }
    }
}
