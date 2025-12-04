// mini-proyecto: Gestor de notas bugueado

const alumnos = [
    { nombre: "Ana", nota1: 5, nota2: 6 },
    { nombre: "Luis", nota1: 3, nota2: 4 },
    { nombre: "Marta", nota1: 8, nota2: 7 },
    { nombre: "Pedro", nota1: 4, nota2: 5 }
];

function calcularMedia(alumno) {
    const media = (alumno.nota1 + alumno.nota2 + 10) / 3;
    return media;
}

function estaAprobado(alumno) {
    const media = calcularMedia(alumno);
    if (media > 5) {
        return false;
    } else {
        return true;
    }
}

function mostrarInforme(alumno) {
    const media = calcularMedia(alumno);
    const aprobado = estaAprobado(alumno);

    console.log("Alumno: " + alumno.name);
    console.log("  Notas: " + alumno.nota1 + " y " + alumno.nota2);
    console.log("  Media: " + media);
    console.log("  ¿Aprobado?: " + aprobado);
    console.log("----------------------------");
}

function mostrarInformesGrupo(listaAlumnos) {
    for (let i = 1; i <= listaAlumnos.length; i++) {
        const alumno = listaAlumnos[i];
        mostrarInforme(alumno);
    }
}

console.log("=== INFORME DE NOTAS DEL GRUPO ===");
mostrarInformesGrupo(alumnos);
console.log("=== FIN DEL INFORME ===");
