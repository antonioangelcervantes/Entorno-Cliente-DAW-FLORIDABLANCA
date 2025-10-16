// Ejercicio 5: Suma y media
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
const media = suma / numeros.length;
console.log("Array:", numeros);
console.log("Suma:", suma, "Media:", media);