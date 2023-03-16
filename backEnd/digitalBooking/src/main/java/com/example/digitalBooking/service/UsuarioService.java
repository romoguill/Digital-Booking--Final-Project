package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.UsuarioNotFoundException;
import com.example.digitalBooking.model.Usuario;
import com.example.digitalBooking.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;

import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UsuarioService { //implements UserDetailsService
    private final UsuarioRepository repository;

    //private final BCryptPasswordEncoder passwordEncoder;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public void create(Usuario usuario) throws BadRequestException {
        if (repository.findByEmail(usuario.getEmail()).isPresent()) {
            logger.error("Ya existe un usuario con ese email: " + usuario.getEmail());
            throw new BadRequestException("Ya existe un usuario con ese email: " + usuario.getEmail());
        }
       /* if (passwordEncoder != null){
            var user = new Usuario(null,usuario.getNombre(),usuario.getApellido(), usuario.getEmail(),
                                        usuario.getPassword(), usuario.getCiudad(), usuario.getRol());*/
            repository.save(usuario);
            logger.info("Se creo un nuevo usuario: " + usuario.getEmail());

    }

    public List<Usuario> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Usuarios no tiene registros");
            return null;
        }
        return repository.findAll();
    }
    public Usuario getById(Long id) throws UsuarioNotFoundException {
        return repository.findById(id).orElseThrow(UsuarioNotFoundException::new);
    }
    public Usuario getByTitulo(String email) throws UsuarioNotFoundException {
        return repository.findByEmail(email).orElseThrow(UsuarioNotFoundException::new);
    }

    public void update(Usuario usuario) throws UsuarioNotFoundException {
        if (repository.findById(usuario.getId()).isEmpty()) {
            logger.error("No existe un registro en la tabla Usuario con el id: " + usuario.getId());
            throw new UsuarioNotFoundException();
        }
        repository.save(usuario);
        logger.info("Se modifico el registro con el id: " + usuario.getId() + " de la tabla Usuario");
    }

    public void deleteById(Long id) throws BadRequestException {
        if (repository.findById(id).isEmpty()) {
            logger.error("No existe un registro en la tabla Usuario con el id: " + id);
            throw new BadRequestException("El usuario con el id: " + id + " no existe en la base de datos.");
        }
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Usuario");
    }/*
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email).orElseThrow(()-> new UsernameNotFoundException("No se ha encontrado el email: " + email));
    }*/
}
