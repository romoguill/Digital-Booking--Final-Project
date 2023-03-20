package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.ProductoNotFoundException;
import com.example.digitalBooking.model.*;
import com.example.digitalBooking.model.dto.ReservaDTO;
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

    public boolean create(ReservaDTO reservaDTO) throws BadRequestException {
        if (productoRepository.findById(reservaDTO.idProducto()).isEmpty()) {
            logger.error("No existe un producto con el id:" + reservaDTO.idProducto());
            throw new BadRequestException("No existe una producto con el id: " + reservaDTO.idProducto());
        }

        if (usuarioRepository.findById(reservaDTO.idUsuario()).isEmpty()) {
            logger.error("No existe un usuario con el id:" + reservaDTO.idUsuario());
            throw new BadRequestException("No existe un usuario con el id: " + reservaDTO.idUsuario());
        }

        repository.save(mapToReserva(reservaDTO));
        logger.info("Se creo una nueva reserva");
        return true;
    }

    public List<ReservaDTO> getAllByIdProducto(Long idProducto) throws ProductoNotFoundException {
        if (productoRepository.findById(idProducto).isEmpty()) {
            logger.error("No existe un producto con el id:" + idProducto);
            throw new ProductoNotFoundException();
        }

        var reservas = repository.findAllByProductoId(idProducto);
        List<ReservaDTO> listaDTO = new ArrayList<>();
        for (Reserva reserva:reservas) {
            listaDTO.add(mapToDTO(reserva));
        }
        return listaDTO;
    }

    private ReservaDTO mapToDTO(Reserva reserva) {
        return new ReservaDTO(reserva.getId(),reserva.getHoraComienzo(), reserva.getFechaInicial(),
                reserva.getFechaFinal(),reserva.getProducto().getId(),reserva.getUsuario().getId());
    }

    private Reserva mapToReserva(ReservaDTO reservaDTO){
        Reserva reserva = new Reserva();

        reserva.setId(reservaDTO.id());
        reserva.setHoraComienzo(reservaDTO.horaComienzo());
        reserva.setFechaInicial(reservaDTO.fechaInicial());
        reserva.setFechaFinal(reservaDTO.fechaFinal());

        Producto producto = new Producto();
        producto.setId(reservaDTO.idProducto());
        reserva.setProducto(producto);

        Usuario usuario = new Usuario();
        usuario.setId(reservaDTO.idUsuario());
        reserva.setUsuario(usuario);

        return reserva;
    }

}
