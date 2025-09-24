// Bloque D: operadores matemáticos
function ej_1D1() {
  const a = Number(prompt("Primer número"));
  const b = Number(prompt("Segundo número"));
  alert("Suma: " + (a + b));
}

function ej_2D2() {
  const a = Number(prompt("Primer número"));
  const b = Number(prompt("Segundo número"));
  alert("Resta: " + (a - b) + "\nMultiplicación: " + (a * b) + "\nDivisión: " + (b === 0 ? "No se puede" : a / b));
}

function ej_3D3() {
  const n = Number(prompt("Número"));
  alert("Cuadrado: " + (n * n) + "\nResto entre 3: " + (n % 3));
}

function ej_4D4() {
  const precio = Number(prompt("Precio unitario (€)"));
  const unidades = Number(prompt("Unidades"));
  const base = precio * unidades;
  const iva = base * 0.21;
  const total = base + iva;
  alert("Base: " + base.toFixed(2) + " €\nIVA: " + iva.toFixed(2) + " €\nTotal: " + total.toFixed(2) + " €");
}