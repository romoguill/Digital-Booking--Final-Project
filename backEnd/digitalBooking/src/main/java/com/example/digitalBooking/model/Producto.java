package com.example.digitalBooking.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
        @NotBlank
        @Size(min = 1,max = 50)
        private String categoria;

        @Column(nullable = false,length = 100)
        @NotBlank
        @Size(min = 1,max = 100)
        private String titulo;

        @Column(nullable = false,length = 100)
        @NotBlank
        @Size(min = 1,max = 100)
        private String ubicacion;

        @Column(nullable = false,length = 100)
        @NotBlank
        @Size(min = 1,max = 100)
        private String imagenes;

        @Column(nullable = false,length = 100)
        @NotBlank
        @Size(min = 1,max = 100)
        private String descripcion;

        @ManyToOne
        @JoinColumn(name = "caracteristica_id")
        private Caracteristica Caracteristica;
}