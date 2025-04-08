const pessoa = {
    nome: "Fulano",
    idade: 35,
    altura: 1.70
};

let pessoa2 = {};
pessoa2.nome = "ana"

const carro = new Object();

carro.marca = "Toyota";
carro.ano = 2023;

function Pessoa(nome, idade){ //não tão utilizável
    this.nome = nome
    this.idade = idade
}

let p1 = new Pessoa("João", 25)
let p2 = new Pessoa("Maria", 25)

class Animal { //mais utilizado
    constructor(nome, tutor) {
        this.nome = nome
        this.tutor = tutor
    }
    //métodos

    emitirSom(){
        return `O ${this.nome} tem como tutor: ${this.tutor} `
    }
}
