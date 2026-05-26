console.log('Introdução ao JavaScript');

//alert('Você é gay, saia do site imediatamente');

document.getElementById('titulo').innerHTML = 'Novo texto';

// Variáveis e Tipos de Dados

let idade = 20;
const idadeMaxima = 18;

// Tipo Booleano
let luz = false;

//Ponto Flutuante
let salario = 26500.07;

//String
let nome = 'Guilherme Pereira'

// Char
let letra = 'A'

// Lista
let compras = ['Arroz', 'Feijão', 'Macarrão'];

// Objetos - Dicionários
let pessoas = {
    nome: 'Guilherme', 
    idade: 20
}

// Função
function bemVindo() {
    console.log('Bem-Vindo usuário KidaUanus');
}

function soma(valor1, valor2) {
   let somatorio = valor1 + valor2;
   console.log('resultado: ' + somatorio);
   return somatorio;
}

function nomeUsuario() {
    nome = prompt('Escreva seu nome');
    console.log(`Seja bem-vindo ${nome} ao nosso site!`);
}

// Restante da aula - Desafios

// 1.
// Função que troque a cor do H1
// A cor precisa ser definida por parametro (na chamada do usuário)

// 2.
// Contador digital
// Somar +1 na interface (h2, por exemplo)

// 3.
// Atividade dos slides - Calculo de Média.

function alterarCor(novaCor, novaCor2) {
    document.querySelector('h1').style.color = novaCor;
    document.querySelector('h2').style.color = novaCor2;
}

alterarCor('red', 'blue');


let valorContador = 0;

function incrementar() {
  valorContador++; 
  const display = document.querySelector('h2');
  display.innerText = valorContador;
}




