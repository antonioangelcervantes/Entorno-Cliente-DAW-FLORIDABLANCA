# Depuración de código JavaScript en Visual Studio Code

La depuración es una de las habilidades más importantes para cualquier programador. Visual Studio Code (VS Code) incorpora un depurador integrado para JavaScript y Node.js que permite **parar la ejecución**, inspeccionar variables, modificar su valor y conocer la pila de llamadas, todo sin salir del editor. La siguiente guía explica la teoría básica de la depuración en VS Code y presenta ejercicios sencillos para practicar.

## ¿Qué es la depuración?

Depurar consiste en **ejecutar un programa paso a paso** hasta localizar el código erróneo. En VS Code se hace mediante un **depurador** que permite:

- Ejecutar y pausar el código en líneas concretas usando **puntos de interrupción** (breakpoints)【199611865341723†L454-L458】.
- Ver las **variables** y su valor actual en cada punto de la ejecución【791374538779962†L210-L215】.
- Añadir expresiones a la pestaña **Watch** para evaluarlas continuamente【791374538779962†L210-L221】.
- Consultar y navegar la **pila de llamadas** para saber qué función llamó a cuál【791374538779962†L230-L233】.
- Controlar la ejecución con botones de la **barra de depuración**: continuar, parar, avanzar a la siguiente instrucción, entrar en una función o salir de ella【199611865341723†L495-L526】.

El diagrama siguiente resume estas partes:

![Diagrama conceptual de depuración en VS Code]({{file:file-7F9AEkjWXMDSU2KZnSCf8M}})

## Interfaz de depuración en VS Code

Cuando inicias una sesión de depuración (F5 o `Run and Debug` en la barra lateral), VS Code muestra varios elementos【199611865341723†L420-L434】:

- **Vista Run and Debug**: panel lateral con secciones de *Variables*, *Watch*, *Call Stack* y *Breakpoints*. Aquí puedes activar/desactivar puntos de interrupción o modificar el valor de una variable durante la depuración【199611865341723†L670-L688】.
- **Barra de depuración**: aparece en la parte superior y contiene botones para continuar/pausar (F5), *Step Over* (F10), *Step Into* (F11), *Step Out* (⇧F11), reiniciar y detener la ejecución【199611865341723†L495-L526】.
- **Consola de depuración (Debug Console)**: permite evaluar expresiones en tiempo real, imprimir valores o modificar variables usando un REPL【199611865341723†L698-L707】.

Para depurar de manera básica en JavaScript no necesitas configuración; VS Code intenta ejecutar el archivo activo. Para proyectos más grandes, se recomienda crear un archivo `launch.json` que especifique cómo arrancar o adjuntarse al proceso【199611865341723†L441-L447】.

## Puntos de interrupción (breakpoints)

Los puntos de interrupción son marcadores que detienen la ejecución en una línea. En VS Code se colocan haciendo clic en el margen del editor o pulsando **F9**【199611865341723†L545-L548】. Un círculo rojo indica un breakpoint activo y un círculo gris indica que está deshabilitado【199611865341723†L550-L554】. En la vista de *Breakpoints* puedes activarlos/desactivarlos y verlos listados【199611865341723†L561-L563】.

VS Code soporta varios tipos de breakpoints【199611865341723†L539-L652】:

