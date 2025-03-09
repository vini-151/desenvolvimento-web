var opcoes = ['pedra', 'papel', 'tesoura'];
var escolhaUser;
var escolhaComp = opcoes[Math.floor(Math.random() * 3)];

console.log(escolhaComp)

alert("Pedra, Papel e tesoura!")

escolhaUser = prompt("Esolha entre pedra, papel e tesoura");


switch (escolhaUser) {
    case 'pedra':
        if(escolhaComp == 'pedra') alert("Vocês tiraram pedra, tente novamente");
        else if(escolhaComp == 'papel') alert(`Você perdeu! Computador tirou: ${escolhaComp}`);
        else alert(`Você ganhou! Computador tirou: ${escolhaComp}`);
        break;
    case 'papel':
        if(escolhaComp == 'papel') alert("Vocês tiraram papel, tente novamente");
        else if(escolhaComp == 'tesoura') alert(`Você perdeu! Computador tirou: ${escolhaComp}`);
        else alert(`Você ganhou! Computador tirou: ${escolhaComp}`);
        break;
    case 'tesoura':
        if(escolhaComp == 'tesoura') alert("Vocês tiraram tesoura, tente novamente");
        else if(escolhaComp == 'pedra') alert(`Você perdeu! Computador tirou: ${escolhaComp}`);
        else alert(`Você ganhou! Computador tirou: ${escolhaComp}`);
        break;

    default:
        alert("Entrada inválida")
        break;
}


  




