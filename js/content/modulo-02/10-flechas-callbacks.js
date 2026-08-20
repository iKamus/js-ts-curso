export default {
  id: 'm2-l23',
  numero: 23,
  titulo: 'Funciones flecha y callbacks',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Función flecha', definicion: 'Sintaxis corta de función: const doble = (n) => n * 2. La flecha => separa parámetros de cuerpo.' },
    { termino: 'Callback', definicion: 'Una función que se pasa como argumento a otra función, que la llamará cuando corresponda.' },
    { termino: 'Función de orden superior', definicion: 'Una función que recibe otra función como argumento o devuelve una. map, filter y reduce lo son.' },
    { termino: 'Retorno implícito', definicion: 'En la flecha, si el cuerpo es una sola expresión, el resultado se devuelve solo: (n) => n * 2.' },
    { termino: 'Contexto (this)', definicion: 'Las flechas no tienen this propio: heredan el del lugar donde se definen. Evita sorpresas en callbacks.' },
    { termino: 'Declaración vs expresión', definicion: 'function es una declaración; const f = () => ... es una expresión guardada en variable.' },
    { termino: 'Invocación', definicion: 'Llamar a la función con paréntesis: doble(5). Un callback se invoca desde la función que lo recibe.' }
  ],
  secciones: [
    {
      titulo: 'La flecha: función en una línea',
      parrafos: [
        'Las funciones flecha son la forma moderna de escribir funciones en JavaScript. Donde decías function sumar(a, b) { return a + b; }, ahora escribes const sumar = (a, b) => a + b. La flecha => lee "que devuelve": "recibo a y b, que devuelvan a + b".',
        'Si el cuerpo tiene una sola expresión, el return es implícito: no hace falta escribirlo. Si tiene varias líneas, necesitas llaves y return explícito.'
      ],
      codigo: 'const sumar = (a, b) => a + b;\nconst saludo = (nombre) => `Hola, ${nombre}`;\nconsole.log(sumar(3, 4));\nconsole.log(saludo("Ana"));',
      salida: '7\nHola, Ana'
    },
    {
      titulo: 'Callbacks: funciones como argumentos',
      parrafos: [
        'En JavaScript las funciones son valores: puedes guardarlas en variables y pasarlas como argumentos. Una función que recibe otra función se llama función de orden superior, y la función que recibe se llama callback.',
        'Ya venías usando callbacks todo el tiempo: precios.map((p) => p * 1.21) le pasa una función a map. Ahora vas a escribir tus propias funciones de orden superior.'
      ],
      codigo: 'const aplicar = (valor, operacion) => operacion(valor);\nconst doble = (n) => n * 2;\nconsole.log(aplicar(5, doble));\nconsole.log(aplicar(5, (n) => n + 3));',
      salida: '10\n8'
    },
    {
      titulo: 'Las formas de escribir la misma función',
      parrafos: [
        'Una flecha con un solo parámetro puede omitir los paréntesis: n => n * 2. Una con varios los necesita: (a, b) => a + b. Una sin parámetros usa paréntesis vacíos: () => 42.',
        'El callback suele escribirse directo en la llamada: numeros.filter((n) => n % 2 === 0). La flecha en línea es el estándar moderno.'
      ],
      codigo: 'const cuadrados = [1, 2, 3].map((n) => n * n);\nconst ahora = () => "listo";\nconsole.log(cuadrados);\nconsole.log(ahora());',
      salida: '[1,4,9]\nlisto'
    },
    {
      titulo: 'Flecha vs function: la tabla',
      tabla: {
        columnas: ['Aspecto', 'function', 'Flecha (=>)'],
        filas: [
          ['Sintaxis', 'function nombre(a, b) { return ... }', 'const nombre = (a, b) => ...'],
          ['Return', 'Siempre explícito', 'Implícito si el cuerpo es una expresión'],
          ['this propio', 'Sí, depende de la llamada', 'No, hereda el del entorno'],
          ['Uso como callback', 'Sí, más verboso', 'Sí, el estándar moderno'],
          ['Declaración', 'Puede usarse antes de su línea', 'Debe definirse antes de usarse']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar las llaves y el return cuando el cuerpo es largo: (a, b) => { ...varias líneas... } necesita return explícito.',
        'Esperar this propio en la flecha: dentro de una flecha, this es el de afuera. Si necesitas el propio, usa function.',
        'Olvidar los paréntesis con dos o más parámetros: (a, b) => ... no se puede escribir a, b => ....',
        'Usar la flecha antes de definirla: const f = () => ... no se "eleva" como function f(). Define primero.',
        'Confundir el retorno implícito de un objeto: (a) => { nombre: a } NO devuelve el objeto (las llaves se interpretan como cuerpo). Para eso: (a) => ({ nombre: a }).'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa flechas para callbacks y funciones cortas: array.map((x) => ...) es el estándar.',
        'Usa function para funciones con nombre propio y reutilizables en todo el archivo.',
        'Si el callback necesita varias líneas, ponle llaves y return, o sácalo a una función con nombre.',
        'Mantén los callbacks de una línea cuando puedas: se leen como una frase.',
        'Para devolver objetos desde una flecha de una línea, envuelve con paréntesis: (x) => ({ valor: x }).'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La máquina de operaciones',
      codigo: 'const operar = (a, b, operacion) => operacion(a, b);\nconsole.log(operar(6, 2, (x, y) => x + y));\nconsole.log(operar(6, 2, (x, y) => x * y));\nconsole.log(operar(6, 2, (x, y) => x - y));',
      salida: '8\n12\n4',
      explicacion: 'operar es una función de orden superior: recibe dos números y un callback. Cada llamada pasa una operación distinta sin tocar el código de operar.'
    },
    {
      titulo: 'El filtro hecho a mano',
      codigo: 'const seleccionar = (lista, predicado) => lista.filter(predicado);\nconst pares = seleccionar([1, 2, 3, 4], (n) => n % 2 === 0);\nconst grandes = seleccionar([5, 50, 500], (n) => n > 10);\nconsole.log(pares);\nconsole.log(grandes);',
      salida: '[2,4]\n[50,500]',
      explicacion: 'seleccionar envuelve a filter: recibe el array y el predicado, y delega el trabajo. La lógica de selección queda reutilizable.'
    }
  ],
  ejercicios: [
    {
      titulo: 'La función doble con flecha',
      dificultad: 'Fácil',
      consigna: [
        'Escribe una función flecha llamada doble que reciba un número y devuelva su doble. Llámala con doble(21) e imprime el resultado.'
      ],
      pasos: [
        'Define const doble = (n) => n * 2.',
        'Llama a doble(21).',
        'Imprime el resultado.'
      ],
      codigoInicial: '// Define doble con flecha y pruébala\n',
      pista: 'const doble = (n) => n * 2; El return es implícito por ser una sola expresión.',
      tests: [
        { tipo: 'output', nombre: 'El doble', esperado: ['42'], mensaje: 'doble(21) debe devolver 42.' },
        { tipo: 'valor', nombre: 'doble es función', expr: 'typeof doble', esperado: 'function', mensaje: 'Debe existir la función doble.' }
      ],
      solucion: 'const doble = (n) => n * 2;\nconsole.log(doble(21));'
    },
    {
      titulo: 'Los cuadrados con flecha en línea',
      dificultad: 'Fácil',
      consigna: [
        'Declara const numeros = [1, 2, 3]. Usa map con una flecha en línea para calcular el cuadrado de cada número, guarda el resultado en una constante e imprime el array.'
      ],
      pasos: [
        'Declara el array de números.',
        'Aplica map con (n) => n * n.',
        'Guarda el resultado en una constante.',
        'Imprime el array resultante.'
      ],
      codigoInicial: '// Declara numeros y calcula los cuadrados con map\n',
      pista: 'const cuadrados = numeros.map((n) => n * n);',
      tests: [
        { tipo: 'output', nombre: 'Los cuadrados', esperado: ['[1,4,9]'], mensaje: 'Los cuadrados de 1, 2 y 3 son 1, 4 y 9.' }
      ],
      solucion: 'const numeros = [1, 2, 3];\nconst cuadrados = numeros.map((n) => n * n);\nconsole.log(cuadrados);'
    },
    {
      titulo: 'aplicar: tu primera función de orden superior',
      dificultad: 'Media',
      consigna: [
        'Escribe una función flecha llamada aplicar que reciba un valor y un callback, y devuelva el resultado de ejecutar el callback con ese valor. Pruébala con aplicar(5, (x) => x * 3) e imprime el resultado.'
      ],
      pasos: [
        'Define const aplicar = (valor, operacion) => operacion(valor).',
        'Llama con el valor 5 y la flecha que multiplica por 3.',
        'Imprime el resultado.'
      ],
      codigoInicial: '// Define aplicar y pruébala con un callback\n',
      pista: 'const aplicar = (valor, operacion) => operacion(valor); llama al callback pasándole el valor.',
      tests: [
        { tipo: 'output', nombre: 'El resultado del callback', esperado: ['15'], mensaje: 'aplicar(5, (x) => x * 3) ejecuta el callback con 5 y da 15.' },
        { tipo: 'valor', nombre: 'aplicar es función', expr: 'typeof aplicar', esperado: 'function', mensaje: 'Debe existir la función aplicar.' }
      ],
      solucion: 'const aplicar = (valor, operacion) => operacion(valor);\nconsole.log(aplicar(5, (x) => x * 3));'
    },
    {
      titulo: 'operar: dos valores y un callback',
      dificultad: 'Dificil',
      consigna: [
        'Escribe una función flecha llamada operar que reciba dos números y un callback, y devuelva el resultado de ejecutar el callback con ambos números. Pruébala con operar(8, 2, (x, y) => x - y) e imprime el resultado.'
      ],
      pasos: [
        'Define const operar = (a, b, fn) => fn(a, b).',
        'Llama con 8, 2 y la flecha que resta.',
        'Imprime el resultado.'
      ],
      codigoInicial: '// Define operar y pruébala restando\n',
      pista: 'operar(8, 2, (x, y) => x - y) ejecuta la resta 8 - 2.',
      tests: [
        { tipo: 'output', nombre: 'La resta vía callback', esperado: ['6'], mensaje: 'operar(8, 2, (x, y) => x - y) debe dar 6.' },
        { tipo: 'valor', nombre: 'operar es función', expr: 'typeof operar', esperado: 'function', mensaje: 'Debe existir la función operar.' }
      ],
      solucion: 'const operar = (a, b, fn) => fn(a, b);\nconsole.log(operar(8, 2, (x, y) => x - y));'
    }
  ]
}
