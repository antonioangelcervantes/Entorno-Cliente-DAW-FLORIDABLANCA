

// Condicionales if...else 

// 1) Precio del cine
function ej1() {
  let edad = Number(prompt("Edad:"));
  let dia = prompt("Día de la semana:");
  if (dia === null) return;
  dia = dia.toLowerCase();

  let precio;
  if (edad < 14) {
    precio = 5;
  } else if (edad < 65) {
    precio = 8;
  } else {
    precio = 6;
  }
  if (dia === "martes") {
    precio = precio - 1;
  }
  alert("Precio final: " + precio + " €");
}

// 2) Envío gratis
function ej2() {
  let total = Number(prompt("Importe del carrito (€):"));
  let aPagar;
  if (total >= 50) {
    aPagar = total;
  } else {
    aPagar = total + 3.99;
  }
  alert("Total a pagar: " + aPagar.toFixed(2) + " €");
}

// 3) Control de acceso
function ej3() {
  let user = prompt("Usuario:");
  let pass = prompt("Contraseña:");
  if (user === "alumno" && pass === "1234") {
    alert("Acceso concedido");
  } else {
    alert("Acceso denegado");
  }
}

// switch 

// 4) Menú del día
function ej4() {
  let op = prompt("1) Café  2) Tostada  3) Zumo");
  switch (op) {
    case "1":
      alert("Café: 1,20 €");
      break;
    case "2":
      alert("Tostada: 1,80 €");
      break;
    case "3":
      alert("Zumo: 2,00 €");
      break;
    default:
      alert("Opción no válida");
  }
}

// 5) Día de la semana → horario
function ej5() {
  let dia = prompt("Día (lun, mar, mié, jue, vie, sáb, dom):");
  if (dia === null) return;
  dia = dia.toLowerCase();

  switch (dia) {
    case "lun":
      alert("Lunes: 8:00–14:00");
      break;
    case "mar":
      alert("Martes: 8:00–14:00");
      break;
    case "mié":
    case "mie":
      alert("Miércoles: 8:00–14:00");
      break;
    case "jue":
      alert("Jueves: 8:00–14:00");
      break;
    case "vie":
      alert("Viernes: 8:00–14:00");
      break;
    case "sab":
    case "sáb":
    case "dom":
      alert("No hay clase");
      break;
    default:
      alert("Día no válido");
  }
}

// 6) Mes → estación
function ej6() {
  let mes = Number(prompt("Mes (1–12):"));
  let est;
  switch (mes) {
    case 12:
    case 1:
    case 2:
      est = "Invierno";
      break;
    case 3:
    case 4:
    case 5:
      est = "Primavera";
      break;
    case 6:
    case 7:
    case 8:
      est = "Verano";
      break;
    case 9:
    case 10:
    case 11:
      est = "Otoño";
      break;
    default:
      est = "Mes no válido";
  }
  alert(est);
}

// while 

// 7) Hucha de ahorro
function ej7() {
  let suma = 0;
  while (true) {
    let texto = prompt("Ingreso en € (fin para terminar):");
    if (texto === null) break;
    let = texto.toLowerCase();
    if (texto === "fin") break;
    let valor = Number(texto);
    if (!isNaN(valor)) {
      suma = suma + valor;
    }
    if (suma >= 100) break;
  }
  alert("Total ahorrado: " + suma.toFixed(2) + " €");
}

// 8) Intentos de PIN
function ej8() {
  let PIN = "4321";
  let intentos = 0;
  let correcto = false;
  while (intentos < 3 && !correcto) {
    let p = prompt("Introduce PIN:");
    if (p === PIN) {
      correcto = true;
    } else {
      intentos = intentos + 1;
    }
  }
  if (correcto) {
    alert("PIN correcto");
  } else {
    alert("Tarjeta bloqueada");
  }
}

// 9) Encuesta
function ej9() {
  let respuesta = "";
  while (respuesta !== "sí" && respuesta !== "si" && respuesta !== "no") {
    respuesta = prompt("¿Te gusta programar? (sí/no):");
    if (respuesta === null) return;
    respuesta = respuesta.toLowerCase();
  }
  alert("Gracias por responder");
}

