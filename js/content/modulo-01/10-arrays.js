export default {
  id: 'm1-l10',
  numero: 10,
  titulo: 'Arrays: métodos esenciales',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Array', definicion: 'Una lista ordenada de valores, del 0 en adelante: const frutas = ["manzana", "pera"].' },
    { termino: 'Índice', definicion: 'La posición de un elemento en el array. El primero es el índice 0, no el 1.' },
    { termino: 'Elemento', definicion: 'Cada valor dentro del array. Un array puede mezclar tipos.' },
    { termino: 'Mutar', definicion: 'Modificar el array original (push, pop, splice...). El array cambia de verdad.' },
    { termino: 'Inmutable', definicion: 'Que no modifica el original: map, filter y reduce devuelven un array NUEVO y dejan el original intacto.' },
    { termino: 'Callback', definicion: 'Una función que se pasa como argumento a otra, que la llamará cuando corresponda (por ejemplo, una función que map aplica a cada elemento).' },
    { termino: 'Método', definicion: 'Una función que vive dentro de un valor y se llama con punto: array.push(...).' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un array?',
      parrafos: [
        'Un array es una lista ordenada. Piensa en la estantería del almacén: cada balda tiene un número (0, 1, 2...) y guarda un producto. El array es esa estantería, y el índice es el número de balda.',
        'Se crea con corchetes y se accede con el índice entre corchetes. Recuerda: el primer elemento es el 0.'
      ],
      codigo: 'const frutas = ["manzana", "pera", "uva"];\nconsole.log(frutas[0]);\nconsole.log(frutas[2]);\nconsole.log(frutas.length);',
      salida: 'manzana\nuva\n3'
    },
    {
      titulo: 'Agregar y quitar elementos',
      parrafos: [
        'Los métodos push (agrega al final), pop (saca del final), shift (saca del principio) y unshift (agrega al principio) modifican el array original (lo mutan). Son la caja registradora: vas sumando y restando productos a medida que pasan.'
      ],
      tabla: {
        columnas: ['Método', 'Qué hace', 'Ejemplo', 'Resultado'],
        filas: [
          ['push(x)', 'Agrega x al final', '["a"].push("b")', '["a","b"]'],
          ['pop()', 'Saca el último y lo devuelve', '["a","b"].pop()', 'devuelve "b", queda ["a"]'],
          ['unshift(x)', 'Agrega x al principio', '["a"].unshift("b")', '["b","a"]'],
          ['shift()', 'Saca el primero y lo devuelve', '["a","b"].shift()', 'devuelve "a", queda ["b"]'],
          ['includes(x)', '¿Contiene x? (true/false)', '["a"].includes("a")', 'true'],
          ['indexOf(x)', 'Posición de x (o -1)', '["a","b"].indexOf("b")', '1'],
          ['join("-")', 'Une los elementos en texto', '["a","b"].join("-")', '"a-b"'],
          ['slice(1,3)', 'Copia un tramo (no muta)', '["a","b","c"].slice(1,3)', '["b","c"]'],
          ['splice(1,1)', 'Quita/reemplaza (muta)', '["a","b","c"].splice(1,1)', 'queda ["a","c"]'],
          ['concat([...])', 'Une arrays (no muta)', '["a"].concat(["b"])', '["a","b"]']
        ]
      }
    },
    {
      titulo: 'map, filter y reduce: la trinidad',
      parrafos: [
        'Estos tres métodos son los más importantes del lenguaje y NO mutan el array original: devuelven uno nuevo (o un valor calculado). Son la "transformadora" de datos.',
        'map transforma CADA elemento y devuelve un array del mismo tamaño con los resultados. filter selecciona los elementos que pasan una condición y devuelve un array más chico o igual. reduce acumula todos los elementos en UN solo valor (suma, promedio, máximo...).'
      ],
      codigo: 'const precios = [100, 250, 75];\nconst conIva = precios.map((p) => p * 1.21);\nconst baratos = precios.filter((p) => p < 200);\nconst total = precios.reduce((acc, p) => acc + p, 0);\nconsole.log(conIva);\nconsole.log(baratos);\nconsole.log(total);',
      salida: '[121,302.5,90.75]\n[100,75]\n425'
    },
    {
      titulo: 'find, some, every: buscar y preguntar',
      parrafos: [
        'find devuelve el PRIMER elemento que cumple la condición (o undefined). some responde "¿hay ALGUNO que cumpla?" con true/false. every responde "¿TODOS cumplen?" con true/false.'
      ],
      codigo: 'const notas = [4, 7, 9];\nconst primerAprobado = notas.find((n) => n >= 6);\nconsole.log(primerAprobado);\nconsole.log(notas.some((n) => n < 4));\nconsole.log(notas.every((n) => n > 3));',
      salida: '7\nfalse\ntrue'
    },
    {
      titulo: 'sort: ordenar',
      parrafos: [
        'sort ordena el array... pero con una trampa famosa: ordena como texto por defecto, así que [10, 2, 1] queda [1, 10, 2]. Para ordenar números hay que pasarle una función comparadora (a, b) => a - b (ascendente) o (a, b) => b - a (descendente).'
      ],
      codigo: 'const numeros = [10, 2, 33];\nconsole.log(numeros.sort());\nconsole.log(numeros.sort((a, b) => a - b));\nconsole.log(numeros.sort((a, b) => b - a));',
      salida: '[10,2,33]\n[2,10,33]\n[33,10,2]'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Fuera de índice: frutas[5] en un array de 3 no da error, devuelve undefined y el bug puede pasar desapercibido.',
        'Usar length como si fuera el último índice: el último elemento es frutas[frutas.length - 1], no frutas[frutas.length].',
        'Olvidar que map/filter NO mutan: si esperas cambios en el original, no los verás. Guarda el resultado: const nuevo = array.map(...).',
        'Ordenar números sin comparador: sort() solo por defecto es texto.',
        'Reduce sin valor inicial: reduce((acc, x) => acc + x, 0) — el 0 final evita sorpresas con arrays vacíos.',
        'Confundir splice (muta y corta) con slice (copia y no muta): se parecen pero son opuestos en comportamiento.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa const para arrays: no reasignarás la lista, solo la modificarás por métodos.',
        'Prefiere map/filter/reduce sobre los bucles for clásicos para transformar datos: son más expresivos y sin efectos secundarios.',
        'Nombra los callbacks con sentido: precios.map((precio) => ...) y no precios.map((x) => ...).',
        'Elige el método justo: ¿transformar? map. ¿filtrar? filter. ¿acumular? reduce. ¿buscar uno? find. ¿preguntar? some/every.',
        'No combines varias transformaciones en una sola línea: encadena con claridad y separa en variables si se complica.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El inventario con map y filter',
      codigo: 'const precios = [1200, 800, 2500, 450];\nconst conIva = precios.map((p) => p * 1.21);\nconst accesibles = precios.filter((p) => p <= 1000);\nconsole.log("Con IVA:", conIva);\nconsole.log("Accesibles:", accesibles);',
      salida: 'Con IVA: [1452,968,3025,544.5]\nAccesibles: [800,450]',
      explicacion: 'map recorre cada precio y devuelve el precio con IVA. filter deja pasar solo los menores o iguales a 1000. Ninguno tocó el array original.'
    },
    {
      titulo: 'reduce: el total de la caja',
      codigo: 'const ventas = [1500, 2300, 900, 4100];\nconst total = ventas.reduce((acumulado, venta) => acumulado + venta, 0);\nconsole.log(`Vendimos $${total} hoy`);',
      salida: 'Vendimos $8800 hoy',
      explicacion: 'reduce camina el array llevando un acumulado: empieza en 0 (el segundo argumento) y en cada vuelta le suma la venta.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Agregar y quitar de la lista',
      dificultad: 'Fácil',
      consigna: ['Declara const lista = ["pan", "leche"]. Agrega "huevos" al final con push, agrega "café" al principio con unshift, saca el último elemento con pop y guarda el resultado en una variable. Imprime la lista final y el elemento sacado.'],
      pasos: [
        'Declara el array inicial.',
        'push y unshift para agregar.',
        'pop devuelve el sacado: guárdalo.',
        'Imprime la lista y luego el sacado.'
      ],
      codigoInicial: '// Declara la lista y haz las operaciones\n',
      pista: 'pop() devuelve el elemento que saca. La lista final es ["café", "pan", "leche"].',
      tests: [
        { tipo: 'output', nombre: 'Lista y elemento sacado', esperado: ['café,pan,leche', 'huevos'], mensaje: 'La lista final (con join) es café,pan,leche y pop devuelve "huevos".' }
      ],
      solucion: 'const lista = ["pan", "leche"];\nlista.push("huevos");\nlista.unshift("café");\nconst sacado = lista.pop();\nconsole.log(lista.join(","));\nconsole.log(sacado);'
    },
    {
      titulo: 'Precios con IVA',
      dificultad: 'Fácil',
      consigna: ['Declara const precios = [100, 200, 300]. Usa map para crear un nuevo array con cada precio + 100 de envío. Imprime el array nuevo.'],
      pasos: [
        'map con el callback (precio) => precio + 100.',
        'Guarda el resultado en una constante.',
        'Imprime el array resultante.'
      ],
      codigoInicial: '// Declara precios, aplica map e imprime\n',
      pista: 'const conEnvio = precios.map((precio) => precio + 100);',
      tests: [
        { tipo: 'output', nombre: 'Precios con envío', esperado: ['[200,300,400]'], mensaje: 'El array nuevo debe ser [200,300,400].' },
        { tipo: 'valor', nombre: 'conEnvio existe', expr: 'Array.isArray(conEnvio)', esperado: true, mensaje: 'Debes guardar el resultado de map en una variable llamada conEnvio.' }
      ],
      solucion: 'const precios = [100, 200, 300];\nconst conEnvio = precios.map((precio) => precio + 100);\nconsole.log(conEnvio);'
    },
    {
      titulo: 'Filtrar baratos',
      dificultad: 'Media',
      consigna: ['Declara const precios = [1500, 300, 8900, 450]. Usa filter para quedarte con los precios menores a 1000 y devolverlos. Imprime el array filtrado.'],
      pasos: [
        'filter con la condición precio < 1000.',
        'Guarda el resultado.',
        'Imprime el array filtrado.'
      ],
      codigoInicial: '// Declara precios, filtra e imprime\n',
      pista: 'const baratos = precios.filter((precio) => precio < 1000);',
      tests: [
        { tipo: 'output', nombre: 'Solo los baratos', esperado: ['[300,450]'], mensaje: 'De los cuatro precios, solo 300 y 450 son menores a 1000.' }
      ],
      solucion: 'const precios = [1500, 300, 8900, 450];\nconst baratos = precios.filter((precio) => precio < 1000);\nconsole.log(baratos);'
    },
    {
      titulo: 'Total con reduce',
      dificultad: 'Media',
      consigna: ['Declara const ventas = [1200, 800, 2300]. Usa reduce para sumar todas las ventas y devolver el total. Imprime el total.'],
      pasos: [
        'reduce con acumulador inicial 0.',
        'El callback suma la venta al acumulado.',
        'Imprime el resultado.'
      ],
      codigoInicial: '// Declara ventas, reduce e imprime\n',
      pista: 'ventas.reduce((acumulado, venta) => acumulado + venta, 0)',
      tests: [
        { tipo: 'output', nombre: 'Total de ventas', esperado: ['4300'], mensaje: '1200 + 800 + 2300 = 4300.' },
        { tipo: 'valor', nombre: 'total existe', expr: 'typeof total', esperado: 'number', mensaje: 'Guarda el resultado de reduce en una variable llamada total.' }
      ],
      solucion: 'const ventas = [1200, 800, 2300];\nconst total = ventas.reduce((acumulado, venta) => acumulado + venta, 0);\nconsole.log(total);'
    }
  ]
}