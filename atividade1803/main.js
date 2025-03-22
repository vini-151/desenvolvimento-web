// questão 1

var contador = 0
document.getElementById("display").textContent = `${contador}`

var btnIncremento = document.getElementById("contarUp")

btnIncremento.onclick = function () {
    contador++
    document.getElementById("display").textContent = `${contador}`
}

var btnDencremento = document.getElementById("contarDw")

btnDencremento.onclick = function () {
    if (contador > 0) {
        contador--
        document.getElementById("display").textContent = `${contador}`
    } else {
        alert("Não é possível decrementar 0")
    }
}

// Questão 2 - texto dinâmico e questão 3 - contador de caracteres


var campoText = document.getElementById("campoTxt")
var contadorChar = 0 

campoText.addEventListener('keyup', function (event) {

    if (event.key === 'Enter' )  {
        let texto = document.getElementById("campoTxt").value
        document.getElementById("textDinamico").innerHTML += `${texto} <br>`
    }

    contadorChar = campoText.value.replace(/\s/g, '').length;
    document.getElementById("contadorDeChar").textContent = contadorChar
})




// questão 4 - listas


 function adicionarLista(){

    var seletorDeListas = document.getElementById("opcoesLista").value

    var conteudo = document.getElementById('listaMostrada');
    
    let lista;
    
    if (seletorDeListas === 'listaOr') {
        lista = document.createElement('ol'); 
    } else if (seletorDeListas === 'listaNor') {
        lista = document.createElement('ul'); 
    }
    

    const item1 = document.createElement('li');
    item1.textContent = 'Item 1';
    lista.appendChild(item1);
    
    const item2 = document.createElement('li');
    item2.textContent = 'Item 2';
    lista.appendChild(item2);
    
    const item3 = document.createElement('li');
    item3.textContent = 'Item 3';
    lista.appendChild(item3);
    

    conteudo.appendChild(lista); 
}

// Ultima questão - reset

function reset(){
    contador = 0;
    document.getElementById("display").textContent = `${contador}`

    document.getElementById("textDinamico").textContent = ''
    document.getElementById("campoTxt").value = ''

    document.getElementById('listaMostrada').innerHTML = ''
    document.getElementById("opcoesLista").value = "Selecione"

    alert("Página resetada")

}















