// Ejercicio 7
// Realizar la operación de potenciación (a^b), de dos valores enteros positivos, con multiplicaciones.
const prompt = require('prompt-sync')({ siging: true})

let A = parseInt(prompt(`Ingrese el valor de ' A ': `))
let B = parseInt(prompt(`Ingrese el valor de ' B ': `))
let acumulador = A

console.log(`EL valor de ( A = ${A} ) elevado a el valor de ( B = ${B} ) es igual a : ${A**B}`);

if ( A ** B){
    for (let i = B; i > 1; i--) {
        console.log(`A * A  = ${acumulador} * ${A} = ${acumulador*=A}`);
    }
}
