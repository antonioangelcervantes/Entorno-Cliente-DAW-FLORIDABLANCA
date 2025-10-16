// Ejercicio 1 — Lista de animales
let animales = ["perro", "gato", "pez"];
console.log("Inicial:", animales);

// 2) Añadir al final
animales.push("loro");
console.log("Después de push:", animales);

// 3) Añadir al principio
animales.unshift("tortuga");
console.log("Después de unshift:", animales);

// 4) Quitar el último
animales.pop();
console.log("Después de pop:", animales);

// 5) Quitar el primero
animales.shift();
console.log("Después de shift:", animales);

// 6) Recorrer con for
for (let i = 0; i < animales.length; i++) {
  console.log("Animal en posición " + i + ": " + animales[i]);
}

// 7) Total
console.log("Total:", animales.length);
