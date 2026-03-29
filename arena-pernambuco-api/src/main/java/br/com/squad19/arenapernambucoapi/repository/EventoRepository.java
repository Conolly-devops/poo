package br.com.squad19.arenapernambucoapi.repository;

import br.com.squad19.arenapernambucoapi.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {}
