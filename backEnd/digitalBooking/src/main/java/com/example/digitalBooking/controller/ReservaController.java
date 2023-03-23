package com.example.digitalBooking.controller;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.dto.RequestReservaDTO;
import com.example.digitalBooking.model.dto.ResponseReservaDTO;
import com.example.digitalBooking.service.ReservaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/reservas")
public class ReservaController {
    private final ReservaService service;

    @PostMapping("/crear")
    public ResponseEntity<String> create(@RequestBody RequestReservaDTO requestReservaDTO) throws BadRequestException {
        service.create(requestReservaDTO);
        return new ResponseEntity<>("Se creo la reserva correctamente", HttpStatus.CREATED);
    }

    @GetMapping("/idProducto={idProducto}")
    public ResponseEntity<List<ResponseReservaDTO>> getByIdProducto(@PathVariable Long idProducto) throws ProductoNotFoundException {
        return ResponseEntity.ok(service.getAllByIdProducto(idProducto));
    }
}