// D) for

// 10) Tabla de precios
function ej10() {
  let precio = Number(prompt("Precio unitario (€):"));
  for (let i = 1; i <= 10; i++) {
    console.log(i + " uds cuestan " + (i * precio).toFixed(2) + " €");
  }
  alert("Consulta la consola");
}

// 11) Contador de pasos
function ej11() {
  let objetivo = Number(prompt("Objetivo de pasos:"));
  for (let i = 1; i <= objetivo; i++) {
    if (i % 1000 === 0) {
      console.log(i);
    }
  }
  alert("Consulta la consola");
}

// 12) Media de notas
function ej12() {
  let notas = [5, 7, 8, 4, 10];
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  let media = suma / notas.length;
  console.log("Media: " + media.toFixed(2));
  alert("Consulta la consola");
}

// =============== E) break / continue ===============

// 13) Primera oferta
function ej13() {
  let precios = [12, 25, 40, 18, 9, 30];
  let encontrada = false;
  for (let i = 0; i < precios.length; i++) {
    if (precios[i] <= 15) {
      alert("Primera oferta: " + precios[i] + " €");
      encontrada = true;
      break;
    }
  }
  if (!encontrada) {
    alert("No hay ofertas menores de 15 €");
  }
}

// 14) Mensajes vacíos
function ej14() {
  for (let i = 1; i <= 5; i++) {
    let msg = prompt("Mensaje " + i + ":");
    if (msg === null || msg === "") {
      continue;
    }
    console.log(msg);
  }
  alert("Consulta la consola");
}

//F) Arrays 

// 15) Lista de compras
function ej15() {
  let compras = ["leche", "pan", "huevos", "arroz", "manzanas"];
  for (var i = 0; i < compras.length; i++) {
    console.log(compras[i]);
  }
  alert("Consulta la consola");
}

// 16) Precios totales
function ej16() {
  let precios = [10, 20, 15, 30, 25];
  let total = 0;
  for (let i = 0; i < precios.length; i++) {
    total = total + precios[i];
  }
  console.log("Total: " + total);
  alert("Consulta la consola");
}

// 17) Buscar producto
function ej17() {
  let productos = ["pan", "leche", "huevos", "arroz", "manzanas"];
  let nombre = prompt("Producto a buscar:");
  if (nombre === null) return;
  nombre = nombre.toLowerCase();
  let encontrado = false;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].toLowerCase() === nombre) {
      encontrado = true;
      break;
    }
  }
  if (encontrado) {
    alert("Producto encontrado");
  } else {
    alert("No está en la lista");
  }
}

// 18) Stock bajo
function ej18() {
  let stock = [12, 3, 7, 0, 9, 5];
  for (let i = 0; i < stock.length; i++) {
    if (stock[i] < 5) {
      console.log("Stock bajo: " + stock[i]);
    }
  }
  alert("Consulta la consola");
}

// 19) Lista de tareas
function ej19() {
  var tareas = []; 
  var entrada;    

  while (true) {
    entrada = prompt("Escribe una tarea (o 'fin' para terminar):");

    if (entrada === null) {
      break;
    }

    if (entrada.toLowerCase() === "fin") {
      break;
    }

    if (entrada !== "") {
      tareas.push(entrada);
    }
  }
  console.log("Tareas introducidas:");
  for (let i = 0; i < tareas.length; i++) {
    console.log((i + 1) + ". " + tareas[i]);
  }

  alert("Consulta la consola para ver la lista de tareas.");
}

// 20) Aprobados y suspensos
function ej20() {
  let notas = [3, 7, 9, 4, 5, 10, 6];
  let aprobados = 0;
  let suspensos = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 5) {
      aprobados = aprobados + 1;
    } else {
      suspensos = suspensos + 1;
    }
  }
  console.log("Aprobados: " + aprobados + ", Suspensos: " + suspensos);
  alert("Consulta la consola");
}
