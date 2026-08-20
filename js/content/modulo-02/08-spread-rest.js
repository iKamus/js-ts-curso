export default {
  id: 'm2-l21',
  numero: 21,
  titulo: 'Spread y rest: los tres puntos que lo cambian todo',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Spread (...)', definicion: 'Expande los elementos de un array (o las propiedades de un objeto) donde aparezcan los tres puntos: [...lista].' },
    { termino: 'Rest (...)', definicion: 'Agrupa los argumentos restantes en un array dentro de una función: (...numeros). Se usa en parámetros.' },
    { termino: 'Copia', definicion: 'Un array nuevo con los mismos elementos. [...original] copia sin compartir referencia.' },
    { termino: 'Combinar', definicion: 'Juntar varios arrays u objetos en uno solo con spread: [...a, ...b] o { ...base, ...extra }.' },
    { termino: 'Argumentos variables', definicion: 'Una función que recibe cualquier cantidad de argumentos gracias al rest: sumar(1, 2), sumar(1, 2, 3, 4).' },
    { termino: 'Referencia', definicion: 'La "dirección" del array en memoria. Copiar con = no copia datos, solo la dirección.' },
    { termino: 'Expansión', definicion: 'Lo que hace spread: desparramar los elementos de un iterable, como abrir la caja y volcar su contenido.' }
  ],
  secciones: [
    {
      titulo: 'El mismo símbolo, dos trabajos',
      parrafos: [
        'Los tres puntos (...) hacen dos trabajos según dónde aparezcan. En un LUGAR DE VALORES, spread expande: toma un array y desparrama sus elementos. En los PARÁMETROS de una función, rest agrupa: junta todos los argumentos que lleguen en un array.',
        'La analogía del reparto: spread es abrir la caja de productos y volcarlos sobre el mostrador uno por uno; rest es juntar todos los sobres que te pasan y ponerlos en una sola pila.'
      ],
      codigo: 'const a = [1, 2];\nconst b = [3, 4];\nconst combinado = [...a, ...b];\nconsole.log(combinado);\nconst sumar = (...numeros) => numeros.reduce((ac, n) => ac + n, 0);\nconsole.log(sumar(1, 2, 3));',
      salida: '[1,2,3,4]\n6'
    },
    {
      titulo: 'Copiar sin compartir referencia',
      parrafos: [
        'const copia = original NO copia el array: las dos variables apuntan a la misma lista. Si modificas una, la otra cambia también. Con spread creas un array nuevo e independiente: const copia = [...original].',
        'Esto es imprescindible cuando un método muta (como sort o reverse) y quieres conservar el original.'
      ],
      codigo: 'const original = [1, 2, 3];\nconst copia = [...original];\ncopia.push(4);\nconsole.log(copia);\nconsole.log(original);',
      salida: '[1,2,3,4]\n[1,2,3]'
    },
    {
      titulo: 'Combinar y expandir',
      parrafos: [
        'Con spread puedes unir arrays en cualquier posición: [0, ...lista] agrega un elemento antes; [...lista, "final"] agrega al final. También funciona con strings: [..."hola"] da ["h", "o", "l", "a"].',
        'Y sirve para llamar funciones: Math.max(...numeros) expande el array en argumentos individuales.'
      ],
      codigo: 'const base = [2, 3];\nconsole.log([1, ...base, 4]);\nconst palabra = "hola";\nconsole.log([...palabra]);\nconst numeros = [4, 9, 2];\nconsole.log(Math.max(...numeros));',
      salida: '[1,2,3,4]\n["h","o","l","a"]\n9'
    },
    {
      titulo: 'rest: argumentos variables',
      parrafos: [
        'Los tres puntos en los parámetros se llaman rest y agrupan todos los argumentos en un array. Es como decirle a la función "aceptá lo que venga y ponelo en esta pila".',
        'Solo puede haber un parámetro rest y debe ser el último: function(primero, ...resto). El array rest siempre es un array real, aunque no llegue ningún argumento (en ese caso es vacío).'
      ],
      codigo: 'const sumar = (...numeros) => numeros.reduce((ac, n) => ac + n, 0);\nconsole.log(sumar(5));\nconsole.log(sumar(5, 10, 15));',
      salida: '5\n30'
    },
    {
      titulo: 'Spread y rest: la tabla de diferencias',
      tabla: {
        columnas: ['Aspecto', 'Spread', 'Rest'],
        filas: [
          ['Dónde aparece', 'En lugares de valores: arrays, objetos, llamadas', 'En parámetros de funciones'],
          ['Qué hace', 'Expande elementos', 'Agrupa argumentos'],
          ['Ejemplo', 'const c = [...a, ...b]', 'function f(...nums) { }'],
          ['Resultado', 'Elementos individuales', 'Un array con todos'],
          ['Dirección mental', 'Abrir la caja y volcar', 'Juntar todo en la pila']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Creer que const b = a copia: ambas apuntan a la misma lista. Usa [...a] para copiar de verdad.',
        'Usar rest en el lugar equivocado: en la llamada no hay rest; los tres puntos en una llamada son spread.',
        'Poner el rest en el medio de los parámetros: function(a, ...resto, b) es un error de sintaxis. Debe ir último.',
        'Olvidar que la copia con spread es superficial: [...lista] copia los elementos, pero si son objetos, comparten los mismos objetos. Para copias profundas se necesita otra técnica.',
        'Usar spread sobre no iterables: [...5] da error. Solo arrays, strings y objetos iterables se expanden.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa [...array] para proteger arrays de métodos que mutan: sort y reverse son los casos clásicos.',
        'Nombra el parámetro rest con plural: (...precios), (...notas).',
        'Usa spread para combinar arrays en orden legible: [primeraFila, ...intermedias, ultimaFila].',
        'Verifica que el iterable sea válido antes de expandir: [...null] da error.',
        'Prefiere Math.max(...numeros) sobre escribir Math.max(numeros[0], numeros[1], ...) manualmente.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La fila se duplica',
      codigo: 'const fila = ["ana", "luis"];\nconst filaNueva = [...fila, "carla"];\nfilaNueva.push("marta");\nconsole.log(filaNueva);\nconsole.log(fila);',
      salida: '["ana","luis","carla","marta"]\n["ana","luis"]',
      explicacion: 'filaNueva es un array independiente: agregarle gente no toca la fila original. Es la copia con spread en acción.'
    },
    {
      titulo: 'El promedio con rest',
      codigo: 'const promedio = (...notas) => {\n  const suma = notas.reduce((ac, n) => ac + n, 0);\n  return suma / notas.length;\n};\nconsole.log(promedio(7, 8));\nconsole.log(promedio(7, 8, 9, 10));',
      salida: '7.5\n8.5',
      explicacion: 'rest agrupa los argumentos en el array notas, sin importar cuántos lleguen. La misma función sirve para 2 o para 4 notas.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Copiar para no romper la lista',
      dificultad: 'Fácil',
      consigna: [
        'Declara const carrito = ["pan", "leche"]. Crea una copia con spread llamada copia. Agrégale "café" con push a la copia. Imprime la copia y después el carrito original: el original no debe tener café.'
      ],
      pasos: [
        'Declara el carrito original.',
        'Copia con const copia = [...carrito].',
        'Agrega "café" a la copia con push.',
        'Imprime la copia y luego el original.'
      ],
      codigoInicial: '// Declara carrito, cópialo, agrega a la copia e imprime ambas\n',
      pista: 'const copia = [...carrito]; modifica la copia, el original queda intacto.',
      tests: [
        { tipo: 'output', nombre: 'Copia y original', esperado: ['["pan","leche","café"]', '["pan","leche"]'], mensaje: 'La copia debe tener café y el original debe seguir con solo pan y leche.' }
      ],
      solucion: 'const carrito = ["pan", "leche"];\nconst copia = [...carrito];\ncopia.push("café");\nconsole.log(copia);\nconsole.log(carrito);'
    },
    {
      titulo: 'Combinar dos listas',
      dificultad: 'Fácil',
      consigna: [
        'Declara const a = [1, 2] y const b = [3, 4]. Combínalos con spread en una constante c e imprime el resultado.'
      ],
      pasos: [
        'Declara a y b.',
        'Combina con [...a, ...b] en const c.',
        'Imprime c.'
      ],
      codigoInicial: '// Declara a y b, combina con spread e imprime\n',
      pista: 'const c = [...a, ...b];',
      tests: [
        { tipo: 'output', nombre: 'Combinado', esperado: ['[1,2,3,4]'], mensaje: 'El resultado debe ser [1,2,3,4].' }
      ],
      solucion: 'const a = [1, 2];\nconst b = [3, 4];\nconst c = [...a, ...b];\nconsole.log(c);'
    },
    {
      titulo: 'Suma con argumentos variables',
      dificultad: 'Media',
      consigna: [
        'Escribe una función flecha llamada sumar con rest que sume todos los argumentos que reciba y los devuelva. Llámala con sumar(1, 2, 3) e imprime el resultado, y después con sumar(4, 5).'
      ],
      pasos: [
        'Define sumar con parámetro rest: (...numeros).',
        'Dentro, suma con reduce y devuelve.',
        'Llama con sumar(1, 2, 3) e imprime.',
        'Llama con sumar(4, 5) e imprime.'
      ],
      codigoInicial: '// Define sumar con rest y pruébala dos veces\n',
      pista: 'const sumar = (...numeros) => numeros.reduce((ac, n) => ac + n, 0);',
      tests: [
        { tipo: 'output', nombre: 'Dos llamadas', esperado: ['6', '9'], mensaje: 'sumar(1, 2, 3) da 6 y sumar(4, 5) da 9.' },
        { tipo: 'valor', nombre: 'sumar es función', expr: 'typeof sumar', esperado: 'function', mensaje: 'Debe existir una función llamada sumar.' }
      ],
      solucion: 'const sumar = (...numeros) => numeros.reduce((ac, n) => ac + n, 0);\nconsole.log(sumar(1, 2, 3));\nconsole.log(sumar(4, 5));'
    },
    {
      titulo: 'El máximo con spread',
      dificultad: 'Media',
      consigna: [
        'Declara const numeros = [4, 9, 2, 7]. Usa Math.max con spread para encontrar el mayor del array, guárdalo en una constante e imprime el resultado.'
      ],
      pasos: [
        'Declara el array de números.',
        'Llama a Math.max(...numeros).',
        'Guarda el resultado en una constante.',
        'Imprime el mayor.'
      ],
      codigoInicial: '// Declara numeros y calcula el máximo con spread\n',
      pista: 'Math.max(...numeros) expande el array en argumentos individuales.',
      tests: [
        { tipo: 'output', nombre: 'El mayor', esperado: ['9'], mensaje: 'De 4, 9, 2 y 7, el mayor es 9.' },
        { tipo: 'valor', nombre: 'maximo existe', expr: 'typeof maximo', esperado: 'number', mensaje: 'Guarda el resultado en una variable llamada maximo.' }
      ],
      solucion: 'const numeros = [4, 9, 2, 7];\nconst maximo = Math.max(...numeros);\nconsole.log(maximo);'
    }
  ]
}
