# 📘 Examen Final - Entorno Cliente (1ª Evaluación)

## 📋 Información General

**Asignatura:** Desarrollo Web en Entorno Cliente  
**Curso:** 2º DAW (Desarrollo de Aplicaciones Web)  
**Evaluación:** Primera Evaluación Parcial  
**Duración:** 3.5 - 4 horas  
**Puntuación Total:** 100 puntos

---

## 🎯 Objetivos de Evaluación

Este examen evalúa tu dominio de los siguientes conceptos de JavaScript:

- ✅ **Programación Orientada a Objetos**: Clases, constructores, métodos, propiedades
- ✅ **Manipulación del DOM**: Creación dinámica de elementos, acceso y modificación
- ✅ **Gestión de Eventos**: Event listeners, delegación de eventos, event.target
- ✅ **Estructuras de Control**: Bucles (for), condicionales (if/else)
- ✅ **Arrays y Objetos**: Creación, manipulación, búsqueda y filtrado
- ✅ **Validación de Datos**: Comprobación de campos, uso de isNaN
- ✅ **Máquinas de Estado**: Gestión de estados y transiciones

---

## 📊 Distribución de Ejercicios

| Ejercicio | Descripción | Dificultad | Tiempo Est. | Puntuación |
|-----------|-------------|------------|-------------|------------|
| **Ej1 - Panel** | Panel de participación en clase | ⭐⭐ Básico | 20-30 min | 20 pts |
| **Ej2 - Gestor** | Gestor de proyectos del ciclo | ⭐⭐⭐ Medio | 30-40 min | 25 pts |
| **Ej3 - Incidencias** | Panel de gestión de incidencias | ⭐⭐⭐⭐ Medio-Alto | 40-50 min | 25 pts |
| **Ej4 - Pedidos** | Sistema de pedidos del bar | ⭐⭐⭐⭐⭐ Alto | 50-70 min | 30 pts |

---

## 📝 Descripción de los Ejercicios

### 🟢 Ejercicio 1 - Panel de Participación en Clase (20 puntos)

**Caso de uso:** Sistema para registrar la participación de alumnos en clase.

**Funcionalidades:**
- Registrar participaciones (presentes/ausentes)
- Mostrar ranking de participación
- Atajos de teclado para registro rápido
- Resumen estadístico

**Conceptos evaluados:**
- Clase simple con propiedades
- Array de objetos
- Manipulación del DOM (tabla dinámica)
- Eventos básicos (click, keydown)
- Búsqueda en arrays

**Archivos:**
- `panel.html` - NO MODIFICAR
- `panel.css` - NO MODIFICAR
- `panel.js` - **COMPLETAR** siguiendo las instrucciones numeradas

---

### 🟡 Ejercicio 2 - Gestor de Proyectos (25 puntos)

**Caso de uso:** Sistema para gestionar proyectos del ciclo formativo.

**Funcionalidades:**
- Registrar proyectos con título, grupo, módulo y notas
- Calcular media y estado (aprobado/suspenso)
- Filtrar por módulo y estado
- Validación de formulario
- Resumen estadístico

**Conceptos evaluados:**
- Clase con métodos de cálculo
- Validación de entrada (isNaN)
- Filtros combinados
- Renderizado condicional
- Eventos change

**Archivos:**
- `gestor.html` - NO MODIFICAR
- `gestor.css` - NO MODIFICAR
- `gestor.js` - **COMPLETAR** siguiendo las instrucciones numeradas

---

### 🟠 Ejercicio 3 - Panel de Incidencias (25 puntos)

**Caso de uso:** Sistema para gestionar incidencias de aulas informáticas.

**Funcionalidades:**
- Registrar incidencias (Hardware/Software)
- Máquina de estados (abierta → en-curso → resuelta)
- Filtros por aula y estado
- Avanzar y resetear estados
- Delegación de eventos

**Conceptos evaluados:**
- Máquina de estados
- Delegación de eventos con data-attributes
- Filtros combinados complejos
- Renderizado dinámico con estados
- Lógica condicional avanzada

