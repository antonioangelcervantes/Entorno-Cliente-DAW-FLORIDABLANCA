// Ejercicio 7: Mínimo y máximo
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
let min = numeros[0];
let max = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  const v = numeros[i];
  if (v < min) min = v;
  if (v > max) max = v;
}
console.log("Array:", numeros);
console.log("Mínimo:", min, "— Máximo:", max);