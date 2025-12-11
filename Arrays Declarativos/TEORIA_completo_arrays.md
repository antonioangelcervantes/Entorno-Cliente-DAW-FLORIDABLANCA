# FUNCIONES FLECHA + MÉTODOS DECLARATIVOS DE ARRAYS

---

# 1. FUNCIONES FLECHA (ARROW FUNCTIONS)

Las funciones flecha (`=>`) son una forma más corta y moderna de escribir funciones. Se usan constantemente en los métodos declarativos.

## ¿Qué es una función flecha?

Equivale exactamente a una función clásica, solo cambia la sintaxis.

### ▶️ Función clásica:

```js
function sumar(a, b) {
    return a + b;
}
```

### ▶️ Función flecha:

```js
const sumar = (a, b) => {
    return a + b;
};
```

---

##  Reglas importantes

### 1.  Un parámetro → paréntesis opcionales

```js
n => n * 2
```

### 2.  Más de un parámetro → paréntesis obligatorios

```js
(a, b) => a + b
```

### 3.  Una sola línea → no hace falta `return` ni llaves

```js
n => n * 2
```

### 4. Si usas llaves `{}` → necesitas `return`

```js
n => {
    return n * 2;
}
```

---

## ¿Por qué se usan en métodos declarativos?

Porque métodos como `map`, `filter`, `reduce` y otros necesitan recibir una función que explique qué hacer con cada elemento.

Ejemplo clásico vs moderno:

```js
edades.filter(function(edad) {
    return edad >= 18;
});
```

```js
edades.filter(edad => edad >= 18);
```

---

# 2. MÉTODOS DECLARATIVOS DE ARRAYS

Los métodos declarativos no modifican el array original y permiten expresar qué queremos obtener sin explicar paso a paso cómo hacerlo.

Todos los ejemplos usan funciones flecha.

---

# 🔹 forEach() – recorrer un array en profundidad

El método `forEach()` sirve para recorrer un array elemento por elemento y ejecutar una función por cada uno.

## ¿Qué devuelve?

Siempre devuelve **undefined**, porque su objetivo no es crear un nuevo array, sino realizar acciones.

## ¿Cuándo se usa?

-  Cuando quieres hacer algo con cada elemento.
-  Cuando no necesitas un array nuevo.
-  Cuando quieres explicar visualmente qué está pasando.

## Funcionamiento paso a paso

El callback recibe tres parámetros:

1. elemento
2. índice
3. arrayOriginal (opcional)

```js
const numeros = [10, 20, 30];

numeros.forEach((elemento, indice, array) => {
    console.log(`Valor: ${elemento}, Índice: ${indice}, Array completo: ${array}`);
});
```

---

# 🔹 some() – comprobar si al menos un elemento cumple la condición

Este método revisa el array y devuelve `true` si alguno de los elementos cumple la condición. Si ninguno la cumple, devuelve `false`.

## 📌 Métodos útiles para cadenas

- ✔️ `includes("texto")` → comprueba si una cadena contiene un texto.
- ✔️ `startsWith("texto")` → comprueba si una cadena empieza por ese texto.
- ✔️ `endsWith("texto")` → comprueba si una cadena termina por ese texto.
- ✔️ `toLowerCase()` → convierte el texto a minúsculas.

Ejemplo de uso combinado:

```js
nombre.toLowerCase().startsWith("a")
```

---

# 🔹 every() – comprobar si todos cumplen la condición

Devuelve `true` solo si **todos** los elementos cumplen la condición.

```js
const edades = [18, 21, 35];
edades.every(e => e >= 18);
```

---

# 🔹 filter() – devolver solo los que cumplen la condición

Crea un nuevo array que contiene únicamente los elementos que cumplen la condición indicada.

```js
const edades = [12, 17, 20, 25];
const mayores = edades.filter(edad => edad >= 18);
```

---

# 🔹 find() – devuelve el primer elemento que cumple la condición

A diferencia de `filter()`, este método devuelve solo un elemento.

