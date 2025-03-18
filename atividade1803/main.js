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

// Questão 2


var campoText = document.getElementById("campoTxt").onkeydown = function(event){

    if (event.key == "Enter") {
        let texto = document.getElementById("campoTxt").value
        document.getElementById("textDinamico").innerHTML += `${texto} <br>`
    }
}

// questão 3















