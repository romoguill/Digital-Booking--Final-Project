package com.example.digitalBooking.repository;

import com.example.digitalBooking.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Long> {
    @Query("select c from Categoria c where c.titulo = ?1")
    Optional<Categoria> findByTitulo (String titulo);
}
