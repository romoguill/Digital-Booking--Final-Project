package com.example.digitalBooking.repository;


import com.example.digitalBooking.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    @Query("select p from Producto p where p.titulo = ?1")
    Optional<Producto> findByTitulo (String titulo);
}
