// Bloque C: confirm
function ej_1C1() {
  const seguir = confirm("¿Quieres continuar?");
  alert(seguir ? "Has elegido continuar." : "Has elegido cancelar.");
}

function ej_2C2() {
  const ok = confirm("¿Deseas borrar datos?");
  alert(ok ? "Borrado" : "Cancelado");
}

function ej_3C3() {
  const entrar = confirm("¿Entrar?");
  const recordar = confirm("¿Recordar sesión?");
  alert("Entrar: " + entrar + "\nRecordar: " + recordar);
}