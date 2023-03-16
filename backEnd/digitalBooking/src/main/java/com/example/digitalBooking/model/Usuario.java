package com.example.digitalBooking.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "usuarios")
@Inheritance(strategy=InheritanceType.JOINED)
public class Usuario {//implements UserDetails
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,length = 50)
    @NotBlank
    @Size(min = 1,max = 50)
    private String nombre;

    @Column(nullable = false,length = 50)
    @NotBlank
    @Size(min = 1,max = 50)
    private String apellido;

    @Column(nullable = false,length = 50,unique = true)
    @NotBlank
    @Size(min = 1,max = 50)
    private String email;

    @Column(nullable = false,length = 25)
    @NotBlank
    @Size(min = 1,max = 25)
    private String password;

    @Column(nullable = false,length = 50)
    @NotBlank
    @Size(min = 1,max = 50)
    private String ciudad;

    @ManyToOne
    @JoinColumn(name = "id_rol",nullable = false)
    private Rol rol;
/*
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        var grantedAuthority = new SimpleGrantedAuthority(rol.getNombre());
        return Collections.singletonList(grantedAuthority);
    }

    @Override
    public String getUsername() {
        return this.email;
    }
    @Override
    public String getPassword(){ return this.password; }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }*/
}
