package com.example.digitalBooking.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotNull
    @JsonFormat(pattern = "HH:mm")
    private LocalTime horaComienzo;

    @Column(nullable = false)
    @NotNull
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate fechaInicial;

    @Column(nullable = false)
    @NotNull
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate fechaFinal;

    @ManyToOne
    @JoinColumn(name = "id_producto",nullable = false)
    private Producto producto;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_cliente",nullable = false)
    private Cliente cliente;
}
