package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.PoliticaNotFoundException;

import com.example.digitalBooking.model.Politica;
import com.example.digitalBooking.repository.PoliticaRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PoliticaService {
    private final PoliticaRepository repository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public void create(Politica politica) throws BadRequestException {
        if (repository.findByTitulo(politica.getTitulo()).isPresent()) {
            logger.error("Ya existe una politica con el titulo: " + politica.getTitulo());
            throw new BadRequestException("Ya existe una politica con el titulo: " + politica.getTitulo());
        }

        repository.save(politica);
        logger.info("Se creo una nueva politica: " + politica.getTitulo());
    }

    public List<Politica> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Politica no tiene registros");
            return null;
        }
        return repository.findAll();
    }
    public Politica getById(Long id) throws PoliticaNotFoundException {
        return repository.findById(id).orElseThrow(PoliticaNotFoundException::new);
    }
    public Politica getByTitulo(String titulo) throws PoliticaNotFoundException {
        return repository.findByTitulo(titulo).orElseThrow(PoliticaNotFoundException::new);
    }

    public void update(Politica politica) throws PoliticaNotFoundException {
        if (repository.findById(politica.getId()).isEmpty()) {
            logger.error("No existe un registro en la tabla Politica con el id: " + politica.getId());
            throw new PoliticaNotFoundException();
        }
        repository.save(politica);
        logger.info("Se modifico el registro con el id: " + politica.getId() + " de la tabla Politica");
    }

    public void deleteById(Long id) throws BadRequestException {
        if (repository.findById(id).isEmpty()) {
            logger.error("No existe un registro en la tabla Politica con el id: " + id);
            throw new BadRequestException("La politica con el id: " + id + " no existe en la base de datos.");
        }
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Politica");
    }
}
