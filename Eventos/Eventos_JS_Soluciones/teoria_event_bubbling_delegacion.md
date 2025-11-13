# Teoría: Event Bubbling y Delegación de Eventos

## Event Bubbling (Burbujeo de Eventos)

### ¿Qué es el Event Bubbling?

El **event bubbling** es el mecanismo por el cual un evento se propaga desde el elemento objetivo hacia arriba en la jerarquía del DOM hasta llegar al elemento raíz.

```
Jerarquía DOM en nuestro ejemplo:
document
  └── html
      └── body
          └── ul#lista
              └── li (elemento clickeado)
```

### Flujo del Event Bubbling

1. **Fase de captura** (capture phase): El evento viaja desde `document` hacia el elemento objetivo
2. **Fase objetivo** (target phase): El evento llega al elemento clickeado
3. **Fase de burbujeo** (bubbling phase): El evento viaja de vuelta hacia arriba

```javascript
// En nuestro código:
lista.addEventListener("click", function (event) {
  // Este listener se ejecuta durante la fase de burbujeo
  // cuando el evento llega desde el <li> hasta el <ul>
});
```

### Ejemplo visual del burbujeo:

```
Click en <li> →
  1. Evento se dispara en <li>
  2. Burbujea hacia <ul> ← Aquí nuestro listener lo captura
  3. Continúa hacia <body>
  4. Continúa hacia <html>
  5. Llega a document
```

## Event.target vs Event.currentTarget

### `event.target`

- **Es el elemento que realmente fue clickeado**
- No cambia durante el burbujeo
- En nuestro caso: siempre será el `<li>` específico

### `event.currentTarget`

- **Es el elemento que tiene el event listener**
- En nuestro caso: siempre será el `<ul>`

```javascript
lista.addEventListener("click", function (event) {
  console.log("target:", event.target.tagName); // "LI"
  console.log("currentTarget:", event.currentTarget.tagName); // "UL"

  if (event.target.tagName === "LI") {
    // Verificamos que el click fue específicamente en un LI
    alert("Elemento: " + event.target.textContent);
  }
});
```

## Delegación vs Event Listeners Directos

### Enfoque Directo (SIN delegación)

```javascript
// ❌ Problemático para elementos dinámicos
function addDirectListeners() {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.addEventListener("click", function () {
      alert("Elemento: " + this.textContent);
    });
  });
}

// Problemas:
// 1. Solo funciona con elementos existentes
// 2. Elementos añadidos después NO tendrán el listener
// 3. Más uso de memoria (un listener por elemento)
// 4. Hay que volver a ejecutar esta función cada vez que se añadan elementos
```

### Enfoque con Delegación (nuestro código)

```javascript
// ✅ Solución elegante
lista.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Elemento: " + event.target.textContent);
  }
});

// Ventajas:
// 1. Un solo listener en el contenedor padre
// 2. Funciona automáticamente con elementos futuros
// 3. Menos uso de memoria
// 4. Mantenimiento más sencillo
```

## Comparación Práctica

### Escenario: Añadir 1000 elementos

**Sin delegación:**

```javascript
// 1000 event listeners individuales
for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Elemento ${i}`;
  li.addEventListener("click", handleClick); // 1000 listeners
  lista.appendChild(li);
}
```

**Con delegación:**

```javascript
// 1 solo event listener
lista.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    handleClick(event);
  }
});

// Añadir 1000 elementos SIN listeners adicionales
for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Elemento ${i}`;
  lista.appendChild(li); // Sin listener individual
}
```

## Detención del Burbujeo

Puedes detener la propagación si es necesario:

```javascript
lista.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Elemento: " + event.target.textContent);
    event.stopPropagation(); // Detiene el burbujeo aquí
  }
});
```

## Métodos para controlar la propagación

### `event.stopPropagation()`

- Detiene la propagación del evento hacia arriba en la jerarquía DOM
- El evento no llegará a elementos padres

### `event.preventDefault()`

- Previene la acción por defecto del elemento
- Por ejemplo, evita que un enlace navegue o que un formulario se envíe

### `event.stopImmediatePropagation()`

- Detiene la propagación Y evita que otros listeners del mismo elemento se ejecuten

## Casos de Uso Ideales para Delegación

1. **Listas dinámicas** (como nuestro ejemplo)
2. **Tablas con muchas filas**
3. **Menús generados dinámicamente**
4. **Galerías de imágenes**
5. **Cualquier contenedor con elementos que se añaden/quitan**

## Ejemplo Completo: Lista con Diferentes Acciones

```javascript
// Delegación para manejar múltiples tipos de elementos
lista.addEventListener("click", function (event) {
  const target = event.target;

  if (target.tagName === "LI") {
    console.log("Click en item:", target.textContent);
  } else if (target.classList.contains("delete-btn")) {
    target.parentElement.remove();
  } else if (target.classList.contains("edit-btn")) {
    const newText = prompt("Nuevo texto:");
    if (newText) target.previousSibling.textContent = newText;
  }
});
```

## Ventajas de la Delegación de Eventos

1. **Eficiencia de memoria**: Menos listeners en el DOM
2. **Elementos dinámicos**: Funciona automáticamente con contenido nuevo
3. **Mantenimiento**: Un solo lugar para manejar la lógica
4. **Performance**: Mejor rendimiento en listas grandes
5. **Flexibilidad**: Fácil añadir nuevos tipos de elementos

## Cuándo NO usar Delegación

1. **Eventos que no burbujean**: `focus`, `blur`, `load`, `unload`
2. **Lógica muy específica**: Cuando cada elemento necesita comportamiento único
3. **Performance crítica**: En casos muy específicos donde el overhead de verificar `target` sea significativo

## Conclusión

La delegación de eventos es una técnica fundamental que hace que las aplicaciones web sean más eficientes y mantenibles. Aprovecha el mecanismo natural de event bubbling del DOM para crear código más limpio y eficiente.