## ¿Qué devuelve?

- El primer elemento que cumple.
- `undefined` si ninguno cumple.

```js
const nombres = ["Ana", "Luis", "Carlos", "Laura"];
const encontrado = nombres.find(nombre => nombre.startsWith("L"));
```

---

# 🔹 findIndex() – índice del primer elemento que cumple

Devuelve el índice del primer elemento que cumpla la condición. Si no encuentra ninguno, devuelve `-1`.

```js
const notas = [4, 5, 8, 3];
const indiceSuspenso = notas.findIndex(nota => nota < 5);
```

---

# 🔹 reduce() – transformar el array en un único valor

El método `reduce()` toma un array completo y lo convierte en **un único resultado**: una suma, un promedio, un objeto, un texto, etc.

Para que sea más claro, piensa en `reduce` como:

> "Recorre el array acumulando un resultado paso a paso".

## Ejemplo muy claro: sumar números

```js
const numeros = [5, 10, 15];

const total = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(total);
```

**¿Qué está pasando realmente?**

- Valor inicial del acumulador → **0**
- Primera vuelta: 0 + 5 = **5**
- Segunda vuelta: 5 + 10 = **15**
- Tercera vuelta: 15 + 15 = **30**

**Resultado final:**

```
30
```

## Ejemplo aún más visual (con logs dentro del reduce)

```js
const numeros = [5, 10, 15];

const total = numeros.reduce((acc, num) => {
    console.log("Acumulador:", acc, "Número actual:", num);
    return acc + num;
}, 0);
```

Salida en consola:

```
Acumulador: 0 Número actual: 5
Acumulador: 5 Número actual: 10
Acumulador: 15 Número actual: 15
```

## Ejemplo práctico: contar cuántos son mayores de 10

```js
const valores = [3, 12, 8, 20, 7];

const mayores = valores.reduce((acc, valor) => {
    if (valor > 10) acc++;
    return acc;
}, 0);

console.log(mayores);
```

**Resultado:**

```
2
```



# 🔹 Spread Operator (...) – explicación detallada

El operador **spread** (`...`) es una sintaxis de JavaScript que permite **sacar los elementos de un array y colocarlos individualmente en otro sitio**.

En otras palabras:

> `...array` significa: toma cada elemento del array y colócalo aquí uno a uno.

No "despliega" el array en un sentido visual; simplemente inserta sus elementos como si los hubieras escrito manualmente.

---

## ✔️ 1. ¿Qué es exactamente el Spread Operator?

Si tienes un array como:

```js
const numeros = [1, 2, 3];
```

Entonces escribir:

```js
[...numeros]
```

Significa:

> "Saca 1, 2 y 3 de dentro del array y colócalos aquí dentro, uno a uno".

No copia la referencia, sino **los valores**, creando un array completamente nuevo.

Ejemplo claro:

```js
const numeros = [1, 2, 3];
const copia = [...numeros];

console.log("Original:", numeros);
console.log("Copia:", copia);

copia.push(4);
console.log("Original después del cambio en la copia:", numeros);
console.log("Copia modificada:", copia);
```

Salida en consola:

```
Original: [1, 2, 3]
Copia: [1, 2, 3]
Original después del cambio en la copia: [1, 2, 3]
Copia modificada: [1, 2, 3, 4]
```

Esto demuestra que cada array ocupa un espacio distinto en memoria y que modificar uno **no afecta** al otro.

---

## ✔️ 2. ¿Cuándo se introdujo en JavaScript?

- En **ES2015 (ES6)** se introdujo para arrays.
- En **ES2018** se amplió a objetos.

Hoy es estándar en cualquier proyecto moderno de JavaScript.

---

## ✔️ 3. Usos principales del Spread Operator

### 🔸 3.1. Copiar un array (sin compartir referencia)

Antes se hacía así:

```js
const copia = original.slice();
```

Ahora simplemente:

```js
const copia = [...original];
```

Esto es importante porque el array original **no se modifica**.

