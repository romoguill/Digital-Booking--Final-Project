package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.ReservaNotFoundException;
import com.example.digitalBooking.model.*;
import com.example.digitalBooking.model.dto.ReservaDTO;
import com.example.digitalBooking.repository.ReservaRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class ReservaService {

    private final ReservaRepository repository;
    private static final Logger logger = Logger.getLogger(ProductoService.class);

    public void create(ReservaDTO reservaDTO){
        repository.save(mapToReserva(reservaDTO));
        logger.info("Se creo una nueva reserva");
    }

    public ReservaDTO getById(Long id) throws ReservaNotFoundException {
        var optional = repository.findById(id);
        if (optional.isEmpty()) {
            logger.error("No existe una reserva con el id:" + id);
            throw new ReservaNotFoundException();
        }
        return mapToDTO(optional.get());
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
