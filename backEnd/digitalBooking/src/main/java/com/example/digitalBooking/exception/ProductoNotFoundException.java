package com.example.digitalBooking.exception;

public class ProductoNotFoundException extends Exception{
    public ProductoNotFoundException() {
        super("La categoria no fue encontrada en la base de datos.");
    }
}
