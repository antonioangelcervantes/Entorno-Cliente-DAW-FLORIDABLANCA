// SOLUCIÓN COMPLETA

const tareaInput = document.getElementById('tareaInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');
const limpiarBtn = document.getElementById('limpiarBtn');

function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON. parse(tareasGuardadas) : [];
}

function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function mostrarTareas() {
    listaTareas.innerHTML = '';
    const tareas = cargarTareas();
    
    tareas.forEach((tarea, indice) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarea}</span>
            <button class="delete-btn" onclick="eliminarTarea(${indice})">Eliminar</button>
        `;
        listaTareas.appendChild(li);
    });
}

function agregarTarea() {
    const nuevaTarea = tareaInput.value.trim();
    
    if (nuevaTarea === '') {
        alert('Por favor, escribe una tarea');
        return;
    }
    
    const tareas = cargarTareas();
    tareas.push(nuevaTarea);
    guardarTareas(tareas);
    mostrarTareas();
    tareaInput.value = '';
}

function eliminarTarea(indice) {
    const tareas = cargarTareas();
    tareas.splice(indice, 1);
    guardarTareas(tareas);
    mostrarTareas();
}

function limpiarTodo() {
    if (confirm('¿Seguro que quieres eliminar todas las tareas?')) {
        localStorage.removeItem('tareas');
        mostrarTareas();
    }
}

agregarBtn.addEventListener('click', agregarTarea);
tareaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarTarea();
});
limpiarBtn.addEventListener('click', limpiarTodo);

mostrarTareas();