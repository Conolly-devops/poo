package br.com.squad19.arenapernambucoapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // Avisa o Spring que este método deve tratar erros de validação
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErroResposta> tratarErrosDeValidacao(MethodArgumentNotValidException ex) {

        List<CampoErro> listaDeErros = new ArrayList<>();

        // Pega todos os erros de campos que o Spring Validation encontrou
        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();

        // Transforma cada erro do Spring no nosso objeto customizado 'CampoErro'
        for (FieldError fieldError : fieldErrors) {
            String nomeDoCampo = fieldError.getField();
            String mensagemDeErro = fieldError.getDefaultMessage();

            CampoErro erro = new CampoErro(nomeDoCampo, mensagemDeErro);
            listaDeErros.add(erro);
        }

        // Monta a resposta final
        ErroResposta erroResposta = new ErroResposta(
                LocalDateTime.now(),
                HttpStatus.BAD_REQUEST.value(),
                "Erro na validação dos dados enviados.",
                listaDeErros
        );

        // Devolve o JSON limpo com o Status 400 (Bad Request)
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erroResposta);
    }
}
