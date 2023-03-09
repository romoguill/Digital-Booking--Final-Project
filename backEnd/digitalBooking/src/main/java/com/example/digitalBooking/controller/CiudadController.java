package com.example.digitalBooking.controller;


import com.example.digitalBooking.model.Categoria;
import com.example.digitalBooking.model.Ciudad;
import com.example.digitalBooking.service.CiudadService;
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
@RequestMapping("/ciudades")
public class CiudadController {

    private final CiudadService service;

    @GetMapping("/todas")
    public ResponseEntity<List<Ciudad>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }
}
