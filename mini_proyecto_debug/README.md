# Mini Proyecto: Depuración en JavaScript con VS Code

## 📝 Enunciado para el alumnado

En esta práctica aprenderás a **usar el depurador de Visual Studio Code** para encontrar y corregir errores lógicos en un programa JavaScript ejecutado con **Node.js**.

---

## 🎯 Objetivos

- Ejecutar código JavaScript con Node.js desde VS Code.
- Usar **breakpoints**, **Step Over**, **Step Into** y **Step Out**.
- Observar valores en las pestañas **Variables**, **Watch** y **Call Stack**.
- Identificar y corregir errores de:
  - Fórmulas incorrectas
  - Condiciones mal planteadas
  - Acceso a propiedades inexistentes
  - Bucle mal implementado

---

## 📂 Archivos

Dentro de la carpeta encontrarás:

- `app_bug.js` → **Archivo con errores** para depurar (versión alumno).
- `report.md` → Guía teórica de depuración en VS Code.
- `app_solucion.js` → Archivo corregido (no lo abras hasta el final).

---

## 🚀 Tareas a realizar

1. Abre la carpeta del proyecto en VS Code.
2. Ejecuta el programa con:

   ```bash
   node app_bug.js
   ```

3. Abre el **depurador**:
   - Icono **Run & Debug**
   - Botón **Run and Debug**
   - Seleccionar **Node.js**

4. Coloca **breakpoints** en:
   - `calcularMedia`
   - `estaAprobado`
   - `mostrarInforme`
   - `mostrarInformesGrupo`

5. Usa el depurador para avanzar paso a paso:
   - Comprueba valores de variables.
   - Añade expresiones al panel **Watch**.
   - Revisa la **pila de llamadas (Call Stack)**.

6. Encuentra los **4 errores** ocultos:
   - Error en la fórmula de la media.
   - Error en la condición de aprobado.
   - Propiedad mal escrita (`nombre` → `name`).
   - Bucle mal planteado (`for (let i = 1...`).

7. Corrige el archivo `app_bug.js`.

8. Entrega:
   - El archivo corregido.
   - Un texto breve explicando qué errores has detectado y **cómo** los encontraste usando el depurador.

---

## 🏁 Entrega de la práctica

Debes entregar:

- `app_bug_corregido.js`
- `informe.txt` con:
  - Los errores encontrados
  - Cómo los detectaste con el depurador

---

¡A jugar con el depurador! 🔍💻
