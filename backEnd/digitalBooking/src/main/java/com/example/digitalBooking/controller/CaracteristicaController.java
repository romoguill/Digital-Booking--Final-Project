package com.example.digitalBooking.controller;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.CaracteristicaNotFoundException;
import com.example.digitalBooking.exception.CategoriaNotFoundException;
import com.example.digitalBooking.model.Caracteristica;
import com.example.digitalBooking.model.Categoria;
import com.example.digitalBooking.service.CaracteristicaService;
import com.example.digitalBooking.service.CategoriaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/caracteristicas")
public class CaracteristicaController {
    private final CaracteristicaService service;


    @PostMapping("/crear")
    public ResponseEntity<String> create(@RequestBody Caracteristica caracteristica) throws BadRequestException {
        service.create(caracteristica);
        return new ResponseEntity<>("Se creo la caracteristica correctamente", HttpStatus.CREATED);
    }

    @GetMapping("/todas")
    public ResponseEntity<List<Caracteristica>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Caracteristica> getById(@PathVariable Long id) throws CaracteristicaNotFoundException {
        return  ResponseEntity.ok(service.getById(id));
    }
    @GetMapping("/titulo={titulo}")
    public ResponseEntity<Caracteristica> getByTitulo(@PathVariable String titulo) throws CaracteristicaNotFoundException {
        return  ResponseEntity.ok(service.getByTitulo(titulo));
    }

    @PutMapping("/editar")
    public ResponseEntity<String> update(@RequestBody Caracteristica caracteristica) throws CaracteristicaNotFoundException{
        service.update(caracteristica);
        return new ResponseEntity<>("Se edito la caracteristica correctamente",HttpStatus.OK);
    }


    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id ) throws BadRequestException {
        service.deleteById(id);
        return new ResponseEntity<>("Se elimino la caracteristica", HttpStatus.OK);
    }
}
