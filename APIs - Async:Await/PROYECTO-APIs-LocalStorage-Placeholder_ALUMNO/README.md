# 🧪 Ejercicio JavaScript — API + LocalStorage

## Gestión de usuarios favoritos

---

## 📌 Contexto del ejercicio

En muchas aplicaciones web modernas se consumen datos desde un **servidor externo** mediante APIs y se permite al usuario **guardar preferencias**, como favoritos o selecciones personalizadas.

Para que esas preferencias no se pierdan al recargar la página, se utilizan mecanismos de almacenamiento en el navegador, como **LocalStorage**.

En este ejercicio vas a desarrollar una pequeña aplicación web que combina:

- consumo de datos desde una **API**
- programación asíncrona en JavaScript
- almacenamiento de información en **LocalStorage**

---

## 🎯 Objetivo

Crear una aplicación web que:

1. Obtenga una lista de usuarios desde una API.
2. Muestre los usuarios en pantalla.
3. Permita marcar usuarios como **favoritos**.
4. Guarde los favoritos en **LocalStorage**.
5. Recupere los favoritos al recargar la página.

---

## 🌐 API a utilizar

La aplicación debe consumir datos desde la siguiente API pública:
https://jsonplaceholder.typicode.com/users

Esta API devuelve una lista de usuarios en formato JSON.

---

## 🗂️ Estructura del proyecto

El proyecto debe contener, como mínimo, los siguientes archivos:
/usuarios-favoritos
│── index.html
│── styles.css
│── app.js
│── README.md

---

## 🖥️ Interfaz esperada

La aplicación debe mostrar en pantalla:

- Un título identificativo de la aplicación.
- Un botón para cargar los usuarios.
- Una lista de usuarios obtenidos desde la API.

Cada usuario debe mostrarse con:

- su nombre
- un botón para marcarlo como **favorito**

---

## ⚙️ Funcionalidad requerida

### 1️⃣ Carga de usuarios desde la API

- Al pulsar el botón de carga:
  - Se debe realizar una petición a la API usando `fetch`.
  - La programación debe hacerse usando **async/await**.
  - Los usuarios obtenidos deben mostrarse en la página.

---

### 2️⃣ Gestión de favoritos

- Al pulsar el botón de favorito de un usuario:
  - El usuario debe marcarse como favorito visualmente.
  - El identificador del usuario debe guardarse en **LocalStorage**.
  - No deben almacenarse usuarios duplicados.

---

### 3️⃣ Uso de LocalStorage

- Los favoritos deben guardarse en LocalStorage utilizando una clave (por ejemplo: `favoritos`).
- La información debe almacenarse en formato **JSON**.
- Al recargar la página:
  - Los favoritos deben recuperarse desde LocalStorage.
  - Los usuarios que ya sean favoritos deben aparecer marcados.

---

### 4️⃣ Gestión de errores

- Si ocurre algún error al consumir la API:
  - Se debe mostrar un mensaje de error en pantalla.
  - El error debe mostrarse también en la consola del navegador.

---

## ✅ Requisitos técnicos

- Uso de `fetch` con **async/await**.
- Uso de **LocalStorage**.
- Código JavaScript organizado en funciones.
- No se permite el uso de librerías externas.
- El código debe ser claro y legible.

---

## 🧠 Qué se evalúa

- Correcto consumo de la API.
- Uso adecuado de la programación asíncrona.
- Correcta gestión de LocalStorage.
- Persistencia de datos al recargar la página.
- Funcionamiento general de la aplicación.

---

## 📌 Nota final

Este ejercicio simula un **caso real de aplicación web**, donde se combinan datos externos y almacenamiento local del usuario.
