package com.example.digitalBooking.repository;

import com.example.digitalBooking.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva,Long> {

    @Query("SELECT r FROM Reserva r WHERE r.producto.id = :idProducto")
    List<Reserva> findAllByProductoId(@Param("idProducto") Long idProducto);

}
