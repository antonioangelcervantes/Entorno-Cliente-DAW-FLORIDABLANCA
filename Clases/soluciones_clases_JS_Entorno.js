// Soluciones de ejercicios de clases (orientadas a entorno empresarial)
// Nivel inicial, sin funciones flecha ni sintaxis avanzada.
// Salida dual: consola y un contenedor de texto en la página.

function mostrar(texto, idSalida) {
  document.getElementById(idSalida).textContent += texto + "\n";
}

function limpiar(idSalida) {
  const salida = document.getElementById(idSalida);
  if (salida) salida.textContent = "";
}

// --- Ejercicio 1 – Gestión de empleados ---
function ejercicio1() {
  limpiar("salida1");

  class Empleado {
    constructor(nombre, puesto, salario) {
      this.nombre = nombre;
      this.puesto = puesto;
      this.salario = salario; // bruto mensual
    }

    mostrarDatos() {
      const texto =
        "Empleado: " +
        this.nombre +
        " | Puesto: " +
        this.puesto +
        " | Salario: " +
        this.salario +
        " €/mes";
      mostrar(texto, "salida1");
    }
  }

  const e1 = new Empleado("Ana", "Desarrolladora Frontend", 1900);
  const e2 = new Empleado("Carlos", "Administrativo", 1400);
  const e3 = new Empleado("Lucía", "Directora de Proyectos", 2800);

  e1.mostrarDatos();
  e2.mostrarDatos();
  e3.mostrarDatos();
}

// --- Ejercicio 2 – Control de proyectos ---
function ejercicio2() {
  limpiar("salida2");

  class Proyecto {
    constructor(nombre, cliente, estado) {
      this.nombre = nombre;
      this.cliente = cliente;
      this.estado = estado; // "en progreso", "finalizado", "en pausa"
    }
    actualizarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
    info() {
      return (
        "Proyecto: " +
        this.nombre +
        " | Cliente: " +
        this.cliente +
        " | Estado: " +
        this.estado
      );
    }
  }

  const proyectos = [
    new Proyecto("Web corporativa", "Acme S.A.", "en progreso"),
    new Proyecto("App interna RRHH", "Globex", "en pausa"),
    new Proyecto("Panel analítica", "InnovaTech", "en progreso"),
  ];

  // Simular actualización de estado real
  proyectos[1].actualizarEstado("en progreso");
  proyectos[0].actualizarEstado("finalizado");

  for (let i = 0; i < proyectos.length; i++) {
    mostrar(proyectos[i].info(), "salida2");
  }
}

// --- Ejercicio 3 – Gestión de productos ---
function ejercicio3() {
  limpiar("salida3");

  class Producto {
    constructor(nombre, precio, stock) {
      this.nombre = nombre;
      this.precio = precio; // €
      this.stock = stock;
    }
    aplicarDescuento(porcentaje) {
      // porcentaje: 10 -> reduce un 10%
      let factor = 1 - porcentaje / 100;
      if (factor < 0) factor = 0;
      this.precio = Number((this.precio * factor).toFixed(2));
    }
    info() {
      return this.nombre + " | " + this.precio + " € | stock: " + this.stock;
    }
  }

  const productos = [
    new Producto("Teclado mecánico", 49.9, 10),
    new Producto("Ratón inalámbrico", 19.95, 0),
    new Producto('Monitor 24"', 139.99, 5),
  ];

  // Promoción
  for (let i = 0; i < productos.length; i++) {
    productos[i].aplicarDescuento(15);
  }

  // Mostrar sólo disponibles
  for (let j = 0; j < productos.length; j++) {
    if (productos[j].stock > 0) {
      mostrar(productos[j].info(), "salida3");
    }
  }
}

// --- Ejercicio 4 – Herencia: Persona -> Empleado ---
function ejercicio4() {
  limpiar("salida4");

  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }

  class Empleado extends Persona {
    constructor(nombre, edad, puesto, salario) {
      super(nombre, edad);
      this.puesto = puesto;
      this.salario = salario;
    }
    presentar() {
      const t =
        "Soy " +
        this.nombre +
        " (" +
        this.edad +
        " años), " +
        "trabajo como " +
        this.puesto +
        " y cobro " +
        this.salario +
        " €/mes.";
      mostrar(t, "salida4");
    }
  }

  const e = new Empleado("Rosa", 29, "Analista de datos", 2100);
  e.presentar();
}

