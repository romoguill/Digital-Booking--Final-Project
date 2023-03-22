package com.example.digitalBooking.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalTime;
public record ReservaDTO(Long id, LocalTime horaComienzo,
                         @JsonFormat(pattern = "dd/MM/yyyy") LocalDate fechaInicial,
                         @JsonFormat(pattern = "dd/MM/yyyy") LocalDate fechaFinal,
                         Long idProducto,Long idUsuario){
}
