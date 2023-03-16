package com.example.digitalBooking.controller;


import com.example.digitalBooking.model.Reserva;
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
    public ResponseEntity<String> create(@RequestBody Reserva reserva) {
        service.create(reserva);
        return new ResponseEntity<>("Se creo la reserva correctamente", HttpStatus.CREATED);
    }

    @GetMapping("/todas")
    public ResponseEntity<List<Reserva>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }
}
