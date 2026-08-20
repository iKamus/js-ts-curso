export default {
  id: 'm1-l13',
  numero: 13,
  titulo: 'Mini proyecto: el ticket de la tienda',
  nivel: 'Medio',
  esProyecto: true,
  palabrasClave: [
    { termino: 'Proyecto integrador', definicion: 'Un desafío que combina todo lo aprendido en el módulo: variables, tipos, operadores, control de flujo, bucles, funciones, arrays y objetos.' },
    { termino: 'Integración', definicion: 'Usar varias piezas juntas, como un solo programa: datos de entrada, procesamiento y salida en consola.' }
  ],
  secciones: [
    {
      titulo: 'La consigna del proyecto',
      parrafos: [
        'Vas a construir el sistema de ticket de la tienda de barrio que nos acompañará todo el curso. Hoy, con lo que ya sabes, el programa debe:',
        'recibir la lista de productos comprados (nombres y precios), calcular el subtotal, aplicar un descuento del 10% si el subtotal supera 1000, sumar el IVA (21%, calculado sobre el subtotal con el descuento ya aplicado) y imprimir un ticket ordenado.',
        'El trabajo se divide en tres ejercicios que construyen las piezas: primero las funciones de cálculo, luego el armado de la lista, y por último el ticket completo. Resuelve cada uno en orden: al final tendrás tu primer programa integrador.'
      ],
      lista: [
        'Pieza 1: funciones de cálculo (subtotal, descuento, IVA, total).',
        'Pieza 2: el carrito (un array de productos comprados).',
        'Pieza 3: el ticket completo impreso en consola.'
      ]
    },
    {
      titulo: 'Lo que se espera del resultado',
      parrafos: [
        'Con los datos del ejemplo (pan 350, leche 500, alfajor 300), el ticket final debe verse así:'
      ],
      codigo: 'PRODUCTOS: 3\npan................. $350\nleche............... $500\nalfajor............. $300\nSubtotal: $1150\nDescuento (10%): -$115\nIVA (21%): $217.35\nTOTAL: $1252.35',
      salida: 'PRODUCTOS: 3\npan................. $350\nleche............... $500\nalfajor............. $300\nSubtotal: $1150\nDescuento (10%): -$115\nIVA (21%): $217.35\nTOTAL: $1252.35'
    }
  ],
  ejemplos: [
    {
      titulo: 'El flujo del programa (esquema)',
      codigo: '// 1. Datos de entrada\nconst productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 }\n];\n\n// 2. Procesamiento\n// calcularSubtotal(productos) → suma de precios\n// calcularDescuento(subtotal) → 10% si supera 1000, si no 0\n// calcularIva(subtotal - descuento) → 21% sobre el monto con descuento\n// calcularTotal(subtotal, descuento, iva) → subtotal - descuento + iva\n\n// 3. Salida\n// ticket ordenado con console.log',
      salida: '',
      explicacion: 'Este es el esquema mental del programa: primero los datos, después las funciones de cálculo y finalmente la impresión. Los pasos 1 y 2 existen en las piezas anteriores; en la pieza 3 los unís todos.'
    }
  ],
  proyecto: {
    objetivos: [
      'Aplicar variables y constantes con nombres descriptivos.',
      'Escribir funciones puras de cálculo con parámetros y return.',
      'Recorrer un array de objetos para sumar precios.',
      'Usar condiciones para decidir si corresponde descuento.',
      'Producir una salida en consola ordenada y legible con template literals.'
    ]
  },
  ejercicios: [
    {
      titulo: 'Pieza 1: las funciones de cálculo',
      dificultad: 'Media',
      consigna: [
        'Implementa las cuatro funciones del módulo de cálculos. La primera, calcularSubtotal, recibe un array de productos y devuelve la suma de todos los precios. La segunda, calcularDescuento, recibe el subtotal y devuelve el 10% si supera 1000, o 0 si no. La tercera, calcularIva, recibe una base (el monto sobre el que se calcula el impuesto) y devuelve su 21%. La cuarta, calcularTotal, recibe subtotal, descuento e iva y devuelve subtotal - descuento + iva.',
        'Importante: en esta tienda el IVA se calcula sobre el subtotal con el descuento ya aplicado: la base es subtotal - descuento. Prueba tus funciones con los datos de ejemplo y compara los resultados.'
      ],
      pasos: [
        'calcularSubtotal usa reduce (o un for...of) para sumar producto.precio.',
        'calcularDescuento usa un ternario o if: subtotal > 1000 ? subtotal * 0.10 : 0.',
        'calcularIva multiplica la base por 0.21.',
        'calcularTotal combina las tres en una sola expresión.',
        'Imprime el resultado de cada función con los datos de prueba.'
      ],
      codigoInicial: '// 1. Escribe las cuatro funciones\n// 2. Pruébalas con estos datos:\nconst productosPrueba = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\n',
      pista: 'Para el subtotal: productos.reduce((acumulado, p) => acumulado + p.precio, 0). El descuento es un ternario: subtotal > 1000 ? subtotal * 0.1 : 0.',
      tests: [
        { tipo: 'valor', nombre: 'calcularSubtotal existe y funciona', expr: 'calcularSubtotal(productosPrueba)', esperado: 1150, mensaje: '350 + 500 + 300 = 1150. Tu función debe devolver eso.' },
        { tipo: 'valor', nombre: 'calcularDescuento aplica 10%', expr: 'calcularDescuento(1150)', esperado: 115, mensaje: '1150 supera 1000, así que el descuento es 1150 * 0.10 = 115.' },
        { tipo: 'valor', nombre: 'calcularDescuento sin superar 1000', expr: 'calcularDescuento(900)', esperado: 0, mensaje: '900 no supera 1000: el descuento debe ser 0.' },
        { tipo: 'valor', nombre: 'calcularIva existe y funciona', expr: 'calcularIva(1000)', esperado: 210, mensaje: 'El IVA es el 21% de la base: 1000 * 0.21 = 210.' },
        { tipo: 'valor', nombre: 'calcularIva sobre base con descuento', expr: 'calcularIva(1035)', esperado: 217.35, mensaje: 'Con base 1035 (subtotal 1150 - descuento 115), el IVA es 217.35.' },
        { tipo: 'valor', nombre: 'calcularTotal combina todo', expr: 'calcularTotal(1150, 115, 217.35)', esperado: 1252.35, mensaje: '1150 - 115 + 217.35 = 1252.35.' }
      ],
      solucion: 'function calcularSubtotal(productos) {\n  return productos.reduce((acumulado, producto) => acumulado + producto.precio, 0);\n}\n\nfunction calcularDescuento(subtotal) {\n  return subtotal > 1000 ? subtotal * 0.1 : 0;\n}\n\nfunction calcularIva(base) {\n  return base * 0.21;\n}\n\nfunction calcularTotal(subtotal, descuento, iva) {\n  return subtotal - descuento + iva;\n}\n\nconst productosPrueba = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];'
    },
    {
      titulo: 'Pieza 2: el carrito con sus utilidades',
      dificultad: 'Media',
      consigna: [
        'Crea la constante productos con los tres productos del ejemplo (pan 350, leche 500, alfajor 300). Luego implementa dos funciones: agregarProducto(nombre, precio) que agrega un producto al array y devuelve la cantidad total de productos; y listarNombres() que devuelve un array solo con los nombres. Usa agregarProducto una vez (por ejemplo "té" a 250) y muestra el resultado de listarNombres.',
        'Ojo: las funciones deben trabajar sobre la misma lista productos que declaraste.'
      ],
      pasos: [
        'Declara la constante productos con los tres productos.',
        'agregarProducto hace push y devuelve productos.length.',
        'listarNombres usa map para quedarse solo con .nombre.',
        'Llama a agregarProducto("té", 250) e imprime listarNombres().'
      ],
      codigoInicial: '// 1. Declara productos con los 3 productos del ejemplo\n// 2. Escribe agregarProducto y listarNombres\n// 3. Prueba: agrega "té" a 250 y muestra los nombres\n',
      pista: 'listarNombres: productos.map((p) => p.nombre). agregarProducto: productos.push({ nombre, precio }); return productos.length;',
      tests: [
        { tipo: 'output', nombre: 'Los nombres tras agregar', esperado: ['["pan","leche","alfajor","té"]'], mensaje: 'El console.log de listarNombres() debe mostrar el array con los cuatro nombres, incluido "té".' },
        { tipo: 'valor', nombre: 'agregarProducto es función', expr: 'typeof agregarProducto', esperado: 'function', mensaje: 'Debe existir una función llamada agregarProducto.' },
        { tipo: 'valor', nombre: 'listarNombres es función', expr: 'typeof listarNombres', esperado: 'function', mensaje: 'Debe existir una función llamada listarNombres.' },
        { tipo: 'valor', nombre: 'agregarProducto devuelve la cantidad', expr: 'agregarProducto.length', esperado: 2, mensaje: 'agregarProducto debe recibir dos parámetros: nombre y precio.' }
      ],
      solucion: 'const productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\n\nfunction agregarProducto(nombre, precio) {\n  productos.push({ nombre, precio });\n  return productos.length;\n}\n\nfunction listarNombres() {\n  return productos.map((producto) => producto.nombre);\n}\n\nagregarProducto("té", 250);\nconsole.log(listarNombres());'
    },
    {
      titulo: 'Pieza 3: el ticket completo',
      dificultad: 'Dificil',
      consigna: [
        'Únelo todo. Declara la lista de productos del ejemplo (pan 350, leche 500, alfajor 300), calcula subtotal, descuento, IVA y total con las funciones de la pieza 1, y arma la función imprimirTicket() que muestra el ticket completo en consola, exactamente con este formato:',
        'La línea de cada producto es: nombre con relleno de puntos hasta la columna 20 + espacio + $ + precio. Una línea de ejemplo: pan................. $350. Recuerda que el IVA se calcula sobre el subtotal con descuento. El resultado final debe coincidir con el resultado esperado del proyecto.'
      ],
      pasos: [
        'Reutiliza calcularSubtotal, calcularDescuento, calcularIva y calcularTotal (cópialas si las borraste).',
        'Para el relleno de puntos, usa el método padEnd de los strings: nombre.padEnd(20, ".") rellena hasta 20 caracteres.',
        'El IVA se calcula sobre el subtotal con descuento: calcularIva(subtotal - descuento).',
        'El IVA y el total se redondean a 2 decimales con toFixed(2).',
        'La función imprimirTicket imprime las líneas en el orden exacto del resultado esperado.',
        'Llama a imprimirTicket() al final.'
      ],
      codigoInicial: '// Copia las funciones de cálculo de la pieza 1\nconst productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\n\n// Escribe imprimirTicket() y llámala\n',
      pista: 'La línea del producto: `pan................. $350` se logra con `${producto.nombre.padEnd(20, ".")} $${producto.precio}`. El subtotal es 1150, el descuento 115, el IVA (sobre 1035) es 217.35 y el total 1252.35.',
      tests: [
        { tipo: 'output', nombre: 'El ticket completo', esperado: [
          'PRODUCTOS: 3',
          'pan................. $350',
          'leche............... $500',
          'alfajor............. $300',
          'Subtotal: $1150',
          'Descuento (10%): -$115',
          'IVA (21%): $217.35',
          'TOTAL: $1252.35'
        ], mensaje: 'El ticket debe coincidir exactamente con el resultado esperado: mismo orden, mismos puntos de relleno y mismos valores.' }
      ],
      solucion: 'function calcularSubtotal(productos) {\n  return productos.reduce((acumulado, producto) => acumulado + producto.precio, 0);\n}\n\nfunction calcularDescuento(subtotal) {\n  return subtotal > 1000 ? subtotal * 0.1 : 0;\n}\n\nfunction calcularIva(base) {\n  return base * 0.21;\n}\n\nfunction calcularTotal(subtotal, descuento, iva) {\n  return subtotal - descuento + iva;\n}\n\nconst productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\n\nfunction imprimirTicket() {\n  const subtotal = calcularSubtotal(productos);\n  const descuento = calcularDescuento(subtotal);\n  const iva = calcularIva(subtotal - descuento);\n  const total = calcularTotal(subtotal, descuento, iva);\n  console.log(`PRODUCTOS: ${productos.length}`);\n  for (const producto of productos) {\n    console.log(`${producto.nombre.padEnd(20, ".")} $${producto.precio}`);\n  }\n  console.log(`Subtotal: $${subtotal}`);\n  console.log(`Descuento (10%): -$${descuento}`);\n  console.log(`IVA (21%): $${iva.toFixed(2)}`);\n  console.log(`TOTAL: $${total.toFixed(2)}`);\n}\n\nimprimirTicket();'
    }
  ]
}