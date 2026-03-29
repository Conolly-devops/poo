package br.com.squad19.arenapernambucoapi.exception;

public class CampoErro {

    private String campo;
    private String mensagem;

    public CampoErro(String campo, String mensagem) {
        this.campo = campo;
        this.mensagem = mensagem;
    }

    // Getters e Setters
    public String getCampo() {
        return campo;
    }

    public void setCampo(String campo) {
        this.campo = campo;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
