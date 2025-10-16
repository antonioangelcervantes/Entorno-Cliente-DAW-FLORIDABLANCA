// Ejercicio 2 — Lista de colores
let colores = ["rojo", "verde", "azul", "amarillo"];

// 2) Primer color
console.log("Primer color:", colores[0]);

// 3) Último color (length - 1)
console.log("Último color:", colores[colores.length - 1]);

// 4) Añadir un color al final
colores.push("morado");
console.log("Tras push:", colores);

// 5) Recorrer el array
for (let i = 0; i < colores.length; i++) {
  console.log("Color en posición " + i + ":", colores[i]);
}