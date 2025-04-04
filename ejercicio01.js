// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.

const prompt = require('prompt-sync')({ siging: true})
// Ejemplo con "Do While"
console.log('---- Ejemplo con "Do While" ----');
let nota = 0
let cantidad = 0
let suma = 0
do{
    cantidad++
    suma +=  nota
    nota = parseInt(prompt(`Ingrese la nota Nº ${cantidad}: `))
} while(nota >= 0); 
console.log(`El promedio de las ${--cantidad} notas con "Do While" es:  ${suma / cantidad}`);

// Ejemplo con "While
console.log('---- Ejemplo con "While" ----');
let nota2 = 0
let cantidad2 = 1
let suma2 = 0
while(nota2 >= 0){
    nota2 = parseInt(prompt(`Ingrese la nota Nº ${cantidad2}: `))
    if (nota2 >= 0){
        cantidad2++
        suma2 +=  nota2
    }
}
console.log(`El promedio de las ${--cantidad2} notas con "While" es:  ${suma2 / cantidad2}`);

// Ejemplo con "For"
console.log('---- Ejemplo con "For" ----');
let cantidad3 = 1
let suma3 = 0
let nota3 = parseInt(prompt(`Ingrese la nota Nº ${cantidad3}: `))

for (nota3; nota3 >=0 ; cantidad3) {
    suma3+=nota3
    nota3 = parseInt(prompt(`Ingrese la nota Nº ${++cantidad3}: `))
}
console.log(`El promedio de las ${--cantidad3} notas con "For" es:  ${suma3 / cantidad3}`);
