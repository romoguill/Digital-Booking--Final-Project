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
                .antMatchers("/productos/todas").permitAll()
                .antMatchers("/productos/id={id}}").permitAll()
                .antMatchers("/productos/filterCat={categoria}").permitAll()
                .antMatchers("/productos/filterCity={ciudad}").permitAll()
                .antMatchers("/productos/todasRandom").permitAll()
                .antMatchers("/categoria/todas").permitAll()
                .antMatchers("/categoria/{id}").permitAll()
                .antMatchers("/categoria/titulo={titulo}").permitAll()
                .antMatchers("/ciudad/todas").permitAll()
                .antMatchers("/ciudad/{id}").permitAll()
                .antMatchers("/ciudad/nombre={nombre}").permitAll()
                .antMatchers("/imagenes/todas").permitAll()
                .antMatchers("/imagenes/{id}").permitAll()
                .antMatchers("/imagenes/titulo={titulo}").permitAll()
                .antMatchers("/caracteristica/todas").permitAll()
                .antMatchers("/caracteristica/id={id}").permitAll()
                .antMatchers("/caracteristica/titulo={titulo}").permitAll()
                .antMatchers("/politica/todas").permitAll()
                .antMatchers("/politica/id={id}").permitAll()
                .antMatchers("/politica/titulo={titulo}").permitAll()
                .antMatchers("/reservas/**").hasAuthority("USER")
                .antMatchers("/**").hasAuthority("ADMIN")
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
