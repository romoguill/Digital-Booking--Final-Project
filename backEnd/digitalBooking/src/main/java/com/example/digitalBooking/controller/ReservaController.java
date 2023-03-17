package com.example.digitalBooking.controller;

import com.example.digitalBooking.exception.ReservaNotFoundException;
import com.example.digitalBooking.model.dto.ReservaDTO;
import com.example.digitalBooking.service.ReservaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/reservas")
public class ReservaController {
    private final ReservaService service;


    @PostMapping("/crear")
    public ResponseEntity<String> create(@RequestBody ReservaDTO reservaDTO) {
        service.create(reservaDTO);
        return new ResponseEntity<>("Se creo la reserva correctamente", HttpStatus.CREATED);
    }

    @GetMapping("/id={id}")
    public ResponseEntity<ReservaDTO> getById(@PathVariable Long id) throws ReservaNotFoundException {
        return  ResponseEntity.ok(service.getById(id));
    }
}
