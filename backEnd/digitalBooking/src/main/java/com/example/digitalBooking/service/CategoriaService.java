package com.example.digitalBooking.service;


import com.example.digitalBooking.controller.CategoriaController;
import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.CategoriaNotFoundException;
import com.example.digitalBooking.model.Categoria;
import com.example.digitalBooking.repository.CategoriaRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class CategoriaService {

    private final CategoriaRepository repository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public void create(Categoria categoria) throws BadRequestException {
        if (repository.findByTitulo(categoria.getTitulo()).isPresent()) {
            logger.error("Ya existe una categoria con el nombre: " + categoria.getTitulo());
            throw new BadRequestException("Ya existe una categoria con el nombre: " + categoria.getTitulo());
        }

        repository.save(categoria);
        logger.info("Se creo una nueva categoria: " + categoria.getTitulo());
    }

    public List<Categoria> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Categoria no tiene registros");
            return null;
        }
        return repository.findAll();
    }
    public Categoria getById(Long id) throws CategoriaNotFoundException {
        return repository.findById(id).orElseThrow(CategoriaNotFoundException::new);
    }
    public Categoria getByTitulo(String titulo) throws CategoriaNotFoundException {
        return repository.findByTitulo(titulo).orElseThrow(CategoriaNotFoundException::new);
    }

    public void update(Categoria categoria) throws CategoriaNotFoundException {
        if (repository.findById(categoria.getId()).isEmpty()) {
            logger.error("No existe un registro en la tabla Categoria con el id: " + categoria.getId());
            throw new CategoriaNotFoundException();
        }
        repository.save(categoria);
        logger.info("Se modifico el registro con el id: " + categoria.getId() + " de la tabla Categoria");
    }

    public void deleteById(Long id) throws BadRequestException {
        if (repository.findById(id).isEmpty()) {
            logger.error("No existe un registro en la tabla Categoria con el id: " + id);
            throw new BadRequestException("La categoria con el id: " + id + " no existe en la base de datos.");
        }
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Categoria");
    }
}
