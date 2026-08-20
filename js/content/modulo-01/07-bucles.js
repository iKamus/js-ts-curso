export default {
  id: 'm1-l07',
  numero: 7,
  titulo: 'Bucles: for, while, do-while, for...of y for...in',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Bucle (loop)', definicion: 'Una estructura que repite un bloque de código mientras se cumpla una condición.' },
    { termino: 'Iteración', definicion: 'Cada vuelta completa del bucle: una ejecución del bloque repetido.' },
    { termino: 'Condición de salida', definicion: 'La condición que decide si el bucle sigue dando vueltas o termina. Si nunca se cumple, el bucle es infinito.' },
    { termino: 'Bucle infinito', definicion: 'Un bucle cuya condición nunca se vuelve falsa: el programa queda colgado repitiendo para siempre.' },
    { termino: 'break', definicion: 'Instrucción que corta el bucle inmediatamente, salte a lo que salte la condición.' },
    { termino: 'continue', definicion: 'Instrucción que salta a la siguiente vuelta del bucle, ignorando el resto del bloque.' },
    { termino: 'Iterable', definicion: 'Algo que se puede recorrer elemento por elemento, como un array o un string.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un bucle?',
      parrafos: [
        'Un bucle repite un bloque de código muchas veces sin que tengas que copiarlo. Imagina el repartidor de la tienda: mientras haya pedidos en la lista, agarra el siguiente, lo entrega y sigue. "Mientras haya pedidos" es la condición; "entregar uno" es el bloque repetido.',
        'Hay tres bucles clásicos (for, while, do-while) y dos modernos para recorrer colecciones (for...of y for...in). Cada uno tiene su momento.'
      ]
    },
    {
      titulo: 'for: repetición con contador',
      parrafos: [
        'El for es el bucle con contador: sabes exactamente cuántas vueltas dará. Tiene tres partes separadas por punto y coma dentro del paréntesis: inicialización (let i = 1), condición (i <= 5) y actualización (i++). El bloque se repite mientras la condición sea true.',
        'El nombre clásico del contador es i (de índice), pero puedes llamarlo como quieras. i++ equivale a i = i + 1.'
      ],
      codigo: 'for (let i = 1; i <= 5; i++) {\n  console.log(`Vuelta ${i}`);\n}',
      salida: 'Vuelta 1\nVuelta 2\nVuelta 3\nVuelta 4\nVuelta 5'
    },
    {
      titulo: 'while: repetición con condición',
      parrafos: [
        'El while repite mientras la condición sea true. Sirve cuando NO sabes cuántas vueltas habrá: "mientras haya clientes en la fila, atiende". La condición se evalúa ANTES de cada vuelta: si ya es false al empezar, el bloque no corre ni una vez.',
        'Cuidado clave: dentro del bloque, algo debe acercar la condición a false. Si la condición nunca cambia, tienes un bucle infinito.'
      ],
      codigo: 'let energia = 5;\nwhile (energia > 0) {\n  console.log(`Energía: ${energia}`);\n  energia--;\n}',
      salida: 'Energía: 5\nEnergía: 4\nEnergía: 3\nEnergía: 2\nEnergía: 1'
    },
    {
      titulo: 'do-while: al menos una vuelta',
      parrafos: [
        'El do-while es igual al while, pero evalúa la condición DESPUÉS de cada vuelta: el bloque se ejecuta al menos una vez siempre. Piensa en el vendedor que ofrece el producto una vez sí o sí, y recién después pregunta si quiere seguir escuchando.'
      ],
      codigo: 'let intentos = 0;\ndo {\n  intentos++;\n  console.log(`Intento ${intentos}`);\n} while (intentos < 2);',
      salida: 'Intento 1\nIntento 2'
    },
    {
      titulo: 'for...of: recorrer colecciones',
      parrafos: [
        'El for...of recorre cada elemento de un iterable (array, string, etc.) sin contadores ni índices: por cada elemento, lo guarda en la variable y ejecuta el bloque. Es la forma más limpia de recorrer un array. (Los arrays se explican a fondo en la lección 10; aquí los usas un poquito.)'
      ],
      codigo: 'const frutas = ["manzana", "pera", "uva"];\nfor (const fruta of frutas) {\n  console.log(`Llevo ${fruta}`);\n}',
      salida: 'Llevo manzana\nLlevo pera\nLlevo uva'
    },
    {
      titulo: 'for...in: recorrer propiedades de objetos',
      parrafos: [
        'El for...in recorre las claves (nombres de propiedades) de un objeto. Sirve para inspeccionar un objeto sin saber sus propiedades de antemano. (Los objetos se explican a fondo en la lección 11; aquí ves la idea.)'
      ],
      codigo: 'const producto = { nombre: "té", precio: 900, stock: 12 };\nfor (const clave in producto) {\n  console.log(`${clave}: ${producto[clave]}`);\n}',
      salida: 'nombre: té\nprecio: 900\nstock: 12'
    },
    {
      titulo: 'break y continue: frenar y saltar',
      parrafos: [
        'break corta el bucle por completo: "ya encontré lo que buscaba, salgo". continue salta la vuelta actual: "este elemento no me interesa, paso al siguiente". Funcionan en los tres bucles clásicos.'
      ],
      codigo: 'for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  if (i === 5) break;\n  console.log(i);\n}',
      salida: '1\n2\n4'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Bucle infinito: olvidar actualizar el contador o que la condición nunca cambie. Si el programa "se cuelga", revisa que algo dentro del bucle lo acerque a terminar.',
        'Confundir for...of con for...in: for...of da los VALORES; for...in da las CLAVES (los nombres).',
        'Condición con = en vez de ===: i = 10 dentro del while asigna y nunca termina.',
        'Fuera por uno (off-by-one): for (let i = 0; i < 5; i++) da 5 vueltas (0 a 4), no 6. Cuenta desde 0.',
        'Declarar el contador con const en un for clásico: i++ necesita let.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Prefiere for...of para recorrer arrays: es el más legible y no usa índices.',
        'Usa for clásico cuando necesites el índice o un conteo numérico exacto.',
        'Usa while cuando la cantidad de vueltas sea impredecible (leer entradas, procesos hasta que algo cambie).',
        'Evita do-while salvo que necesites sí o sí una primera ejecución.',
        'Nombre el contador de forma clara (i, j, o mejor: porIndice) y evita bucles anidados profundos (dos niveles como máximo).',
        'Antes de cada bucle, pregúntate: ¿este bucle termina alguna vez?'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La fila del supermercado',
      codigo: 'let fila = 3;\nwhile (fila > 0) {\n  console.log(`Cliente ${fila} atendido`);\n  fila--;\n}\nconsole.log("Caja libre");',
      salida: 'Cliente 3 atendido\nCliente 2 atendido\nCliente 1 atendido\nCaja libre',
      explicacion: 'El while cuenta hacia atrás: mientras queden clientes, atiende uno y decrementa. Cuando fila llega a 0, la condición es false y se sale del bucle.'
    },
    {
      titulo: 'Recorrer con for...of',
      codigo: 'const precios = [100, 250, 75];\nlet total = 0;\nfor (const precio of precios) {\n  total += precio;\n}\nconsole.log(`Total: ${total}`);',
      salida: 'Total: 425',
      explicacion: 'El for...of suma cada precio a total. Fíjate que total se declara FUERA del bucle: así conserva el valor acumulado entre vueltas.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Contar hasta 5',
      dificultad: 'Fácil',
      consigna: ['Usa un bucle for para imprimir los números del 1 al 5, uno por línea.'],
      pasos: [
        'Inicializa el contador en 1.',
        'Condición: continuar mientras sea menor o igual a 5.',
        'Incrementa con i++ e imprime el valor en cada vuelta.'
      ],
      codigoInicial: '// Escribe el bucle for\n',
      pista: 'for (let i = 1; i <= 5; i++) { ... }',
      tests: [
        { tipo: 'output', nombre: 'Los cinco números', esperado: ['1', '2', '3', '4', '5'], mensaje: 'Deben imprimirse los números del 1 al 5, uno por línea.' }
      ],
      solucion: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'
    },
    {
      titulo: 'Cuenta regresiva',
      dificultad: 'Fácil',
      consigna: ['Declara let cuenta = 3. Usa un bucle while que imprima el valor de cuenta y lo decremente, mientras cuenta sea mayor que 0. Al final, imprime "¡Despegue!".'],
      pasos: [
        'El while corre mientras cuenta > 0.',
        'Dentro: imprime cuenta y luego cuenta--.',
        'Después del bucle, imprime el mensaje final.'
      ],
      codigoInicial: '// Declara la variable y escribe el while\n',
      pista: 'El bloque debe imprimir y decrementar: console.log(cuenta); cuenta--;',
      tests: [
        { tipo: 'output', nombre: 'La cuenta regresiva', esperado: ['3', '2', '1', '¡Despegue!'], mensaje: 'Tres números (3, 2, 1) y luego el mensaje ¡Despegue! después del bucle.' }
      ],
      solucion: 'let cuenta = 3;\nwhile (cuenta > 0) {\n  console.log(cuenta);\n  cuenta--;\n}\nconsole.log("¡Despegue!");'
    },
    {
      titulo: 'Lista de compras',
      dificultad: 'Media',
      consigna: ['Declara el array const compras = ["pan", "leche", "huevos"]. Usa for...of para imprimir "Comprar: [elemento]" por cada elemento.'],
      pasos: [
        'El for...of recorre el array.',
        'Interpola cada elemento con un template literal.'
      ],
      codigoInicial: '// Declara el array y recórrelo con for...of\n',
      pista: 'for (const item of compras) { ... } — dentro, imprime `Comprar: ${item}`.',
      tests: [
        { tipo: 'output', nombre: 'Lista completa', esperado: ['Comprar: pan', 'Comprar: leche', 'Comprar: huevos'], mensaje: 'Cada elemento del array debe imprimirse con el prefijo "Comprar: ".' }
      ],
      solucion: 'const compras = ["pan", "leche", "huevos"];\nfor (const item of compras) {\n  console.log(`Comprar: ${item}`);\n}'
    },
    {
      titulo: 'Solo los pares',
      dificultad: 'Media',
      consigna: ['Usa un bucle for del 1 al 10 que imprima SOLO los números pares, saltando los impares con continue.'],
      pasos: [
        'El for recorre del 1 al 10.',
        'Si el número es impar (i % 2 !== 0), usa continue para saltar la vuelta.',
        'El console.log queda al final del bloque.'
      ],
      codigoInicial: '// Escribe el bucle con continue\n',
      pista: 'Un número es par si i % 2 === 0. La condición del continue es la contraria: i % 2 !== 0.',
      tests: [
        { tipo: 'output', nombre: 'Los pares del 1 al 10', esperado: ['2', '4', '6', '8', '10'], mensaje: 'Solo los pares: 2, 4, 6, 8, 10, uno por línea.' }
      ],
      solucion: 'for (let i = 1; i <= 10; i++) {\n  if (i % 2 !== 0) continue;\n  console.log(i);\n}'
    }
  ]
}