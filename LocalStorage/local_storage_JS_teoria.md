# LocalStorage en JavaScript — Teoría técnica y ejemplos

---

## 1. ¿Qué es LocalStorage? (visión técnica)

`localStorage` es una **API Web** que permite almacenar pares **clave–valor** en el navegador de forma **persistente**.

Desde el punto de vista técnico, esta API está disponible a través del **objeto global window**, que representa la ventana del navegador.

Esto significa que:

- `localStorage` es una propiedad de `window`.
- Puede accederse tanto como `localStorage` como `window.localStorage`.
- Ambas formas son **exactamente equivalentes**.

Ejemplo:

```js
console.log(localStorage === window.localStorage);
```

**Resultado en consola:**

```
true
```

En la práctica, cuando escribimos `localStorage` sin `window`, el navegador está accediendo implícitamente a `window.localStorage`.

Características técnicas importantes:

- Los datos se almacenan **por dominio**. (`https://www.ejemplo.com` tiene su **propio espacio de almacenamiento**.)

- La información persiste aunque se cierre el navegador.

- Capacidad aproximada: **5 MB por dominio**.

- El acceso es **síncrono**.



```js
console.log(window.localStorage);
```



```
```

---

## 2. ¿Qué tipo de datos puede guardar?

⚠️ Punto clave:

> **LocalStorage solo guarda strings (texto)**.

Esto significa:

| Tipo original | ¿Se puede guardar directamente? |
| ------------- | ------------------------------- |
| string        | ✅ Sí                            |
| number        | ❌ No                            |
| array         | ❌ No                            |
| object        | ❌ No                            |

Todos los datos **no string** deben convertirse antes.

---

## 3. Guardar datos: `setItem()`

### Sintaxis general

```js
localStorage.setItem(clave, valor);
```

- `clave` → string
  - Es el **identificador único** del dato dentro de `localStorage`.
  - Funciona de forma similar al **nombre de una variable**, pero en el almacenamiento del navegador.
  - Dos valores **no pueden compartir la misma clave**: si se usa una clave existente, el valor anterior se **sobrescribe**.
  - Siempre debe ser un texto (aunque represente otra cosa).

  Ejemplo:
  ```js
  localStorage.setItem("usuario", "Antonio");
  localStorage.setItem("usuario", "María");
  ```

  En este caso, el valor final asociado a la clave `usuario` será:
  ```
  María
  ```

- `valor` → string
  - Es la **información que se quiere almacenar** asociada a la clave.
  - Siempre se guarda como **texto**, incluso cuando representa arrays u objetos.
  - Si el dato original no es un string, debe convertirse antes (normalmente con `JSON.stringify`).

  Ejemplo con string:
  ```js
  localStorage.setItem("tema", "LocalStorage");
  ```

  Ejemplo con array convertido a texto:
  ```js
  const tareas = ["Comprar pan", "Estudiar JS"];
  localStorage.setItem("tareas", JSON.stringify(tareas));
  ```

📌 **Idea clave**: `localStorage` funciona como una tabla de dos columnas: **clave → valor**. La clave sirve para localizar el dato, y el valor es la información almacenada.

---

### 3.1 Guardar un string simple

```js
localStorage.setItem("usuario", "Antonio");
```

**Comprobación en consola:**

```js
console.log(localStorage.getItem("usuario"));
```

**Resultado:**

```
Antonio
```

**En el navegador (Application → Local Storage):**

| Key     | Value   |
| ------- | ------- |
| usuario | Antonio |

---

## 4. Guardar arrays y objetos: `JSON.stringify()`

Como `localStorage` no admite arrays u objetos, se utiliza JSON.

### 4.1 Guardar un array

```js
const tareas = ["Comprar pan", "Estudiar JS"];

localStorage.setItem("tareas", JSON.stringify(tareas));
```

**Qué se guarda realmente:**

```js
console.log(localStorage.getItem("tareas"));
```

**Resultado:**

```
["Comprar pan","Estudiar JS"]
```

📌 Aunque parece un array, **es un string**.

---

### 4.2 Guardar un objeto

```js
const usuario = {
  nombre: "Antonio",
  rol: "profesor"
};

localStorage.setItem("usuario", JSON.stringify(usuario));
```

**Resultado en localStorage:**

```
{"nombre":"Antonio","rol":"profesor"}
```

---

## 5. Leer datos: `getItem()`

### 5.1 Leer un string

```js
const nombre = localStorage.getItem("usuario");
console.log(nombre);
```

**Resultado:**

```
Antonio
```

Si la clave no existe:

```js
console.log(localStorage.getItem("noExiste"));
```

**Resultado:**

```
null
```

---

### 5.2 Leer un array u objeto: `JSON.parse()`

```js
const tareas = JSON.parse(localStorage.getItem("tareas"));
console.log(tareas);
```

