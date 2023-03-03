package com.example.digitalBooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "producto")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "categoria"})
public class Producto {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @OneToOne
        @JoinColumn(name = "categoria", referencedColumnName = "idCategoria")
        private Categoria categoria;

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
        private Integer latitud;

        @Column(nullable = false)
        @NotNull
        private Integer longitud;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "ciudad_id")
        @JsonIgnore
        private Ciudad ciudad;

        @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
        private List<Imagen> imagenes = new ArrayList<>();

        @ManyToOne
        @JoinColumn(name = "caracteristica_id")
        private Caracteristica Caracteristica;


}