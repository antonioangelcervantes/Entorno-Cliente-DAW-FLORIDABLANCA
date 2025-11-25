// EJERCICIO 1 - Panel de participación en clase
// Usa este archivo para completar la lógica del ejercicio.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)

// 1. Crea la clase Alumno con los métodos que consideres oportunos

// 2. Crea un array "alumnos" con varios objetos Alumno.
//    Los nombres deberían coincidir con las opciones del <select>

// 3. Captura los elementos del DOM que vas a usar

// 4. Crea una función "calcularTotalParticipaciones()"

// 5. Crea una función "pintarTabla()" que:
//    - vacíe el contenido actual del tbody
//    - recorra el array alumnos
//    - cree una fila <tr> por cada alumno
//      (Opcional) puedes añadir clases CSS distintas para los primeros
//      del ranking y para los que tienen 0 participaciones.

// 7. Crea una función "actualizarResumen()" para actualizar el contenido

// 8. Crea una función "actualizarMensajeInfo(texto)" que actualice el mensaje

// 9. Crea una función "buscarAlumnoPorNombre(nombre)" que:
//    - recorra el array de alumnos
//    - compare el nombre de cada alumno con el parámetro recibido
//    - devuelva el objeto alumno si lo encuentra, o null si no lo encuentra

// 10. Crea una función "manejarParticipacion(cantidad)" que:
//     - obtenga el nombre seleccionado del select
//     - busque el alumno correspondiente usando buscarAlumnoPorNombre()
//     - si existe, sume/reste participaciones según la cantidad
//     - actualice la tabla y el resumen
//     - muestre un mensaje informativo

// 11. Añade el evento click de btnPresente que llame a manejarParticipacion(1)

// 12. Añade el evento click de btnAusente que llame a manejarParticipacion(-1)

// 13. Añade un evento "keydown" al documento para los atajos de teclado.
//     Ejemplo de funcionamiento (puedes seguir este esquema):
//     - tecla "1": sumar participación al primer alumno del array
//     - tecla "2": sumar participación al segundo alumno
//     - tecla "3": sumar participación al tercero

// 14. Por último, llama a las funciones necesarias al inicio del script:
//     - pintarTabla()
//     - actualizarResumen()

// ¡IMPORTANTE! Revisa el archivo panel.html para ver los IDs y clases y no modifiques el HTML.
// ¡IMPORTANTE! Revisa el archivo panel.css para ver las clases CSS disponibles y no modifiques el CSS.
