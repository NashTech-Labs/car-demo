package com.nashtech.inventory.command.rest;

import java.util.List;



import com.nashtech.inventory.command.CreateProductCommand;
import com.nashtech.inventory.query.rest.ProductRestModel;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/products")
public class ProductsCommandController {

     private CommandGateway commandGateway;


    @PostMapping
    public String addProducts(List<ProductRestModel> products) {
        products.forEach(product->{
            CreateProductCommand createProductCommand = CreateProductCommand.builder()
                    .productId(product.getProductId())

                    .build();
            commandGateway.send(createProductCommand);
        });
        return "Products added";
    }



}
