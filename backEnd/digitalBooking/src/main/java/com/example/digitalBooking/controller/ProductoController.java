package com.example.digitalBooking.controller;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.Producto;
import com.example.digitalBooking.service.ProductoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@AllArgsConstructor
@CrossOrigin
@RestController
@RequestMapping("/productos")
public class ProductoController {

    private final ProductoService service;


    @PostMapping("/crear")
    public ResponseEntity<String> create(@RequestBody Producto producto) throws BadRequestException {
        service.create(producto);
        return new ResponseEntity<>("Se creo el producto correctamente", HttpStatus.CREATED);
    }

    @GetMapping("/todas")
    public ResponseEntity<List<Producto>> getAll(){return ResponseEntity.ok(service.getAll());}

    @GetMapping("/{id}")
    public ResponseEntity<Producto> getById(@PathVariable Long id) throws ProductoNotFoundException {
        return  ResponseEntity.ok(service.getById(id));
    }

    @GetMapping("/filterCat={categoria}")
    public ResponseEntity<List<Producto>> filterCategoria(@PathVariable String categoria)  {
        return  ResponseEntity.ok(service.filterCategoria(categoria));
    }


    @GetMapping("/filterCity={ciudad}")
    public ResponseEntity<List<Producto>> filterCiudad(@PathVariable String ciudad)  {
        return  ResponseEntity.ok(service.filterCiudad(ciudad));
    }

}
