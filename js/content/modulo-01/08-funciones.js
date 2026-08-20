export default {
  id: 'm1-l08',
  numero: 8,
  titulo: 'Funciones',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Función', definicion: 'Un bloque de código con nombre que se ejecuta cuando lo llamas. Es la forma de reutilizar lógica.' },
    { termino: 'Parámetro', definicion: 'La variable que la función declara para recibir un valor desde afuera.' },
    { termino: 'Argumento', definicion: 'El valor concreto que pasas a la función cuando la llamas.' },
    { termino: 'Retorno (return)', definicion: 'El valor que la función devuelve a quien la llamó. Sin return, la función devuelve undefined.' },
    { termino: 'Declaración de función', definicion: 'La forma clásica: function nombre() { ... }. Se puede llamar incluso antes de declararla (hoisting).' },
    { termino: 'Expresión de función', definicion: 'Una función guardada en una variable: const saludar = function() { ... }.' },
    { termino: 'Arrow function', definicion: 'Una función escrita con => (flecha): const saludar = () => { ... }. Es la forma moderna y preferida.' },
    { termino: 'Parámetro por defecto', definicion: 'Un valor que se usa si no le pasas ese argumento: function sumar(a, b = 0).' },
    { termino: 'Rest params', definicion: 'Los ...args al final de la lista: capturan todos los argumentos extra en un array.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es una función?',
      parrafos: [
        'Una función es una receta con nombre. En lugar de escribir la receta completa cada vez, la escribes UNA vez, le pones un nombre y la "llamas" cuando la necesitas. La máquina de café es una buena analogía: la defines una vez (botón café), y cada vez que aprietas el botón, haces café sin reescribir el proceso.',
        'Las funciones son la herramienta más importante de la programación: dividen el problema en piezas pequeñas, eliminan la repetición y hacen el código legible.'
      ],
      codigo: 'function saludar() {\n  console.log("¡Hola!");\n}\nsaludar();\nsaludar();',
      salida: '¡Hola!\n¡Hola!'
    },
    {
      titulo: 'Parámetros y retorno',
      parrafos: [
        'Los parámetros son las entradas de la receta (la cantidad de azúcar, el tipo de café). Los argumentos son los valores que le pasas al llamarla. El return es la salida: lo que la función entrega a quien la llamó.',
        'Importante: sin return, la función hace su trabajo pero devuelve undefined. Y cuando hay return, la función se corta ahí mismo: lo que venga después no se ejecuta.'
      ],
      codigo: 'function precioConIva(precio) {\n  return precio * 1.21;\n}\nconst final = precioConIva(1000);\nconsole.log(final);',
      salida: '1210'
    },
    {
      titulo: 'Las tres formas de escribir funciones',
      parrafos: [
        'Declaración de función: function sumar(a, b) { return a + b; }. Se eleva con hoisting, así que puedes llamarla antes de su línea. Expresión de función: const sumar = function(a, b) { ... }. Arrow function: const sumar = (a, b) => a + b. Es la moderna y la que usarás casi siempre: es corta, y cuando el cuerpo es una sola expresión, puedes omitir llaves y return (retorno implícito).'
      ],
      tabla: {
        columnas: ['Forma', 'Sintaxis', 'Característica'],
        filas: [
          ['Declaración', 'function sumar(a, b) { return a + b; }', 'Hoisting: se puede llamar antes de definirla'],
          ['Expresión', 'const sumar = function(a, b) { return a + b; };', 'Es un valor: se guarda en una variable'],
          ['Arrow', 'const sumar = (a, b) => a + b;', 'Corta; retorno implícito sin llaves; la preferida hoy']
        ]
      }
    },
    {
      titulo: 'Parámetros por defecto',
      parrafos: [
        'Puedes darle a un parámetro un valor de respaldo: si quien llama no pasa ese argumento, se usa el default. Es como el tamaño del café: si no lo pedís, te dan el chico.'
      ],
      codigo: 'function pedirCafe(tamaño = "chico") {\n  return `Café ${tamaño}`;\n}\nconsole.log(pedirCafe("grande"));\nconsole.log(pedirCafe());',
      salida: 'Café grande\nCafé chico'
    },
    {
      titulo: 'Rest params: cantidad variable de argumentos',
      parrafos: [
        'Los tres puntos ... antes del último parámetro capturan TODOS los argumentos extra en un array. Sirve para funciones que aceptan cualquier cantidad de valores, como una suma de todo lo que le pases.'
      ],
      codigo: 'function sumarTodo(...numeros) {\n  let total = 0;\n  for (const n of numeros) total += n;\n  return total;\n}\nconsole.log(sumarTodo(1, 2, 3));\nconsole.log(sumarTodo(10, 20, 30, 40));',
      salida: '6\n100'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar el return: la función hace cálculos pero devuelve undefined y el resto del programa no ve el resultado.',
        'Confundir parámetro con argumento: la DEFINICIÓN declara parámetros; la LLAMADA pasa argumentos.',
        'Nombre repetido con otra función o variable: la última declaración gana y el error es silencioso.',
        'Llamar a la función sin paréntesis (saludar en vez de saludar()): pasas la función entera en lugar de ejecutarla.',
        'Pensar que los argumentos se pasan en cualquier orden: el orden importa, el primero va al primer parámetro.',
        'Retorno implícito con llaves: const f = () => { 5 } devuelve undefined; sin llaves, const f = () => 5 sí devuelve 5.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Verbo + sustantivo en los nombres: calcularTotal, obtenerCliente, imprimirTicket. Una función hace algo, el nombre lo dice.',
        'Una función = una sola responsabilidad: si hace dos cosas, divídela.',
        'Pocos parámetros (hasta 3 idealmente): si necesitas más, agrupa en un objeto.',
        'Usa retorno en lugar de console.log adentro de la función: así la función calcula y quien llama decide qué mostrar.',
        'Prefiere arrow functions para las funciones pequeñas y modernas.',
        'Que el nombre del parámetro sea descriptivo: (precio, cantidad) y no (a, b).'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La receta de la torta',
      codigo: 'function hornear(minutos, temperatura = 180) {\n  return `Horneada ${minutos} min a ${temperatura}°`;\n}\nconsole.log(hornear(45));\nconsole.log(hornear(30, 200));',
      salida: 'Horneada 45 min a 180°\nHorneada 30 min a 200°',
      explicacion: 'La función usa el default 180 cuando solo pasan minutos, y usa el valor 200 cuando lo pasan explícitamente.'
    },
    {
      titulo: 'Arrow con retorno implícito',
      codigo: 'const doble = (n) => n * 2;\nconst dobleLargo = (n) => {\n  return n * 2;\n};\nconsole.log(doble(21));\nconsole.log(dobleLargo(21));',
      salida: '42\n42',
      explicacion: 'Las dos funciones hacen lo mismo. La arrow sin llaves retorna la expresión directamente: es la forma concisa preferida.'
    }
  ],
  ejercicios: [
    {
      titulo: 'La función de la suma',
      dificultad: 'Fácil',
      consigna: ['Crea una función llamada sumar que reciba dos números y devuelva su suma. Llámala con los valores 5 y 7 e imprime el resultado.'],
      pasos: [
        'Define la función con parámetros a y b.',
        'Devuelve a + b con return.',
        'Llámala e imprime el resultado.'
      ],
      codigoInicial: '// Define la función sumar y úsala\n',
      pista: 'function sumar(a, b) { return a + b; } — luego console.log(sumar(5, 7)).',
      tests: [
        { tipo: 'output', nombre: 'Suma impresa', esperado: ['12'], mensaje: '5 + 7 = 12. El resultado de llamar a la función debe imprimirse.' },
        { tipo: 'valor', nombre: 'sumar funciona', expr: 'typeof sumar(10, 3)', esperado: 'number', mensaje: 'La función sumar debe devolver un número.' }
      ],
      solucion: 'function sumar(a, b) {\n  return a + b;\n}\nconsole.log(sumar(5, 7));'
    },
    {
      titulo: 'El doble en arrow',
      dificultad: 'Fácil',
      consigna: ['Define la función doble como arrow function: recibe un número y devuelve su doble. Llámala con 21 e imprime el resultado.'],
      pasos: [
        'Usa const doble = (n) => n * 2 con retorno implícito.',
        'Llámala con 21 e imprime.'
      ],
      codigoInicial: '// Define doble como arrow y úsala\n',
      pista: 'La arrow con una sola expresión no necesita llaves ni return: const doble = (n) => n * 2.',
      tests: [
        { tipo: 'output', nombre: 'El doble de 21', esperado: ['42'], mensaje: 'El doble de 21 es 42.' },
        { tipo: 'valor', nombre: 'doble es función', expr: 'typeof doble', esperado: 'function', mensaje: 'Debe existir una función llamada doble.' }
      ],
      solucion: 'const doble = (n) => n * 2;\nconsole.log(doble(21));'
    },
    {
      titulo: 'Saludo con default',
      dificultad: 'Media',
      consigna: ['Crea la función saludar que reciba un nombre y use el default "visitante" cuando no le pasen ninguno. Debe devolver "Hola, [nombre]". Llámala dos veces: una sin argumento y otra con "Luis", e imprime ambos resultados.'],
      pasos: [
        'La función recibe nombre = "visitante" como parámetro por defecto.',
        'Devuelve el template literal con el saludo.',
        'Imprime las dos llamadas.'
      ],
      codigoInicial: '// Define saludar y haz las dos llamadas\n',
      pista: 'El parámetro por defecto se escribe en la definición: function saludar(nombre = "visitante").',
      tests: [
        { tipo: 'output', nombre: 'Los dos saludos', esperado: ['Hola, visitante', 'Hola, Luis'], mensaje: 'La primera llamada usa el default y la segunda el argumento.' }
      ],
      solucion: 'function saludar(nombre = "visitante") {\n  return `Hola, ${nombre}`;\n}\nconsole.log(saludar());\nconsole.log(saludar("Luis"));'
    },
    {
      titulo: 'Sumar todo con rest',
      dificultad: 'Dificil',
      consigna: ['Crea una función sumarTodo que use rest params para sumar cualquier cantidad de números y devuelva el total. Pruébala con tres números y con cinco.'],
      pasos: [
        'Define sumarTodo(...numeros).',
        'Recorre numeros con un for...of acumulando el total.',
        'Devuelve el total e imprime las dos llamadas.'
      ],
      codigoInicial: '// Define sumarTodo y haz las dos llamadas\n',
      pista: 'const total = 0; luego for (const n of numeros) total += n; y al final return total.',
      tests: [
        { tipo: 'output', nombre: 'Tres y cinco números', esperado: ['6', '100'], mensaje: '1+2+3 = 6 y 10+20+30+40 = 100. Imprime ambas llamadas en ese orden.' }
      ],
      solucion: 'function sumarTodo(...numeros) {\n  let total = 0;\n  for (const n of numeros) total += n;\n  return total;\n}\nconsole.log(sumarTodo(1, 2, 3));\nconsole.log(sumarTodo(10, 20, 30, 40));'
    }
  ]
}