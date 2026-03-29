package br.com.squad19.arenapernambucoapi.service;

import br.com.squad19.arenapernambucoapi.model.Evento;
import br.com.squad19.arenapernambucoapi.repository.EventoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventoService {

    private final EventoRepository repository;

    // Injeção de dependência via construtor
    public EventoService(EventoRepository repository) {
        this.repository = repository;
    }

    public Evento salvar(Evento evento) {
        // Regra simples: se ingressosVendidos vier nulo ao criar, começa em 0
        if (evento.getIngressosVendidos() == null) {
            evento.setIngressosVendidos(0);
        }
        return repository.save(evento);
    }

    public List<Evento> listarTodos() {
        return repository.findAll();
    }

    public Evento buscarPorId(Long id) {
        Optional<Evento> evento = repository.findById(id);
        return evento.orElse(null); // Retorna nulo se não encontrar
    }

    public void remover(Long id) {
        repository.deleteById(id);
    }
}
