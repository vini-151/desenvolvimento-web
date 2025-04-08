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

var minhaTabela = document.getElementById("tabela").getElementsByTagName('tbody')[0]

btn.onclick = function () {

    let texto = document.getElementById("campoTxt").value

    let novaCol = minhaTabela.insertRow();
    let row = novaCol.insertCell(0);
    row.textContent = `${texto}`;

    document.getElementById("opcoesLista").innerHTML += `<option value="${texto}" ">${texto}</option>`

    contador++
}


var marcar = document.getElementById("btnMarcar")

    marcar.onclick = function () {
        let termoPraProcurar = document.getElementById('opcoesLista').value.toLowerCase();
        let tabela = document.getElementById('tabela');
        let tbody = tabela.getElementsByTagName('tbody')[0];
        let linhas = tbody.getElementsByTagName('tr');
        
        for (let row of linhas) {
          let item = row.getElementsByTagName('td');
          let valorItem = item[0]; 
          
         
          if (valorItem && valorItem.textContent.toLowerCase().includes(termoPraProcurar)) {
            row.style.backgroundColor = 'yellow'; 
          } else {
            row.style.backgroundColor = ''; 
          }
        }
    }

var desMarcar = document.getElementById("btnDesMarcar")

desMarcar.onclick = function () {
    let termoPraProcurar = document.getElementById('opcoesLista').value.toLowerCase();
    let tabela = document.getElementById('tabela');
    let tbody = tabela.getElementsByTagName('tbody')[0];
    let linhas = tbody.getElementsByTagName('tr');
    
    for (let row of linhas) {
      let item = row.getElementsByTagName('td');
      let valorItem = item[0]; 
      
     
      if (valorItem && valorItem.textContent.toLowerCase().includes(termoPraProcurar)) {
        row.style.backgroundColor = 'white'; 
      } else {
        row.style.backgroundColor = ''; 
      }
    }
}


var excluir = document.getElementById("btnExcluir")

excluir.onclick = function () {
    let termoPraProcurar = document.getElementById('opcoesLista').value.toLowerCase();
    let tabela = document.getElementById('tabela');
    let tbody = tabela.getElementsByTagName('tbody')[0];
    let linhas = tbody.getElementsByTagName('tr');
    
    for (let row of linhas) {
      let item = row.getElementsByTagName('td');
      let valorItem = item[0]; 
      
     
      if (valorItem && valorItem.textContent.toLowerCase().includes(termoPraProcurar)) {
        row.innerHTML = ``
      } else {
        row.style.backgroundColor = ''; 
      }
    }
}