//pular
export default function pular(event, gato) {

    //se clicar na tecla "seta para cima"
    if(event.code == 'ArrowUp' || event.code == 'KeyW') {
        
        //adicionar classe pular
        gato.classList.add("pular");
        //mudar a imagem para gato pulando
        gato.setAttribute("src", "imagens/animacoes-gato/gato1/pulando.png");

        //depois de 1.3s, quando a animaçao acabou (definido no css)
        setTimeout(() => {
            //remover a classe pular
            gato.classList.remove("pular");
            //retornar a imagem do gato andando
            gato.setAttribute("src", "imagens/animacoes-gato/gato1/correndo.gif");
        }, 1300);
    }
}