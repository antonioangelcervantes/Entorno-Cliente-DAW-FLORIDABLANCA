# 🌍 Proyecto: Buscador de Países con APIs

## Objetivos del Proyecto

Este proyecto tiene como objetivo que practiques:

- ✅ Consumo de APIs REST con Fetch API
- ✅ Manipulación del DOM
- ✅ Tailwind CSS para estilos responsive
- ✅ Async/Await
- ✅ Manejo de errores
- ✅ Destructuring de objetos

---

## Requisitos

### 1. **HTML con Tailwind CSS**

- [ ] Agrega clases de Tailwind para que el diseño sea responsive
- [ ] El contenedor principal debe tener un gradiente de fondo
- [ ] La tarjeta de resultados debe verse bien en móvil y desktop
- [ ] El input y el botón deben estar bien alineados

### 2. **JavaScript - Funcionalidades**

- [ ] Implementa `buscarPais()` para consultar la API
- [ ] Implementa `mostrarPais()` para mostrar los datos
- [ ] Implementa `mostrarError()` para manejar errores
- [ ] Agrega event listeners al botón y al input

### 3. **Información a Mostrar**

Cuando se busque un país, debes mostrar:

- Nombre oficial del país
- Bandera (emoji o imagen)
- Capital
- Población (con formato de miles)
- Idiomas
- Región/Continente

### 4. **Validaciones**

- [ ] El input no debe estar vacío
- [ ] Mostrar error si el país no existe
- [ ] Limpiar resultados anteriores antes de nueva búsqueda

---

## API a Usar

**REST Countries**: https://restcountries.com/

### Ejemplo de URL:

```
https://restcountries.com/v3.1/name/España
```

### Respuesta (estructura simplificada):

```json
[
  {
    "name": {
      "common": "Spain",
      "official": "Kingdom of Spain"
    },
    "flags": {
      "svg": "https://...",
      "png": "https://..."
    },
    "capital": ["Madrid"],
    "population": 47560635,
    "languages": {
      "spa": "Spanish"
    },
    "region": "Europe",
    "currencies": {
      "EUR": {
        "name": "Euro",
        "symbol": "€"
      }
    }
  }
]
```

---

## Pasos Sugeridos

1. **Primero**: Completa el HTML con clases de Tailwind
2. **Segundo**: Implementa la función `buscarPais()` básica
3. **Tercero**: Implementa `mostrarPais()` para ver los datos
4. **Cuarto**: Agrega los event listeners
5. **Quinto**: Implementa manejo de errores
6. **Sexto**: Mejora los estilos y la experiencia del usuario

---

## Tips Importantes

- 🔍 Usa console.log() para inspeccionar la respuesta de la API
- 📱 Prueba tu proyecto en diferentes tamaños de pantalla
- ⚠️ Maneja casos como: país no encontrado, búsqueda vacía
- 🎨 Tailwind está incluido en el CDN, no necesitas instalarlo
- 💡 Puedes usar templates literals para crear HTML dinámico

---

## Recursos Extra

- [Documentación REST Countries](https://restcountries.com/)
- [Fetch API - MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Tailwind CSS - Documentación](https://tailwindcss.com/)
- [Async/Await - JavaScript.info](https://javascript.info/async-await)

---

## Entrega

- ✅ El proyecto debe funcionar completamente
- ✅ El diseño debe ser responsive
- ✅ El código debe estar bien comentado
- ✅ No debe haber errores en la consola

**¡A programar! 🚀**
