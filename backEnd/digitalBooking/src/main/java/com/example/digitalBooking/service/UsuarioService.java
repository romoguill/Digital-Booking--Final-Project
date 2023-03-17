package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.UsuarioNotFoundException;
import com.example.digitalBooking.model.Rol;
import com.example.digitalBooking.model.Usuario;
import com.example.digitalBooking.model.dto.UsuarioDTO;
import com.example.digitalBooking.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Service
public class UsuarioService{
    private final UsuarioRepository repository;

    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public void create(UsuarioDTO usuarioDTO) throws BadRequestException {
        if (repository.findByEmail(usuarioDTO.email()).isPresent())
            throw new BadRequestException("El usuario con el email: " + usuarioDTO.email() + " ya existe en la base de datos");

        repository.save(mapToUsuario(usuarioDTO));
    }

    public List<Usuario> getAll() {
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Usuario no tiene registros");
            return null;
        }
        return repository.findAll();
    }

    public Usuario getById(Long id) throws UsuarioNotFoundException {
        return repository.findById(id).orElseThrow(UsuarioNotFoundException::new);
    }

    public Usuario getByEmail(String email) throws UsuarioNotFoundException {
        return repository.findByEmail(email).orElseThrow(UsuarioNotFoundException::new);
    }

    public void update(UsuarioDTO usuarioDTO) throws UsuarioNotFoundException {
        if(repository.findById(usuarioDTO.id()).isEmpty()) throw new UsuarioNotFoundException();
        repository.save(mapToUsuario(usuarioDTO));
    }

    public void deleteById(Long id) throws UsuarioNotFoundException {
        if(repository.findById(id).isEmpty()) throw new UsuarioNotFoundException();
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Usuarios");
    }

    private Usuario mapToUsuario(UsuarioDTO usuarioDTO){
        Usuario usuario = new Usuario();

        Rol rol = new Rol();
        rol.setId(usuarioDTO.idRol());

        usuario.setId(usuarioDTO.id());
        usuario.setNombre(usuarioDTO.nombre());
        usuario.setApellido(usuarioDTO.apellido());
        usuario.setEmail(usuarioDTO.email());
        usuario.setPassword(usuarioDTO.password());
        usuario.setCiudad(usuarioDTO.ciudad());
        usuario.setRol(rol);

        return usuario;
    }

    private UsuarioDTO mapToDTO(Usuario usuario){
        return new UsuarioDTO(usuario.getId(), usuario.getNombre(), usuario.getApellido(), usuario.getEmail(),
                usuario.getPassword(), usuario.getCiudad(), usuario.getRol().getId());
    }

}
