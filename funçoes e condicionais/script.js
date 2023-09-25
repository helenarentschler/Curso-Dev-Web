// Operadores Aritméticos

let numA = 4;
let numB = 5;

//let soma = numA + numB;
// let subtracao = numA - numB;
// let produto = numA * numB;
// let divisao = numB / numA;
// let potencia = numA ** numB;
// let modulo = numB % numA;

// console.log(soma, subtracao, produto, divisao, potencia, modulo);

// Tranformaçao de string em numero

let numC = '50' - 25; 
let numD = '50' / 10;
let numE = '50' * '2';
let numF = '50' + 2;
console.log(numC, numD, numE, numF);

let errado = 'comprei 10' / 2; // retorna Nan (not a number)
console.log(errado);
console.log(isNaN(errado));

//operadores aritméticos unários 

//Incremento

let i = 1;

i = i + 1;

++i;

//Decremento

let j = 3;

--j;

j = j - 1;

console.log(j);

let idade = '28';
console.log(+idade); 
console.log(-idade); 
console.log(idade + 5); 
console.log(+idade + 5); 

idade = +'28'; //trasforma string direto em numero

console.log(idade);

// Exercicios 1 - Operadores

    // Qual o resultado da seguinte expressão? (sem usar console!)
    let total = 10 + 5 * 2 / 2 + 20; 

    // Crie duas expressões que retornem NaN

    // Somar a string '200' com o número 50 e mostrar no console
    let a = '200';

    // Incremente o número 5 e mostre o seu valor incrementado no console

    // Divida o peso abaixo por 2 e concatene com kg
    let numero = '80';
    let unidade = 'kg';


// Condicionais

//Boolean
    let temFilhos = false;
    let eMaiorDeIdade = true;
    let fazCurso = true;

let temWifi = false;

if(temWifi) {
    console.log("Ligando wifi...");
} else {
    console.log("Ligando cabo de rede...");
}

// Exercicio Imagem

let estaChovendo = false;
let objeto;

if(estaChovendo) {

    objeto = "guarda-chuva";

} else {

    objeto = "oculos de sol";
}

console.log(objeto);

//Truthy e Falsy
//testar valores falsy

let nomeDoUsuario; // undefined

if(nomeDoUsuario) {

    console.log("O nome do usuario é " + nomeDoUsuario);

} else {

    console.log("Nome nao informado.");
}


//Operados Comparativos

console.log(6 > 7);
console.log(6 >= 7);
console.log(8 < 10);
console.log(8 <= 10);
console.log(5 == 5);
console.log(5 == '5');
console.log(5 === '5');


let Idade = 19;

if (Idade >= 18) {
    
    console.log("é maior de idade");

} else {

    console.log("é menor de idade");
}

//exercicios

//1

// let base, altura, area;

// base = window.prompt("Qual é a base do triangulo?");
// altura = window.prompt("Qual é a altura do triangulo?");

// area = (base * altura) / 2;

// window.alert(`Area do triangulo: ${area}`);

//2

// let cateto_a, cateto_b, hipotenusa;

// cateto_a = window.prompt("Valor do cateto a: ");
// cateto_b = window.prompt("Valor do cateto b: ");

// hipotenusa = Math.sqrt(cateto_a**2 + cateto_b**2);

// window.alert(`Valor da hipotenusa é: ${hipotenusa}`);

//3

// let num, resto;

// num = window.prompt("Digite um numero inteiro: ");

// resto = num % 2;

// if(resto == 0) {

//     window.alert("Par");

// } else {

//     window.alert("Impar");

// }

//funçoes 
// parametros e argumentos

function dizerOla(nome) {

    console.log(`Ola, ${nome}!`);
}

dizerOla("Leonardo");

//retorno

//exercicios
function somar(a, b) {

    return +a + +b;
}

function subtrair(a, b) {

    return a - b;
}

function multiplicar(a, b) {

    return a * b;
}

function dividir(numerador, denominador) {

    if(denominador != 0) {

        return numerador / denominador;
    
    } else {

        console.log("erro: denominador zero");
        return;
    }
}

let soma = somar(9, 6);
let subtracao = subtrair(5, 8);
let produto = multiplicar(6, 6);
let divisao = dividir(7, 0);

console.log(soma, subtracao, produto, divisao);

// calculadora

let opcao = window.prompt(`Calculadora de operaçoes basicas
1 - Adiçao
2 - Subtraçao
3 - Multiplicaçao
4 - Divisao
Insira a opçao: `, 
"0");
let num1 = window.prompt("Digite o 1° numero: ");
let num2 = window.prompt("Digite o 2° numero: ");

if(opcao == 1) {
    window.alert(somar(num1, num2));
} else if(opcao == 2) {
    window.alert(subtrair(num1, num2));
} else if (opcao == 3) {
    window.alert(multiplicar(num1, num2));
} else if(opcao == 4) {
    window.alert(dividir(num1, num2));
} else {
    window.alert("Opçao invalida");
}