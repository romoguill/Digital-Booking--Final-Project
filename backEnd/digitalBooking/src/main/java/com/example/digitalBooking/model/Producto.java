package com.example.digitalBooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
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

        @Column(nullable = false,length = 100,unique = true)
        private String titulo;

        @Column(nullable = false,length = 100)
        private String descripcion;

        @Column(nullable = false)
        private Float latitud;

        @Column(nullable = false)
        private Float longitud;

        @ManyToOne
        @JoinColumn(name = "id_ciudad",nullable = false)
        private Ciudad ciudad;

        @ManyToOne
        @JoinColumn(name = "id_categoria",nullable = false)
        private Categoria categoria;

        @OneToMany(mappedBy = "producto", orphanRemoval = true,cascade = CascadeType.ALL)
        private Set<Imagen> imagenes = new HashSet<>();

        public void addImagen(Imagen imagen) {
                imagenes.add(imagen);
                imagen.setProducto(this);
        }

        public void removeImagen(Imagen imagen) {imagenes.remove(imagen);}

        @ManyToMany(cascade = {CascadeType.MERGE},fetch = FetchType.EAGER)
        private Set<Caracteristica> caracteristicas = new HashSet<>();

        public void addCaracteristica(Caracteristica caracteristica) {caracteristicas.add(caracteristica);}

        public void removeCaracteristica(Caracteristica caracteristica) {
                caracteristicas.remove(caracteristica);
        }

        @ManyToMany(cascade = {CascadeType.MERGE},fetch = FetchType.EAGER)
        private Set<Politica> politicas = new HashSet<>();

        public void addCaracteristica(Politica politica) {politicas.add(politica);}

        public void removeCaracteristica(Politica politica) {
                politicas.remove(politica);
        }

        @OneToMany(mappedBy = "producto",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
        @JsonIgnore
        private Set<Reserva> reservas= new HashSet<>();

        public void addReserva(Reserva reserva) {
                reservas.add(reserva);
                reserva.setProducto(this);
        }

        public void removeReserva(Reserva reserva) {reservas.remove(reserva);}

}