// Ejercicio 9: Transformaciones (dobles)
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
const dobles = [];
for (let i = 0; i < numeros.length; i++) {
  dobles.push(numeros[i] * 2);
}
console.log("Original:", numeros);
console.log("Dobles:", dobles);