package com.example.digitalBooking.service;

import com.example.digitalBooking.exception.BadRequestException;
import com.example.digitalBooking.exception.PoliticaNotFoundException;
import com.example.digitalBooking.model.Politica;
import com.example.digitalBooking.model.dto.PoliticaDTO;
import com.example.digitalBooking.repository.PoliticaRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class PoliticaService {
    private final PoliticaRepository repository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);

    public void create(PoliticaDTO politicaDTO) throws BadRequestException {
        if (repository.findByTitulo(politicaDTO.titulo()).isPresent()) {
            logger.error("Ya existe una politica con el titulo: " + politicaDTO.titulo());
            throw new BadRequestException("Ya existe una politica con el titulo: " + politicaDTO.titulo());
        }
        repository.save(mapToPolitica(politicaDTO));
        logger.info("Se creo una nueva politica: " + politicaDTO.titulo());
    }

    public List<PoliticaDTO> getAll(){
        var politicas = repository.findAll();
        if (politicas.isEmpty()) {
            logger.info("La tabla Politica no tiene registros");
            return null;
        }

        List<PoliticaDTO> listaDTO = new ArrayList<>();
        for (Politica politica: politicas) {
            listaDTO.add(mapToDTO(politica));
        }

        return listaDTO;
    }
    public PoliticaDTO getById(Long id) throws PoliticaNotFoundException {
        var optional = repository.findById(id);
        if (optional.isEmpty()) {
            logger.error("No existe una politica con el id:" + id);
            throw new PoliticaNotFoundException();
        }
        return mapToDTO(optional.get());
    }
    public PoliticaDTO getByTitulo(String titulo) throws PoliticaNotFoundException {
        var optional = repository.findByTitulo(titulo);
        if (optional.isEmpty()) {
            logger.error("No existe una politica con el titulo:" + titulo);
            throw new PoliticaNotFoundException();
        }
        return mapToDTO(optional.get());
    }

    public void update(PoliticaDTO politicaDTO) throws PoliticaNotFoundException {
        if (repository.findById(politicaDTO.id()).isEmpty()) {
            logger.error("No existe un registro en la tabla Politica con el id: " + politicaDTO.id());
            throw new PoliticaNotFoundException();
        }
        repository.save(mapToPolitica(politicaDTO));
        logger.info("Se modifico el registro con el id: " + politicaDTO.id() + " de la tabla Politica");
    }

    public void deleteById(Long id) throws PoliticaNotFoundException {
        if(repository.findById(id).isEmpty()) throw new PoliticaNotFoundException();
        repository.deleteById(id);
        logger.info("Se elimino el registro con el id: " + id + " de la tabla Politica");
    }

    private Politica mapToPolitica(PoliticaDTO politicaDTO){
        Politica politica = new Politica();
        politica.setId(politicaDTO.id());
        politica.setTitulo(politicaDTO.titulo());
        politica.setDescripcion(politicaDTO.descripcion());
        politica.setUrl(politicaDTO.url());
        return politica;
    }

    private PoliticaDTO mapToDTO(Politica politica){
        return new PoliticaDTO(politica.getId(), politica.getTitulo(), politica.getDescripcion(), politica.getUrl());
    }
}