#### ¿Por qué es tan importante que NO compartan referencia?

Cuando un array se copia sin spread, por ejemplo usando asignación directa:

```js
const original = [1, 2, 3];
const copia = original; // Copia por referencia
```

Ambas variables **apuntan al mismo array en memoria**. Por lo tanto:

```js
copia.push(4);
console.log(original); // También cambia a [1, 2, 3, 4]
```

Esto provoca errores muy habituales en clase y en proyectos reales:

- Cambias un array "sin querer" pensando que era una copia.
- Una función modifica datos externos que no debía tocar.
- En React, romperías la inmutabilidad del estado.

Con el spread operator, en cambio:

```js
const original = [1, 2, 3];
const copia = [...original];

copia.push(4);
console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]
```

Ahora cada variable apunta a un array distinto.

En resumen:

- Spread crea una **copia real** (nuevo espacio en memoria).
- Evita errores invisibles y difíciles de depurar.
- Es fundamental en código moderno donde no se deben mutar datos.

---

### 🔸 3.2. Unir arrays de manera clara

```js
const a = [1, 2];
const b = [3, 4];

const unidos = [...a, ...b];
console.log(unidos); // [1, 2, 3, 4]
```

Más legible que `concat()` y ampliamente usado hoy.

---

### 🔸 3.3. Insertar elementos antes o después

```js
const base = [10, 20, 30];
const extendido = [5, ...base, 40];
```

El spread coloca cada elemento de `base` entre 5 y 40.

---

### 🔸 3.4. Crear copias modificadas sin mutar el original

Clave para React y para código funcional.

```js
const numeros = [1, 2, 3];
const nuevos = [...numeros, 4];
```

El array original permanece igual.

---

## ✔️ 4. Uso combinado con OBJETOS (muy actual)

```js
const persona = { nombre: "Ana", edad: 25 };

const personaActualizada = {
  ...persona,
  edad: 26,
  ciudad: "Murcia"
};
```

Se utiliza muchísimo para actualizar estados en React.

---

## ✔️ 5. Spread vs Rest (aunque se parezcan)

Aunque ambos usan `...`, son conceptos **diferentes**. Se distinguen por **dónde aparecen** y **qué hacen**.

# 📌 Definición clara

### Spread

- Se usa **en el lado derecho** de una asignación o dentro de un array/objeto.
- Su función es **extraer elementos uno a uno**.
- Convierte un array en **elementos sueltos**.

Ejemplo:

```js
const numeros = [1, 2, 3];
const copia = [...numeros];
console.log(copia); // [1, 2, 3]
```

### Rest

- Se usa **en el lado izquierdo** de una asignación.
- Su función es **agrupar varios elementos en una sola variable**.
- Convierte **elementos sueltos** en un **array nuevo**.

Ejemplo:

```js
const numeros = [1, 2, 3, 4];
const [primero, ...resto] = numeros;

console.log(primero); // 1
console.log(resto);   // [2, 3, 4]
```

---

# 📊 Tabla comparativa Spread vs Rest

| Característica        | Spread (`...algo`)             | Rest (`...algo`)               |
| --------------------- | ------------------------------ | ------------------------------ |
| **Dónde se usa**      | Lado derecho (arrays, objetos) | Lado izquierdo (destructuring) |
| **Qué hace**          | Extrae elementos uno a uno     | Agrupa elementos en un array   |
| **Transforma…**       | Array → elementos sueltos      | Elementos → array nuevo        |
| **Copia estructuras** | Sí                             | No                             |
| **Ejemplo típico**    | `[...array]`                   | `const [a, ...rest] = array`   |

---

# 🧠 Ejemplo muy claro para tus alumnos

### Spread

```js
const letras = ["a", "b", "c"]; 

console.log(...letras);
```

**Salida:**

```
a b c
```

Es como si escribieras `"a", "b", "c"` a mano.

---

### Rest

```js
const letras = ["a", "b", "c", "d"]; 
const [primera, ...otras] = letras;

console.log(primera);
console.log(otras);
```

