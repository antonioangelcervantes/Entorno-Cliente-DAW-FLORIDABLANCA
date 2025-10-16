// Ejercicio 2: Inserciones al principio y al final
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  const valor = Number(prompt("Número " + (i + 1) + ":"));
  numeros.push(valor);
}
console.log("Inicial:", numeros);
const primero = Number(prompt("Número para insertar al PRINCIPIO:"));
const ultimo = Number(prompt("Número para insertar al FINAL:"));
numeros.unshift(primero);
numeros.push(ultimo);
console.log("Tras unshift y push:", numeros);