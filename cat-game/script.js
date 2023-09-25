// selecionando imagens
const mensagem = document.querySelector("#mensagem");
const gato = document.querySelector("#gato");
const tela = document.querySelector("#jogo");
const chao = document.querySelector("#chao");

//criando chao 2
const chao2 = document.createElement("img");
chao2.setAttribute("src", "imagens/floor.png");
chao2.id = "chao2";
tela.appendChild(chao2);

//criando objeto obstaculo
const obstaculo = document.createElement("img");
obstaculo.setAttribute("src", "imagens/obstaculos/1.png");
obstaculo.classList.add("obstaculo");
tela.appendChild(obstaculo);


function inicializar() {

    //mensagem desaparece da tela
    mensagem.classList.add("sumir")

    //animando chao
    chao2.classList.add("animar-chao2");
    chao.classList.add("animar-chao");

    //animando gato
    gato.setAttribute("src", "imagens/animacoes-gato/cat-walking.gif");

    //animando obstaculo
    obstaculo.classList.add("animar-obstaculo");

}

document.addEventListener("keydown", inicializar);

//funçao acionada 
function pular(event) {

    if(event.code == 'ArrowUp' || event.code == 'KeyW' || event.code) {
        
        gato.classList.add("pular");
        gato.setAttribute("src", "imagens/animacoes-gato/cat-jump.png");

        setTimeout(() => {
            gato.classList.remove("pular");
            gato.setAttribute("src", "imagens/animacoes-gato/cat-walking.gif");
        }, 1300);
    }

}

document.addEventListener("keydown", pular);

//verificaçao de colisao: cria um loop que repete a cada 10ms
setInterval(() => {

    //distancia da esquerda da tela
    const distanciaobstaculo = obstaculo.offsetLeft;
    //distancia a partir de baixo
    const alturagato = +window.getComputedStyle(gato).bottom.replace("px", "");

        // condiçoes de colisao:
        // encontrou gato 
        // gato nao passou da altura do obstaculo 
    if(distanciaobstaculo <= (gato.offsetLeft + gato.offsetWidth) && distanciaobstaculo > 0 && alturagato < obstaculo.offsetHeight) {

        chao.style.animation = "none";
        chao2.style.animation = "none";
        obstaculo.style.animation = "none";
        obstaculo.style.left = gato.offsetLeft + gato.offsetWidth + "px";
        gato.style.animation = "none";
        gato.style.bottom = window.getComputedStyle(gato).bottom;
        gato.setAttribute("src", "imagens/animacoes-gato/cat-laying.gif");
    }
    

    //o obstaculo esta completamnete (toda sua largura) fora da tela a esquerda
    if(obstaculo.getBoundingClientRect().left < -370) {
        
        const i = Math.floor(Math.random() * 3) + 1;
        obstaculo.setAttribute("src", `imagens/obstaculos/${i}.png`);
    }
}, 10);