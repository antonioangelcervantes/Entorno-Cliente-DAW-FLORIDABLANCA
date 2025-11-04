// Clases JS – Versión Alumno (Simplificada)
// Reglas: usa let/const, funciones tradicionales (no arrow), sin while(true).
// Rellena los // TODO. Revisa la consola del navegador si algo no funciona.

function texto(el, msg) { el.textContent = String(msg); }
function limpiar(el) { el.textContent = ""; }

/* =========================
   E1) Contador básico
   ========================= */
// TODO: Crea una clase Contador con:
// - Propiedad: valor
// - Métodos: inc(), dec(), reset()
class Contador {
  constructor(valorInicial) {
    // TODO: guardar el valor inicial como número en this.valor
    this.valor = Number(valorInicial) || 0; // pista
  }
  inc() {
    // TODO: sumar 1 a this.valor
    this.valor = this.valor + 1;
  }
  dec() {
    // TODO: restar 1 a this.valor
    this.valor = this.valor - 1;
  }
  reset() {
    // TODO: poner el valor a 0
    this.valor = 0;
  }
}

let e1 = null;
function e1Render() {
  const out = document.getElementById("e1-out");
  texto(out, "Valor: " + (e1 ? e1.valor : "(sin contador)"));
}
document.getElementById("e1-crear").addEventListener("click", function(){
  const v = document.getElementById("e1-valor").value;
  e1 = new Contador(v);
  e1Render();
});
document.getElementById("e1-inc").addEventListener("click", function(){
  if (!e1) return;
  e1.inc();
  e1Render();
});
document.getElementById("e1-dec").addEventListener("click", function(){
  if (!e1) return;
  e1.dec();
  e1Render();
});
document.getElementById("e1-reset").addEventListener("click", function(){
  if (!e1) return;
  e1.reset();
  e1Render();
});
e1Render();

/* =========================
   E2) Producto con IVA (21%)
   ========================= */
// TODO: Crea una clase Producto con:
// - Propiedades: nombre, precioBase
// - Método: precioConIVA() -> devuelve precio final con 21%
class Producto {
  constructor(nombre, precioBase) {
    // TODO: guardar nombre (string) y precioBase (número)
    this.nombre = String(nombre || "");
    this.precioBase = Number(precioBase) || 0;
  }
  precioConIVA() {
    // TODO: calcular precioBase * 1.21 y devolver con 2 decimales
    const total = this.precioBase * 1.21;
    return Number(total.toFixed(2));
  }
}

document.getElementById("e2-calcular").addEventListener("click", function(){
  const nom = document.getElementById("e2-nombre").value;
  const pb = document.getElementById("e2-precio").value;
  const p = new Producto(nom, pb);
  const out = document.getElementById("e2-out");
  texto(out, p.nombre + " → " + p.precioConIVA() + " €");
});
document.getElementById("e2-limpiar").addEventListener("click", function(){
  document.getElementById("e2-nombre").value = "Teclado";
  document.getElementById("e2-precio").value = 20;
  limpiar(document.getElementById("e2-out"));
});

/* =========================
   E3) Alumno con dos notas
   ========================= */
// TODO: Crea una clase Alumno con:
// - Propiedades: nombre, nota1, nota2
// - Método: media() -> (nota1 + nota2) / 2 (si no hay notas válidas, devuelve 0)
class Alumno {
  constructor(nombre, n1, n2) {
    this.nombre = String(nombre || "");
    this.nota1 = Number(n1);
    this.nota2 = Number(n2);
  }
  media() {
    // TODO: devuelve la media (0–10). Usa isNaN para evitar NaN.
    if (isNaN(this.nota1) || isNaN(this.nota2)) return 0;
    const m = (this.nota1 + this.nota2) / 2;
    return Number(m.toFixed(2));
  }
}

document.getElementById("e3-calcular").addEventListener("click", function(){
  const nom = document.getElementById("e3-nombre").value;
  const n1 = document.getElementById("e3-n1").value;
  const n2 = document.getElementById("e3-n2").value;
  const a = new Alumno(nom, n1, n2);
  const out = document.getElementById("e3-out");
  const m = a.media();
  texto(out, "Media de " + a.nombre + ": " + m + (m >= 5 ? " (aprobado)" : " (suspenso)"));
});
document.getElementById("e3-reset").addEventListener("click", function(){
  document.getElementById("e3-nombre").value = "Ana";
  document.getElementById("e3-n1").value = 7;
  document.getElementById("e3-n2").value = 8;
  limpiar(document.getElementById("e3-out"));
});

/* =========================
   E4) Termómetro: C ↔ F
   ========================= */
// TODO: Crea una clase Termometro con:
// - Propiedad: valor (número)
// - Métodos: aFahrenheit() y aCelsius()
//   • aFahrenheit: C a F -> F = C * 9/5 + 32
//   • aCelsius: F a C -> C = (F - 32) * 5/9
class Termometro {
  constructor(valor) {
    this.valor = Number(valor) || 0;
  }
  aFahrenheit() {
    const f = this.valor * 9/5 + 32;
    return Number(f.toFixed(1));
  }
  aCelsius() {
    const c = (this.valor - 32) * 5/9;
    return Number(c.toFixed(1));
  }
}

document.getElementById("e4-aF").addEventListener("click", function(){
  const v = document.getElementById("e4-valor").value;
  const t = new Termometro(v);
  texto(document.getElementById("e4-out"), t.aFahrenheit() + " °F");
});
document.getElementById("e4-aC").addEventListener("click", function(){
  const v = document.getElementById("e4-valor").value;
  const t = new Termometro(v);
  texto(document.getElementById("e4-out"), t.aCelsius() + " °C");
});
document.getElementById("e4-limpiar").addEventListener("click", function(){
  document.getElementById("e4-valor").value = 0;
  limpiar(document.getElementById("e4-out"));
});
