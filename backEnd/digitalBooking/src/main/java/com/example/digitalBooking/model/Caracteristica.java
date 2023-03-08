package com.example.digitalBooking.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "caracteristicas")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length = 100)
    @NotBlank
    @Size(min = 1,max = 100)
    private String titulo;

    @JsonIgnore
    @ManyToMany(mappedBy = "caracteristicas")
    private Set<Producto> productos = new HashSet<>();

    public void addProducto(Producto producto) {
        productos.add(producto);

    }

    public void removeProducto(Producto producto) {
        productos.remove(producto);
    }
}
