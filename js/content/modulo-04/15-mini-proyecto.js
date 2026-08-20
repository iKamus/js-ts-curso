export default {
  id: 'm4-l46',
  numero: 46,
  titulo: 'Mini proyecto: el inventario de la tienda con TypeScript',
  nivel: 'Dificil',
  lenguaje: 'typescript',
  htmlBase: '<ul id="lista"></ul><button id="boton">Mostrar inventario</button>',
  esProyecto: true,
  palabrasClave: [
    { termino: 'Proyecto integrador', definicion: 'Un desafío que combina todo el módulo: interfaces, clases, validaciones, DOM y manejo de errores en un solo sistema.' },
    { termino: 'Interface Producto', definicion: 'El contrato de datos del inventario: nombre: string y precio: number.' },
    { termino: 'Función de creación tipada', definicion: 'crearProducto(nombre: string, precio: number): Producto con validación y retorno garantizado.' },
    { termino: 'Clase Inventario', definicion: 'La trastienda del negocio: private para los productos, readonly para el nombre, métodos públicos para operarla.' },
    { termino: 'Validación', definicion: 'Rechazar datos inválidos con throw new Error: el inventario no acepta nombres vacíos ni precios negativos.' },
    { termino: 'Renderizado', definicion: 'Pintar el estado en el DOM: cada producto se vuelve un li dentro de #lista.' },
    { termino: 'try/catch', definicion: 'Capturar los errores de la validación para que el programa siga vivo y cuente qué pasó.' }
  ],
  secciones: [
    {
      titulo: 'La consigna del proyecto',
      parrafos: [
        'Vas a construir el inventario de la tienda con todo lo aprendido en el módulo: la interface Producto como contrato, una función crearProducto que valide los datos, una clase Inventario con su trastienda privada, y el renderizado en el DOM con manejo de errores.',
        'El proyecto se divide en tres piezas. Resuelve en orden: la pieza 2 usa la interface y la función de la pieza 1, y la pieza 3 usa las dos anteriores.'
      ],
      lista: [
        'Pieza 1: la interface Producto y la función crearProducto tipada con validación (nombre no vacío, precio mayor que 0).',
        'Pieza 2: la clase Inventario con agregar, quitar, listar (private + readonly) y el cálculo del valor total.',
        'Pieza 3: integrar todo con el DOM: renderizar la lista al hacer clic en el botón y manejar los errores con try/catch.'
      ]
    },
    {
      titulo: 'Lo que se espera del resultado',
      parrafos: [
        'Con las tres piezas funcionando, este flujo debe ser posible: crear productos válidos, rechazar los inválidos con un mensaje claro, ver el inventario renderizado en la lista al hacer clic, y saber el valor total de lo que hay en la tienda.'
      ],
      codigo: 'crearProducto("Manzana", 120) → { nombre: "Manzana", precio: 120 }\ncrearProducto("", 10) → lanza Error: "El nombre no puede estar vacío"\nInventario con Manzana y Pan → valorTotal() → 170\nClic en #boton → la lista muestra "Manzana - $120" y "Pan - $50"',
      salida: ''
    }
  ],
  ejemplos: [
    {
      titulo: 'El mapa completo del proyecto (esquema)',
      codigo: '// 1. El contrato\ninterface Producto {\n  nombre: string;\n  precio: number;\n}\n\n// 2. La fábrica con validación\nfunction crearProducto(nombre: string, precio: number): Producto {\n  // validar y devolver un Producto\n}\n\n// 3. La trastienda\nclass Inventario {\n  private productos: Producto[] = [];\n  // agregar, quitar, listar, valorTotal\n}\n\n// 4. El DOM con try/catch\n// renderizar la lista al hacer clic y capturar los errores',
      salida: '',
      explicacion: 'Este es el plano del proyecto: el contrato (interface), la fábrica que valida (función tipada), el depósito protegido (clase con private) y el mostrador (DOM con try/catch).'
    }
  ],
  proyecto: {
    objetivos: [
      'Definir la interface Producto como contrato de datos.',
      'Crear una función crearProducto tipada con validación y retorno garantizado.',
      'Construir la clase Inventario con private, readonly y métodos tipados.',
      'Calcular el valor total del inventario con tipos.',
      'Renderizar el inventario en el DOM con un botón.',
      'Manejar errores de validación con try/catch.'
    ]
  },
  ejercicios: [
    {
      titulo: 'Pieza 1: la interface y la fábrica de productos',
      dificultad: 'Media',
      consigna: [
        'Declara la interface Producto con nombre: string y precio: number. Implementa crearProducto(nombre: string, precio: number): Producto que lance un Error con el mensaje "El nombre no puede estar vacío" si el nombre está vacío (usa trim()), un Error con "El precio debe ser mayor que 0" si el precio es menor o igual a 0, y devuelva el producto en caso contrario.',
        'Prueba con crearProducto("Manzana", 120) e imprime el resultado en JSON, y luego imprime el nombre de crearProducto("Pan", 50).'
      ],
      pasos: [
        'Declara la interface con las dos propiedades.',
        'Valida el nombre con trim() y el precio con <= 0.',
        'Devuelve { nombre, precio } y prueba las dos llamadas.'
      ],
      codigoInicial: '// 1. interface Producto\n// 2. crearProducto con validación\n// 3. Pruebas\n',
      pista: 'if (nombre.trim() === "") { throw new Error("El nombre no puede estar vacío"); }',
      tests: [
        { tipo: 'output', nombre: 'Los productos creados', esperado: ['{"nombre":"Manzana","precio":120}', 'Pan'], mensaje: 'El JSON de Manzana y el nombre del Pan.' },
        { tipo: 'valor', nombre: 'El precio del Pan', expr: 'crearProducto("Pan", 50).precio', esperado: 50, mensaje: 'crearProducto("Pan", 50) debe devolver un producto con precio 50.' },
        { tipo: 'valor', nombre: 'Rechaza datos inválidos', expr: '(() => { try { crearProducto("", 5); return "no lanzó"; } catch (e) { return "lanzó"; } })()', esperado: 'lanzó', mensaje: 'crearProducto("", 5) debe lanzar un error por nombre vacío.' },
        { tipo: 'codigo', nombre: 'Interface y retorno', explicacion: 'Declarar interface Producto y el retorno : Producto', requerido: ['interface\\s+Producto', ':\\s*Producto'], mensaje: 'Debes declarar la interface Producto y anotar el retorno de crearProducto.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nfunction crearProducto(nombre: string, precio: number): Producto {\n  if (nombre.trim() === "") {\n    throw new Error("El nombre no puede estar vacío");\n  }\n  if (precio <= 0) {\n    throw new Error("El precio debe ser mayor que 0");\n  }\n  return { nombre, precio };\n}\n\nconsole.log(JSON.stringify(crearProducto("Manzana", 120)));\nconsole.log(crearProducto("Pan", 50).nombre);'
    },
    {
      titulo: 'Pieza 2: la clase Inventario',
      dificultad: 'Dificil',
      consigna: [
        'Implementa la clase Inventario con la propiedad readonly nombre: string y la lista private productos: Producto[] = []. El constructor recibe el nombre del inventario. Los métodos: agregar(producto: Producto): number (agrega y devuelve la nueva cantidad), quitar(nombre: string): boolean (busca con findIndex y elimina con splice; devuelve false si no existe), listar(): Producto[] y valorTotal(): number (suma todos los precios).',
        'Prueba: crea el inventario "Mi tienda", agrega Manzana (120) y Pan (50), imprime la lista en JSON y el valor total. Luego quita "Pan", imprime el resultado del quitar, la lista final y el valor total.'
      ],
      pasos: [
        'Declara readonly nombre y private productos con sus tipos.',
        'Implementa los cuatro métodos con retornos tipados.',
        'Prueba el flujo completo: agregar, listar, total, quitar, listar, total.'
      ],
      codigoInicial: '// 1. interface Producto\n// 2. Clase Inventario\n// 3. Pruebas del flujo\n',
      pista: 'const indice = this.productos.findIndex((p) => p.nombre === nombre); if (indice === -1) { return false; }',
      tests: [
        { tipo: 'output', nombre: 'El flujo del inventario', esperado: ['[{"nombre":"Manzana","precio":120},{"nombre":"Pan","precio":50}]', '170', 'true', '[{"nombre":"Manzana","precio":120}]', '120'], mensaje: 'Lista inicial, total 170, quitar Pan devuelve true, lista final y total 120.' },
        { tipo: 'valor', nombre: 'Valor total final', expr: 'tienda.valorTotal()', esperado: 120, mensaje: 'Después de quitar Pan, el valor total debe ser 120.' },
        { tipo: 'valor', nombre: 'Quitar inexistente', expr: 'tienda.quitar("Inexistente")', esperado: false, mensaje: 'Quitar un producto que no existe debe devolver false.' },
        { tipo: 'codigo', nombre: 'Trastienda protegida', explicacion: 'Usar private y readonly en la clase', requerido: ['private\\s+productos', 'readonly\\s+nombre'], mensaje: 'La clase debe declarar private productos y readonly nombre.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nclass Inventario {\n  readonly nombre: string;\n  private productos: Producto[] = [];\n\n  constructor(nombre: string) {\n    this.nombre = nombre;\n  }\n\n  agregar(producto: Producto): number {\n    this.productos.push(producto);\n    return this.productos.length;\n  }\n\n  quitar(nombre: string): boolean {\n    const indice = this.productos.findIndex((p) => p.nombre === nombre);\n    if (indice === -1) {\n      return false;\n    }\n    this.productos.splice(indice, 1);\n    return true;\n  }\n\n  listar(): Producto[] {\n    return this.productos;\n  }\n\n  valorTotal(): number {\n    let total = 0;\n    for (const producto of this.productos) {\n      total += producto.precio;\n    }\n    return total;\n  }\n}\n\nconst tienda = new Inventario("Mi tienda");\ntienda.agregar({ nombre: "Manzana", precio: 120 });\ntienda.agregar({ nombre: "Pan", precio: 50 });\nconsole.log(JSON.stringify(tienda.listar()));\nconsole.log(tienda.valorTotal());\nconsole.log(tienda.quitar("Pan"));\nconsole.log(JSON.stringify(tienda.listar()));\nconsole.log(tienda.valorTotal());'
    },
    {
      titulo: 'Pieza 3: el inventario en el DOM',
      dificultad: 'Dificil',
      consigna: [
        'Integra todo con el DOM. Reutiliza la interface Producto y la función crearProducto con validación. Declara un array inventario: Producto[] y una función renderizar(): void que vacíe la lista #lista (innerHTML = "") y agregue un li por cada producto con el texto "nombre - $precio".',
        'En un try/catch, agrega con push: crearProducto("Manzana", 120), crearProducto("Pan", 50) y crearProducto("", 10) (que lanza el error). En el catch, imprime (error as Error).message. Luego selecciona el botón #boton con la non-null assertion y registra un listener de clic que llame a renderizar(). Finalmente imprime `Productos: ${inventario.length}`.'
      ],
      pasos: [
        'Declara la interface, crearProducto y el array inventario.',
        'Implementa renderizar con createElement y appendChild.',
        'Envuelve los push en try/catch e imprime el mensaje del error.',
        'Conecta el botón con addEventListener e imprime la cantidad.'
      ],
      codigoInicial: '// 1. interface + crearProducto\n// 2. Array inventario + renderizar\n// 3. try/catch + botón\n',
      pista: 'li.textContent = `${producto.nombre} - $${producto.precio}`; y para el error: (error as Error).message.',
      tests: [
        { tipo: 'output', nombre: 'El error y la cantidad', esperado: ['El nombre no puede estar vacío', 'Productos: 2'], mensaje: 'El producto inválido se rechaza con su mensaje y quedan 2 productos válidos.' },
        { tipo: 'dom', nombre: 'El clic renderiza la lista', verificador: 'var b = document.getElementById("boton"); var l = document.getElementById("lista"); if (b) { b.dispatchEvent(new Event("click", { bubbles: true })); } var li = l ? l.firstElementChild : null; return { paso: l !== null && l.children.length === 2 && li !== null && li.textContent === "Manzana - $120", esperado: "2 li, el primero Manzana - $120", obtenido: l ? (li ? li.textContent + " / " + l.children.length + " li" : "sin li") : "sin lista" }', mensaje: 'Después del clic, la lista debe tener 2 productos y el primero "Manzana - $120".' },
        { tipo: 'codigo', nombre: 'try/catch y botón', explicacion: 'Usar try/catch y addEventListener', requerido: ['try\\s*\\{', 'catch\\s*\\(', 'addEventListener'], mensaje: 'Debes usar try/catch para los errores y addEventListener para el botón.' }
      ],
      solucion: 'interface Producto {\n  nombre: string;\n  precio: number;\n}\n\nfunction crearProducto(nombre: string, precio: number): Producto {\n  if (nombre.trim() === "") {\n    throw new Error("El nombre no puede estar vacío");\n  }\n  if (precio <= 0) {\n    throw new Error("El precio debe ser mayor que 0");\n  }\n  return { nombre, precio };\n}\n\nconst inventario: Producto[] = [];\n\nfunction renderizar(): void {\n  const lista = document.getElementById("lista")!;\n  lista.innerHTML = "";\n  for (const producto of inventario) {\n    const li = document.createElement("li");\n    li.textContent = `${producto.nombre} - $${producto.precio}`;\n    lista.appendChild(li);\n  }\n}\n\ntry {\n  inventario.push(crearProducto("Manzana", 120));\n  inventario.push(crearProducto("Pan", 50));\n  inventario.push(crearProducto("", 10));\n} catch (error) {\n  console.log((error as Error).message);\n}\n\nconst boton = document.getElementById("boton")!;\nboton.addEventListener("click", () => {\n  renderizar();\n});\n\nconsole.log(`Productos: ${inventario.length}`);'
    }
  ]
}