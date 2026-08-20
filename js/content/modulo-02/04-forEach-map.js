export default {
  id: 'm2-l17',
  numero: 17,
  titulo: 'forEach y map: recorrer y transformar',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Callback', definicion: 'Una función que se pasa como argumento a otra. forEach y map reciben un callback que se ejecuta por cada elemento.' },
    { termino: 'Iterar', definicion: 'Recorrer los elementos del array uno por uno. forEach itera sin devolver nada.' },
    { termino: 'Transformar', definicion: 'Cambiar cada elemento a otro valor. map transforma y devuelve un array nuevo.' },
    { termino: 'Parámetro opcional', definicion: 'El callback de forEach/map puede recibir hasta tres argumentos: elemento, índice y array completo.' },
    { termino: 'Inmutabilidad', definicion: 'No tocar el array original. map no muta; forEach tampoco (a menos que tú modifiques cosas adentro).' },
    { termino: 'Efecto secundario', definicion: 'Algo que el callback hace "hacia afuera": imprimir, guardar, modificar una variable externa.' },
    { termino: 'Arrow function', definicion: 'Sintaxis corta de función: (elemento) => elemento * 2. La verás a fondo en la lección 23.' }
  ],
  secciones: [
    {
      titulo: 'Recorrer sin bucles manuales',
      parrafos: [
        'Hasta ahora para recorrer un array usabas for con un contador. Los métodos funcionales hacen eso por ti: forEach y map reciben una función (callback) que se ejecuta una vez por cada elemento.',
        'Piensa en el repositor del almacén pasando balda por balda: forEach le dice "haz algo con cada producto" (anotarlo, mostrarlo, contarlo), y map le dice "tráeme la lista nueva de productos transformados".'
      ],
      codigo: 'const productos = ["pan", "leche", "café"];\nproductos.forEach((producto) => {\n  console.log(`- ${producto}`);\n});',
      salida: '- pan\n- leche\n- café'
    },
    {
      titulo: 'forEach: ejecutar algo por cada elemento',
      parrafos: [
        'forEach recorre el array y ejecuta el callback por cada elemento. No devuelve nada (su resultado siempre es undefined). Se usa cuando lo que importa es el efecto: imprimir, acumular en una variable, enviar datos.',
        'El callback puede recibir el elemento, el índice y el array completo, aunque lo común es usar solo el elemento.'
      ],
      codigo: 'const precios = [100, 200, 300];\nprecios.forEach((precio, indice) => {\n  console.log(`Balan ${indice}: ${precio}`);\n});',
      salida: 'Balan 0: 100\nBalan 1: 200\nBalan 2: 300'
    },
    {
      titulo: 'map: transformar y devolver un array nuevo',
      parrafos: [
        'map recorre el array, aplica el callback a cada elemento y devuelve un array NUEVO con los resultados. El original queda intacto: no muta. Si forEach es "haz algo con cada uno", map es "dame la versión transformada de cada uno".',
        'Regla de oro: si necesitas el array resultante, usa map. Si solo quieres efectos, usa forEach.'
      ],
      codigo: 'const precios = [100, 250, 75];\nconst conIva = precios.map((precio) => precio * 1.21);\nconsole.log(conIva);\nconsole.log(precios);',
      salida: '[121,302.5,90.75]\n[100,250,75]'
    },
    {
      titulo: 'La tabla comparativa',
      tabla: {
        columnas: ['Criterio', 'forEach', 'map'],
        filas: [
          ['Devuelve', 'undefined (nada)', 'Array nuevo con los resultados'],
          ['Muta el original', 'No', 'No'],
          ['Uso típico', 'Imprimir, acumular, efectos', 'Convertir cada elemento'],
          ['Resultado aprovechable', 'No', 'Sí: const nuevo = array.map(...)'],
          ['Callback con índice', '(el, indice) => ...', '(el, indice) => ...']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar forEach esperando un resultado: const r = array.forEach(...) siempre da undefined. Si quieres un array de vuelta, usa map.',
        'Olvidar el return en map: si el callback no devuelve nada, el array nuevo queda lleno de undefined.',
        'Confundir el orden de los parámetros: el primer parámetro del callback es el ELEMENTO, no el índice.',
        'Mutar el original dentro del callback: nombres.forEach((n, i) => nombres[i] = ...) funciona pero es confuso; para eso está map.',
        'Usar map cuando solo quieres efectos: map crea un array que tiras; forEach es más honesto para eso.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Elige el método por lo que necesitas: ¿resultado nuevo? map. ¿efectos por cada elemento? forEach.',
        'Nombra el parámetro del callback con el singular del array: precios.map((precio) => ...).',
        'Devuelve siempre en map: la función del callback termina con return o es de expresión simple.',
        'Usa el índice solo cuando lo necesites: precios.forEach((precio, i) => ...).',
        'Si el callback se complica, sácalo a una función con nombre y pásala: array.map(duplicar).'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El inventario en mayúsculas con map',
      codigo: 'const nombres = ["pan", "leche", "café"];\nconst etiquetas = nombres.map((nombre) => nombre.toUpperCase());\nconsole.log(etiquetas);\nconsole.log(nombres);',
      salida: '["PAN","LECHE","CAFÉ"]\n["pan","leche","café"]',
      explicacion: 'map devuelve el array nuevo con las etiquetas en mayúsculas y el array original queda intacto.'
    },
    {
      titulo: 'Repartir el pedido con forEach',
      codigo: 'const clientes = ["ana", "luis", "carla"];\nclientes.forEach((cliente, indice) => {\n  console.log(`Cliente ${indice + 1}: ${cliente}`);\n});',
      salida: 'Cliente 1: ana\nCliente 2: luis\nCliente 3: carla',
      explicacion: 'forEach ejecuta el callback por cada cliente. El índice se usa para numerar los pedidos.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Saludar con forEach',
      dificultad: 'Fácil',
      consigna: [
        'Declara const nombres = ["ana", "luis", "carla"]. Usa forEach para imprimir "Hola, ana", "Hola, luis" y "Hola, carla", una línea por cada nombre.'
      ],
      pasos: [
        'Declara el array de nombres.',
        'Llama a forEach con un callback que reciba el nombre.',
        'Imprime "Hola, " + nombre dentro del callback.'
      ],
      codigoInicial: '// Declara nombres y saluda con forEach\n',
      pista: 'nombres.forEach((nombre) => console.log("Hola, " + nombre));',
      tests: [
        { tipo: 'output', nombre: 'Los tres saludos', esperado: ['Hola, ana', 'Hola, luis', 'Hola, carla'], mensaje: 'forEach debe imprimir un saludo por cada nombre, en orden.' }
      ],
      solucion: 'const nombres = ["ana", "luis", "carla"];\nnombres.forEach((nombre) => {\n  console.log("Hola, " + nombre);\n});'
    },
    {
      titulo: 'Los dobles con map',
      dificultad: 'Fácil',
      consigna: [
        'Declara const numeros = [1, 2, 3]. Usa map para crear un array con el doble de cada número, guárdalo en una constante y después imprime el array resultante.'
      ],
      pasos: [
        'Declara el array de números.',
        'Aplica map con el callback (n) => n * 2.',
        'Guarda el resultado en una constante.',
        'Imprime el array nuevo.'
      ],
      codigoInicial: '// Declara numeros, aplica map e imprime\n',
      pista: 'const dobles = numeros.map((n) => n * 2);',
      tests: [
        { tipo: 'output', nombre: 'Los dobles', esperado: ['[2,4,6]'], mensaje: 'El array nuevo debe ser [2,4,6].' },
        { tipo: 'valor', nombre: 'dobles es un array', expr: 'Array.isArray(dobles)', esperado: true, mensaje: 'Guarda el resultado de map en una constante llamada dobles.' }
      ],
      solucion: 'const numeros = [1, 2, 3];\nconst dobles = numeros.map((n) => n * 2);\nconsole.log(dobles);'
    },
    {
      titulo: 'Indexar los puestos',
      dificultad: 'Media',
      consigna: [
        'Declara const letras = ["a", "b", "c"]. Usa map con índice para crear un array con el formato "indice:letra" (por ejemplo "0:a") y guárdalo. Imprime el resultado.'
      ],
      pasos: [
        'Declara el array de letras.',
        'Usa map con dos parámetros: (letra, indice).',
        'Devuelve el template `${indice}:${letra}`.',
        'Guarda el resultado e imprime.'
      ],
      codigoInicial: '// Declara letras, indexa con map e imprime\n',
      pista: 'El callback de map recibe el elemento y el índice: (letra, indice) => `${indice}:${letra}`.',
      tests: [
        { tipo: 'output', nombre: 'Letras indexadas', esperado: ['["0:a","1:b","2:c"]'], mensaje: 'Cada elemento debe tener el formato índice:letra.' },
        { tipo: 'valor', nombre: 'indexadas existe', expr: 'typeof indexadas', esperado: 'object', mensaje: 'Guarda el resultado de map en una variable llamada indexadas.' }
      ],
      solucion: 'const letras = ["a", "b", "c"];\nconst indexadas = letras.map((letra, indice) => `${indice}:${letra}`);\nconsole.log(indexadas);'
    },
    {
      titulo: 'Mayúsculas acumuladas con forEach',
      dificultad: 'Media',
      consigna: [
        'Declara const nombres = ["ana", "luis", "carla"]. Usa forEach para llenar un array vacío con los nombres en mayúsculas. Imprime el array resultante.'
      ],
      pasos: [
        'Declara el array de nombres y uno vacío: const mayusculas = [].',
        'Usa forEach y en el callback haz push del nombre en mayúsculas.',
        'Imprime mayusculas después del forEach.'
      ],
      codigoInicial: '// Declara nombres y mayusculas, llena con forEach e imprime\n',
      pista: 'Dentro del callback: mayusculas.push(nombre.toUpperCase()).',
      tests: [
        { tipo: 'output', nombre: 'Nombres en mayúsculas', esperado: ['["ANA","LUIS","CARLA"]'], mensaje: 'El array mayusculas debe contener los tres nombres en mayúsculas.' },
        { tipo: 'valor', nombre: 'mayusculas es un array', expr: 'Array.isArray(mayusculas)', esperado: true, mensaje: 'Debe existir la variable mayusculas, un array llenado con forEach.' }
      ],
      solucion: 'const nombres = ["ana", "luis", "carla"];\nconst mayusculas = [];\nnombres.forEach((nombre) => {\n  mayusculas.push(nombre.toUpperCase());\n});\nconsole.log(mayusculas);'
    }
  ]
}
