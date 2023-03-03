package com.example.digitalBooking.repository;


import com.example.digitalBooking.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    @Query("select p from Producto p where p.titulo = ?1")
    Optional<Producto> findByTitulo (String titulo);

    @Query("SELECT p FROM Producto p JOIN p.categoria c WHERE c.titulo = :titulo")
    List<Producto> FilterCategoria (@Param("titulo")String titulo);

    @Query("SELECT p FROM Producto p JOIN p.ciudad c WHERE c.nombre = :nombreCiudad")
    List<Producto> FilterCiudad (@Param("nombreCiudad")String nombreCiudad);



}
