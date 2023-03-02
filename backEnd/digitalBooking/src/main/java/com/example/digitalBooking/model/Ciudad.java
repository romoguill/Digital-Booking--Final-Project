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
@Table(name = "ciudades")
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCiudad;

    @Column(nullable = false,length = 50)
    @NotBlank
    @Size(min = 1,max = 50)
    private String nombre;
}
