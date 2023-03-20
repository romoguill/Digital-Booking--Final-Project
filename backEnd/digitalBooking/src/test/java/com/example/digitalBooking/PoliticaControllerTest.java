package com.example.digitalBooking;

import com.example.digitalBooking.controller.PoliticaController;
import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.PoliticaNotFoundException;
import com.example.digitalBooking.model.dto.PoliticaDTO;
import com.example.digitalBooking.service.PoliticaService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class PoliticaControllerTest {
    @Mock
    private PoliticaService service;
    @InjectMocks
    private PoliticaController controller;
    private final PoliticaDTO politicaDTO = new PoliticaDTO(1L,"titulo","url","url");

    @Test
    @DisplayName("WHEN we create a politica THEN return HTTP STATUS 201 CREATED and a message 'Se creo la politica correctamente'")
    public void createPolitica() throws BadRequestException {
        //WHEN
        given(service.create(politicaDTO)).willReturn(true);
        //THEN
        assertEquals(controller.create(politicaDTO),new ResponseEntity<>("Se creo la politica correctamente", HttpStatus.CREATED));
    }

    @Test
    @DisplayName("WHEN we list all politicas THEN return HTTP STATUS 200 OK and a list of politicas")
    public void getAllPoliticas(){
        //WHEN
        given(service.getAll()).willReturn(List.of(politicaDTO));
        //THEN
        assertEquals(controller.getAll(),ResponseEntity.ok(List.of(politicaDTO)));
    }

    @Test
    @DisplayName("WHEN we bring a politica by id THEN return HTTP STATUS 200 OK and a politica")
    public void getPoliticaById() throws PoliticaNotFoundException {
        //WHEN
        given(service.getById(anyLong())).willReturn(politicaDTO);
        //THEN
        assertEquals(controller.getById(anyLong()),ResponseEntity.ok(politicaDTO));
    }

    @Test
    @DisplayName("WHEN we bring a politica by titulo THEN return HTTP STATUS 200 OK and a politica")
    public void getPoliticaByTitulo() throws PoliticaNotFoundException {
        //WHEN
        given(service.getByTitulo(anyString())).willReturn(politicaDTO);
        //THEN
        assertEquals(controller.getByTitulo(anyString()),ResponseEntity.ok(politicaDTO));
    }

    @Test
    @DisplayName("WHEN we update a politica THEN return HTTP STATUS 200 OK and a message 'Se edito la politica correctamente'")
    public void updatePolitica() throws PoliticaNotFoundException {
        //WHEN
        given(service.update(politicaDTO)).willReturn(true);
        //THEN
        assertEquals(controller.update(politicaDTO),new ResponseEntity<>("Se edito la politica correctamente", HttpStatus.OK));
    }

    @Test
    @DisplayName("WHEN we delete a politica by id THEN return HTTP STATUS 200 OK and a message 'Se elimino la politica'")
    public void deletePoliticaById() throws PoliticaNotFoundException {
        //WHEN
        given(service.deleteById(anyLong())).willReturn(true);
        //THEN
        assertEquals(controller.deleteById(anyLong()),new ResponseEntity<>("Se elimino la politica", HttpStatus.OK));
    }
}