| Tipo | Descripción | Cómo se usa |
| --- | --- | --- |
| **Normal** | Pausa la ejecución cuando el flujo alcanza esa línea. | Clic en el margen o F9. |
| **Condicional** | Sólo se activa si se cumple una condición o si el breakpoint ha sido alcanzado cierto número de veces【199611865341723†L569-L589】. | Clic derecho en el breakpoint → *Edit Breakpoint* y añadir la expresión o el contador. |
| **Triggered (anidado)** | Se activa cuando se ejecuta otro breakpoint designado【199611865341723†L606-L614】. | Clic derecho → *Add Triggered Breakpoint*. |
| **Inline** | Breakpoint asociado a una columna específica de una línea; útil para código minificado【199611865341723†L616-L623】. | ⇧F9 sobre la línea o menú contextual. |
| **Función** | Pausa cuando una función con cierto nombre se ejecuta【199611865341723†L628-L635】. | En la sección *Breakpoints* pulsa `+` y escribe el nombre de la función. |
| **Data breakpoints** | Pausa cuando cambia el valor de una variable o propiedad【199611865341723†L638-L644】. | En la sección *Variables* → clic derecho en la variable → *Break on Value Change/Read/Access*. |
| **Logpoints** | En lugar de detener la ejecución, imprime un mensaje en la consola de depuración【199611865341723†L646-L659】. | Clic derecho en el margen → *Add Logpoint*, escribir el mensaje con expresiones entre `{}`. |

## Inspección de datos y pila de llamadas

La pestaña **Variables** muestra variables locales y globales del punto donde se detuvo la ejecución【199611865341723†L670-L689】. Puedes modificar una variable con el botón *Set Value* o copiarla para evaluarla en la sección **Watch**【199611865341723†L681-L687】. Al lado, la pestaña **Watch** permite añadir expresiones a vigilar continuamente (por ejemplo, `i > 5`)【791374538779962†L216-L221】.

La sección **Call Stack** muestra qué función llamó a cuál y permite saltar a distintos marcos de pila【791374538779962†L230-L233】. Esto es útil para entender el camino recorrido hasta el breakpoint.

Si se necesita evaluar manualmente expresiones o ejecutar código, la **Debug Console** funciona como un REPL: escribes el código y presionas Enter. Para crear líneas múltiples usa Shift+Enter【199611865341723†L698-L707】.

## Cómo iniciar una sesión de depuración

Sigue estos pasos para depurar un archivo JavaScript simple:

1. **Abrir el archivo** que quieres depurar y ubicar las líneas problemáticas【199611865341723†L466-L468】.
2. **Añadir puntos de interrupción** en las líneas deseadas (clic en el margen o F9)【199611865341723†L545-L548】.
3. Pulsa **F5** o selecciona *Run and Debug* para iniciar la sesión【199611865341723†L468-L483】.
4. Elige el depurador `Node.js` si se ejecuta en Node, o un depurador de navegador si depuras código cliente (Edge/Chrome)【735384095301221†L904-L914】. Para aplicaciones de servidor, VS Code suele detectarlo automáticamente al ejecutar scripts definidos en `package.json`【199611865341723†L479-L481】.
5. Cuando el código llegue al breakpoint, revisa las variables y la pila, modifica valores si es necesario y usa los botones de la barra para avanzar paso a paso【791374538779962†L210-L215】.
6. Ajusta o añade breakpoints durante la ejecución según sea necesario (por ejemplo, para detenerte justo antes de una operación específica). Puedes habilitar/inhabilitar breakpoints desde la sección *Breakpoints*【199611865341723†L561-L563】.
7. Al terminar, pulsa el botón de detener o cierre la sesión desde la barra de depuración【199611865341723†L495-L526】.

## Consejos para depurar en proyectos de navegador

- Para depurar código cliente (por ejemplo, un fichero `.js` que se carga en el navegador) usa el depurador integrado para Edge/Chrome. VS Code mapea los archivos cargados en el navegador con los archivos del editor, permitiendo colocar breakpoints directamente en el código fuente【735384095301221†L904-L909】. La extensión *Chrome Debugger* quedó obsoleta porque las funciones están integradas【791374538779962†L252-L266】.
- Si usas herramientas de bundling (Webpack, Vite, etc.) asegúrate de generar **source maps** (`devtool: 'source-map'`) para que el depurador pueda mapear el código empaquetado con tu código fuente.

## Ejercicios prácticos

A continuación se presentan ejercicios básicos para practicar la depuración en VS Code. Todos los ejemplos usan Node.js, pero los pasos son aplicables para código de navegador con la extensión adecuada. Se asume que tienes instalado Node.js y VS Code.

