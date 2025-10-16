// Ejercicio 4: Modificar por posición
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
console.log("Antes:", numeros);
const indice = Number(prompt("Índice a modificar (0..." + (numeros.length - 1) + "):"));
const nuevoValor = Number(prompt("Nuevo valor:"));
numeros[indice] = nuevoValor;
console.log("Después:", numeros);