// EJERCICIO 4 - Gestor de pedidos del bar
// Usa varias clases relacionadas, arrays y eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)

// 1. Crea la clase ProductoBar

// 2. Crea la clase LineaPedido con los métodos que consideres oportunos:

// 3. Crea la clase Pedido con:
//    - propiedades:
//        * lineas (array de LineaPedido)
//        * estado ("abierto" o "confirmado")
//    - métodos:
//        * agregarProducto(producto)
//            - si el producto ya existe en alguna línea, aumenta la cantidad
//            - si no, crea una nueva línea con cantidad 1
//        * cambiarCantidad(producto, delta)
//            - busca la línea del producto
//            - suma delta a cantidad (delta puede ser +1 o -1)
//            - si la cantidad llega a 0, elimina la línea del array
//        * total()
//            - recorre las líneas y devuelve la suma de todos los subtotales
//        * vaciar()
//            - deja el array de lineas vacío
//        * confirmar()
//            - cambia el estado a "confirmado"

// 4. Crea un array "productosBar" con varios objetos ProductoBar,
//    por ejemplo: agua, café, bocadillo, refresco, etc.
//    Cada uno con su nombre y precio.

// 5. Crea una instancia de Pedido, por ejemplo llamada "pedidoActual".

// 6. Captura los elementos del DOM que vas a usar.
// ¡IMPORTANTE! Revisa el archivo pedidos.html para ver los IDs y clases.
// ¡IMPORTANTE! No modifiques el HTML ni el CSS.
// ¡IMPORTANTE! Ningún elemento del DOM debe quedar sin capturar ni sin usar.

// 7. Crea una función "pintarProductosBar()" que:
//    - recorra el array productosBar
//    - para cada producto cree una tarjeta con:
//        * nombre
//        * precio
//        * botón "Añadir"
//      El botón puede tener un atributo data-nombre o data-index
//      para saber qué producto se ha pulsado.
//    - añada todas las tarjetas a listaProductos

// 8. Crea una función "pintarCarrito()" que:
//    - vacíe listaCarrito
//    - recorra pedidoActual.lineas
//    - para cada línea cree un <li> con:
//        * nombre del producto
//        * cantidad
//        * subtotal
//        * botones "+" y "-" para cambiar cantidad
//      Los botones pueden tener data-nombre o data-index
//      para saber a qué producto pertenecen.
//    - actualice el total mostrando pedidoActual.total()
//      en el elemento totalPedido

// 9. Crea una función "actualizarEstadoPedido()" que:
//    - lea pedidoActual.estado
//    - actualice el texto de textoEstado
//    - cambie la clase CSS (pedido-abierto / pedido-confirmado)
//    - si el estado es "confirmado":
//        * muestra un mensaje en mensajeInfo indicando que
//          el pedido ya no se puede modificar
//      si es "abierto":
//        * mensaje indicando que se pueden añadir productos

// 10. Añade un listener de "click" a listaProductos (delegación de eventos):
//     - si el botón pulsado tiene la clase "btn-add":
//         * comprobar si el pedido está "abierto"
//         * buscar el producto correspondiente en productosBar
//         * llamar a pedidoActual.agregarProducto(producto)
//         * llamar a pintarCarrito()
//         * actualizar el mensajeInfo
//     - si el pedido está "confirmado", no debe permitir añadir productos.

// 11. Gestiona las interacciones en listaCarrito:
//     - Implementa delegación de eventos en el contenedor del carrito
//     - Identifica qué tipo de acción quiere realizar el usuario
//     - Localiza el producto correspondiente a la acción
//     - Modifica la cantidad según la acción realizada
//     - Verifica que el pedido pueda ser modificado antes de hacer cambios
//     - Actualiza la visualización después de cada modificación

// 12. Evento en btnVaciarPedido:
//     - Verifica el estado del pedido antes de realizar acciones
//     - Limpia el contenido del pedido si es posible
//     - Actualiza la interfaz para reflejar los cambios
//     - Proporciona feedback al usuario sobre la acción realizada

// 13. Evento en btnConfirmarPedido:
//     - llamar a pedidoActual.confirmar()
//     - actualizarEstadoPedido()
//     - actualizar mensajeInfo

// 14. Al cargar la página:
//     - llama a pintarProductosBar()
//     - llama a pintarCarrito() (estará vacío al principio)
//     - llama a actualizarEstadoPedido()
//     - escribe un mensaje inicial en mensajeInfo
