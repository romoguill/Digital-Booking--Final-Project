package com.example.digitalBooking.model;

import java.util.Set;

public record ProductoDTO (Producto producto, Set<Imagen> imagenes){
}