// --- Ejercicio 5 – Registro de ventas ---
function ejercicio5() {
  limpiar("salida5");

  class Venta {
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
      this.total = 0; // se calcula con precio unitario
    }
    calcularTotal(precioUnitario) {
      this.total = Number((this.cantidad * precioUnitario).toFixed(2));
    }
    info() {
      return this.producto + " x" + this.cantidad + " -> " + this.total + " €";
    }
  }

  // Precios unitarios del catálogo
  const catalogoPrecios = {
    Teclado: 22.5,
    Ratón: 12.0,
    Monitor: 129.9,
  };

  const ventas = [
    new Venta("Teclado", 3),
    new Venta("Ratón", 5),
    new Venta("Monitor", 1),
  ];

  let totalIngresos = 0;

  for (let i = 0; i < ventas.length; i++) {
    const v = ventas[i];
    const precio = catalogoPrecios[v.producto];
    if (typeof precio === "number") {
      v.calcularTotal(precio);
      mostrar(v.info(), "salida5");
      totalIngresos += v.total;
    } else {
      mostrar("Producto sin precio: " + v.producto, "salida5");
    }
  }

  mostrar("TOTAL ingresos: " + totalIngresos.toFixed(2) + " €", "salida5");
}

// --- Ejercicio 6 – Usuarios y roles ---
function ejercicio6() {
  limpiar("salida6");

  class Usuario {
    constructor(nombre, correo, rol) {
      this.nombre = nombre;
      this.correo = correo;
      this.rol = rol; // "admin", "editor", "visitante"
    }
    mostrarRol() {
      let permisos;
      if (this.rol === "admin") {
        permisos = "Puede crear, editar y eliminar cualquier recurso.";
      } else if (this.rol === "editor") {
        permisos = "Puede crear y editar sus recursos.";
      } else {
        permisos = "Puede ver contenidos públicos.";
      }
      return this.nombre + " (" + this.rol + "): " + permisos;
    }
  }

  const u1 = new Usuario("Elena", "elena@empresa.com", "admin");
  const u2 = new Usuario("Mario", "mario@empresa.com", "editor");
  const u3 = new Usuario("Sara", "sara@empresa.com", "visitante");

  const usuarios = [u1, u2, u3];
  for (let i = 0; i < usuarios.length; i++) {
    mostrar(usuarios[i].mostrarRol(), "salida6");
  }
}

// --- Ejercicio 7 – Gestor de tareas ---
function ejercicio7() {
  limpiar("salida7");

  class Tarea {
    constructor(descripcion) {
      this.descripcion = descripcion;
      this.estado = "pendiente";
    }
    completar() {
      this.estado = "completada";
    }
    mostrarEstado() {
      return this.descripcion + " -> " + this.estado;
    }
  }

  class GestorTareas {
    constructor() {
      this.tareas = [];
    }
    agregar(descripcion) {
      const t = new Tarea(descripcion);
      this.tareas.push(t);
      return t;
    }
    eliminar(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas.splice(indice, 1);
        return true;
      }
      return false;
    }
    listar() {
      const lineas = [];
      for (let i = 0; i < this.tareas.length; i++) {
        lineas.push(i + 1 + ". " + this.tareas[i].mostrarEstado());
      }
      return lineas.join("\\n");
    }
    completar(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].completar();
      }
    }
  }

  // Demo simple
  const gestor = new GestorTareas();
  gestor.agregar("Preparar propuesta para cliente");
  gestor.agregar("Revisión de contrato");
  gestor.agregar("Publicar release 1.0");

  mostrar("Lista inicial:\\n" + gestor.listar(), "salida7");

  gestor.completar(1); // completar "Revisión de contrato"
  mostrar("\\nTras completar la 2ª tarea:\\n" + gestor.listar(), "salida7");

  gestor.eliminar(0); // eliminar la primera
  mostrar("\\nTras eliminar la 1ª tarea:\\n" + gestor.listar(), "salida7");
}
