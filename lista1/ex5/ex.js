var userNumero = prompt("Insira um número");
var resultado = 1;
var somatorio = 1;

for (let index = 1; index < userNumero; index++) {
    resultado = resultado + Math.pow(10, index);
    somatorio += resultado;
}

console.log(somatorio)