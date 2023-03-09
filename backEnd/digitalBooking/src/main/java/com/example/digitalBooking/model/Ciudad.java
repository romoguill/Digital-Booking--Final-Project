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
@Table(name = "ciudades")
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length = 50)
    @NotBlank
    @Size(min = 1,max = 50)
    private String nombre;

    @OneToMany(mappedBy = "ciudad",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Producto> productos= new HashSet<>();

    public void addProducto(Producto producto) {
        productos.add(producto);
        producto.setCiudad(this);
    }

    public void removeProducto(Producto producto) {productos.remove(producto);}
}
