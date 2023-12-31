package com.nashtech.car.cart.controller;

import com.nashtech.car.cart.model.CartItem;
import com.nashtech.car.cart.services.CartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@Slf4j
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<CartItem> addToCart(@RequestParam String productId, @RequestParam int quantity,
                                            @RequestParam String userId) {
        log.info("Product {} adding into cart for user {}", productId, userId);
        return new ResponseEntity<>(cartService.addToCart(productId, quantity,userId), HttpStatus.CREATED);

    }

    @PostMapping("/remove")
    public ResponseEntity<CartItem> removeFromCart(@RequestParam String productId, @RequestParam int quantity,
                                                 @RequestParam String userId) {
        log.info("Product {} updated into cart for user {}", productId, userId);
        return new ResponseEntity<>(cartService.removeFromCart(productId,quantity,userId),HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<CartItem> getFromCart(@RequestParam String productId, @RequestParam String userId) {
        return new ResponseEntity<>(cartService.getFromCart(productId,userId),HttpStatus.OK);
    }

}