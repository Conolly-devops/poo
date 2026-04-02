package br.com.squad19.arenapernambucoapi.controller;

import br.com.squad19.arenapernambucoapi.model.Evento;
import br.com.squad19.arenapernambucoapi.service.EventoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController

@RequestMapping("/api/eventos")
public class EventoController {

    private final EventoService service;

    public EventoController(EventoService service) {
        this.service = service;
    }

    // 1. LISTAR TODOS OS EVENTOS (GET)
    // URL: http://localhost:8080/api/eventos
    @GetMapping
    public ResponseEntity<List<Evento>> listarTodos() {
        List<Evento> eventos = service.listarTodos();
        return ResponseEntity.ok(eventos); // Retorna Status 200 (OK)
    }

    // 2. BUSCAR UM EVENTO ESPECÍFICO (GET)
    // URL: http://localhost:8080/api/eventos/1
    @GetMapping("/{id}")
    public ResponseEntity<Evento> buscarPorId(@PathVariable Long id) {
        Evento evento = service.buscarPorId(id);
        if (evento == null) {
            return ResponseEntity.notFound().build(); // Retorna Status 404 (Not Found)
        }
        return ResponseEntity.ok(evento);
    }

    // 3. CRIAR UM NOVO EVENTO (POST)
    // URL: http://localhost:8080/api/eventos
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Evento> criar(
            @Valid @RequestPart("evento") Evento evento,
            @RequestPart(value = "imagem", required = false) MultipartFile arquivoImagem) {

        try {
            if (arquivoImagem != null && !arquivoImagem.isEmpty()) {
                salvarArquivoFisico(evento, arquivoImagem);
            }

            Evento eventoCriado = service.salvar(evento);
            return ResponseEntity.status(HttpStatus.CREATED).body(eventoCriado);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 4. ATUALIZAR UM EVENTO EXISTENTE (PUT)
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Evento> atualizar(
            @PathVariable Long id,
            @Valid @RequestPart("evento") Evento eventoAtualizado,
            @RequestPart(value = "imagem", required = false) MultipartFile arquivoImagem) {

        Evento eventoExistente = service.buscarPorId(id);

        if (eventoExistente == null) {
            return ResponseEntity.notFound().build();
        }

        try {
            eventoExistente.setNome(eventoAtualizado.getNome());
            eventoExistente.setData(eventoAtualizado.getData());
            eventoExistente.setCategoria(eventoAtualizado.getCategoria());
            eventoExistente.setDescricao(eventoAtualizado.getDescricao());
            eventoExistente.setIngressosTotal(eventoAtualizado.getIngressosTotal());
            eventoExistente.setIngressosVendidos(eventoAtualizado.getIngressosVendidos());

            if (arquivoImagem != null && !arquivoImagem.isEmpty()) {
                salvarArquivoFisico(eventoExistente, arquivoImagem);
            }

            Evento eventoSalvo = service.salvar(eventoExistente);
            return ResponseEntity.ok(eventoSalvo);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // MÉTODO AUXILIAR PRIVADO: Salva o arquivo na pasta "uploads"
    private void salvarArquivoFisico(Evento evento, MultipartFile arquivo) throws IOException {
        // Gera um nome único para não sobrescrever imagens com o mesmo nome
        String nomeArquivo = System.currentTimeMillis() + "_" + arquivo.getOriginalFilename();

        // Define o caminho onde a pasta será criada (na raiz do projeto)
        Path caminhoDestino = Paths.get("uploads", nomeArquivo);

        // Cria a pasta "uploads" caso ela ainda não exista
        Files.createDirectories(caminhoDestino.getParent());

        // Copia o arquivo da requisição para o disco rígido
        Files.copy(arquivo.getInputStream(), caminhoDestino, StandardCopyOption.REPLACE_EXISTING);

        // Salva apenas a URL pública no objeto Evento
        evento.setImagemUrl("http://localhost:8080/uploads/" + nomeArquivo);
    }
}
