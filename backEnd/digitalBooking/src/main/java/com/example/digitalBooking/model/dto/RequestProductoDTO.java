package com.example.digitalBooking.model.dto;



import java.util.Set;
public record RequestProductoDTO(Long id, String titulo, String descripcion,String direccion, Float latitud,
                                 Float longitud,String normas,String saludYseguridad, String cancelacion,
                                 Long idCiudad, Long idCategoria, Set<Long> caracteristicas){
}
