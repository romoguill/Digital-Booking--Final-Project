package com.example.digitalBooking.repository;

import com.example.digitalBooking.model.Politica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PoliticaRepository extends JpaRepository<Politica,Long> {

    @Query("select p from Politica p where p.titulo = :titulo")
    Optional<Politica> findByTitulo (@Param("titulo") String titulo);
}
