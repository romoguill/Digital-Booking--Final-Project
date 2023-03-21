package com.example.digitalBooking.exception;

public class PoliticaNotFoundException extends Exception{
    public PoliticaNotFoundException() {
        super("La politica no fue encontrada en la base de datos.");
    }
}

