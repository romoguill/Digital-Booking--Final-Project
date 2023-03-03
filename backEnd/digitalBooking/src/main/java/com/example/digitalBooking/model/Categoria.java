package com.example.digitalBooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "categorias")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategoria;

    @Column(nullable = false,length = 50, unique = true)
    @NotBlank
    @Size(min = 1,max = 50)
    private String titulo;

    @Column(nullable = false,length = 100)
    @NotBlank
    @Size(min = 1,max = 100)
    private String descripcion;

    @Column(name = "url_imagen",nullable = false)
    @NotBlank
    private String urlImagen;


    @OneToOne(mappedBy = "categoria")
    @JsonIgnore
    private Producto producto;
}
