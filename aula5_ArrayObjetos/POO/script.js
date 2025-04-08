class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    descricao() {
        return `${this.nome} - ${this.idade}`;
    }
}

class GerenciadorPessoa {
    constructor() {
        this.pessoas = []
    }

    adicionar(nome, idade) {
        let novaPessoa = new Pessoa(nome, idade);
        this.pessoas.push(novaPessoa);
        this.atualizaDOM();
        //atualizar no DOM
    }

    atualizaDOM() {
        let lista = document.getElementById("listaPessoas");
        lista.innerHTML = ``

        this.pessoas.forEach((Pessoa, index) => {
            let li = document.createElement("li");
            li.textContent = Pessoa.descricao();

            let botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";

            botaoRemover.onclick = () => this.remover(index);

            li.appendChild(botaoRemover);
            lista.appendChild(li);
        });

    }

    remover(index) {
        this.pessoas.splice(index, 1);
        this.atualizaDOM();
    }

}

let gerenciador = new GerenciadorPessoa();

function adicionarPessoa(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value

    gerenciador.adicionar(nome, idade)
}