// Ejercicio 1: Relleno básico + recorrido
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  const valor = Number(prompt("Número " + (i + 1) + ":"));
  numeros.push(valor);
}
for (let i = 0; i < numeros.length; i++) {
  console.log("Índice " + i + " → valor: " + numeros[i]);
}
console.log("Longitud:", numeros.length);