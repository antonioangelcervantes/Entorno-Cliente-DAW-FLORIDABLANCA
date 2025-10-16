// Ejercicio 8: Búsqueda de un valor
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
const objetivo = Number(prompt("Número a buscar:"));
let encontrado = false;
let indiceEncontrado = -1;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === objetivo) {
    encontrado = true;
    indiceEncontrado = i;
    break;
  }
}
console.log("Array:", numeros);
if (encontrado) console.log("Encontrado en índice:", indiceEncontrado);
else console.log("No encontrado");