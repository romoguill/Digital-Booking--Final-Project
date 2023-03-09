package com.example.digitalBooking.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "productos")
public class Producto {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false,length = 100)
        @NotBlank
        @Size(min = 1,max = 100)
        private String titulo;

        @Column(nullable = false,length = 100)
        @NotBlank
        @Size(min = 1,max = 100)
        private String descripcion;

        @Column(nullable = false)
        @NotNull
        private Float latitud;

        @Column(nullable = false)
        @NotNull
        private Float longitud;

        @ManyToOne
        @JoinColumn(name = "id_ciudad",nullable = false)
        private Ciudad ciudad;

        @ManyToOne
        @JoinColumn(name = "id_categoria",nullable = false)
        private Categoria categoria;

        @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
        @JsonIgnore
        private Set<Imagen> imagenes = new HashSet<>();

        public void addImagen(Imagen imagen) {
                imagenes.add(imagen);
                imagen.setProducto(this);
        }

        public void removeImagen(Imagen imagen) {imagenes.remove(imagen);}

        @ManyToMany(cascade = {CascadeType.MERGE})
        private Set<Caracteristica> caracteristicas = new HashSet<>();

        public void addCaracteristica(Caracteristica caracteristica) {caracteristicas.add(caracteristica);}

        public void removeCaracteristica(Caracteristica caracteristica) {
                caracteristicas.remove(caracteristica);
        }

        @ManyToMany(cascade = {CascadeType.MERGE})
        private Set<Politica> politicas = new HashSet<>();

        public void addCaracteristica(Politica politica) {politicas.add(politica);}

        public void removeCaracteristica(Politica politica) {
                politicas.remove(politica);
        }

}