package com.example.digitalBooking.serviceTest;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.Producto;
import com.example.digitalBooking.model.Usuario;
import com.example.digitalBooking.model.dto.ReservaDTO;
import com.example.digitalBooking.repository.ProductoRepository;
import com.example.digitalBooking.repository.ReservaRepository;
import com.example.digitalBooking.repository.UsuarioRepository;
import com.example.digitalBooking.service.ReservaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalTime;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;

import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class ReservaServiceTest {
    @Mock
    ReservaRepository repository;
    @Mock
    ProductoRepository productoRepository;
    @Mock
    UsuarioRepository usuarioRepository;
    @InjectMocks
    ReservaService service;

    private final Usuario usuario = new Usuario();
    private final Producto producto = new Producto();
    private ReservaDTO reservaDTO;

    @BeforeEach
    void setUp(){
        reservaDTO = new ReservaDTO(1L, LocalTime.now(), LocalDate.now(),
                LocalDate.now(),1L,1L);
    }

    @Test
    @DisplayName("WHEN we create a reserva then don´t throws any exception")
    public void createReserva(){
        //GIVEN
        given(productoRepository.findById(anyLong())).willReturn(Optional.of(producto));
        given(usuarioRepository.findById(anyLong())).willReturn(Optional.of(usuario));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.create(reservaDTO));
    }

    @Test
    @DisplayName("WHEN we create a reserva with idUsuario invalid then it throws BadRequestException")
    public void createReservaException(){
        //GIVEN
        given(productoRepository.findById(anyLong())).willReturn(Optional.of(producto));
        given(usuarioRepository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(BadRequestException.class,()->service.create(reservaDTO));
    }

    @Test
    @DisplayName("WHEN we create a reserva with idProducto invalid then it throws BadRequestException")
    public void createUsuarioException2(){
        //GIVEN
        given(productoRepository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(BadRequestException.class,()->service.create(reservaDTO));
    }

    @Test
    @DisplayName("WHEN we list all the reservas by idProducto THEN don´t throws any exception")
    public void getAllReservasByIdProducto(){
        //GIVEN
        given(productoRepository.findById(anyLong())).willReturn(Optional.of(producto));
        //WHEN AND THEN
        assertDoesNotThrow(()->service.getAllByIdProducto(anyLong()));
    }
    @Test
    @DisplayName("WHEN we list all the reservas by idProducto THEN throws ProductoNotFoundException")
    public void getAllUsuarioNull() {
        //GIVEN
        given(productoRepository.findById(anyLong())).willReturn(Optional.empty());
        //WHEN AND THEN
        assertThrows(ProductoNotFoundException.class, () -> service.getAllByIdProducto(anyLong()));
    }
}
