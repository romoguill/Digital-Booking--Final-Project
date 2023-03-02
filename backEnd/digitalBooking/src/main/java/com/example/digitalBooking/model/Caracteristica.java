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
@Table(name = "Caracteristica")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCaracteristica;

    @Column(nullable = false,length = 100)
    @NotBlank
    @Size(min = 1,max = 100)
    private String titulo;
}