**Resultado en consola:**

```
["Comprar pan", "Estudiar JS"]
```

📌 Ahora **sí** es un array real y puede usar `forEach`, `filter`, etc.

---

### 5.3 Valor por defecto (caso profesional)

```js
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
```

Si no existe nada guardado:

```js
console.log(tareas);
```

**Resultado:**

```
[]
```

Este patrón es **imprescindible en aplicaciones reales**.

---

## 6. Borrar datos

### 6.1 Borrar una clave concreta

```js
localStorage.removeItem("tareas");
```

**Resultado en localStorage:**

- La clave desaparece.

---

### 6.2 Borrar todo

```js
localStorage.clear();
```

⚠️ Elimina **todas** las claves del dominio.

---

## 7. Flujo de trabajo típico (estado + LocalStorage)

En una aplicación JavaScript moderna:

1. Se ejecuta el código de inicialización cuando el navegador carga el archivo JavaScript (lectura de `localStorage` y creación del estado inicial).
   
   
2. Se guardan en una variable de estado.
   
   En JavaScript, el **estado** suele representarse mediante una o varias variables (arrays u objetos) que contienen los datos con los que trabaja la aplicación.
   
   En este proyecto, el estado es el array `tareas`:
   ```js
   let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
   ```
   
   📌 A partir de este momento, **la aplicación trabaja siempre con esta variable**, no directamente con `localStorage`.

3. El usuario interactúa con la aplicación (eventos).
   
   El usuario no modifica los datos directamente, sino que lo hace a través de **eventos** (por ejemplo, un `click` en un botón).
   
   Ejemplo:
   ```js
   boton.addEventListener("click", agregarTarea);
   ```
   
   📌 Los eventos son el **disparador** que inicia los cambios en la aplicación.

4. Se modifica el estado.
   
   Cuando ocurre un evento, el código **actualiza el estado** (el array u objeto que contiene los datos).
   
   Ejemplo:
   ```js
   tareas = [...tareas, texto];
   ```
   
   📌 Nunca se modifica directamente la interfaz en este paso, solo los datos.

5. Se guarda el estado actualizado.
   
   Tras modificar el estado, es necesario **persistir los cambios** para que no se pierdan al recargar la página.
   
   Ejemplo:
   ```js
   guardarTareas();
   ```
   
   📌 Este paso sincroniza el estado de JavaScript con `localStorage`.

6. Se vuelve a pintar la interfaz.
   
   Finalmente, la aplicación utiliza el estado actualizado para **reconstruir la interfaz**.
   
   Ejemplo:
   ```js
   mostrarTareas();
   ```
   
   📌 No se actualiza solo una parte: se vuelve a pintar toda la vista a partir del estado.

**Ejemplo conceptual:**

```js
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
```

---

## 8. Idea clave para entender aplicaciones modernas

> **LocalStorage guarda datos, no interfaz.**

Nunca se guarda HTML, botones ni estilos.

Solo se guardan **datos**, y JavaScript decide cómo mostrarlos.

---

## 9. Inspeccionar LocalStorage en el navegador

Ruta:

1. Botón derecho → Inspeccionar
2. Pestaña **Application**
3. Sección **Local Storage**

Aquí se puede ver en tiempo real:

- qué claves existen
- qué valores tienen
- cómo cambian al ejecutar el código

---

## 10. Errores comunes (muy importantes)

Este apartado recoge errores **muy habituales** cuando se empieza a trabajar con `localStorage`, el DOM y el estado de una aplicación. Identificarlos a tiempo evita muchos fallos difíciles de detectar.

---

### ❌ Confundir `textContent` con `value`

```js
input.textContent; // INCORRECTO
```

- `textContent` se usa en elementos que **tienen contenido interno** (`p`, `li`, `div`).
- Un `<input>` **no tiene contenido interno**, tiene un **valor**.

✔ Correcto:

```js
input.value;
```

📌 Este error provoca que siempre se obtenga una cadena vacía, aunque el usuario haya escrito texto.

---

### ❌ Parsear mal el valor de `localStorage`

```js
JSON.parse(localStorage.getItem("tareas") || []); // ERROR
```

- `localStorage.getItem()` devuelve **string o null**.
- `JSON.parse()` **solo acepta strings**.

✔ Correcto:

```js
JSON.parse(localStorage.getItem("tareas")) || [];
```

📌 Primero se parsea, luego se aplica el valor por defecto.

---

### ❌ Trabajar directamente con `localStorage` en lugar del estado

```js
localStorage.setItem("tareas", "..."); // mala práctica repetida
```

- `localStorage` **no debe usarse como estado principal**.
- El estado debe vivir en una variable (`tareas`).

✔ Flujo correcto:

```js
// modificar estado
tareas = [...tareas, texto];

// persistir
guardarTareas();
```

📌 `localStorage` es persistencia, no lógica de aplicación.

