package com.example.digitalBooking.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "producto")
public class Producto {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @Column(nullable = false,length = 50, unique = true)
        private String categoria;
        @Column(nullable = false,length = 100)
        private String titulo;
        @Column(nullable = false,length = 100)
        private String ubicacion;
        @Column(nullable = false,length = 100)
        private String imagenes;
        @Column(nullable = false,length = 100)
        private String descripcion;
        @ManyToOne
        @JoinColumn(name = "caracteristica_id")
        private Caracteristica Caracteristica;
}
