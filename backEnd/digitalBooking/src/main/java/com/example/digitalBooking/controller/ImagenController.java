package com.example.digitalBooking.controller;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ImagenNotFoundException;
import com.example.digitalBooking.model.Imagen;
import com.example.digitalBooking.service.ImagenService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/imagenes")
public class ImagenController {
    private final ImagenService service;

    @PostMapping("/crear")
    public ResponseEntity<String> create(@RequestBody Imagen imagen) throws BadRequestException {
        service.create(imagen);
        return new ResponseEntity<>("Se creo la imagen correctamente", HttpStatus.CREATED);
    }
    @GetMapping("/todas")
    public ResponseEntity<List<Imagen>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Imagen> getById(@PathVariable Long id) throws ImagenNotFoundException {
        return  ResponseEntity.ok(service.getById(id));
    }
    @GetMapping("/titulo={titulo}")
    public ResponseEntity<Imagen> getByTitulo(@PathVariable String titulo) throws ImagenNotFoundException {
        return  ResponseEntity.ok(service.getByTitulo(titulo));
    }

    @PutMapping("/editar")
    public ResponseEntity<String> update(@RequestBody Imagen imagen) throws ImagenNotFoundException{
        service.update(imagen);
        return new ResponseEntity<>("Se edito la imagen correctamente",HttpStatus.OK);
    }


    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id ) throws BadRequestException {
        service.deleteById(id);
        return new ResponseEntity<>("Se elimino la imagen", HttpStatus.OK);
    }
}
