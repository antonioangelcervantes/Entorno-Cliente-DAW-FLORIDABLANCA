// Bloque E: comparadores
function ej_1E1() {
  const a = prompt("Primer valor");
  const b = prompt("Segundo valor");
  alert("==: " + (a == b) + "\n===: " + (a === b));
}

function ej_2E2() {
  const edad = Number(prompt("Edad"));
  alert(edad >= 18 ? "Mayor de edad" : "Menor de edad");
}

function ej_3E3() {
  const a = Number(prompt("Primer número"));
  const b = Number(prompt("Segundo número"));
  if (a > b) alert("El primero es mayor");
  else if (a < b) alert("El primero es menor");
  else alert("Son iguales");
}