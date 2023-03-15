package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.CaracteristicaNotFoundException;
import com.example.digitalBooking.exception.CategoriaNotFoundException;
import com.example.digitalBooking.model.Caracteristica;
import com.example.digitalBooking.model.Categoria;
import com.example.digitalBooking.repository.CaracteristicaRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CaracteristicaService {
    private final CaracteristicaRepository repository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public void create(Caracteristica caracteristica) throws BadRequestException {
        if (repository.findByTitulo(caracteristica.getTitulo()).isPresent()) {
            logger.error("Ya existe una caracteristica con el nombre: " + caracteristica.getTitulo());
            throw new BadRequestException("Ya existe una caracteristica con el nombre: " + caracteristica.getTitulo());
        }

        repository.save(caracteristica);
        logger.info("Se creo una nueva caracteristica: " + caracteristica.getTitulo());
    }

    public List<Caracteristica> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Caracteristica no tiene registros");
            return null;
        }
        return repository.findAll();
    }
    public Caracteristica getById(Long id) throws CaracteristicaNotFoundException {
        return repository.findById(id).orElseThrow(CaracteristicaNotFoundException::new);
    }
    public Caracteristica getByTitulo(String titulo) throws CaracteristicaNotFoundException {
        return repository.findByTitulo(titulo).orElseThrow(CaracteristicaNotFoundException::new);
    }

    public void update(Caracteristica caracteristica) throws CaracteristicaNotFoundException {
        if (repository.findById(caracteristica.getId()).isEmpty()) {
            logger.error("No existe un registro en la tabla Caracteristica con el id: " + caracteristica.getId());
            throw new CaracteristicaNotFoundException();
        }
        repository.save(caracteristica);
        logger.info("Se modifico el registro con el id: " + caracteristica.getId() + " de la tabla Caracteristica");
    }

    public void deleteById(Long id) throws BadRequestException {
        if (repository.findById(id).isEmpty()) {
            logger.error("No existe un registro en la tabla Caracteristica con el id: " + id);
            throw new BadRequestException("La caracteristica con el id: " + id + " no existe en la base de datos.");
        }
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Caracteristica");
    }
}