**Salida:**

```
a
["b", "c", "d"]
```

`rest` recoge los elementos restantes dentro de un array.

---

## ✔️ 6. ¿Por qué se usa tanto hoy?

- Impulsa la **inmutabilidad**, esencial en frameworks modernos.
- Hace el código **más claro y expresivo**.
- Reemplaza métodos antiguos como `slice()`, `concat()` o `Object.assign()`.
- Es el estándar actual de escritura en JavaScript.

---

# 🔹 Destructuring de Arrays – extraer valores de forma cómoda

Permite extraer valores del array asignándolos a variables de forma rápida.

## Forma clásica

```js
const numeros = [10, 20, 30];
const a = numeros[0];
const b = numeros[1];
const c = numeros[2];
console.log(a, b, c);
```

**Resultado en consola:**

```
10 20 30
```

## Forma moderna

```js
const numeros = [10, 20, 30];
const [a, b, c] = numeros;
console.log(a, b, c);
```

**Resultado en consola:**

```
10 20 30
```

## Saltar posiciones

```js
const datos = ["Ana", "Luis", "Marcos"];
const [primero, , tercero] = datos;
console.log(primero, tercero);
```

**Resultado en consola:**

```
Ana Marcos
```

## Valores por defecto

```js
const edades = [25];
const [edad1, edad2 = 18] = edades;
console.log(edad1, edad2);
```

**Resultado en consola:**

```
25 18
```

## Destructuring + Spread

```js
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;
console.log(primero, segundo, resto);
```

**Resultado en consola:**

```
1 2 [3, 4, 5]
```

---

# 3. EJERCICIOS POR CADA BLOQUE

---

# ✏️ Ejercicios – Funciones Flecha

1️⃣ Convierte estas funciones clásicas a funciones flecha:

```js
function doble(n) { return n * 2; }
function saludar(nombre) { return "Hola " + nombre; }
```

2️⃣ Crea una función flecha que devuelva el cuadrado de un número.

3️⃣ Crea una función flecha sin parámetros que devuelva tu nombre.

---

# ✏️ Ejercicios – forEach

```js
const numeros = [2, 4, 6, 8];
```

1️⃣ Muestra cada número del array.

```js
const valores = [1, 3, 5];
```

2️⃣ Muestra cada número multiplicado por 10.

```js
const letras = ["a", "b", "c"];
```

3️⃣ Muestra "Índice X → valor Y" para cada elemento.

---

# ✏️ Ejercicios – some

```js
const nums = [3, -1, 7, 0];
```

1️⃣ Usa `some` para comprobar si hay algún número negativo.

```js
const notas = [3, 4, 7, 2];
```

2️⃣ Usa `some` para comprobar si existe alguna nota mayor o igual que 5.

```js
const nombres = ["Luis", "Ana", "Marcos"];
```

3️⃣ Usa `some` para comprobar si algún nombre empieza por "A".

Recuerda: puedes usar métodos como:

- `includes("texto")`
- `startsWith("texto")`
- `endsWith("texto")`
- `toLowerCase()`

Ejemplo de condición útil:

```js
nombre.toLowerCase().startsWith("a")
```

---

# ✏️ Ejercicios – every

```js
const numeros = [2, 4, 6, 8];
```

1️⃣ Usa `every` para comprobar si todos los números son pares.

```js
const edades = [18, 20, 25, 30];
```

2️⃣ Usa `every` para comprobar si todos son mayores o iguales a 18.

```js
const correos = ["a@a.com", "b@b.es", "c.com"];
```

3️⃣ Usa `every` para comprobar si todos los correos contienen el carácter `@`.

---

# ✏️ Ejercicios – filter

```js
const numeros = [5, 12, 8, 20, 3];
```

1️⃣ Usa `filter` para obtener un nuevo array solo con los números mayores que 10.

```js
const nombres = ["Ana", "Luciano", "Eva", "Roberto"];
```

