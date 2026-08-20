export default {
  id: 'm2-l26',
  numero: 26,
  titulo: 'Mini proyecto: el carrito de compras',
  nivel: 'Dificil',
  lenguaje: 'javascript',
  htmlBase: null,
  esProyecto: true,
  palabrasClave: [
    { termino: 'Proyecto integrador', definicion: 'Un desafío que combina todo lo aprendido en el módulo: strings, arrays, métodos funcionales y encadenamiento.' },
    { termino: 'Carrito', definicion: 'La lista de productos que el cliente eligió. Este módulo lo administra solo con métodos de arrays, sin DOM.' },
    { termino: 'Pieza', definicion: 'Cada ejercicio construye una parte del programa: administrar, buscar y formatear. Al final se integran.' },
    { termino: 'Catálogo', definicion: 'La lista de productos disponibles de la tienda, con nombre y precio.' },
    { termino: 'Pipeline', definicion: 'La cadena de métodos (filter, map, reduce) que procesa el carrito de principio a fin.' },
    { termino: 'Formato de salida', definicion: 'El estilo del resumen: mayúsculas, columnas con padEnd y precios con toFixed(2).' },
    { termino: 'Datos de ejemplo', definicion: 'Los tres productos fijos (pan 350, leche 500, alfajor 300) que garantizan un resultado esperado verificable.' }
  ],
  secciones: [
    {
      titulo: 'La consigna del proyecto',
      parrafos: [
        'Vas a construir el sistema de carrito de compras de la tienda que vienes armando en el curso. En este módulo el foco es la manipulación de DATOS: el carrito vive en un array de objetos y todo se resuelve con métodos de arrays y strings, sin DOM, solo con console.log.',
        'El programa debe poder: agregar y quitar productos del carrito, buscar un producto por nombre, filtrar el catálogo por precio máximo, calcular el total con reduce y mostrar un resumen formateado y prolijo.',
        'El trabajo se divide en tres ejercicios que construyen las piezas: primero la administración del carrito, luego las búsquedas y el total, y por último el resumen formateado. Resuelve cada uno en orden: al final tendrás el carrito completo.'
      ],
      lista: [
        'Pieza 1: agregar y quitar productos del carrito (push y splice con indexOf).',
        'Pieza 2: buscar por nombre (find), filtrar por precio (filter) y calcular el total (reduce).',
        'Pieza 3: el resumen formateado (toUpperCase, padEnd, toFixed y join).'
      ]
    },
    {
      titulo: 'El catálogo de la tienda',
      parrafos: [
        'Los datos de ejemplo son siempre los mismos para que puedas verificar tu resultado: el carrito arranca con tres productos y durante las piezas se agregan y se quitan otros.',
        'En la pieza 1 se agrega café (250) y se quita leche. Después del movimiento, el carrito queda con pan, alfajor y café, y el total de los tres es 900.'
      ],
      codigo: 'const carrito = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];',
      salida: ''
    },
    {
      titulo: 'Lo que se espera del resultado',
      parrafos: [
        'Al terminar las tres piezas, el resumen final debe verse exactamente así (con el carrito de los datos de ejemplo: pan, alfajor y café):'
      ],
      codigo: 'TIENDA ONLINE\nPRODUCTOS: PAN - ALFAJOR - CAFÉ\npan............. $350.00\nalfajor......... $300.00\ncafé............ $250.00\nTOTAL........... $900.00',
      salida: 'TIENDA ONLINE\nPRODUCTOS: PAN - ALFAJOR - CAFÉ\npan............. $350.00\nalfajor......... $300.00\ncafé............ $250.00\nTOTAL........... $900.00'
    }
  ],
  ejemplos: [
    {
      titulo: 'El flujo del programa (esquema)',
      codigo: '// 1. Datos: el array carrito con { nombre, precio }\n\n// 2. Administración\n// agregarProducto(nombre, precio)  → push + length\n// quitarProducto(nombre)           → indexOf + splice + length\n\n// 3. Consultas\n// buscarProducto(nombre)    → find\n// filtrarPorPrecio(maximo)  → filter\n// calcularTotal()           → reduce\n\n// 4. Salida\n// imprimirResumen()  → toUpperCase, padEnd, toFixed, join',
      salida: '',
      explicacion: 'Este es el mapa del programa: los datos, las funciones de administración, las consultas y el resumen. Cada pieza implementa una parte; la pieza 3 las une todas.'
    }
  ],
  proyecto: {
    objetivos: [
      'Aplicar push y splice (con indexOf) para administrar el carrito sin perder la referencia del array.',
      'Usar find para buscar un producto por nombre y filter para filtrar por precio máximo.',
      'Calcular el total de la compra con reduce y un acumulador inicial 0.',
      'Formatear el resumen con toUpperCase, padEnd, toFixed y join para una salida prolija.',
      'Integrar las piezas en un programa autocontenido que corra de principio a fin con solo console.log.'
    ]
  },
  ejercicios: [
    {
      titulo: 'Pieza 1: administrar el carrito',
      dificultad: 'Media',
      consigna: [
        'Declara el array carrito con los tres productos del ejemplo (pan 350, leche 500, alfajor 300). Implementa dos funciones: agregarProducto(nombre, precio) que agrega un producto al final con push y devuelve la cantidad total; y quitarProducto(nombre) que busca la posición con indexOf sobre los nombres y la elimina con splice, devolviendo la cantidad restante.',
        'Prueba: agrega "café" a 250, imprime la cantidad (debe dar 4), quita "leche", imprime la cantidad (debe dar 3) e imprime los nombres restantes con join(", ").'
      ],
      pasos: [
        'Declara el carrito con los tres productos.',
        'agregarProducto hace push y devuelve carrito.length.',
        'quitarProducto arma los nombres con map, busca con indexOf y borra con splice.',
        'Llama a agregarProducto("café", 250) e imprime el resultado.',
        'Llama a quitarProducto("leche") e imprime el resultado.',
        'Imprime los nombres restantes con join(", ").'
      ],
      codigoInicial: '// 1. Declara el carrito con los 3 productos\n// 2. Escribe agregarProducto y quitarProducto\n// 3. Prueba: agrega café, quita leche y muestra los nombres\n',
      pista: 'Para buscar la posición del producto: carrito.map((p) => p.nombre).indexOf(nombre). splice(indice, 1) borra un solo elemento.',
      tests: [
        { tipo: 'output', nombre: 'El recorrido del carrito', esperado: ['4', '3', 'pan, alfajor, café'], mensaje: 'Después de agregar café hay 4 productos; tras quitar leche quedan 3: pan, alfajor y café.' },
        { tipo: 'valor', nombre: 'agregarProducto existe', expr: 'typeof agregarProducto', esperado: 'function', mensaje: 'Debe existir la función agregarProducto.' },
        { tipo: 'valor', nombre: 'quitarProducto existe', expr: 'typeof quitarProducto', esperado: 'function', mensaje: 'Debe existir la función quitarProducto.' },
        { tipo: 'valor', nombre: 'El carrito quedó bien', expr: 'JSON.stringify(carrito.map((p) => p.nombre))', esperado: '["pan","alfajor","café"]', mensaje: 'El array carrito debe tener, al final, pan, alfajor y café.' }
      ],
      solucion: 'const carrito = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\n\nfunction agregarProducto(nombre, precio) {\n  carrito.push({ nombre, precio });\n  return carrito.length;\n}\n\nfunction quitarProducto(nombre) {\n  const indice = carrito.map((p) => p.nombre).indexOf(nombre);\n  if (indice !== -1) {\n    carrito.splice(indice, 1);\n  }\n  return carrito.length;\n}\n\nconsole.log(agregarProducto("café", 250));\nconsole.log(quitarProducto("leche"));\nconsole.log(carrito.map((p) => p.nombre).join(", "));'
    },
    {
      titulo: 'Pieza 2: buscar, filtrar y totalizar',
      dificultad: 'Dificil',
      consigna: [
        'Con el mismo carrito de los datos de ejemplo (pan 350, leche 500, alfajor 300), implementa tres funciones: buscarProducto(nombre) que devuelve el objeto con find; filtrarPorPrecio(maximo) que devuelve los productos con precio menor o igual al máximo usando filter; y calcularTotal() que suma todos los precios con reduce.',
        'Prueba: imprime el nombre del producto encontrado con "leche" (debe ser "leche"), los nombres de los productos con precio menor o igual a 400 (deben ser "pan" y "alfajor") y el total (debe ser 1150).'
      ],
      pasos: [
        'Declara el carrito con los tres productos.',
        'buscarProducto usa find con p.nombre === nombre.',
        'filtrarPorPrecio usa filter con p.precio <= maximo.',
        'calcularTotal usa reduce con acumulador inicial 0.',
        'Imprime las tres pruebas.'
      ],
      codigoInicial: '// 1. Declara el carrito con los 3 productos\n// 2. Escribe buscarProducto, filtrarPorPrecio y calcularTotal\n// 3. Prueba las tres y muestra los resultados\n',
      pista: 'buscarProducto("leche") devuelve el objeto completo { nombre: "leche", precio: 500 }. El total con reduce: 350 + 500 + 300 = 1150.',
      tests: [
        { tipo: 'output', nombre: 'Las tres consultas', esperado: ['leche', 'pan, alfajor', '1150'], mensaje: 'El nombre encontrado es "leche"; los que cuestan 400 o menos son pan y alfajor; el total es 1150.' },
        { tipo: 'valor', nombre: 'buscarProducto existe', expr: 'typeof buscarProducto', esperado: 'function', mensaje: 'Debe existir la función buscarProducto.' },
        { tipo: 'valor', nombre: 'filtrarPorPrecio existe', expr: 'typeof filtrarPorPrecio', esperado: 'function', mensaje: 'Debe existir la función filtrarPorPrecio.' },
        { tipo: 'valor', nombre: 'calcularTotal devuelve 1150', expr: 'calcularTotal()', esperado: 1150, mensaje: '350 + 500 + 300 = 1150.' }
      ],
      solucion: 'const carrito = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\n\nfunction buscarProducto(nombre) {\n  return carrito.find((p) => p.nombre === nombre);\n}\n\nfunction filtrarPorPrecio(maximo) {\n  return carrito.filter((p) => p.precio <= maximo);\n}\n\nfunction calcularTotal() {\n  return carrito.reduce((acumulado, p) => acumulado + p.precio, 0);\n}\n\nconst encontrado = buscarProducto("leche");\nconsole.log(encontrado.nombre);\nconsole.log(filtrarPorPrecio(400).map((p) => p.nombre).join(", "));\nconsole.log(calcularTotal());'
    },
    {
      titulo: 'Pieza 3: el resumen formateado',
      dificultad: 'Dificil',
      consigna: [
        'Únelo todo. Declara el carrito de los datos de ejemplo (pan 350, alfajor 300) y agrégale café (250) con push para que queden los tres productos del resultado esperado. Implementa calcularTotal() con reduce y la función imprimirResumen() que muestra el ticket final en consola, exactamente con este formato:',
        'La primera línea es el título "TIENDA ONLINE". La segunda une los nombres en mayúsculas con " - " usando map, toUpperCase y join. Después viene una línea por producto: nombre con padEnd(16, ".") + " $" + precio.toFixed(2). La última línea es "TOTAL" con padEnd(16, ".") + " $" + total.toFixed(2).'
      ],
      pasos: [
        'Declara el carrito con pan y alfajor y agrega café con push.',
        'Reutiliza calcularTotal con reduce (o cópiala si la borraste).',
        'Para la línea de productos: producto.nombre.padEnd(16, ".") + " $" + producto.precio.toFixed(2).',
        'El total se formatea igual: "TOTAL".padEnd(16, ".") + " $" + total.toFixed(2).',
        'Llama a imprimirResumen() al final.'
      ],
      codigoInicial: '// 1. Declara el carrito: pan, alfajor + café con push\n// 2. Escribe calcularTotal\n// 3. Escribe imprimirResumen y llámala\n',
      pista: 'La línea del pan queda pan............. $350.00 (el padEnd rellena con puntos hasta 16 caracteres). El total de 350 + 300 + 250 es 900.',
      tests: [
        { tipo: 'output', nombre: 'El resumen completo', esperado: [
          'TIENDA ONLINE',
          'PRODUCTOS: PAN - ALFAJOR - CAFÉ',
          'pan............. $350.00',
          'alfajor......... $300.00',
          'café............ $250.00',
          'TOTAL........... $900.00'
        ], mensaje: 'El resumen debe coincidir exactamente: mismo orden, mismas mayúsculas, mismos puntos de relleno y mismos precios con dos decimales.' }
      ],
      solucion: 'const carrito = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "alfajor", precio: 300 }\n];\ncarrito.push({ nombre: "café", precio: 250 });\n\nfunction calcularTotal() {\n  return carrito.reduce((acumulado, p) => acumulado + p.precio, 0);\n}\n\nfunction imprimirResumen() {\n  console.log("TIENDA ONLINE");\n  const nombres = carrito.map((p) => p.nombre.toUpperCase()).join(" - ");\n  console.log(`PRODUCTOS: ${nombres}`);\n  for (const producto of carrito) {\n    console.log(producto.nombre.padEnd(16, ".") + " $" + producto.precio.toFixed(2));\n  }\n  console.log("TOTAL".padEnd(16, ".") + " $" + calcularTotal().toFixed(2));\n}\n\nimprimirResumen();'
    }
  ]
}