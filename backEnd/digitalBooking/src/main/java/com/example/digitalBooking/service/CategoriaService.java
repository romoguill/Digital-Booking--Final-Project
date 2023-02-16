package com.example.digitalBooking.service;


import com.example.digitalBooking.repository.CategoriaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class CategoriaService {

    private final CategoriaRepository repository;
}
