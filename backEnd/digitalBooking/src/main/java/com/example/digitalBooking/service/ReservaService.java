package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.model.Politica;
import com.example.digitalBooking.model.Reserva;
import com.example.digitalBooking.repository.ReservaRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ReservaService {

    private final ReservaRepository repository;
    private static final Logger logger = Logger.getLogger(ProductoService.class);

    public void create(Reserva reserva)  {
        repository.save(reserva);
    }

    public List<Reserva> getAll(){
        if (repository.findAll().isEmpty()) {
            logger.info("La tabla Politica no tiene registros");
            return null;
        }
        return repository.findAll();
    }
}