---

### ❌ Olvidar repintar la interfaz tras cambiar el estado

```js
tareas.push(texto);
// falta mostrarTareas();
```

- El estado cambia, pero la interfaz **no se actualiza**.

✔ Correcto:

```js
tareas = [...tareas, texto];
mostrarTareas();
```

📌 El DOM no se actualiza solo: hay que indicarlo explícitamente.

---

### ❌ Acceder al DOM antes de que exista

```js
document.getElementById("listaTareas"); // null
```

Esto ocurre cuando:
- el script se carga antes que el HTML
- no se usa `DOMContentLoaded`

✔ Soluciones:
- colocar el `<script>` al final del `body`
- o usar `DOMContentLoaded`

---

### ❌ Parsear valores no válidos desde `localStorage`

```js
JSON.parse(localStorage.getItem("tareas"));
```

Este código puede provocar errores si:
- La clave no existe y `getItem` devuelve `null`.
- El valor almacenado no es un JSON válido.

En esos casos, `JSON.parse(null)` devuelve `null`, y cualquier operación posterior sobre el resultado puede fallar.

✔ Patrón seguro recomendado:

```js
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
```

📌 Este patrón garantiza que la aplicación siempre trabaje con un array válido, incluso cuando no hay datos guardados.

---

## 11. Relación de este enfoque con React (muy importante)

Este apartado es clave para entender **por qué estamos trabajando así** y no de otra manera.

Aunque aquí se utiliza **JavaScript puro**, el modelo mental que se está aplicando es **exactamente el mismo** que usan frameworks modernos como **React**.

---

### 11.1 El concepto de estado

En esta práctica, el estado de la aplicación es la variable `tareas`:

```js
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
```

- El **estado** representa los datos actuales de la aplicación.
- No es la interfaz, es la **fuente de la verdad**.
- Toda la aplicación gira alrededor de este estado.

En React, esta idea se mantiene, pero el estado se gestiona con `useState`:

```js
const [tareas, setTareas] = useState([]);
```

📌 **Idea clave**: si entiendes qué es el estado aquí, entenderás el estado en React.

---

### 11.2 No se modifica la interfaz directamente

En este proyecto **no se añaden elementos al HTML “a mano” cuando ocurre un evento**.

Primero:
1. Se modifica el estado.
2. Después se vuelve a pintar la interfaz a partir de ese estado.

Ejemplo en JavaScript:

```js
tareas = [...tareas, texto];
mostrarTareas();
```

En React:

```js
setTareas([...tareas, texto]);
```

📌 En React no se llama explícitamente a una función de pintado: el framework se encarga de hacerlo automáticamente.

---

### 11.3 Inmutabilidad y uso del spread operator

El uso del operador spread:

```js
tareas = [...tareas, texto];
```

no es casual.

- Se crea un **nuevo array**.
- No se modifica el array original.

En React, esta forma de trabajar es **obligatoria**, ya que el framework necesita detectar cambios de referencia para actualizar la interfaz.

📌 **Regla mental compartida**: no modificar el estado directamente.

---

### 11.4 Eventos como desencadenantes de cambios

En JavaScript puro:

```js
boton.addEventListener("click", agregarTarea);
```

En React:

```jsx
<button onClick={agregarTarea}>Añadir</button>
```

- Los eventos son el punto de entrada de la interacción del usuario.
- Los eventos **no cambian la interfaz directamente**, cambian el estado.

---

### 11.5 Renderizado basado en estado

En este proyecto, el renderizado se hace manualmente:

```js
const mostrarTareas = () => {
  // recorrer estado y pintar
};
```

En React, el renderizado se expresa de forma declarativa:

```jsx
{tareas.map(tarea => (
  <li key={tarea}>{tarea}</li>
))}
```

📌 **Idea clave**: la interfaz es una representación del estado en cada momento.

---

### 11.6 Por qué este ejercicio es importante

Este ejercicio no es solo sobre `localStorage`.

Sirve para:
- Entender el concepto de estado.
- Separar datos, lógica y vista.
- Aprender a pensar en flujo de datos.
- Prepararse mentalmente para React y otros frameworks.

👉 Si este enfoque se entiende bien, el salto a React es **mucho más natural**.

---

### ❌ Parsear antes de comprobar

```js
JSON.parse(localStorage.getItem("tareas") || []); // ERROR
```

✔ Correcto:

```js
JSON.parse(localStorage.getItem("tareas")) || [];
```

---

## 11. Ejercicios propuestos

1. Guarda un string en LocalStorage y muéstralo por consola.
2. Guarda un array y recupéralo tras recargar la página.
3. Añade un elemento al array y vuelve a guardarlo.
4. Borra una clave concreta y comprueba el resultado en Application.

---

📌 **Objetivo**: entender el flujo, no memorizar funciones.

