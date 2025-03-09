var numeroAleatorio = Math.floor(Math.random() * 21); //gera um número inteiro de 0 a 20
var numeroUser;

alert("Adivinha número! Insira um número de um a vinte e veja se foi o mesmo número que o computador pensou");

do {    
    numeroUser = parseInt(prompt("Insira um número de 0 a 20"));

    if(numeroUser > 20 || numeroUser < 0){ //se o número for inválido, inserir outro válido
        alert("Atenção, número inválido. Números válidos: 0 a 20")
        continue;
    } 

    if(numeroUser > numeroAleatorio){
        alert("O número inserido é maior que o número sorteado");
    }if(numeroUser < numeroAleatorio){
        alert("o número inserido é menor que o número sorteado");
    }

} while (numeroUser != numeroAleatorio);

alert(`Você conseguiu! O número sorteado era ${numeroAleatorio}`);
