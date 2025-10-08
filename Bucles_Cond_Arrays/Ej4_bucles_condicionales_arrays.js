// Ejercicios de Bucles, Condicionales y Arrays en JavaScript (Nivel Básico)

// =============== A) Condicionales if...else ===============

// 1) Precio del cine
function ex1() {
  const edad = Number(prompt("Edad:"));
  const dia = (prompt("Día de la semana:") || "").trim().toLowerCase();
  let precio;
  if (edad < 14) precio = 5;
  else if (edad < 65) precio = 8;
  else precio = 6;
  if (dia === "martes") precio -= 1;
  alert(`Precio final: ${precio} €`);
}

// 2) Envío gratis
function ex2() {
  const total = Number(prompt("Importe del carrito (€):"));
  const aPagar = total >= 50 ? total : total + 3.99;
  alert(`Total a pagar: ${aPagar.toFixed(2)} €`);
}

// 3) Control de acceso
function ex3() {
  const user = prompt("Usuario:");
  const pass = prompt("Contraseña:");
  alert(user === "alumno" && pass === "1234" ? "Acceso concedido" : "Acceso denegado");
}

// =============== B) switch ===============

// 4) Menú del día
function ex4() {
  const op = prompt("1) Café  2) Tostada  3) Zumo");
  switch (op) {
    case "1": alert("Café: 1,20 €"); break;
    case "2": alert("Tostada: 1,80 €"); break;
    case "3": alert("Zumo: 2,00 €"); break;
    default: alert("Opción no válida");
  }
}

// 5) Día de la semana → horario
function ex5() {
  const dia = (prompt("Día (lun, mar, mié, jue, vie, sáb, dom):") || "").trim().toLowerCase();
  switch (dia) {
    case "lun": alert("Lunes: 8:00–14:00"); break;
    case "mar": alert("Martes: 8:00–14:00"); break;
    case "mié":
    case "mie": alert("Miércoles: 8:00–14:00"); break;
    case "jue": alert("Jueves: 8:00–14:00"); break;
    case "vie": alert("Viernes: 8:00–14:00"); break;
    case "sab":
    case "sáb":
    case "dom": alert("No hay clase"); break;
    default: alert("Día no válido");
  }
}

// 6) Mes → estación
function ex6() {
  const mes = Number(prompt("Mes (1–12):"));
  let est;
  switch (mes) {
    case 12: case 1: case 2: est = "Invierno"; break;
    case 3: case 4: case 5: est = "Primavera"; break;
    case 6: case 7: case 8: est = "Verano"; break;
    case 9: case 10: case 11: est = "Otoño"; break;
    default: est = "Mes no válido";
  }
  alert(est);
}

// =============== C) while ===============

// 7) Hucha de ahorro
function ex7() {
  let suma = 0;
  while (true) {
    const txt = prompt("Ingreso en € (fin para terminar):");
    if (!txt || txt.toLowerCase() === "fin") break;
    suma += Number(txt);
    if (suma >= 100) break;
  }
  alert(`Total ahorrado: ${suma.toFixed(2)} €`);
}

// 8) Intentos de PIN
function ex8() {
  const PIN = "4321";
  let intentos = 0;
  while (intentos < 3) {
    const p = prompt("Introduce PIN:");
    if (p === PIN) return alert("PIN correcto");
    intentos++;
  }
  alert("Tarjeta bloqueada");
}

// 9) Encuesta
function ex9() {
  let r;
  do {
    r = (prompt("¿Te gusta programar? (sí/no):") || "").toLowerCase();
  } while (r !== "sí" && r !== "si" && r !== "no");
  alert("Gracias por responder");
}

// =============== D) for ===============

// 10) Tabla de precios
function ex10() {
  const precio = Number(prompt("Precio unitario (€):"));
  for (let i = 1; i <= 10; i++) console.log(`${i} uds → ${(i * precio).toFixed(2)} €`);
  alert("Consulta la consola");
}

// 11) Contador de pasos
function ex11() {
  const objetivo = Number(prompt("Objetivo de pasos:"));
  for (let i = 1000; i <= objetivo; i += 1000) console.log(i);
  alert("Consulta la consola");
}

// 12) Media de notas
function ex12() {
  const notas = [5, 7, 8, 4, 10];
  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  console.log(`Media: ${media.toFixed(2)}`);
  alert("Consulta la consola");
}

// =============== E) break / continue ===============

// 13) Primera oferta
function ex13() {
  const precios = [12, 25, 40, 18, 9, 30];
  for (const p of precios) {
    if (p <= 15) return alert(`Primera oferta: ${p} €`);
  }
  alert("No hay ofertas menores de 15 €");
}

// 14) Mensajes vacíos
function ex14() {
  for (let i = 1; i <= 5; i++) {
    const msg = prompt(`Mensaje ${i}:`);
    if (!msg) continue;
    console.log(msg);
  }
  alert("Consulta la consola");
}

// =============== F) Arrays ===============

// 15) Lista de compras
function ex15() {
  const compras = ["leche", "pan", "huevos", "arroz", "manzanas"];
  compras.forEach(c => console.log(c));
  alert("Consulta la consola");
}

// 16) Precios totales
function ex16() {
  const precios = [10, 20, 15, 30, 25];
  const total = precios.reduce((a, b) => a + b, 0);
  console.log(`Total: ${total}`);
  alert("Consulta la consola");
}

// 17) Buscar producto
function ex17() {
  const productos = ["pan", "leche", "huevos", "arroz", "manzanas"];
  const n = (prompt("Producto a buscar:") || "").toLowerCase();
  alert(productos.map(p => p.toLowerCase()).includes(n) ? "Encontrado" : "No está en la lista");
}

// 18) Stock bajo
function ex18() {
  const stock = [12, 3, 7, 0, 9, 5];
  stock.forEach(s => { if (s < 5) console.log(`Stock bajo: ${s}`); });
  alert("Consulta la consola");
}

// 19) Lista de tareas
function ex19() {
  const tareas = [];
  while (true) {
    const t = prompt("Añade tarea (fin para salir):");
    if (!t || t.toLowerCase() === "fin") break;
    tareas.push(t);
  }
  console.log("Tareas:", tareas);
  alert("Consulta la consola");
}

// 20) Aprobados y suspensos
function ex20() {
  const notas = [3, 7, 9, 4, 5, 10, 6];
  const aprob = notas.filter(n => n >= 5).length;
  const susp = notas.length - aprob;
  console.log(`Aprobados: ${aprob}, Suspensos: ${susp}`);
  alert("Consulta la consola");
}
