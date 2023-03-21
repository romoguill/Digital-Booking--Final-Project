package com.example.digitalBooking.exception;

public class ReservaNotFoundException extends Exception {
    public ReservaNotFoundException() {
        super("No existe la reserva");
    }
}
