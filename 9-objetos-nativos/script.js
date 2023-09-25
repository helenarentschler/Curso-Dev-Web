
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

body.innerHTML += "<p>Novo paragrafo gerado por HTML!!</p>";


//Exercicios