**Archivos:**
- `incidencias.html` - NO MODIFICAR
- `incidencias.css` - NO MODIFICAR
- `incidencias.js` - **COMPLETAR** siguiendo las instrucciones numeradas

---

### 🔴 Ejercicio 4 - Sistema de Pedidos del Bar (30 puntos)

**Caso de uso:** Sistema para gestionar pedidos en el bar del instituto.

**Funcionalidades:**
- Catálogo de productos
- Carrito de compra con cantidades
- Incrementar/decrementar productos
- Cálculo de subtotales y total
- Estados del pedido (abierto/confirmado)
- Doble delegación de eventos

**Conceptos evaluados:**
- Composición de clases (3 clases relacionadas)
- Delegación de eventos avanzada
- Gestión de estados globales
- Algoritmos de búsqueda y modificación
- Validaciones múltiples
- Renderizado complejo

**Archivos:**
- `pedidos.html` - NO MODIFICAR
- `pedidos.css` - NO MODIFICAR
- `pedidos.js` - **COMPLETAR** siguiendo las instrucciones numeradas

---

## ⚠️ Normas Importantes

### 🚫 Prohibido:

1. ❌ **NO modifiques** los archivos HTML
2. ❌ **NO modifiques** los archivos CSS
3. ❌ **NO uses** librerías externas (jQuery, etc.)
4. ❌ **NO uses** métodos de arrays avanzados (map, filter, reduce, find, etc.)
5. ❌ **NO uses** arrow functions (=>) ni destructuring
6. ❌ **NO uses** var para declarar variables

### ✅ Obligatorio:

1. ✅ **Añade tu NRE** (Número Regional de Estudiante) donde se solicite en cada archivo .js
2. ✅ **Usa let o const** para declarar variables según corresponda
3. ✅ **Usa solo bucles for** para recorrer arrays
4. ✅ **Usa function** tradicionales, no arrow functions
5. ✅ **Sigue las instrucciones numeradas** en cada archivo
6. ✅ **Usa los IDs y clases CSS** existentes
7. ✅ **Captura TODOS los elementos DOM** mencionados
8. ✅ **Prueba cada ejercicio** antes de entregar

---

## 🔧 Instrucciones de Trabajo

### Durante el Examen

1. **Lee completamente** cada archivo .js antes de escribir código
2. **Sigue el orden** de las instrucciones numeradas
3. **Abre el HTML** en el navegador para probar
4. **Usa la consola** del navegador (F12) para depurar
5. **Comprueba** que no hay errores en la consola
6. **Valida** que todas las funcionalidades funcionan

### 📤 Entrega

**¿Qué debo entregar?**

Debes entregar la carpeta completa **"Examen FINAL Ev.Parcial"** con **TODOS los archivos** de cada ejercicio:
- Los 4 archivos HTML (proporcionados por el profesor)
- Los 4 archivos CSS (proporcionados por el profesor)  
- Los 4 archivos JS (**con tu código completado**)

**¿Cómo lo entrego?**

1. Comprime la carpeta completa "Examen FINAL Ev.Parcial" en formato ZIP
2. Nombra el archivo ZIP como: **Apellido1_Apellido2_Nombre_NRE.zip**
3. Entrega el archivo ZIP según las instrucciones del profesor

**⚠️ IMPORTANTE:** 
- Asegúrate de que todos los archivos HTML funcionan correctamente al abrirlos en el navegador antes de comprimir
- Verifica que has incluido TODOS los archivos (HTML, CSS y JS) de los 4 ejercicios
- No modifiques los nombres de los archivos ni de las carpetas

---

## 📊 Criterios de Evaluación

### Puntuación por Apartados

Cada ejercicio se evalúa según:

| Criterio | Peso | Descripción |
|----------|------|-------------|
| **Sintaxis** | 20% | Código sin errores, bien estructurado |
| **Funcionalidad** | 50% | Cumple todos los requisitos |
| **Buenas prácticas** | 15% | Nombres descriptivos, comentarios, uso correcto de let/const |
| **Eficiencia** | 15% | Uso correcto de bucles y condicionales |

### Escala de Calificación

