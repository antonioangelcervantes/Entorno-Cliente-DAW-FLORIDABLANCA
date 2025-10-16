// Ejercicio 3: Eliminaciones en los extremos
const n = Number(prompt("¿Cuántos números vas a introducir?"));
const numeros = [];
for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Número " + (i + 1) + ":")));
}
console.log("Inicial:", numeros);
const elimFinal = numeros.pop();
console.log("Eliminado al final:", elimFinal);
const elimInicio = numeros.shift();
console.log("Eliminado al principio:", elimInicio);
console.log("Array actual:", numeros, "Longitud:", numeros.length);