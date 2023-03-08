package com.example.digitalBooking.service;


import com.example.digitalBooking.model.Ciudad;
import com.example.digitalBooking.repository.CiudadRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CiudadService {

    private final CiudadRepository repository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public List<Ciudad> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Categoria no tiene registros");
            return null;
        }
        return repository.findAll();
    }
}
