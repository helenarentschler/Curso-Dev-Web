export default function exibirOpcoes(event, div) {

    div.classList.add("ativa");

    const pata = event.target;

    console.log(pata.offsetLeft);

    const opcao = pata.getAttribute("src");
    const imagem = div.querySelector("img");
    const titulo =  div.querySelector("h1");
    const lista = div.querySelector("ul");

    if(opcao == "imagens/paw-1.png") {

        imagem.setAttribute("src", "imagens/fotos/gato1.png");
        titulo.innerText = "Violeta";
        lista.innerHTML = "<li>1 ano</li><li>Fotogenica</li><li>Comilona</li>";

        div.style.left = pata.offsetLeft + "px";

    } else if(opcao == "imagens/paw-2.png") {

        imagem.setAttribute("src", "imagens/fotos/gato2.png");
        titulo.innerText = "Mimosa";
        lista.innerHTML = "<li>x anos</li><li>Fofinha</li><li>Calma</li>";

        div.style.left = pata.offsetLeft + "px";

    } else if(opcao == "imagens/paw-3.png") {

        imagem.setAttribute("src", "imagens/fotos/gato3.png");
        titulo.innerText = "Lara";
        lista.innerHTML = "<li>4 anos</li><li>Carinhosa</li><li>Ama lasers</li>";

        div.style.left = pata.offsetLeft + "px";
    }
}