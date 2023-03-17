package com.example.digitalBooking.controller;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.PoliticaNotFoundException;
import com.example.digitalBooking.model.dto.PoliticaDTO;
import com.example.digitalBooking.service.PoliticaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/politicas")
public class PoliticaController {
    private final PoliticaService service;

    @PostMapping("/crear")
    public ResponseEntity<String> create(@RequestBody PoliticaDTO politicaDTO) throws BadRequestException {
        service.create(politicaDTO);
        return new ResponseEntity<>("Se creo la politica correctamente", HttpStatus.CREATED);
    }
    @GetMapping("/todas")
    public ResponseEntity<List<PoliticaDTO>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/id={id}")
    public ResponseEntity<PoliticaDTO> getById(@PathVariable Long id) throws PoliticaNotFoundException {
        return  ResponseEntity.ok(service.getById(id));
    }
    @GetMapping("/titulo={titulo}")
    public ResponseEntity<PoliticaDTO> getByTitulo(@PathVariable String titulo) throws PoliticaNotFoundException {
        return  ResponseEntity.ok(service.getByTitulo(titulo));
    }

    @PutMapping("/editar")
    public ResponseEntity<String> update(@RequestBody PoliticaDTO politicaDTO) throws PoliticaNotFoundException{
        service.update(politicaDTO);
        return new ResponseEntity<>("Se edito la politica correctamente",HttpStatus.OK);
    }


    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id ) throws PoliticaNotFoundException {
        service.deleteById(id);
        return new ResponseEntity<>("Se elimino la politica", HttpStatus.OK);
    }
}
