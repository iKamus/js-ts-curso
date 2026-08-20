export default {
  id: 'm5-l47',
  numero: 47,
  titulo: 'Convenciones de nombres',
  nivel: 'Fácil',
  palabrasClave: [
    { termino: 'camelCase', definicion: 'La convención estándar de JavaScript para variables y funciones: primera palabra en minúscula y las siguientes con mayúscula inicial: precioTotal.' },
    { termino: 'Nombre descriptivo', definicion: 'Un nombre que dice QUÉ contiene la variable: cantidadProductos en vez de c o n.' },
    { termino: 'Verbo en funciones', definicion: 'Las funciones hacen cosas, así que sus nombres empiezan con un verbo: calcularTotal, obtenerPrecio, guardarCarrito.' },
    { termino: 'UPPER_SNAKE_CASE', definicion: 'Mayúsculas con guiones bajos para constantes fijas: IVA, TIEMPO_MAXIMO.' },
    { termino: 'PascalCase', definicion: 'Mayúscula inicial en cada palabra: usado para clases (y en TypeScript para tipos).' },
    { termino: 'Nombre booleano', definicion: 'Las variables de verdadero/falso suenan a pregunta o afirmación: esMayor, tieneStock, estaActivo.' }
  ],
  secciones: [
    {
      titulo: '¿Por qué importa el nombre?',
      parrafos: [
        'El código se lee muchas más veces de las que se escribe: cuando vuelves a un archivo viejo, el nombre es tu mapa. Una variable llamada precioTotal se explica sola; una llamada x te obliga a rastrear de dónde salió.',
        'La regla mental: si necesitas un comentario para explicar qué guarda una variable, el nombre no está haciendo su trabajo.'
      ],
      codigo: 'const precio = 350;\nconst cantidad = 3;\nconst precioTotal = precio * cantidad;\nconsole.log(`Total: $${precioTotal}`);',
      salida: 'Total: $1050'
    },
    {
      titulo: 'El patrón de cada tipo de nombre',
      tabla: {
        columnas: ['Tipo', 'Convención', 'Ejemplo'],
        filas: [
          ['Variable', 'camelCase', 'cantidadProductos'],
          ['Función', 'camelCase con verbo', 'calcularTotal()'],
          ['Booleano', 'es/tiene/puede + adjetivo', 'esMayorDeEdad'],
          ['Constante fija', 'UPPER_SNAKE_CASE', 'IVA, MAXIMO_ITEMS'],
          ['Clase (y tipos TS)', 'PascalCase', 'Carrito, Producto']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Nombres de una letra o abreviaturas: c, d, cant, prod. Son inútiles fuera del contexto inmediato.',
        'Nombres genéricos: datos, lista, valor. ¿Lista de qué? ¿Valor de cuánto?',
        'Funciones sin verbo: total() en vez de calcularTotal(). No sabes qué hace.',
        'Mezclar idiomas o estilos: precio_total en un archivo con precioTotal en otro.',
        'Renombrar variables a mitad de código sin actualizar el resto: el código queda incoherente.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Escribe el nombre completo, aunque sea más largo: cantidadProductos > cant.',
        'Empieza las funciones con un verbo claro: calcular, obtener, guardar, mostrar, validar.',
        'Los booleanos suenan a pregunta: esMayor, tieneStock, estaCompleto.',
        'Constantes de valor fijo en mayúsculas: IVA, DIAS_LABORABLES.',
        'Si un nombre necesita explicación, mejora el nombre en vez de agregar el comentario.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Antes y después',
      codigo: '// Antes: nombres crípticos\nlet p = 350;\nlet c = 2;\nlet t = p * c;\nconsole.log(t);\n\n// Después: nombres que se explican\nconst precioUnitario = 350;\nconst cantidad = 2;\nconst total = precioUnitario * cantidad;\nconsole.log(total);',
      salida: '700\n700',
      explicacion: 'Ambos códigos calculan lo mismo, pero el segundo se lee como una frase: "precio unitario por cantidad da el total". Ese es el objetivo.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Nombres descriptivos',
      dificultad: 'Fácil',
      consigna: [
        'Escribe una función calcularPrecioFinal(precioBase, descuento) que reste el descuento al precio base y devuelva el resultado. Usa nombres descriptivos para las variables internas. Imprime el resultado de calcularPrecioFinal(500, 50).'
      ],
      pasos: [
        'Declara la función con parámetros descriptivos.',
        'Dentro, usa una constante con nombre claro para el resultado.',
        'Devuelve el valor e imprime la llamada.'
      ],
      codigoInicial: '// Implementa calcularPrecioFinal y muéstralo\n',
      pista: 'const precioFinal = precioBase - descuento; return precioFinal;',
      tests: [
        { tipo: 'output', nombre: 'Precio final', esperado: ['450'], mensaje: 'calcularPrecioFinal(500, 50) debe devolver 450.' },
        { tipo: 'codigo', nombre: 'Variable descriptiva', explicacion: 'El código debe usar una variable interna con nombre descriptivo (precioFinal o similar).', requerido: ['precioFinal'], mensaje: 'Usa un nombre descriptivo para la variable interna.' }
      ],
      solucion: 'function calcularPrecioFinal(precioBase, descuento) {\n  const precioFinal = precioBase - descuento;\n  return precioFinal;\n}\nconsole.log(calcularPrecioFinal(500, 50));'
    },
    {
      titulo: 'Verbos en funciones',
      dificultad: 'Fácil',
      consigna: [
        'El siguiente código está mal nombrado: total() no dice qué hace. Reescríbelo como calcularTotalDeCompra(precios) que sume todos los precios del array con un bucle y devuelva el total. Imprime el resultado con precios [100, 250, 150].'
      ],
      pasos: [
        'Define la función con verbo y parámetro descriptivo.',
        'Acumula con un bucle for...of.',
        'Devuelve e imprime.'
      ],
      codigoInicial: '// function total(precios) { ... } → reescríbela bien\n',
      pista: 'function calcularTotalDeCompra(precios) con let acumulado = 0.',
      tests: [
        { tipo: 'output', nombre: 'Total de la compra', esperado: ['500'], mensaje: 'La suma de [100, 250, 150] es 500.' },
        { tipo: 'codigo', nombre: 'Nombre con verbo', explicacion: 'La función debe llamarse calcularTotalDeCompra (verbo + qué calcula).', requerido: ['calcularTotalDeCompra'], prohibido: ['function total\\b'], mensaje: 'El nombre debe empezar con un verbo que describa la acción.' }
      ],
      solucion: 'function calcularTotalDeCompra(precios) {\n  let acumulado = 0;\n  for (const precio of precios) {\n    acumulado += precio;\n  }\n  return acumulado;\n}\nconsole.log(calcularTotalDeCompra([100, 250, 150]));'
    },
    {
      titulo: 'Constantes y booleanos bien nombrados',
      dificultad: 'Media',
      consigna: [
        'Implementa la función validarCompra(cantidad) que devuelva true si la cantidad es mayor a cero y menor que la constante MAXIMO_ITEMS (declarada en UPPER_SNAKE_CASE con valor 10). Imprime el resultado de validarCompra(5) y validarCompra(12).'
      ],
      pasos: [
        'Declara la constante MAXIMO_ITEMS = 10.',
        'La función devuelve cantidad > 0 && cantidad < MAXIMO_ITEMS.',
        'Imprime las dos llamadas.'
      ],
      codigoInicial: '// Declara la constante y la función booleana\n',
      pista: 'El booleano se devuelve directo: return cantidad > 0 && cantidad < MAXIMO_ITEMS;',
      tests: [
        { tipo: 'output', nombre: 'Resultados', esperado: ['true', 'false'], mensaje: '5 es válida (true), 12 supera el máximo (false).' },
        { tipo: 'codigo', nombre: 'Constante en mayúsculas', explicacion: 'La constante debe llamarse MAXIMO_ITEMS.', requerido: ['MAXIMO_ITEMS'], mensaje: 'Declara la constante en UPPER_SNAKE_CASE.' },
        { tipo: 'codigo', nombre: 'Booleano con nombre', explicacion: 'La función debe llamarse validarCompra o similar (verbo que responde sí/no).', requerido: ['validarCompra'], mensaje: 'Las funciones booleanas llevan verbo.' }
      ],
      solucion: 'const MAXIMO_ITEMS = 10;\nfunction validarCompra(cantidad) {\n  return cantidad > 0 && cantidad < MAXIMO_ITEMS;\n}\nconsole.log(validarCompra(5));\nconsole.log(validarCompra(12));'
    }
  ]
}