// Ejercicio 6: Contar pares e impares
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
let pares = 0, impares = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) pares++; else impares++;
}
console.log("Array:", numeros);
console.log("Pares:", pares, "— Impares:", impares);