// Ejercicio 10: Filtrado (> 10)
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
const mayoresQue10 = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    mayoresQue10.push(numeros[i]);
  }
}
console.log("Original:", numeros);
console.log("Mayores que 10:", mayoresQue10);