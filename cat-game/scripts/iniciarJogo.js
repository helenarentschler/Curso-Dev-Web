//funçao para inciar o jogo
export default function inicializar(mensagem, chao, chao2, gato, obstaculo) {

    //mensagem desaparece da tela
    mensagem.classList.add("sumir")

    //animando chao
    chao2.classList.add("animar-chao2");
    chao.classList.add("animar-chao");

    //animando gato
    gato.setAttribute("src", "imagens/animacoes-gato/gato1/correndo.gif");

    //animando obstaculo
    obstaculo.classList.add("animar-obstaculo");
}