package com.example.digitalBooking.model;


import com.fasterxml.jackson.annotation.JsonProperty;
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
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length = 50, unique = true)
    @NotBlank
    @Size(min = 1,max = 50)
    private String titulo;

    @Column(nullable = false)
    @NotBlank
    private String url;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Producto producto;
}