| Puntos | Nota | Descripción |
|--------|------|-------------|
| 90-100 | 10 | Excelente - Todos los ejercicios perfectos |
| 80-89 | 9 | Sobresaliente - Ej1, Ej2, Ej3 perfectos + Ej4 casi completo |
| 70-79 | 8 | Notable alto - Ej1, Ej2, Ej3 correctos |
| 60-69 | 7 | Notable - Ej1 y Ej2 perfectos + Ej3 parcial |
| 50-59 | 6 | Bien - Ej1 y Ej2 correctos |
| 40-49 | 5 | Suficiente - Ej1 completo + Ej2 parcial |
| 0-39 | 1-4 | Insuficiente |

---

## 🛠️ Herramientas Permitidas

### ✅ Permitido:

- 💻 Editor de código (VS Code, Sublime, etc.)
- 🌐 Navegador web con DevTools (F12)

### ❌ No Permitido:

- 🚫 Internet
- 🚫 Apuntes o documentación
- 🚫 Comunicación con otros alumnos
- 🚫 Uso de IA (ChatGPT, Copilot, etc.)
- 🚫 Copiar código de fuentes externas

---

## 💡 Consejos para el Examen

### 🎯 Estrategia Recomendada:

1. **Lee TODO primero** (15 min)
   - Lee los 4 archivos .js completos
   - Identifica lo que sabes hacer fácilmente
   - Marca lo que te parece difícil

2. **Empieza por Ej1** (20-30 min)
   - Es el más fácil
   - Te dará confianza
   - Asegura puntos básicos

3. **Continúa con Ej2** (30-40 min)
   - Nivel medio
   - Refuerza conceptos

4. **Aborda Ej3** (40-50 min)
   - Más complejo
   - Lee con atención la delegación de eventos

5. **Finaliza con Ej4** (50-70 min)
   - El más complejo
   - Si falta tiempo, haz lo básico primero

6. **Reserva tiempo para probar** (20-30 min)
   - Abre cada HTML
   - Prueba todas las funcionalidades
   - Revisa la consola

### 🐛 Depuración:

- Usa `console.log()` para depurar variables y flujo de ejecución
- Revisa la consola del navegador (F12 → Console)
- Lee los mensajes de error con atención

---

## ❓ FAQ (Preguntas Frecuentes)

### 1. ¿Cuándo debo usar let y cuándo const?
Usa **const** para valores que no van a cambiar (elementos del DOM, arrays, objetos). Usa **let** para valores que sí cambiarán (contadores, variables de bucle).

### 2. ¿Puedo modificar el HTML/CSS?
**No.** Solo debes modificar los archivos .js.

### 3. ¿Qué hago si no funciona algo?
1. Abre la consola (F12)
2. Lee el mensaje de error
3. Usa `console.log()` para depurar
4. Revisa que hayas capturado todos los elementos DOM

### 4. ¿Puedo usar map/filter/reduce?
**No.** Solo bucles `for` tradicionales.

### 5. ¿Cómo sé si lo estoy haciendo bien?
- No hay errores en la consola
- El HTML muestra los datos correctamente
- Todas las funcionalidades responden a los eventos

### 6. ¿Debo completar todos los ejercicios?
Para aprobar necesitas al menos **50 puntos** (Ej1 completo + Ej2 parcial).  
Para sobresaliente necesitas completar los 4 ejercicios.

### 7. ¿Puedo añadir funciones extra?
Sí, siempre que:
- Completes primero lo pedido
- No modifiques HTML/CSS
- Sigas las normas del examen

### 8. ¿Tengo que entregar todos los archivos?
**Sí.** Debes entregar la carpeta completa con todos los archivos HTML, CSS y JS para que el profesor pueda probar tu código.

---

## �� ¡Buena Suerte!

Recuerda:
- ✅ Lee con calma
- ✅ Sigue las instrucciones
- ✅ Prueba tu código
- ✅ Gestiona bien el tiempo
- ✅ Haz primero lo que mejor sabes

**¡Demuestra todo lo que has aprendido!** 💪

---

**Versión del examen:** 1.0  
**Fecha de creación:** Noviembre 2024