### 1. Localizar un error lógico

**Objetivo:** detectar por qué la función `calcularPromedio` devuelve un valor incorrecto.

1. Crea un proyecto nuevo y guarda el siguiente código en `promedio.js`:

```javascript
function calcularPromedio(numeros) {
  let suma = 0;
  for (let i = 0; i <= numeros.length; i++) { // hay un error: <= provoca un índice fuera de rango
    suma += numeros[i];
  }
  return suma / numeros.length;
}

const lista = [10, 20, 30, 40];
const resultado = calcularPromedio(lista);
console.log('Promedio:', resultado);
```

2. Coloca un **breakpoint** en la línea del `for` y otro en la línea que retorna el resultado.
3. Inicia la depuración (F5). Cuando se detenga en el primer breakpoint, inspecciona la variable `i` y observa que al tomar el valor `4` se produce un acceso `undefined` en `numeros[4]`. Usa el botón *Step Over* para avanzar y ver cómo `suma` se convierte en `NaN`. 
4. Corrige el código cambiando el `<=` por `<` y vuelve a ejecutar. Comprueba en la consola que el promedio es `25`.

### 2. Usar Watch y breakpoints condicionales

**Objetivo:** pausar la ejecución sólo cuando una variable alcance cierto valor.

1. Guarda el siguiente código en `contador.js`:

```javascript
function cuentaRegresiva(inicio) {
  let contador = inicio;
  while (contador >= 0) {
    console.log('Contador:', contador);
    contador--;
  }
}

cuentaRegresiva(5);
```

2. Añade un **breakpoint condicional** en la línea donde se imprime `contador`. En el cuadro de condición escribe `contador === 2`. La ejecución se detendrá únicamente cuando la variable valga `2`【199611865341723†L569-L589】.
3. Ejecuta la depuración y observa cómo el programa no se detiene hasta que el contador sea `2`. Usa la sección **Watch** para añadir la expresión `contador` y comprobar su valor en cada iteración【791374538779962†L216-L221】.

### 3. Depurar llamadas anidadas y la pila de llamadas

**Objetivo:** entender el orden de ejecución usando la **Call Stack**.

1. Guarda este código en `ordenEjecucion.js`:

```javascript
function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.log('Final de la cadena');
}
a();
```

2. Añade un breakpoint en la función `c`.
3. Ejecuta la depuración. Cuando se detenga, mira la sección **Call Stack**: verás las funciones `a`, `b` y `c`. Haz clic en cada marco para ver el punto exacto donde se realizó la llamada【791374538779962†L230-L233】.
4. Usa los botones *Step Out* y *Step Into* para salir y entrar en funciones y observar cómo cambia la pila【199611865341723†L495-L526】.

### 4. Emplear Logpoints para inspeccionar valores sin pausar

**Objetivo:** obtener información de variables sin detener la ejecución.

1. Copia el siguiente código en `fibonacci.js`:

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
```

2. En la línea `return fibonacci(n - 1) + fibonacci(n - 2)`, añade un **logpoint** (clic derecho → *Add Logpoint*) con el mensaje `n = {n}`【199611865341723†L646-L659】. Este mensaje imprimirá el valor de `n` en cada llamada recursiva sin detener el programa.
3. Ejecuta la depuración y observa en la consola cómo se muestran los valores de `n` durante la recursividad.

## Conclusiones

VS Code ofrece un entorno muy completo para depurar JavaScript y Node.js. Aprender a usar **breakpoints**, **watch expressions**, la **consola de depuración** y la **pila de llamadas** permite localizar y corregir errores de forma rápida. Practicar con los ejercicios propuestos te ayudará a dominar las funciones básicas y, con el tiempo, podrás aprovechar opciones más avanzadas como depuración remota, *data breakpoints* y depuración múltiple de cliente y servidor.
