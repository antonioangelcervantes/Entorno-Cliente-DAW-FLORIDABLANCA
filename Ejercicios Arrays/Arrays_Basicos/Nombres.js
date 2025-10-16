// Ejercicio 4 — Lista de nombres
let nombres = ["Ana", "Luis", "Marta"];

// 2) Añadir tu nombre al principio
nombres.unshift("Antonio");
console.log("Tras unshift:", nombres);

// 3) Saludar a cada persona
for (let i = 0; i < nombres.length; i++) {
  console.log("Hola, " + nombres[i]);
}

// 4) Quitar el último y mostrar el array
nombres.pop();
console.log("Tras pop:", nombres);