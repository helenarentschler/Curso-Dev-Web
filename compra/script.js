imagem = document.querySelector("img");
button = document.querySelector("button");
paragrafo = document.createElement("p");

imagem.addEventListener("click", function() {

    if(imagem.getAttribute("src") == "mantegueira-azul.jpeg") {
        imagem.setAttribute("src", "mantegueira-rosa.webp"); 
    } else {
        imagem.setAttribute("src", "mantegueira-azul.jpeg"); 
    }
})

function exibirMensagem(cpf) {
    
    paragrafo.classList.remove("negado");
    paragrafo.classList.remove("aceito");

    if(cpf.length == 11) {

        paragrafo.innerText = "Compra concluida com sucesso";
        paragrafo.classList.add("aceito");

    } else {

        paragrafo.innerText = "CPF invalido";
        paragrafo.classList.add("negado");
    }

    button.parentNode.insertBefore(paragrafo, button);
}

button.addEventListener("click", function() {

    cpf = window.prompt("Digite seu CPF (sem pontos ou traços): ", "");

    exibirMensagem(cpf);
})