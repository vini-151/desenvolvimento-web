// buscar elemento

var meuElemento = document.getElementById("paragrafo");

console.log(meuElemento);
console.log(meuElemento.textContent);

var paragrafo1 = document.getElementsByClassName("paragrafo")

// console.log("nome inserido: ", paragrafo1[3].innerHTML = prompt("Insira seu nome").concat(", dá uma olhada no meme dahora"))

for (let i = 0; i < paragrafo1.length; i++) {
    console.log(paragrafo1[i].textContent)
    
}


document.getElementById("p1").textContent = "texto alterado via JS"

var nome = "oi"
document.getElementById("p2").textContent = `Olá, ${nome}`; 

var botao1 = document.getElementById("botao1");

botao1.onclick = function(){
    botao1.innerHTML = "<h1>Hello world</h1>"
    botao1.style.backgroundColor = "pink"
}

botao1.addEventListener("mouseover", function(){
    botao1.style.backgroundColor = "#003700"
})