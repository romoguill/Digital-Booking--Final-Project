package com.example.digitalBooking.model.dto;

import java.util.Set;
public record RequestProductoDTO(Long id, String titulo, String descripcion, Float latitud,
                                 Float longitud, Long idCiudad, Long idCategoria,
                                 Set<Long> caracteristicas, Set<Long> politicas){
}
