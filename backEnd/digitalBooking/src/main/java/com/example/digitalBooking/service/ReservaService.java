package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.*;
import com.example.digitalBooking.model.dto.RequestReservaDTO;
import com.example.digitalBooking.model.dto.ResponseReservaDTO;
import com.example.digitalBooking.repository.ProductoRepository;
import com.example.digitalBooking.repository.ReservaRepository;
import com.example.digitalBooking.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor
@Service
public class ReservaService {

    private final ReservaRepository repository;
    private final ProductoRepository productoRepository;

    private final UsuarioRepository usuarioRepository;

    private static final Logger logger = Logger.getLogger(ProductoService.class);

    public boolean create(RequestReservaDTO requestReservaDTO) throws BadRequestException {
        if (productoRepository.findById(requestReservaDTO.idProducto()).isEmpty()) {
            logger.error("No existe un producto con el id:" + requestReservaDTO.idProducto());
            throw new BadRequestException("No existe una producto con el id: " + requestReservaDTO.idProducto());
        }

        if (usuarioRepository.findByEmail(requestReservaDTO.emailUsuario()).isEmpty()) {
            logger.error("No existe un usuario con el email:" + requestReservaDTO.emailUsuario());
            throw new BadRequestException("No existe un usuario con el email: " + requestReservaDTO.emailUsuario());
        }

        repository.save(mapToReserva(requestReservaDTO));
        logger.info("Se creo una nueva reserva");
        return true;
    }

    public List<ResponseReservaDTO> getAllByIdProducto(Long idProducto) throws ProductoNotFoundException {
        if (productoRepository.findById(idProducto).isEmpty()) {
            logger.error("No existe un producto con el id:" + idProducto);
            throw new ProductoNotFoundException();
        }

        var reservas = repository.findAllByProductoId(idProducto);
        List<ResponseReservaDTO> listaDTO = new ArrayList<>();
        for (Reserva reserva:reservas) {
            listaDTO.add(mapToDTO(reserva));
        }
        return listaDTO;
    }

    private ResponseReservaDTO mapToDTO(Reserva reserva) {
        return new ResponseReservaDTO(reserva.getId(),reserva.getHoraComienzo(), reserva.getFechaInicial(),
                reserva.getFechaFinal(),reserva.getProducto().getId(),reserva.getUsuario().getId());
    }

    private Reserva mapToReserva(RequestReservaDTO requestReservaDTO){
        Reserva reserva = new Reserva();

        reserva.setId(requestReservaDTO.id());
        reserva.setHoraComienzo(requestReservaDTO.horaComienzo());
        reserva.setFechaInicial(requestReservaDTO.fechaInicial());
        reserva.setFechaFinal(requestReservaDTO.fechaFinal());

        Producto producto = new Producto();
        producto.setId(requestReservaDTO.idProducto());
        reserva.setProducto(producto);

        Usuario usuario = new Usuario();
        var user = usuarioRepository.findByEmail(requestReservaDTO.emailUsuario());
        usuario.setId(user.get().getId());
        reserva.setUsuario(usuario);

        return reserva;
    }

}
