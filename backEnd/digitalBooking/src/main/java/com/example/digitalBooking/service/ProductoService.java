package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.Imagen;
import com.example.digitalBooking.model.Producto;
import com.example.digitalBooking.model.ProductoDTO;
import com.example.digitalBooking.repository.ProductoRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public List<ProductoDTO> getAll(){
        var productos = repository.findAllWithImagenes();
        if (productos.isEmpty()) {
            logger.info("La tabla Producto no tiene registros");
            return null;
        }

        List<ProductoDTO> listaDTO = new ArrayList<>();
        for (Producto producto: productos) {
            Set<Imagen> imagenes = new HashSet<>(producto.getImagenes());
            ProductoDTO prod = new ProductoDTO(producto,imagenes);
            listaDTO.add(prod);
        }
        return listaDTO;
    }
    public ProductoDTO getById(Long id) throws ProductoNotFoundException {
        var optionalProducto = repository.findByIdWithImagenes(id);
        if(optionalProducto.isEmpty()){
            throw new ProductoNotFoundException();
        }
        Producto producto = optionalProducto.get();
        Set<Imagen> imagenes = new HashSet<>(producto.getImagenes());
        return new ProductoDTO(producto,imagenes);
    }
    public Producto getByTitulo(String titulo) throws ProductoNotFoundException {
        return repository.findByTitulo(titulo).orElseThrow(ProductoNotFoundException::new);
    }


    public List<ProductoDTO> filterCategoria(String categoria){
        var productos = repository.filterCategoria(categoria);
        if (productos.isEmpty()) {
            logger.info("No hay registro de productos en esa categoria o no se encontro categoria");
            return null;
        }
        List<ProductoDTO> listaDTO = new ArrayList<>();
        for (Producto producto: productos) {
            Set<Imagen> imagenes = new HashSet<>(producto.getImagenes());
            ProductoDTO prod = new ProductoDTO(producto,imagenes);
            listaDTO.add(prod);
        }
        return listaDTO;
    }
    public List<ProductoDTO> filterCiudad(String ciudad){

        var productos = repository.filterCiudad(ciudad);
        if (productos.isEmpty()) {
            logger.info("No hay registro de productos en esa ciudad o no se encontro ciudad");
            return null;
        }
        List<ProductoDTO> listaDTO = new ArrayList<>();
        for (Producto producto: productos) {
            Set<Imagen> imagenes = new HashSet<>(producto.getImagenes());
            ProductoDTO prod = new ProductoDTO(producto,imagenes);
            listaDTO.add(prod);
        }
        return listaDTO;
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