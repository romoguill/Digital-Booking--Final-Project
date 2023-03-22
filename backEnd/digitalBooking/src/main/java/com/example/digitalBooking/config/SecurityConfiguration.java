package com.example.digitalBooking.config;

import com.example.digitalBooking.config.jwt.JwtRequestFilter;
import com.example.digitalBooking.service.UsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private UsuarioService service;
    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(service);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/usuarios/crear").permitAll()
                .antMatchers("/usuarios/login").permitAll()
                .antMatchers("/usuarios/todas").hasAuthority("ADMIN")
                .antMatchers("/usuarios/id={id}").hasAuthority("ADMIN")
                .antMatchers("/usuarios/email={email}").hasAuthority("ADMIN")
                .antMatchers("/usuarios/editar").hasAuthority("ADMIN")
                .antMatchers("/usuarios/borrar/{id}").hasAuthority("ADMIN")

                .antMatchers("/productos/crear").hasAuthority("ADMIN")
                .antMatchers("/productos/todas").hasAuthority("USER")
                .antMatchers("/productos/todasRandom").permitAll()
                .antMatchers("/productos/id={id}").permitAll()
                .antMatchers("/productos/filterCat={categoria}").permitAll()
                .antMatchers("/productos/filterCity={ciudad}").permitAll()
                .antMatchers("/filterCityFechas={ciudad}").permitAll()
                .antMatchers("/productos/borrar/{id}").hasAuthority("ADMIN")

                .antMatchers("/categoria/crear").hasAuthority("ADMIN")
                .antMatchers("/categoria/todas").permitAll()
                .antMatchers("/categoria/id={id}").hasAuthority("ADMIN")
                .antMatchers("/categoria/titulo={titulo}").hasAuthority("ADMIN")
                .antMatchers("/categoria/editar").hasAuthority("ADMIN")
                .antMatchers("/categoria/borrar/{id}").hasAuthority("ADMIN")

                .antMatchers("/ciudades/crear").hasAuthority("ADMIN")
                .antMatchers("/ciudades/todas").permitAll()
                .antMatchers("/ciudades/id={id}").hasAuthority("ADMIN")
                .antMatchers("/ciudades/nombre={nombre}").hasAuthority("ADMIN")
                .antMatchers("/ciudades/editar").hasAuthority("ADMIN")
                .antMatchers("/ciudades/borrar/{id}").hasAuthority("ADMIN")

                .antMatchers("/imagenes/*","/caracteristicas/*","/politicas/*").hasAuthority("ADMIN")

                .antMatchers("/reservas/crear").hasAuthority("USER")
                .antMatchers("/reservas/borrar/{id}").hasAuthority("USER")
                .antMatchers("/reservas/idProducto={idProducto}").permitAll()


                .anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}