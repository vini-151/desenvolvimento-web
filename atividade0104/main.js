var campoText = document.getElementById("campoTxt")
var btn = document.getElementById("submitBtn")
var contador = 0


campoText.addEventListener('keyup', function (event) {

    if (event.key === 'Enter') {
        let texto = document.getElementById("campoTxt").value
        alert(texto)
        document.getElementById("tabela").innerHTML += `<tr> ${texto}</tr>`
        document.getElementById("opcoesLista").innerHTML += `<option value="${texto}">${texto}</option>`
    }

})

btn.onclick = function(){

    let texto = document.getElementById("campoTxt").value

    document.getElementById("tabela").innerHTML += `<tr> ${texto}</tr>`
    document.getElementById("opcoesLista").innerHTML += `<option value="${texto}">${texto}</option>`

    contador++
}


var marcar = document.getElementById("btnMarcar")

marcar.onclick = function() {
    let elemento = document.getElementById("opcoesLista").value
    for (let i = 0; i < contador; i++) {
        if(elemento == document.getElementById("tabela").textContent[i]){
            alert("elemento encontrado")
        }
    }
}