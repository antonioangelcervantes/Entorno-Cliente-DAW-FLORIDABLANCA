// Ejercicio 3 — Lista de números
let numeros = [1, 2, 3, 4, 5];

// 2) Añadir 6 y 7
numeros.push(6);
numeros.push(7);

// 3) Mostrar solo los pares
for (let i = 0; i < numeros.length; i++) {
  const valor = numeros[i];
  if (valor % 2 === 0) {
    console.log(valor + " es par");
  }
}

// 4) Longitud final
console.log("Longitud del array:", numeros.length);