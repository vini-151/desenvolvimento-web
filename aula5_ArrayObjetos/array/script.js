let numeros = [1,2,3,4,5];


lista = []

lista[0] = "primeiro"

lista[1] = "Segundo"

console.log(lista)

numeros.push(6)

numeros.splice(3, 0, 2.5) //na posição 3, não irá retirar um elemento, e sim, vai adicionar na posição 3 o número 2.5

numeros.pop()
numeros.shift()
numeros.splice(2,1)
console.log(numeros) 

//acesso e pesquisa dos elementos
//encontrar a posição de um elemento 

console.log(numeros.indexOf(6))

//verificar se elemento existe (true/ false)

console.log(numeros.includes(4))

for (let numero of numeros){
    console.log(numero)
}
