package br.com.squad19.arenapernambucoapi.exception;

import java.time.LocalDateTime;
import java.util.List;

public class ErroResposta {

    private LocalDateTime dataHora;
    private Integer status;
    private String titulo;
    private List<CampoErro> erros;

    public ErroResposta(LocalDateTime dataHora, Integer status, String titulo, List<CampoErro> erros) {
        this.dataHora = dataHora;
        this.status = status;
        this.titulo = titulo;
        this.erros = erros;
    }

    // Getters e Setters
    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public List<CampoErro> getErros() {
        return erros;
    }

    public void setErros(List<CampoErro> erros) {
        this.erros = erros;
    }
}
