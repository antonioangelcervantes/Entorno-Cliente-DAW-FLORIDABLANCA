# Tramo 2 (Offline) — MiniTienda Simple (fetch + filter + reduce)

## Objetivo
Practicar en un ejercicio **offline**:
- Cargar datos desde un archivo JSON local con **fetch + async/await**
- Filtrar productos con **filter**
- Calcular un total con **reduce**


---

## Cómo ejecutar (IMPORTANTE)
No abras el HTML con doble clic. Usa un servidor local:
- VS Code → extensión Live Server → "Go Live"
Luego abre en el navegador la URL local 

---

## Tareas a implementar (app.js)

### 1) Cargar productos (fetch)
- Leer `./data/productos.json`
- Guardar el array de productos en memoria

**PISTA importante (ruta):**
Si `app.js` está junto a `index.html`, la ruta suele ser:
`"./data/productos.json"`

---

### 2) Filtrar por texto (filter)
- Con el texto del input, filtra por nombre (sin distinguir mayúsculas/minúsculas)
- Si el texto está vacío, se muestran todos
📌 Nota sobre los datos

Los métodos de array (`filter`, `map`, `reduce`, `some`, `every`, `find`) solo funcionan sobre arrays.
El archivo `.json` es un objeto y el array está en `productos`.

👉 Estos métodos se aplican siempre sobre `data.productos`, no sobre el JSON completo.
---

### 3) Calcular total (reduce)
- Calcula el total de **los productos que se están mostrando** (filtrados)
- Total = suma de `precio` de cada producto (puedes redondear a 2 decimales al mostrar)
📌 Nota sobre los datos

Los métodos de array (`filter`, `map`, `reduce`, `some`, `every`, `find`) solo funcionan sobre arrays.
El archivo `.json` es un objeto y el array está en `productos`.

👉 Estos métodos se aplican siempre sobre `data.productos`, no sobre el JSON completo.
---

### 4) Pintar en pantalla
- Lista de productos (nombre + precio)
- Total debajo
