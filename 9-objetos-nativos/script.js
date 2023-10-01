
// Objeto Nativos


//objeto tipo string vs objeto nativo String

"Helena".replace('h', '');
String.name

//Document

let paragrafo = document.querySelector('p');
let item_rede = document.querySelector('.rede');
let item_face = document.querySelector('#face');

console.log(paragrafo);
console.log(item_rede);
console.log(item_face);

let item_id_insta = document.getElementById('insta');
let item_id_face = document.getElementById('face');

console.log(item_id_insta);
console.log(item_id_face)

//Métodos para usar com elementos html
paragrafo.addEventListener("click", function() {

    console.log("Clicou no paragrafo!!!")
});

console.log(paragrafo.classList);

//classes
paragrafo.classList.add("ativo");
paragrafo.classList.remove("ativo");

//atributos
gato = document.querySelector("img");
console.log(gato.getAttribute("src"));


document.addEventListener("keydown", function() {

    gato.setAttribute("src", "andando.gif");
});


//Inner text
console.log(paragrafo.innerText)
paragrafo.innerText = "Texto modificado por Javascript!";

//Criando elemento

div = document.createElement("div");

div.innerHTML


body = document.querySelector("body");

body.appendChild(div);

body.innerHTML += "<p>Novo paragrafo gerado por JavaScript!!</p>";


//Exercicios

//4)
function formatar(cpf) {

    window.alert(`${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 12)}`);
}

function validar(cpf) {

    if(cpf.length == 11) {
        formatar(cpf);
    } else {
        window.alert("Invalido!");
    }
}

cpf = window.prompt("Digite seu cpf sem pontos ou traço:","");

validar(cpf);