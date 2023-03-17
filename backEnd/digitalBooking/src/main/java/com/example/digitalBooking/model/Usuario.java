package com.example.digitalBooking.model;

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
@Table(name = "usuarios")
public class Usuario{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length = 50)
    private String nombre;

    @Column(nullable = false,length = 50)
    private String apellido;

    @Column(nullable = false,length = 50,unique = true)
    private String email;

    @Column(nullable = false,length = 25)
    private String password;

    @Column(nullable = false,length = 50)
    private String ciudad;

    @ManyToOne
    @JoinColumn(name = "id_rol",nullable = false)
    private Rol rol;

    @OneToMany(mappedBy = "usuario", orphanRemoval = true,cascade = CascadeType.ALL)
    private Set<Reserva> reservas = new HashSet<>();

    public void addReserva(Reserva reserva) {
        reservas.add(reserva);
        reserva.setUsuario(this);
    }

    public void removeReserva(Reserva reserva) {reservas.remove(reserva);}

}
