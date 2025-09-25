// ===== Bloque: Condicionales (versión básica, sin validaciones) =====

// 1. Edad mínima
function cond_01() {
  const edad = Number(prompt("Introduce tu edad:"));
  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
}

// 2. Número positivo o negativo
function cond_02() {
  const numero = Number(prompt("Introduce un número:"));
  if (numero > 0) {
    alert("Es positivo");
  } else {
    alert("Es negativo o cero");
  }
}

// 3. Contraseña sencilla
function cond_03() {
  const pass = prompt("Escribe la contraseña:");
  if (pass === "abc123") {
    alert("Acceso permitido");
  } else {
    alert("Acceso denegado");
  }
}

// 4. Número par o impar
function cond_04() {
  const n = Number(prompt("Introduce un número:"));
  if (n % 2 === 0) {
    alert("Es par");
  } else {
    alert("Es impar");
  }
}

// 5. Comparar dos números
function cond_05() {
  const a = Number(prompt("Primer número:"));
  const b = Number(prompt("Segundo número:"));
  if (a > b) {
    alert("El mayor es " + a);
  } else if (b > a) {
    alert("El mayor es " + b);
  } else {
    alert("Son iguales");
  }
}

// 6. Nota de examen
function cond_06() {
  const nota = Number(prompt("Introduce tu nota (0-10):"));
  if (nota >= 5) {
    alert("Aprobado");
  } else {
    alert("Suspenso");
  }
}

// 7. Clasificación de nota
function cond_07() {
  const nota = Number(prompt("Introduce tu nota (0-10):"));
  if (nota <= 4) {
    alert("Suspenso");
  } else if (nota <= 6) {
    alert("Aprobado");
  } else if (nota <= 8) {
    alert("Notable");
  } else {
    alert("Sobresaliente");
  }
}

// 8. Día de la semana
function cond_08() {
  const dia = Number(prompt("Número del 1 al 7:"));
  if (dia === 1) {
    alert("Lunes");
  } else if (dia === 2) {
    alert("Martes");
  } else if (dia === 3) {
    alert("Miércoles");
  } else if (dia === 4) {
    alert("Jueves");
  } else if (dia === 5) {
    alert("Viernes");
  } else if (dia === 6) {
    alert("Sábado");
  } else if (dia === 7) {
    alert("Domingo");
  } else {
    alert("Número inválido");
  }
}

// 9. El mayor de tres números
function cond_09() {
  const a = Number(prompt("Número A:"));
  const b = Number(prompt("Número B:"));
  const c = Number(prompt("Número C:"));
  if (a >= b && a >= c) {
    alert("El mayor es " + a);
  } else if (b >= a && b >= c) {
    alert("El mayor es " + b);
  } else {
    alert("El mayor es " + c);
  }
}

// 10. Operador ternario I
function cond_10() {
  const edad = Number(prompt("Introduce tu edad:"));
  const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
  alert(mensaje);
}

// 11. Operador ternario II
function cond_11() {
  const n = Number(prompt("Introduce un número:"));
  const mensaje = n % 2 === 0 ? "Par" : "Impar";
  alert(mensaje);
}

// 12. Precio con descuento
function cond_12() {
  const precio = Number(prompt("Introduce el precio:"));
  if (precio > 100) {
    alert("Precio final: " + (precio * 0.9));
  } else {
    alert("Precio final: " + precio);
  }
}

// 13. Comparar dos cadenas
function cond_13() {
  const t1 = prompt("Primer texto:");
  const t2 = prompt("Segundo texto:");
  if (t1 === t2) {
    alert("Son iguales");
  } else {
    alert("Son diferentes");
  }
}

// 14. Calcular la hora del día
function cond_14() {
  const hora = Number(prompt("Introduce la hora (0-23):"));
  if (hora <= 11) {
    alert("Buenos días");
  } else if (hora <= 18) {
    alert("Buenas tardes");
  } else {
    alert("Buenas noches");
  }
}

// 15. Acceso a un juego
function cond_15() {
  const edad = Number(prompt("Edad:"));
  const nombre = prompt("Nombre:");
  if (edad >= 18 && nombre === "admin") {
    alert("Acceso especial");
  } else if (edad >= 18) {
    alert("Acceso normal");
  } else {
    alert("Acceso denegado");
  }
}

// 16. Número dentro de un rango
function cond_16() {
  const n = Number(prompt("Introduce un número:"));
  if (n >= 1 && n <= 10) {
    alert("Dentro del rango");
  } else {
    alert("Fuera del rango");
  }
}

// 17. Entrada gratuita o de pago
function cond_17() {
  const edad = Number(prompt("Edad:"));
  if (edad < 12) {
    alert("Entrada gratuita");
  } else if (edad <= 64) {
    alert("Entrada normal");
  } else {
    alert("Entrada reducida");
  }
}

// 18. Clima y actividad
function cond_18() {
  const clima = prompt("Escribe 'sol' o 'lluvia':");
  if (clima === "sol") {
    alert("Puedes salir a pasear");
  } else if (clima === "lluvia") {
    alert("Mejor lleva paraguas");
  } else {
    alert("No entiendo la respuesta");
  }
}
