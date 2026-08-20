export default {
  id: 'm2-l20',
  numero: 20,
  titulo: 'find, some, every y sort: buscar y ordenar',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'find', definicion: 'Devuelve el PRIMER elemento que cumple la condición, o undefined si ninguno la cumple.' },
    { termino: 'some', definicion: 'Responde true si ALGÚN elemento cumple la condición, false si ninguno.' },
    { termino: 'every', definicion: 'Responde true si TODOS los elementos cumplen la condición, false si al menos uno no.' },
    { termino: 'Ordenar', definicion: 'Reordenar los elementos del array con sort. Por defecto ordena como texto, lo que trae sorpresas con números.' },
    { termino: 'Comparador', definicion: 'La función que le das a sort para definir el orden: (a, b) => a - b ordena números de menor a mayor.' },
    { termino: 'Mutar orden', definicion: 'sort reordena el array original. Para conservar el original, copia antes con [...array].' },
    { termino: 'undefined', definicion: 'El valor que devuelve find cuando no encuentra nada. No es un error, es una señal de "no está".' }
  ],
  secciones: [
    {
      titulo: 'Buscar y preguntar',
      parrafos: [
        'Cuando necesitas UN elemento, preguntar si existe alguno, o confirmar que todos cumplen, tienes tres métodos especializados: find, some y every.',
        'La diferencia es la respuesta: find te da el elemento mismo, some y every te dan true o false. Elige según la pregunta que necesites responder.'
      ],
      codigo: 'const numeros = [3, 8, 12, 5];\nconsole.log(numeros.find((n) => n > 10));\nconsole.log(numeros.some((n) => n < 4));\nconsole.log(numeros.every((n) => n > 2));',
      salida: '12\nfalse\ntrue'
    },
    {
      titulo: 'find: el primer que cumple',
      parrafos: [
        'find recorre el array y devuelve el PRIMER elemento que hace que el predicado dé true. Si ninguno cumple, devuelve undefined. Es como el primer cliente de la fila que tiene el boleto dorado: apenas lo encuentras, te detienes.',
        'Cuando trabajas con objetos, find te devuelve el objeto completo, no solo una propiedad.'
      ],
      codigo: 'const productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\nconst buscado = productos.find((p) => p.nombre === "leche");\nconsole.log(buscado);',
      salida: '{"nombre":"leche","precio":500}'
    },
    {
      titulo: 'some y every: las preguntas de sí o no',
      parrafos: [
        'some pregunta "¿hay ALGUNO que cumpla?" y every pregunta "¿TODOS cumplen?". El operador lógico que los relaciona es el mismo de || (algún) y && (todos).',
        'Detalle útil: en un array vacío, some responde false (no hay ninguno) y every responde true (no hay nadie que falle).'
      ],
      codigo: 'const notas = [2, 4, 8];\nconsole.log(notas.some((n) => n >= 6));\nconsole.log(notas.every((n) => n >= 6));\nconsole.log(notas.every((n) => n >= 2));',
      salida: 'true\nfalse\ntrue'
    },
    {
      titulo: 'sort: ordenar, con su trampa famosa',
      parrafos: [
        'sort ordena el array... como TEXTO. Por defecto, [10, 2, 33] queda [10, 2, 33], porque "10" < "2" como texto. Para ordenar números hay que pasarle un comparador: (a, b) => a - b ordena de menor a mayor, y (a, b) => b - a de mayor a menor.',
        'Además, sort MUTA el array original. Si quieres mantener el original, copia primero: const copia = [...numeros].sort(...).'
      ],
      codigo: 'const numeros = [10, 2, 33];\nconsole.log([...numeros].sort());\nconsole.log([...numeros].sort((a, b) => a - b));\nconsole.log([...numeros].sort((a, b) => b - a));\nconsole.log(numeros);',
      salida: '[10,2,33]\n[2,10,33]\n[33,10,2]\n[10,2,33]'
    },
    {
      titulo: 'La tabla resumen',
      tabla: {
        columnas: ['Método', 'Respuesta', '¿Muta?', 'Pregunta que responde'],
        filas: [
          ['find(pred)', 'Elemento o undefined', 'No', '¿Cuál es el primero que cumple?'],
          ['some(pred)', 'true o false', 'No', '¿Hay alguno que cumpla?'],
          ['every(pred)', 'true o false', 'No', '¿Todos cumplen?'],
          ['sort()', 'El mismo array reordenado', 'Sí', 'Ordenar como texto (no sirve para números)'],
          ['sort(comp)', 'El mismo array reordenado', 'Sí', 'Ordenar con el comparador que definas']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Ordenar números sin comparador: [10, 2, 33].sort() da [10, 2, 33]. Siempre pasa el comparador para números.',
        'Olvidar que sort muta: si luego usas el array y esperabas el orden original, ya no está. Copia antes: [...array].sort(...).',
        'Confundir some con every: some es "alguno", every es "todos". Leer las palabras en voz alta ayuda.',
        'Esperar que find devuelva todos los que cumplen: find devuelve UNO, el primero. Para todos, filter.',
        'No manejar el undefined de find: si el producto no existe, find devuelve undefined y buscado.precio revienta. Verifica primero.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Elige el método por la pregunta: elemento puntual → find, existencia → some, totalidad → every, selección → filter.',
        'Siempre con números: [...numeros].sort((a, b) => a - b). El spread protege el original.',
        'Verifica el resultado de find antes de acceder a propiedades: if (producto) { ... }.',
        'Para ordenar objetos, compara la propiedad: sort((a, b) => a.precio - b.precio).',
        'En los predicados, expresa la condición como pregunta: (n) => n >= 6 se lee "¿mayor o igual a 6?".'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Buscar el producto y verificar stock',
      codigo: 'const productos = [\n  { nombre: "pan", precio: 350, stock: 0 },\n  { nombre: "leche", precio: 500, stock: 3 }\n];\nconst producto = productos.find((p) => p.nombre === "pan");\nconsole.log(producto ? producto.precio : "no existe");\nconsole.log(productos.some((p) => p.stock > 0));\nconsole.log(productos.every((p) => p.stock > 0));',
      salida: '350\ntrue\nfalse',
      explicacion: 'find localiza el objeto del pan, some confirma que al menos un producto tiene stock y every detecta que no todos lo tienen.'
    },
    {
      titulo: 'Ordenar precios sin romper el catálogo',
      codigo: 'const precios = [300, 500, 350, 100];\nconst deMenorAMayor = [...precios].sort((a, b) => a - b);\nconsole.log(deMenorAMayor);\nconsole.log(precios);',
      salida: '[100,300,350,500]\n[300,500,350,100]',
      explicacion: 'El spread copia el array antes de ordenar: el original queda intacto y la copia queda ordenada.'
    }
  ],
  ejercicios: [
    {
      titulo: 'El primer número mayor que 10',
      dificultad: 'Fácil',
      consigna: [
        'Declara const numeros = [3, 8, 12, 5]. Usa find para obtener el primer número mayor que 10, guárdalo en una constante e imprímelo.'
      ],
      pasos: [
        'Declara el array de números.',
        'Aplica find con la condición n > 10.',
        'Guarda el resultado en una constante.',
        'Imprime el resultado.'
      ],
      codigoInicial: '// Declara numeros, busca con find e imprime\n',
      pista: 'find devuelve el PRIMERO que cumple: 12 es el único mayor que 10.',
      tests: [
        { tipo: 'output', nombre: 'El primer mayor que 10', esperado: ['12'], mensaje: 'El único número mayor que 10 es 12.' },
        { tipo: 'valor', nombre: 'encontrado existe', expr: 'typeof encontrado', esperado: 'number', mensaje: 'Guarda el resultado de find en una variable llamada encontrado.' }
      ],
      solucion: 'const numeros = [3, 8, 12, 5];\nconst encontrado = numeros.find((n) => n > 10);\nconsole.log(encontrado);'
    },
    {
      titulo: '¿Alguna aprobada? ¿Todas?',
      dificultad: 'Media',
      consigna: [
        'Declara const notas = [2, 4, 8]. Imprime dos respuestas: con some si ALGUNA nota es mayor o igual a 6, y con every si TODAS lo son.'
      ],
      pasos: [
        'Declara el array de notas.',
        'Pregunta con some((n) => n >= 6).',
        'Pregunta con every((n) => n >= 6).',
        'Imprime ambas respuestas.'
      ],
      codigoInicial: '// Declara notas y haz las dos preguntas\n',
      pista: 'some es "¿hay alguna?" (true aquí) y every es "¿todas?" (false aquí, porque 2 y 4 no llegan).',
      tests: [
        { tipo: 'output', nombre: 'Alguna y todas', esperado: ['true', 'false'], mensaje: 'Hay una nota aprobada (8), pero no todas aprueban.' }
      ],
      solucion: 'const notas = [2, 4, 8];\nconsole.log(notas.some((n) => n >= 6));\nconsole.log(notas.every((n) => n >= 6));'
    },
    {
      titulo: 'Ordenar de menor a mayor sin romper nada',
      dificultad: 'Media',
      consigna: [
        'Declara const numeros = [5, 3, 8, 1]. Crea una copia ordenada de menor a mayor usando spread y sort con comparador, guárdala en una constante e imprime la copia y después el original.'
      ],
      pasos: [
        'Declara el array original.',
        'Copia con [...numeros] y aplica sort con (a, b) => a - b.',
        'Guarda la copia en una constante.',
        'Imprime la copia y luego el original.'
      ],
      codigoInicial: '// Declara numeros, ordena la copia e imprime ambas\n',
      pista: 'const ordenados = [...numeros].sort((a, b) => a - b); El spread evita que el original se ordene.',
      tests: [
        { tipo: 'output', nombre: 'Copia y original', esperado: ['[1,3,5,8]', '[5,3,8,1]'], mensaje: 'La copia debe estar ordenada y el original debe seguir en su orden inicial.' },
        { tipo: 'codigo', nombre: 'Usa comparador numérico', explicacion: 'sort debe recibir un comparador (a, b) => a - b', requerido: ['sort\\s*\\(\\s*\\(\\s*a\\s*,\\s*b\\s*\\)\\s*=>\\s*a\\s*-\\s*b'], prohibido: [], mensaje: 'Sin el comparador, sort ordenaría como texto y el resultado sería [1,3,5,8] por casualidad o peor.' }
      ],
      solucion: 'const numeros = [5, 3, 8, 1];\nconst ordenados = [...numeros].sort((a, b) => a - b);\nconsole.log(ordenados);\nconsole.log(numeros);'
    },
    {
      titulo: 'Ordenar el catálogo por precio',
      dificultad: 'Dificil',
      consigna: [
        'Declara el array productos con tres objetos: pan (350), leche (500) y alfajor (300). Ordena UNA COPIA por precio de menor a mayor usando sort con comparador sobre p.precio, e imprime los nombres en el orden resultante.'
      ],
      pasos: [
        'Declara el array de productos.',
        'Copia con [...productos] y ordena con (a, b) => a.precio - b.precio.',
        'Guarda la copia en una constante.',
        'Extrae los nombres con map e imprime.'
      ],
      codigoInicial: '// Declara productos, ordena la copia por precio e imprime los nombres\n',
      pista: 'El comparador compara propiedades: (a, b) => a.precio - b.precio. El orden queda alfajor, pan, leche.',
      tests: [
        { tipo: 'output', nombre: 'Nombres ordenados por precio', esperado: ['["alfajor","pan","leche"]'], mensaje: 'Ordenado por precio ascendente: alfajor (300), pan (350), leche (500).' }
      ],
      solucion: 'const productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\nconst ordenados = [...productos].sort((a, b) => a.precio - b.precio);\nconsole.log(ordenados.map((p) => p.nombre));'
    }
  ]
}
