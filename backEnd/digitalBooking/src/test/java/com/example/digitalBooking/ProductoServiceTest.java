package com.example.digitalBooking;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.Producto;
import com.example.digitalBooking.repository.ProductoRepository;
import com.example.digitalBooking.service.ProductoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class ProductoServiceTest {
    @Mock
    private ProductoRepository repository;

    @InjectMocks
    private ProductoService service;
    private Producto producto;


    @BeforeEach
    void setUp(){producto = new Producto(1L,"Departamento","titulo",22,12,null,null,null,null);}

    @Test
    @DisplayName("WHEN we create a producto then don´t throws any exception")
    public void createProducto(){
        //GIVEN
        given(repository.findByTitulo(anyString())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertDoesNotThrow(()->service.create(producto));
    }

    @Test
    @DisplayName("WHEN we create a producto with the repeated titulo then it throws BadRequestException")
    public void createProductoException(){
        //GIVEN
        given(repository.findByTitulo(anyString())).willReturn(Optional.of(producto));
        //WHEN AND THEN
        assertThrows(BadRequestException.class,()->service.create(producto));
    }

    @Test
    @DisplayName("WHEN we list all the productos THEN don´t throws any exception")
    public void getAllProductos(){
        //GIVEN
        given(repository.findAll()).willReturn(List.of(producto));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.getAll());
    }
    @Test
    @DisplayName("WHEN we list all the productos THEN return null")
    public void getAllProductosNull(){
        //GIVEN
        given(repository.findAll()).willReturn(Collections.emptyList());
        //WHEN AND THEN
        assertNull(service.getAll());
    }

    @Test
    @DisplayName("WHEN we bring a producto by id THEN it throws ProductoNotFoundException")
    public void getByIdProductoException(){
        //GIVEN
        given(repository.findByIdWithImagenes(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(ProductoNotFoundException.class,()->service.getById(anyLong()));
    }

    @Test
    @DisplayName("WHEN we bring a producto by titulo THEN don´t throws any exception")
    public void getByTituloProducto(){
        //GIVEN
        given(repository.findByTitulo(anyString())).willReturn(Optional.of(producto));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.getByTitulo("titulo"));
    }
    @Test
    @DisplayName("WHEN we bring a producto by titulo THEN it throws ProductoNotFoundException")
    public void getByTituloCategoriaException(){
        //GIVEN
        given(repository.findByTitulo(anyString())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(ProductoNotFoundException.class,()->service.getByTitulo("no hay titulo"));
    }

    @Test
    @DisplayName("WHEN we bring productos filter by categoria THEN don´t throws any exception")
    public void filterByCategoria(){
        //GIVEN
        given(repository.filterCategoria(anyString())).willReturn(List.of(producto));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.filterCategoria(anyString()));
    }

    @Test
    @DisplayName("WHEN we bring productos filter by categoria THEN return null")
    public void filterByCategoriaNull(){
        //GIVEN
        given(repository.filterCategoria(anyString())).willReturn(Collections.emptyList());
        //WHEN AND THEN
        assertNull(service.filterCategoria(anyString()));
    }

    @Test
    @DisplayName("WHEN we bring productos filter by ciudad THEN don´t throws any exception")
    public void filterByCiudad(){
        //GIVEN
        given(repository.filterCiudad(anyString())).willReturn(List.of(producto));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.filterCiudad(anyString()));
    }

    @Test
    @DisplayName("WHEN we bring productos filter by ciudad THEN return null")
    public void filterByCiudadNull(){
        //GIVEN
        given(repository.filterCiudad(anyString())).willReturn(Collections.emptyList());
        //WHEN AND THEN
        assertNull(service.filterCiudad(anyString()));
    }

    @Test
    @DisplayName("WHEN we update a producto then don´t throws any exception")
    public void updateProducto(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.of(producto));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.update(producto));
    }


    @Test
    @DisplayName("WHEN we update a producto that not exists then it throws ProductoNotFoundException")
    public void updateProductoNotFoundException(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(ProductoNotFoundException.class,()->service.update(producto));
    }

    @Test
    @DisplayName("WHEN we delete producto THEN don´t throws any exception")
    public void deleteByIdProducto(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.of(producto));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.deleteById(1L));
    }
    @Test
    @DisplayName("WHEN we delete producto that is not present in the db THEN it throws BadRequestException")
    public void deleteByIdProductoException(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(BadRequestException.class,()-> service.deleteById(5L));
    }
}
