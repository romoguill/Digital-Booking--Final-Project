package com.example.digitalBooking.model.dto;

import com.example.digitalBooking.model.*;
import java.util.Set;
public record ResponseProductoDTO (Long id, String titulo, String descripcion, Float latitud,
                                   Float longitud, Ciudad ciudad, Categoria categoria,
                                   Set<Caracteristica> caracteristicas, Set<Politica> politicas, Set<Imagen> imagenes,Set<ResponseReservaDTO> reservas){
}
