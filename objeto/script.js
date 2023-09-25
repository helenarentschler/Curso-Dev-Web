
//Objetos

let computador = {

    marca: "Samsung",
    modelo: "A0K98",
    cor: "Preto",
    preco: 2000,

    ligar: function() {
        console.log("Ligando...")
    },

    mostrarAplicativos: function() {
        console.log("Aplicativos:")
        console.log("VSCode")
        console.log("Google Chrome")
        console.log("Roblox")
    },

    possoComprar(dinheiro) {

        if (dinheiro >= this.preco) {
            
            console.log("Pode comprar!")

        } else {

            console.log("Nao pode comprar!")
        }
    }
};

//Acesso

console.log(computador.cor);

computador.cor = "Branco";

console.log(computador.cor);

computador.mostrarAplicativos();

computador.possoComprar(300);


//Tudo é objeto

    //objetos tipo strings
        var nome = "André";

        console.log(nome.length); 
        console.log(nome.charAt(4)); 
        console.log(nome.replace('é', 'ei')) 
        console.log(nome); 

        console.log('Mateus Ferreira'.substring(0, 6)); 

        console.log('cachorro'.slice(0, 5)); 

        console.log('Diamante'.concat(' Rosa')); 

        console.log('Amarelo'.indexOf('o')); 

    //objetos tipo número
        var altura = 1.689123;

        console.log(altura.toString()); 
        console.log(altura.toFixed(2)); 
        console.log(altura);


// Objeto Nativos

console.log();
computador.ligar();

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

        //Objetos tipo objeto: métodos para usar com elementos html

        paragrafo.addEventListener("click", function() {

            console.log("Clicou no paragrafo!!!")
        });

        // console.log(paragrafo.classList);
        // paragrafo.classList.add("ativo");
        // console.log(paragrafo.innerText);

