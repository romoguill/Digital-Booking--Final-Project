package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.Producto;
import com.example.digitalBooking.repository.ProductoRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
@AllArgsConstructor
@Service
public class ProductoService {
    private final ProductoRepository repository;
    private static final Logger logger = Logger.getLogger(ProductoService.class);

    public void create(Producto producto) throws BadRequestException {
        if (repository.findByTitulo(producto.getTitulo()).isPresent()) {
            logger.error("Ya existe una producto con el nombre: " + producto.getTitulo());
            throw new BadRequestException("Ya existe una producto con el nombre: " + producto.getTitulo());
        }

        repository.save(producto);
        logger.info("Se creo un nuevo producto: " + producto.getTitulo());
    }

    public List<Producto> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Producto no tiene registros");
            return null;
        }
        return repository.findAll();
    }
    public Producto getById(Long id) throws ProductoNotFoundException {
        return repository.findById(id).orElseThrow(ProductoNotFoundException::new);
    }
    public Producto getByTitulo(String titulo) throws ProductoNotFoundException {
        return repository.findByTitulo(titulo).orElseThrow(ProductoNotFoundException::new);
    }

    public void update(Producto producto) throws ProductoNotFoundException {
        if (repository.findById(producto.getId()).isEmpty()) {
            logger.error("No existe un registro en la tabla Producto con el id: " + producto.getId());
            throw new ProductoNotFoundException();
        }
        repository.save(producto);
        logger.info("Se modifico el registro con el id: " + producto.getId() + " de la tabla Producto");
    }

    public void deleteById(Long id) throws BadRequestException {
        if (repository.findById(id).isEmpty()) {
            logger.error("No existe un registro en la tabla Producto con el id: " + id);
            throw new BadRequestException("El producto con el id: " + id + " no existe en la base de datos.");
        }
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Productos");
    }
}