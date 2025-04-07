// Ejercicio 9
// Imprimir los números de 1 a N (siendo N un número que se lee) cada uno con su respectivo factorial.

const prompt = require('prompt-sync')({ siging: true})
let N = parseInt(prompt(`Ingrese un número : `))
if (N < 0){
    N *= -1
}

for (let i = 1; i <= N; i++) {
        let valor = 1
        let factorial=1

    while (valor<=i){
        factorial *= valor
        valor++
    }
    console.log( i + ' = ' + factorial );
  }
