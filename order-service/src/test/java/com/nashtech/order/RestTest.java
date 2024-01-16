package com.nashtech.order;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nashtech.order.restapi.request.OrderCreateRequest;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Collection;
import java.util.Objects;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class RestTest {
    @Autowired
    private MockMvc mvc;

    @Test
    public void testCreateOrder() throws Exception {
        OrderCreateRequest orderRequest = OrderCreateRequest.builder().build();
        MvcResult result = mvc.perform(post("/orders/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(orderRequest))
                        .characterEncoding("utf-8"))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        MockHttpServletResponse mockResponse = result.getResponse();
        Assert.assertEquals(200, mockResponse.getStatus());
        assertThat(mockResponse.getContentType(),
                Objects.requireNonNull(mockResponse.getContentType()).contains("application/json"));

        Assert.assertFalse(mockResponse.getContentAsString().isEmpty());
        Collection<String> responseHeaders = mockResponse.getHeaderNames();
        Assert.assertNotNull(responseHeaders);
        Assert.assertFalse(responseHeaders.isEmpty());
    }

    @Test
    public void testGetOrdersByUser() throws Exception {

        MvcResult result = mvc
                .perform(get("/orders/1652"))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        MockHttpServletResponse mockResponse = result.getResponse();
        Assert.assertEquals(200, mockResponse.getStatus());
        assertThat(mockResponse.getContentType(),
                Objects.requireNonNull(mockResponse.getContentType()).contains("application/json"));

        Collection<String> responseHeaders = mockResponse.getHeaderNames();
        Assert.assertNotNull(responseHeaders);
        Assert.assertFalse(responseHeaders.isEmpty());
    }
}
