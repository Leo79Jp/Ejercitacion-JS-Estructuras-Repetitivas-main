// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.
const prompt = require('prompt-sync')({ siging: true})

let A = parseInt(prompt(`Ingrese el valor de ' A ': `))
let B = parseInt(prompt(`Ingrese el valor de ' B ': `))

// Ejemplo con "For"
let suma = 0
let suma2 = 0
console.log('---- Ejemplo con "For" ----');
console.log(`${B} veces A con "For"`);
for (let i = 0; i < B; i++) {
    suma += A
    console.log({ suma })
}
console.log(`${A} veces B con "For"`);
for (let i = 0; i < A; i++) {
    suma2 += B
    console.log({ suma2 })
}

// Ejemplo con "While"
console.log('---- Ejemplo con "While" ----');
let suma3 = 0
let suma4 = 0 
console.log(`${B} veces A con "While"`);
while(suma3 != (A * B)){
    suma3+=A
    console.log({suma3});
}
console.log(`${A} veces B con "While"`);
while(suma4 != (A * B)){
    suma4+=B
    console.log({suma4});
}

// Ejemplo con "Do While"
console.log('---- Ejemplo con "Do While" ----');
let suma5 = 0
let suma6 = 0
console.log(`${B} veces A con "Do While"`);
do{
    suma5+=A
    console.log({suma5});
} while(suma5 != (A * B)); 

console.log(`${A} veces B con "Do While"`);
do{
    suma6+=B
    console.log({suma6});
} while(suma6 != (A * B)); 
