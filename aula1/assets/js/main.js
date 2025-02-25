// alert("óia só!");


// Variáveis

var animal = "gato";

console.log(animal);

var numero = 10;
console.log(numero);


var nome = "Ludovico"
console.log(nome);

const pi = 3.14;

// verificar o tipo

console.log(typeof(numero));
console.log(typeof(animal));

//Template literal

console.log(`O ${animal} possui ${numero} anos.`);

console.log(5 == "5"); // ignora o tipo (valor e valor)
console.log(5 === "5"); //considera o tipo (numero != string) "estritamente igual"

console.log(animal === nome);

//dados de entrada - input

var nomeUser = window.prompt("Digite o nome");
var idade = parseFloat(window.prompt("Digite a idade"));


console.log(nomeUser, idade);

