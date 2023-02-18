package com.example.digitalBooking.controller;


import com.example.digitalBooking.service.CategoriaService;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;



@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    private final CategoriaService service;



}
