package com.example.digitalBooking;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.PoliticaNotFoundException;
import com.example.digitalBooking.model.Politica;
import com.example.digitalBooking.model.dto.PoliticaDTO;
import com.example.digitalBooking.repository.PoliticaRepository;
import com.example.digitalBooking.service.PoliticaService;
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
public class PoliticaServiceTest {
    @Mock
    private PoliticaRepository repository;

    @InjectMocks
    private PoliticaService service;
    private final Politica politica = new Politica();
    private PoliticaDTO politicaDTO;
    @BeforeEach
    void setUp(){  politicaDTO = new PoliticaDTO(1L,"seguridad","descripcion","url");}

    @Test
    @DisplayName("WHEN we create a politica then don´t throws any exception")
    public void createPolitica(){
        //GIVEN
        given(repository.findByTitulo(anyString())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertDoesNotThrow(()->service.create(politicaDTO));
    }
    @Test
    @DisplayName("WHEN we create a politica with the repeated titulo then it throws BadRequestException")
    public void createCiudadException(){
        //GIVEN

        given(repository.findByTitulo(anyString())).willReturn(Optional.of(politica));
        //WHEN AND THEN
        assertThrows(BadRequestException.class,()->service.create(politicaDTO));
    }

    @Test
    @DisplayName("WHEN we list all the politicas THEN don´t throws any exception")
    public void getAllPoliticas(){
        //GIVEN
        given(repository.findAll()).willReturn(List.of(politica));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.getAll());
    }

    @Test
    @DisplayName("WHEN we list all the politicas THEN return null")
    public void getAllPoliticasNull(){
        //GIVEN
        given(repository.findAll()).willReturn(Collections.emptyList());
        //WHEN AND THEN
        assertNull(service.getAll());
    }


    @Test
    @DisplayName("WHEN we bring a politica by id THEN don´t throws any exception")
    public void getByIdPolitica(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.of(politica));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.getById(1L));
    }
    @Test
    @DisplayName("WHEN we bring a politica by id THEN it throws PoliticaNotFoundException")
    public void getByIdPoliticaException(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(PoliticaNotFoundException.class,()->service.getById(1L));
    }

    @Test
    @DisplayName("WHEN we bring a politica by name THEN don´t throws any exception")
    public void getByTituloPolitica(){
        //GIVEN
        given(repository.findByTitulo(anyString())).willReturn(Optional.of(politica));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.getByTitulo("seguridad"));
    }
    @Test
    @DisplayName("WHEN we bring a poltica by name THEN it throws PoliticaNotFoundException")
    public void getByTituloPoliticaException(){
        //GIVEN
        given(repository.findByTitulo(anyString())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(PoliticaNotFoundException.class,()->service.getByTitulo("nombre"));
    }

    @Test
    @DisplayName("WHEN we update a politica then don´t throws any exception")
    public void updatePolitica(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.of(politica));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.update(politicaDTO));
    }
    @Test
    @DisplayName("WHEN we update a politica that not exists then it throws PoliticaNotFoundException")
    public void PoliticaNotFoundException(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(PoliticaNotFoundException.class,()->service.update(politicaDTO));
    }

    @Test
    @DisplayName("WHEN we delete politica THEN don´t throws any exception")
    public void deleteByIdPolitica(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.of(politica));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.deleteById(1L));
    }
    @Test
    @DisplayName("WHEN we delete politica that is not present in the db THEN it throws PoliticaNotFoundException")
    public void deleteByIdPoliticaException(){
        //GIVEN
        given(repository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(PoliticaNotFoundException.class,()-> service.deleteById(5L));
    }
}

