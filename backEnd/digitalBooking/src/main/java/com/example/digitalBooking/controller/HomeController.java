package com.example.digitalBooking.controller;


import com.example.digitalBooking.model.ProductoDTO;
import com.example.digitalBooking.service.ProductoService;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/home")
public class HomeController {
    private final ProductoService service;
    @GetMapping("/")
    public ResponseEntity<List<ProductoDTO>> home(){
        return ResponseEntity.ok(service.getAll());
    }
}
