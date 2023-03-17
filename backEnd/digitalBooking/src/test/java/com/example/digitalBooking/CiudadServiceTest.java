package com.example.digitalBooking;

import com.example.digitalBooking.model.Ciudad;
import com.example.digitalBooking.model.dto.CiudadDTO;
import com.example.digitalBooking.repository.CiudadRepository;
import com.example.digitalBooking.service.CiudadService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Collections;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class CiudadServiceTest {
    @Mock
    private CiudadRepository repository;

    @InjectMocks
    private CiudadService service;
    private Ciudad ciudad = new Ciudad();
    private CiudadDTO ciudadDTO;
    @BeforeEach
    void setUp(){  ciudadDTO = new CiudadDTO(1L,"Mar del Plata");}

    @Test
    @DisplayName("WHEN we list all the ciudades THEN don´t throws any exception")
    public void getAllCiudades(){
        //GIVEN
        given(repository.findAll()).willReturn(List.of(ciudad));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.getAll());
    }

    @Test
    @DisplayName("WHEN we list all the ciudades THEN return null")
    public void getAllCiudadesNull(){
        //GIVEN
        given(repository.findAll()).willReturn(Collections.emptyList());
        //WHEN AND THEN
        assertNull(service.getAll());
    }
}
