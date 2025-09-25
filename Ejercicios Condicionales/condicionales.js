// ===== Bloque: Condicionales =====

// Función auxiliar para leer número seguro
function leerNumero(mensaje) {
  const txt = prompt(mensaje);
  if (txt === null) return { cancelado: true };
  const n = Number(txt.trim());
  if (Number.isNaN(n)) return { invalido: true };
  return { valor: n };
}

// 1. Edad mínima
function cond_01() {
  const edad = leerNumero("Edad:");
  if (edad.cancelado) {
    alert("Operación cancelada.");
  } else if (edad.invalido) {
    alert("Entrada no válida.");
  } else if (edad.valor >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
}

// 2. Número positivo o negativo
function cond_02() {
  const num = leerNumero("Introduce un número:");
  if (num.cancelado) alert("Cancelado.");
  else if (num.invalido) alert("Entrada no válida.");
  else if (num.valor > 0) alert("Es positivo");
  else alert("Es negativo o cero");
}

// 3. Contraseña sencilla
function cond_03() {
  const pass = prompt("Escribe la contraseña:");
  if (pass === null) alert("Cancelado.");
  else if (pass === "abc123") alert("Acceso permitido");
  else alert("Acceso denegado");
}

// 4. Número par o impar
function cond_04() {
  const num = leerNumero("Número:");
  if (num.cancelado) alert("Cancelado.");
  else if (num.invalido) alert("Entrada no válida.");
  else alert(num.valor % 2 === 0 ? "Es par" : "Es impar");
}

// 5. Comparar dos números
function cond_05() {
  const a = leerNumero("Primer número:");
  if (a.cancelado) return alert("Cancelado.");
  if (a.invalido) return alert("Entrada no válida.");
  const b = leerNumero("Segundo número:");
  if (b.cancelado) return alert("Cancelado.");
  if (b.invalido) return alert("Entrada no válida.");
  if (a.valor > b.valor) alert("El mayor es: " + a.valor);
  else if (b.valor > a.valor) alert("El mayor es: " + b.valor);
  else alert("Son iguales");
}

// 6. Nota de examen (aprobado/suspenso)
function cond_06() {
  const nota = leerNumero("Nota (0-10):");
  if (nota.cancelado) alert("Cancelado.");
  else if (nota.invalido) alert("Entrada no válida.");
  else alert(nota.valor >= 5 ? "Aprobado" : "Suspenso");
}

// 7. Clasificación de nota
function cond_07() {
  const nota = leerNumero("Nota (0-10):");
  if (nota.cancelado) return alert("Cancelado.");
  if (nota.invalido) return alert("Entrada no válida.");
  const n = nota.valor;
  if (n < 0 || n > 10) return alert("Fuera de rango (0-10).");
  if (n <= 4) alert("Suspenso");
  else if (n <= 6) alert("Aprobado");
  else if (n <= 8) alert("Notable");
  else alert("Sobresaliente");
}

// 8. Día de la semana
function cond_08() {
  const dia = leerNumero("Número de día (1-7):");
  if (dia.cancelado) return alert("Cancelado.");
  if (dia.invalido) return alert("Entrada no válida.");
  const n = dia.valor;
  let nombre;
  if (n === 1) nombre = "Lunes";
  else if (n === 2) nombre = "Martes";
  else if (n === 3) nombre = "Miércoles";
  else if (n === 4) nombre = "Jueves";
  else if (n === 5) nombre = "Viernes";
  else if (n === 6) nombre = "Sábado";
  else if (n === 7) nombre = "Domingo";
  else nombre = null;

  alert(nombre ? nombre : "Número inválido");
}

// 9. El mayor de tres números
function cond_09() {
  const a = leerNumero("Número A:");
  if (a.cancelado) return alert("Cancelado.");
  if (a.invalido) return alert("Entrada no válida.");
  const b = leerNumero("Número B:");
  if (b.cancelado) return alert("Cancelado.");
  if (b.invalido) return alert("Entrada no válida.");
  const c = leerNumero("Número C:");
  if (c.cancelado) return alert("Cancelado.");
  if (c.invalido) return alert("Entrada no válida.");

  let mayor;
  if (a.valor >= b.valor && a.valor >= c.valor) mayor = a.valor;
  else if (b.valor >= a.valor && b.valor >= c.valor) mayor = b.valor;
  else mayor = c.valor;

  alert("El mayor es: " + mayor);
}

// 10. Operador ternario I: mayoría de edad
function cond_10() {
  const edad = leerNumero("Edad:");
  if (edad.cancelado) return alert("Cancelado.");
  if (edad.invalido) return alert("Entrada no válida.");
  const mensaje = edad.valor >= 18 ? "Mayor de edad" : "Menor de edad";
  alert(mensaje);
}

// 11. Operador ternario II: par/impar
function cond_11() {
  const num = leerNumero("Número:");
  if (num.cancelado) return alert("Cancelado.");
  if (num.invalido) return alert("Entrada no válida.");
  alert(num.valor % 2 === 0 ? "Par" : "Impar");
}

// 12. Precio con descuento
function cond_12() {
  const precio = leerNumero("Precio:");
  if (precio.cancelado) return alert("Cancelado.");
  if (precio.invalido) return alert("Entrada no válida.");
  const final = precio.valor > 100 ? precio.valor * 0.9 : precio.valor;
  alert("Precio final: " + final.toFixed(2));
}

// 13. Comparar dos cadenas
function cond_13() {
  const t1 = prompt("Primer texto:");
  if (t1 === null) return alert("Cancelado.");
  const t2 = prompt("Segundo texto:");
  if (t2 === null) return alert("Cancelado.");
  alert(t1 === t2 ? "Son iguales" : "Son diferentes");
}

// 14. Saludo según hora
function cond_14() {
  const hora = leerNumero("Hora (0-23):");
  if (hora.cancelado) return alert("Cancelado.");
  if (hora.invalido) return alert("Entrada no válida.");
  const h = hora.valor;
  if (h < 0 || h > 23) return alert("Fuera de rango.");
  if (h <= 11) alert("Buenos días");
  else if (h <= 18) alert("Buenas tardes");
  else alert("Buenas noches");
}

// 15. Acceso a un juego (usa && de forma simple)
function cond_15() {
  const edad = leerNumero("Edad:");
  if (edad.cancelado) return alert("Cancelado.");
  if (edad.invalido) return alert("Entrada no válida.");
  const nombre = prompt("Nombre:");
  if (nombre === null) return alert("Cancelado.");

  if (edad.valor >= 18 && nombre.trim() === "admin") alert("Acceso especial");
  else if (edad.valor >= 18) alert("Acceso normal");
  else alert("Acceso denegado");
}

// 16. Número dentro de un rango 1..10
function cond_16() {
  const num = leerNumero("Número (1-10):");
  if (num.cancelado) return alert("Cancelado.");
  if (num.invalido) return alert("Entrada no válida.");
  if (num.valor >= 1 && num.valor <= 10) alert("Dentro del rango");
  else alert("Fuera del rango");
}

// 17. Entrada gratuita o de pago
function cond_17() {
  const edad = leerNumero("Edad:");
  if (edad.cancelado) return alert("Cancelado.");
  if (edad.invalido) return alert("Entrada no válida.");
  const e = edad.valor;
  if (e < 12) alert("Entrada gratuita");
  else if (e <= 64) alert("Entrada normal");
  else alert("Entrada reducida");
}

// 18. Clima y actividad
function cond_18() {
  const clima = prompt("Escribe 'sol' o 'lluvia':");
  if (clima === null) return alert("Cancelado.");
  const c = clima.trim().toLowerCase();
  if (c === "sol") alert("Puedes salir a pasear");
  else if (c === "lluvia") alert("Mejor lleva paraguas");
  else alert("No entiendo la respuesta");
}
