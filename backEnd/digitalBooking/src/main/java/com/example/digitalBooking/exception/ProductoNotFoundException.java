package com.example.digitalBooking.exception;

public class ProductoNotFoundException extends Exception{
    public ProductoNotFoundException() {
        super("El producto no fue encontrada en la base de datos.");
    }
}
