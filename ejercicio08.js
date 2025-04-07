// Ejercicio 8
// Obtener el resto de la división entera a%b de dos números enteros positivos mediante restas.

const prompt = require('prompt-sync')({ siging: true})

let A = parseInt(prompt(`Ingrese el valor de ' A ': `))
let B = parseInt(prompt(`Ingrese el valor de ' B ': `))
let resto = (A%B);

for (let i = A; i > 0; i-=B) {
    // console.log(i);
}
console.log({resto}); 