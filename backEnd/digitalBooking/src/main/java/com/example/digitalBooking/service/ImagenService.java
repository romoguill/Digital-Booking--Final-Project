package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ImagenNotFoundException;
import com.example.digitalBooking.model.Imagen;
import com.example.digitalBooking.repository.ImagenRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Service
public class ImagenService {
    private final ImagenRepository repository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public void create(Imagen imagen) throws BadRequestException {
        if (repository.findByTitulo(imagen.getTitulo()).isPresent()) {
            logger.error("Ya existe una imagen con el titulo: " + imagen.getTitulo());
            throw new BadRequestException("Ya existe una imagen con el titulo: " + imagen.getTitulo());
        }

        repository.save(imagen);
        logger.info("Se creo una nueva imagen: " + imagen.getTitulo());
    }

    public List<Imagen> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Imagen no tiene registros");
            return null;
        }
        return repository.findAll();
    }
    public Imagen getById(Long id) throws ImagenNotFoundException {
        return repository.findById(id).orElseThrow(ImagenNotFoundException::new);
    }
    public Imagen getByTitulo(String titulo) throws ImagenNotFoundException {
        return repository.findByTitulo(titulo).orElseThrow(ImagenNotFoundException::new);
    }

    public void update(Imagen imagen) throws ImagenNotFoundException {
        if (repository.findById(imagen.getId()).isEmpty()) {
            logger.error("No existe un registro en la tabla Imagen con el id: " + imagen.getId());
            throw new ImagenNotFoundException();
        }
        repository.save(imagen);
        logger.info("Se modifico el registro con el id: " + imagen.getId() + " de la tabla Imagen");
    }

    public void deleteById(Long id) throws BadRequestException {
        if (repository.findById(id).isEmpty()) {
            logger.error("No existe un registro en la tabla Imagen con el id: " + id);
            throw new BadRequestException("La imagen con el id: " + id + " no existe en la base de datos.");
        }
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Imagen");
    }
}
