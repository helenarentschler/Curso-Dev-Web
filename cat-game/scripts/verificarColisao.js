export default function verificarColisao(gato, chao, chao2, obstaculo) {

    const obstaculoAltura = obstaculo.offsetHeight;

    //distancia da esquerda da tela
    const obstaculoEsquerda = obstaculo.offsetLeft;

    //distancia a partir de baixo
    const gatoDistanciaChao = +window.getComputedStyle(gato).bottom.replace("px", "");

    const gatoEsquerda = gato.offsetLeft + gato.offsetWidth;

    // condiçoes de colisao: encontrou gato e gato nao passou da altura do obstaculo 
    if(obstaculoEsquerda <= gatoEsquerda && obstaculoEsquerda > 0 && gatoDistanciaChao <= obstaculoAltura) {

        chao.style.animation = "none";
        chao2.style.animation = "none";
        obstaculo.style.animation = "none";
        obstaculo.style.left = gatoEsquerda + "px";
        gato.style.animation = "none";
        gato.style.bottom = gatoDistanciaChao;
        gato.setAttribute("src", "imagens/animacoes-gato/gato1/gato.gif");

        return true;
    }     

    return false;
}