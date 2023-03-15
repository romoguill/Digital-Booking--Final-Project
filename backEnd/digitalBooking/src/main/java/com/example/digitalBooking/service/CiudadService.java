package com.example.digitalBooking.service;


import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.CiudadNotFoundException;
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

    public void create(Ciudad ciudad) throws BadRequestException {
        if (repository.findByNombre(ciudad.getNombre()).isPresent()) {
            logger.error("Ya existe una ciudad con el nombre: " + ciudad.getNombre());
            throw new BadRequestException("Ya existe una ciudad con el nombre: " + ciudad.getNombre());
        }

        repository.save(ciudad);
        logger.info("Se creo una nueva ciudad: " + ciudad.getNombre());
    }

    public List<Ciudad> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Categoria no tiene registros");
            return null;
        }
        return repository.findAll();
    }

    public Ciudad getById(Long id) throws CiudadNotFoundException {
        return repository.findById(id).orElseThrow(CiudadNotFoundException::new);
    }
    public Ciudad getByNombre(String titulo) throws CiudadNotFoundException {
        return repository.findByNombre(titulo).orElseThrow(CiudadNotFoundException::new);
    }

    public void update(Ciudad ciudad) throws CiudadNotFoundException {
        if (repository.findById(ciudad.getId()).isEmpty()) {
            logger.error("No existe un registro en la tabla Ciudad con el id: " + ciudad.getId());
            throw new CiudadNotFoundException();
        }
        repository.save(ciudad);
        logger.info("Se modifico el registro con el id: " + ciudad.getId() + " de la tabla Ciudad");
    }

    public void deleteById(Long id) throws BadRequestException {
        if (repository.findById(id).isEmpty()) {
            logger.error("No existe un registro en la tabla Ciudad con el id: " + id);
            throw new BadRequestException("La ciudad con el id: " + id + " no existe en la base de datos.");
        }
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Ciudad");
    }
}
