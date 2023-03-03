package com.example.digitalBooking.controller;



import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.CategoriaNotFoundException;
import com.example.digitalBooking.model.Categoria;
import com.example.digitalBooking.service.CategoriaService;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    private final CategoriaService service;


    @PostMapping("/crear")
    public ResponseEntity<String> create(@RequestBody Categoria categoria) throws BadRequestException {
        service.create(categoria);
        return new ResponseEntity<>("Se creo la categoria correctamente", HttpStatus.CREATED);
    }

    @GetMapping("/todas")
    public ResponseEntity<List<Categoria>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> getById(@PathVariable Long id) throws CategoriaNotFoundException {
        return  ResponseEntity.ok(service.getById(id));
    }

    @PutMapping("/editar")
    public ResponseEntity<String> update(@RequestBody Categoria categoria) throws CategoriaNotFoundException{
        service.update(categoria);
        return new ResponseEntity<>("Se edito la categoria correctamente",HttpStatus.OK);
    }


    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id ) throws BadRequestException {
        service.deleteById(id);
        return new ResponseEntity<>("Se elimino la categoria", HttpStatus.OK);
    }

}
