// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.
const prompt = require('prompt-sync')({ siging: true})

let A = parseInt(prompt(`Ingrese el valor de ' A ': `))
let B = parseInt(prompt(`Ingrese el valor de ' B ': `))
console.log(`EL valor de ( A = ${A} ) y dividido el valor de ( B = ${B} ) es igual a : ${A/B}`);

if ( A > B){
    for (let i = A; i > 0; i-=B) {
        console.log(`A - B  = ${i} - ${B} = ${i-B}`);
    }
}