2️⃣ Usa `filter` para obtener los nombres que tengan más de 4 letras.

```js
const productos = [
  { nombre: "PC", stock: 0 },
  { nombre: "Monitor", stock: 3 },
  { nombre: "Ratón", stock: 1 }
];
```

3️⃣ Usa `filter` para obtener solo los productos con `stock` mayor que 0.

---

# ✏️ Ejercicios – find

```js
const numeros = [10, 60, 30, 80];
```

1️⃣ Usa `find` para obtener el primer número mayor que 50.

```js
const nombres = ["Ana", "Laura", "Luis", "Marcos"];
```

2️⃣ Usa `find` para obtener el primer nombre que empiece por "L".

```js
const productos = [
  { nombre: "PC", stock: 5 },
  { nombre: "Teclado", stock: 0 },
  { nombre: "Monitor", stock: 0 }
];
```

3️⃣ Usa `find` para obtener el primer producto cuyo `stock` sea 0.

---

# ✏️ Ejercicios – findIndex

```js
const numeros = [3, 5, -2, 7];
```

1️⃣ Usa `findIndex` para obtener el índice del primer número negativo.

```js
const nombres = ["Ana", "Luis", "Alejandro", "Eli"];
```

2️⃣ Usa `findIndex` para obtener el índice del primer nombre que tenga más de 6 letras.

```js
const alumnos = ["Ana", "Marcos", "Lucía"];
```

3️⃣ Usa `findIndex` para buscar "Pedro". Si el resultado es `-1`, significa que no existe.

---

# ✏️ Ejercicios – reduce

```js
const numeros = [2, 4, 6];
```

1️⃣ Usa `reduce` para sumar todos los números.

```js
const notas = [3, 7, 9, 4, 5];
```

2️⃣ Usa `reduce` para contar cuántas notas son mayores o iguales que 5.

```js
const nombres = ["Ana", "Luis", "Marcos"];
```

3️⃣ Usa `reduce` para crear un objeto donde la clave sea el índice y el valor el nombre.

---

# ✏️ Ejercicios – concat

```js
const grupoA = ["Ana", "Luis"];
const grupoB = ["Marcos", "Eva"];
```

1️⃣ Une ambos grupos en un solo array usando `concat`.

```js
const a = [1, 2];
const b = [3, 4];
```

2️⃣ Únelos con `concat` y muestra el resultado por consola.

```js
const x = ["x1"]; 
const y = ["y1"]; 
const z = ["z1"]; 
```

3️⃣ Únelos en un solo array usando `concat`.

---

# ✏️ Ejercicios – Spread Operator

```js
const original = [1, 2, 3];
```

1️⃣ Crea una copia usando `[...]`, modifica la copia (añade un número) y comprueba con `console.log` que el array original no cambia.

```js
const a = [1, 2];
const b = [3, 4];
```

2️⃣ Une ambos arrays usando el operador spread.

```js
const base = [10, 20, 30];
```

3️⃣ Crea un nuevo array que tenga un `5` al principio y un `40` al final usando spread.

---

# ✏️ Ejercicios – Destructuring de Arrays

```js
const numeros = [10, 20, 30];
```

1️⃣ Usa destructuring para extraer los tres valores en variables `a`, `b` y `c`.

```js
const datos = ["Ana", "Luis", "Marcos"];
```

2️⃣ Usa destructuring para guardar el primero y el tercero en dos variables.

```js
const valores = [1, 2, 3, 4];
```

3️⃣ Usa destructuring + spread para guardar el primer elemento en una variable y el resto en otra.

```js
function obtenerCoordenadas() {
    return [15, 30];
}
```

4️⃣ Usa destructuring para guardar el resultado en variables `x` e `y`.

---

# 🎯 Resumen Final

- Las funciones flecha permiten escribir callbacks cortas y limpias.
- Los métodos declarativos no modifican el array original.
- Son la base del JavaScript moderno y esenciales en frameworks como React.
- Permiten expresar qué queremos hacer sin necesidad de describir un bucle manual.

