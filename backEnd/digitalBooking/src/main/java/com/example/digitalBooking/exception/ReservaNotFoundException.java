package com.example.digitalBooking.exception;

public class ReservaNotFoundException extends Exception{
    public ReservaNotFoundException() {
        super("La reserva no fue encontrada en la base de datos.");
    }
}
