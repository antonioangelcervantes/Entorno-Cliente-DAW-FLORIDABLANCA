// Bloque F: condicionales
function ej_1F1() {
  const nota = Number(prompt("Nota (0-10)"));
  if (nota < 0 || nota > 10) {
    alert("Nota fuera de rango.");
  } else {
    alert(nota >= 5 ? "Aprobado" : "Suspenso");
  }
}

function ej_2F2() {
  const n = Number(prompt("Número"));
  if (n > 0) alert("Positivo");
  else if (n < 0) alert("Negativo");
  else alert("Cero");
}

function ej_3F3() {
  const letra = prompt("Letra").toLowerCase();
  const esVocal = ["a", "e", "i", "o", "u"].includes(letra);
  alert(esVocal ? "Vocal" : "Consonante");
}

function ej_4F4() {
  const opcion = prompt("Menú:\n1) Suma\n2) Resta\n3) Multiplica");
  const a = Number(prompt("Primer número"));
  const b = Number(prompt("Segundo número"));

  if (opcion === "1") alert("Suma: " + (a + b));
  else if (opcion === "2") alert("Resta: " + (a - b));
  else if (opcion === "3") alert("Multiplicación: " + (a * b));
  else alert("Opción inválida");
}