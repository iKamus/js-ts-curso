export default {
  id: 'm4-l34',
  numero: 34,
  titulo: 'Arrays, tuplas y objetos tipados',
  nivel: 'Fácil',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Array tipado', definicion: 'Una lista donde todos los elementos son del mismo tipo: string[] es una lista de textos.' },
    { termino: 'string[]', definicion: 'La anotación de un array de strings. Se lee "array de string".' },
    { termino: 'Array<T>', definicion: 'La forma alternativa de anotar arrays: Array<number> es lo mismo que number[].' },
    { termino: 'Tupla', definicion: 'Un array con tamaño y posiciones fijas, cada una con su tipo: [string, number] guarda un texto y un número.' },
    { termino: 'Objeto anotado', definicion: 'Un objeto cuya forma se declara en línea: { nombre: string; precio: number }.' },
    { termino: 'Inferencia en colecciones', definicion: 'TypeScript deduce el tipo de un array por sus primeros elementos y lo mantiene para siempre.' }
  ],
  secciones: [
    {
      titulo: 'Arrays tipados: la caja con formato',
      parrafos: [
        'Un array en TypeScript declara qué tipo de elementos puede contener, como una caja de embalaje que solo acepta latas del mismo tamaño. La sintaxis es nombre: tipo[]. Los corchetes dicen "lista de".',
        'La ventaja inmediata: push, pop y todas las operaciones solo aceptan el tipo declarado. Meter un número en un string[] es un error de compilación.'
      ],
      codigo: 'const productos: string[] = ["pan", "leche"];\nproductos.push("cafe");\nconsole.log(JSON.stringify(productos));',
      salida: '["pan","leche","cafe"]'
    },
    {
      titulo: 'La forma Array<T>',
      parrafos: [
        'Existe una segunda sintaxis para lo mismo: Array<T>, que se lee "array de T". Array<string> es idéntico a string[]. Se usa igual en declaraciones y en tipos de parámetros.',
        'Es la puerta de entrada a los genéricos (los verás en la lección 42): cuando veas Array<algo>, piensa "lista de algo".'
      ],
      codigo: 'const precios: Array<number> = [10, 20, 30];\nconsole.log(precios.length);\nconsole.log(precios[1]);',
      salida: '3\n20'
    },
    {
      titulo: 'Tuplas: posiciones fijas',
      parrafos: [
        'Una tupla es un array con contrato de tamaño: la posición 0 tiene un tipo, la posición 1 otro, y así. Se escribe con los tipos entre corchetes separados por comas: [string, number].',
        'Son perfectas para pares de datos: un código con su cantidad, una coordenada, una clave con su valor.'
      ],
      codigo: 'const pedido: [string, number] = ["lata", 12];\nconsole.log(pedido[0]);\nconsole.log(pedido[1]);',
      salida: 'lata\n12'
    },
    {
      titulo: 'Objetos anotados en línea',
      parrafos: [
        'Para tipar un objeto sin crear un tipo aparte, anotas su forma directamente: { propiedad: tipo; otra: tipo }. Es como el plano de una caja con compartimentos: cada compartimento tiene su etiqueta.',
        'Si el objeto no cumple el plano (falta una propiedad o sobra otra del tipo equivocado), el compilador lo rechaza. En la próxima lección verás interfaces para reutilizar estos planos.'
      ],
      codigo: 'const producto: { nombre: string; precio: number } = { nombre: "lata", precio: 25 };\nconsole.log(producto.nombre);\nconsole.log(producto.precio);',
      salida: 'lata\n25'
    },
    {
      titulo: 'Arrays de objetos',
      parrafos: [
        'El patrón más usado en la tienda: un array donde cada elemento es un objeto. Combinas la caja (array) con el plano (objeto en línea).',
        'Este es el formato típico de una lista de productos, y en la lección 35 aprenderás a darle un nombre con interfaces para no repetir el plano.'
      ],
      codigo: 'const inventario: { nombre: string; precio: number }[] = [\n  { nombre: "pan", precio: 50 },\n  { nombre: "leche", precio: 90 }\n];\nconsole.log(JSON.stringify(inventario));',
      salida: '[{"nombre":"pan","precio":50},{"nombre":"leche","precio":90}]'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Meter un elemento del tipo equivocado: productos.push(42) sobre un string[] no compila.',
        'Reordenar los valores de una tupla: ["lata", 12] está bien, [12, "lata"] no.',
        'Acceder a una propiedad que no está en el plano del objeto: el compilador te dice "no existe en el tipo".',
        'Olvidar los corchetes en el tipo del array: string es texto, string[] es lista de textos.',
        'Creer que la inferencia de un array vacío adivina el futuro: const x = [] queda como never[] y luego no acepta nada. Anótalo: const x: string[] = [].'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa arrays tipados siempre: el tipo del elemento es tu contrato con el resto del código.',
        'Elige tuplas solo para pares cortos y fijos; para estructuras más ricas usa objetos con nombre (interfaces, lección 35).',
        'Anota los arrays vacíos desde el inicio: const carrito: string[] = [].',
        'Prefiere string[] o number[] por legibilidad; usa Array<T> cuando trabajes con genéricos.',
        'Para listas de objetos, declara la forma del objeto aunque sea en línea: el compilador vigila cada propiedad.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El carrito que solo acepta productos',
      codigo: 'const carrito: string[] = [];\ncarrito.push("pan");\ncarrito.push("leche");\nconsole.log(JSON.stringify(carrito));\nconsole.log(carrito.length);',
      salida: '["pan","leche"]\n2',
      explicacion: 'El array declara desde el inicio que solo guarda textos. push de cualquier otra cosa sería rechazado por el verificador de tipos.'
    },
    {
      titulo: 'Una tupla: código y cantidad',
      codigo: 'const lineaDeVenta: [string, number] = ["L-01", 3];\nconsole.log(`Código ${lineaDeVenta[0]}, cantidad ${lineaDeVenta[1]}`);',
      salida: 'Código L-01, cantidad 3',
      explicacion: 'La posición 0 es siempre el código (string) y la posición 1 siempre la cantidad (number). Cambiar el orden rompería el contrato de la tupla.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Un array tipado con push',
      dificultad: 'Fácil',
      consigna: [
        'Declara un array productos de tipo string[] con el valor inicial ["pan"]. Agrégale "leche" y "cafe" con push. Luego imprime el array completo en JSON y su cantidad de elementos.'
      ],
      pasos: [
        'Declara: const productos: string[] = ["pan"].',
        'Haz dos push con "leche" y "cafe".',
        'Imprime JSON.stringify(productos) y luego productos.length.'
      ],
      codigoInicial: '// Declara productos como string[] y agrega elementos\n',
      pista: 'const productos: string[] = ["pan"];',
      tests: [
        { tipo: 'output', nombre: 'Array y cantidad', esperado: ['["pan","leche","cafe"]', '3'], mensaje: 'El array debe quedar con pan, leche y cafe, y su length debe ser 3.' },
        { tipo: 'codigo', nombre: 'Tipo del array', explicacion: 'Anotar el array como string[]', requerido: ['string\\s*\\[\\s*\\]'], mensaje: 'Debes anotar el array con el tipo string[].' }
      ],
      solucion: 'const productos: string[] = ["pan"];\nproductos.push("leche");\nproductos.push("cafe");\nconsole.log(JSON.stringify(productos));\nconsole.log(productos.length);'
    },
    {
      titulo: 'Una tupla de pedido',
      dificultad: 'Media',
      consigna: [
        'Declara una tupla pedido de tipo [string, number] con el valor ["lata", 12]. Imprime el código (posición 0) y la cantidad (posición 1), cada uno en su línea.'
      ],
      pasos: [
        'Declara con la anotación [string, number].',
        'Asigna el par ["lata", 12].',
        'Imprime pedido[0] y luego pedido[1].'
      ],
      codigoInicial: '// Declara la tupla pedido\n',
      pista: 'const pedido: [string, number] = ["lata", 12];',
      tests: [
        { tipo: 'output', nombre: 'Los dos valores', esperado: ['lata', '12'], mensaje: 'La posición 0 es "lata" y la posición 1 es 12.' },
        { tipo: 'codigo', nombre: 'Tipo de tupla', explicacion: 'Anotar la tupla como [string, number]', requerido: ['\\[\\s*string\\s*,\\s*number\\s*\\]'], mensaje: 'Debes usar el tipo de tupla [string, number].' }
      ],
      solucion: 'const pedido: [string, number] = ["lata", 12];\nconsole.log(pedido[0]);\nconsole.log(pedido[1]);'
    },
    {
      titulo: 'Un objeto anotado en línea',
      dificultad: 'Media',
      consigna: [
        'Declara un objeto producto con la forma { nombre: string; precio: number } y los valores "lata" y 25. Imprime su nombre y su precio, cada uno en su línea.'
      ],
      pasos: [
        'Escribe la anotación en línea: { nombre: string; precio: number }.',
        'Asigna los valores correspondientes.',
        'Accede con producto.nombre y producto.precio.'
      ],
      codigoInicial: '// Declara producto con su forma en línea\n',
      pista: 'const producto: { nombre: string; precio: number } = { nombre: "lata", precio: 25 };',
      tests: [
        { tipo: 'output', nombre: 'Las propiedades', esperado: ['lata', '25'], mensaje: 'producto.nombre es "lata" y producto.precio es 25.' },
        { tipo: 'codigo', nombre: 'Forma anotada', explicacion: 'Declarar la forma del objeto en línea con sus tipos', requerido: ['\\{\\s*nombre\\s*:\\s*string\\s*;\\s*precio\\s*:\\s*number\\s*\\}'], mensaje: 'El objeto debe declarar su forma con nombre: string; precio: number.' }
      ],
      solucion: 'const producto: { nombre: string; precio: number } = { nombre: "lata", precio: 25 };\nconsole.log(producto.nombre);\nconsole.log(producto.precio);'
    }
  ]
}