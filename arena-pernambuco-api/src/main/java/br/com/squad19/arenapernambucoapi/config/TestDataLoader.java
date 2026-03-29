package br.com.squad19.arenapernambucoapi.config;

import br.com.squad19.arenapernambucoapi.model.Evento;
import br.com.squad19.arenapernambucoapi.model.EventoCategoria;
import br.com.squad19.arenapernambucoapi.repository.EventoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.Arrays;

@Configuration
public class TestDataLoader {

    @Bean
    CommandLineRunner initDatabase(EventoRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                System.out.println("⚙️ Populando o banco com 3 eventos de teste...");

                // 1. Evento CULTURAL
                Evento evento1 = new Evento();
                evento1.setNome("Exposição de Arte Armorial");
                evento1.setData(LocalDate.of(2026, 7, 5));
                evento1.setCategoria(EventoCategoria.CULTURAL);
                evento1.setDescricao("Exposição em homenagem a Ariano Suassuna.");
                evento1.setIngressosTotal(5000);
                evento1.setIngressosVendidos(120);
                // Aponta para a pasta static do Spring
                evento1.setImagemUrl("http://localhost:8080/db-exemplo-images/evento-cultural.png");

                // 2. Evento ESPORTE
                Evento evento2 = new Evento();
                evento2.setNome("Sport x Náutico - Final Pernambucano");
                evento2.setData(LocalDate.of(2026, 4, 15));
                evento2.setCategoria(EventoCategoria.ESPORTE);
                evento2.setDescricao("Grande final do Campeonato Pernambucano.");
                evento2.setIngressosTotal(46000);
                evento2.setIngressosVendidos(46000);
                evento2.setImagemUrl("http://localhost:8080/db-exemplo-images/evento-esporte.png");

                // 3. Evento SHOW
                Evento evento3 = new Evento();
                evento3.setNome("Show do João Gomes");
                evento3.setData(LocalDate.of(2026, 6, 24));
                evento3.setCategoria(EventoCategoria.SHOW);
                evento3.setDescricao("Gravação do novo DVD do João Gomes na Arena Pernambuco.");
                evento3.setIngressosTotal(45000);
                evento3.setIngressosVendidos(12500);
                evento3.setImagemUrl("http://localhost:8080/db-exemplo-images/evento-show.png");

                repository.saveAll(Arrays.asList(evento1, evento2, evento3));
                System.out.println("✅ Banco de dados populado com sucesso (arquitetura de URLs)!");
            }
        };
    }
}
