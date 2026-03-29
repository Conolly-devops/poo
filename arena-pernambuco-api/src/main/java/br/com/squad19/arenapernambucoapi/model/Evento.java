package br.com.squad19.arenapernambucoapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.URL; // Adicione este import!
import java.time.LocalDate;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do evento é obrigatório e não pode estar em branco.")
    @Size(min = 3, max = 100, message = "O nome deve ter entre 3 e 100 caracteres.")
    private String nome;

    @NotNull(message = "A data do evento é obrigatória.")
    @FutureOrPresent(message = "A data do evento não pode estar no passado.")
    private LocalDate data;

    @NotNull(message = "A categoria do evento é obrigatória.")
    @Enumerated(EnumType.STRING)
    private EventoCategoria categoria;

    @NotBlank(message = "A descrição do evento é obrigatória.")
    @Column(columnDefinition = "TEXT")
    private String descricao;

    @NotNull(message = "A quantidade total de ingressos é obrigatória.")
    @Min(value = 1, message = "O evento deve ter pelo menos 1 ingresso disponível.")
    private Integer ingressosTotal;

    @Min(value = 0, message = "A quantidade de ingressos vendidos não pode ser negativa.")
    private Integer ingressosVendidos;

    // Nova validação adicionada aqui!
    @URL(message = "A URL da imagem deve ser um endereço web válido (ex: http://...).")
    private String imagemUrl;

    // Construtor vazio
    public Evento() {
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public EventoCategoria getCategoria() {
        return categoria;
    }

    public void setCategoria(EventoCategoria categoria) {
        this.categoria = categoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getIngressosTotal() {
        return ingressosTotal;
    }

    public void setIngressosTotal(Integer ingressosTotal) {
        this.ingressosTotal = ingressosTotal;
    }

    public Integer getIngressosVendidos() {
        return ingressosVendidos;
    }

    public void setIngressosVendidos(Integer ingressosVendidos) {
        this.ingressosVendidos = ingressosVendidos;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }
}
