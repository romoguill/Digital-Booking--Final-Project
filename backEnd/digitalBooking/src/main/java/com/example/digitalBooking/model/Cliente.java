package com.example.digitalBooking.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@PrimaryKeyJoinColumn(name="id_cliente")
public class Cliente  extends Usuario{

    @OneToMany(mappedBy = "cliente",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private Set<Reserva> reservas= new HashSet<>();

    public void addReserva(Reserva reserva) {
        reservas.add(reserva);
        reserva.setCliente(this);
    }

    public void removeReserva(Reserva reserva) {reservas.remove(reserva);}
}
