export default {
  id: 'm2-l16',
  numero: 16,
  titulo: 'Métodos de arrays I: agregar, quitar y buscar',
  nivel: 'Fácil',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Mutar', definicion: 'Modificar el array original. push, pop, shift, unshift, reverse y splice mutan el array de verdad.' },
    { termino: 'Cola', definicion: 'Estructura donde los elementos se agregan por un extremo y se sacan por el otro: push y shift.' },
    { termino: 'Pila', definicion: 'Estructura donde el último que entra es el primero que sale: push y pop.' },
    { termino: 'Longitud', definicion: 'La cantidad de elementos del array, en length. El último índice es length - 1.' },
    { termino: 'Búsqueda lineal', definicion: 'Recorrer el array comparando hasta encontrar el valor: indexOf e includes lo hacen por ti.' },
    { termino: 'Invertir', definicion: 'Dar vuelta el orden del array con reverse: el primero pasa al final.' },
    { termino: 'Unir arrays', definicion: 'Juntar dos o más listas en una sola con concat, sin modificar las originales.' }
  ],
  secciones: [
    {
      titulo: 'El array como estantería de la tienda',
      parrafos: [
        'Un array es la estantería del almacén: cada balda tiene un índice (0, 1, 2...) y guarda un producto. Ya sabes crear arrays y leer posiciones; ahora vas a aprender a administrar la estantería: agregar productos, sacarlos, buscar dónde están y ordenarlos.',
        'Los métodos de esta lección se dividen en dos familias: los que MUTAN el array original (push, pop, shift, unshift, reverse) y los que devuelven algo nuevo sin tocar el original (indexOf, includes, join, concat). Saber cuál es cuál evita la mitad de los bugs.'
      ],
      codigo: 'const estante = ["pan", "leche"];\nestante.push("café");\nconsole.log(estante);\nconst sacado = estante.pop();\nconsole.log(sacado);\nconsole.log(estante);',
      salida: '["pan","leche","café"]\ncafé\n["pan","leche"]'
    },
    {
      titulo: 'La tabla de los métodos de esta lección',
      tabla: {
        columnas: ['Método', 'Qué hace', '¿Muta?', 'Ejemplo', 'Resultado'],
        filas: [
          ['push(x)', 'Agrega x al final', 'Sí', '["a"].push("b")', 'queda ["a","b"]'],
          ['pop()', 'Saca el último y lo devuelve', 'Sí', '["a","b"].pop()', 'devuelve "b"'],
          ['unshift(x)', 'Agrega x al principio', 'Sí', '["a"].unshift("b")', 'queda ["b","a"]'],
          ['shift()', 'Saca el primero y lo devuelve', 'Sí', '["a","b"].shift()', 'devuelve "a"'],
          ['indexOf(x)', 'Posición de x (o -1 si no está)', 'No', '["a","b"].indexOf("b")', '1'],
          ['includes(x)', '¿Contiene x?', 'No', '["a","b"].includes("b")', 'true'],
          ['join(sep)', 'Une todo en un texto', 'No', '["a","b"].join("-")', '"a-b"'],
          ['reverse()', 'Invierte el orden', 'Sí', '["a","b"].reverse()', 'queda ["b","a"]'],
          ['concat(otro)', 'Une arrays en uno nuevo', 'No', '["a"].concat(["b"])', '["a","b"]']
        ]
      }
    },
    {
      titulo: 'Agregar y quitar de los extremos',
      parrafos: [
        'push agrega al final, unshift al principio. pop saca del final y devuelve el elemento sacado; shift saca del principio y también lo devuelve. Son la caja registradora: los productos entran y salen por los extremos.',
        'Detalle importante: pop y shift no solo sacan, DEVUELVEN el elemento. Si lo necesitas, guárdalo: const sacado = lista.pop().'
      ],
      codigo: 'const fila = ["pan", "leche"];\nfila.unshift("café");\nconst primero = fila.shift();\nconsole.log(primero);\nconsole.log(fila);',
      salida: 'café\n["pan","leche"]'
    },
    {
      titulo: 'Buscar y preguntar: indexOf e includes',
      parrafos: [
        'indexOf devuelve la posición del elemento, y -1 si no existe. includes responde con true o false si el elemento está. La diferencia es la misma que en los strings: una te da la dirección, la otra te responde "sí o no".'
      ],
      codigo: 'const inventario = ["harina", "azúcar", "sal"];\nconsole.log(inventario.indexOf("azúcar"));\nconsole.log(inventario.indexOf("pimienta"));\nconsole.log(inventario.includes("sal"));',
      salida: '1\n-1\ntrue'
    },
    {
      titulo: 'Invertir y unir listas: reverse y concat',
      parrafos: [
        'reverse da vuelta el array en el lugar (muta). Es como girar la fila de clientes: el último pasa al primero. concat une dos arrays y devuelve uno NUEVO sin tocar los originales: es la cinta transportadora que junta el pedido de dos depósitos.'
      ],
      codigo: 'const a = [1, 2];\nconst b = [3, 4];\nconst unidos = a.concat(b);\nconsole.log(unidos);\nconsole.log(unidos.reverse());',
      salida: '[1,2,3,4]\n[4,3,2,1]'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar que push/unshift/pop/shift MUTAN: no hace falta asignar el resultado. const lista = lista.push(x) guarda un número, no el array.',
        'Usar length como índice del último elemento: el último es array[array.length - 1], no array[array.length].',
        'Olvidar el -1 de indexOf: si el elemento no está, indexOf devuelve -1 y usarlo como índice da resultados raros. Verifica siempre.',
        'Confundir pop (saca del final) con shift (saca del principio): los dos devuelven, pero de extremos opuestos.',
        'Asignar reverse: reverse muta y además devuelve el mismo array. La asignación es redundante y confunde.',
        'Concatenar con + en vez de concat: [1, 2] + [3, 4] convierte los arrays en texto y da "1,23,4".'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Usa const para el array: no reasignarás la lista, solo la modificarás por métodos.',
        'Guarda el resultado de pop/shift solo si lo vas a usar: const sacado = lista.pop().',
        'Prefiere includes sobre indexOf cuando solo quieras saber si algo existe: es más expresivo.',
        'Para invertir sin mutar, copia primero: const invertido = [...lista].reverse() (verás spread en la lección 21).',
        'Nombra las listas con plural: productos, precios, nombres. El código se lee solo.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'La fila del kiosco',
      codigo: 'const fila = ["ana", "luis"];\nfila.push("carla");\nconst atendido = fila.shift();\nconsole.log(`Atendido: ${atendido}`);\nconsole.log(`En fila: ${fila.join(", ")}`);',
      salida: 'Atendido: ana\nEn fila: luis, carla',
      explicacion: 'push agrega a Carla al final, shift saca a Ana del principio y la devuelve. join arma un texto legible con los que quedan.'
    },
    {
      titulo: '¿Está el producto en stock?',
      codigo: 'const stock = ["harina", "azúcar", "sal"];\nconsole.log(stock.includes("sal"));\nconsole.log(stock.indexOf("azúcar"));\nconsole.log(stock.indexOf("té"));',
      salida: 'true\n1\n-1',
      explicacion: 'includes responde si el producto está; indexOf te dice en qué balda, y el -1 final te avisa que el té no existe en el stock.'
    }
  ],
  ejercicios: [
    {
      titulo: 'La lista de la compra con push y pop',
      dificultad: 'Fácil',
      consigna: [
        'Declara const lista = ["pan", "leche"]. Agrega "huevos" al final con push. Después saca el último elemento con pop y guárdalo en una variable. Imprime la lista unida con join(",") y luego el elemento sacado.'
      ],
      pasos: [
        'Declara la lista inicial.',
        'Aplica push("huevos").',
        'Guarda el resultado de pop() en una variable.',
        'Imprime la lista con join(",") y luego el sacado.'
      ],
      codigoInicial: '// Declara lista, agrega, saca e imprime\n',
      pista: 'pop() devuelve el elemento que saca. La lista queda ["pan", "leche"] y el sacado es "huevos".',
      tests: [
        { tipo: 'output', nombre: 'Lista y sacado', esperado: ['pan,leche', 'huevos'], mensaje: 'Después de push y pop la lista queda pan,leche y pop devuelve "huevos".' }
      ],
      solucion: 'const lista = ["pan", "leche"];\nlista.push("huevos");\nconst sacado = lista.pop();\nconsole.log(lista.join(","));\nconsole.log(sacado);'
    },
    {
      titulo: 'Unshift y shift en la fila',
      dificultad: 'Fácil',
      consigna: [
        'Declara const fila = [2, 3]. Agrega el 1 al principio con unshift. Después saca el primer elemento con shift y guárdalo. Imprime el elemento sacado y luego la fila restante con join(",").'
      ],
      pasos: [
        'Declara la fila inicial [2, 3].',
        'Aplica unshift(1).',
        'Guarda shift() en una variable.',
        'Imprime el sacado y la fila restante.'
      ],
      codigoInicial: '// Declara fila, agrega al inicio, saca e imprime\n',
      pista: 'shift() devuelve el primer elemento. La fila queda [2, 3] y el sacado es 1.',
      tests: [
        { tipo: 'output', nombre: 'Sacado y fila', esperado: ['1', '2,3'], mensaje: 'unshift(1) deja [1, 2, 3], shift devuelve 1 y quedan 2 y 3.' }
      ],
      solucion: 'const fila = [2, 3];\nfila.unshift(1);\nconst sacado = fila.shift();\nconsole.log(sacado);\nconsole.log(fila.join(","));'
    },
    {
      titulo: 'Buscar en el inventario',
      dificultad: 'Media',
      consigna: [
        'Declara const inventario = ["rojo", "verde", "azul"]. Imprime tres datos: si incluye "verde" con includes, la posición de "azul" con indexOf, y la posición de "negro" con indexOf (debe dar -1).'
      ],
      pasos: [
        'Declara el inventario.',
        'Pregunta con includes("verde").',
        'Busca "azul" con indexOf.',
        'Busca "negro" con indexOf y muestra los tres.'
      ],
      codigoInicial: '// Declara inventario y haz las búsquedas\n',
      pista: 'indexOf devuelve -1 cuando el elemento no existe en el array.',
      tests: [
        { tipo: 'output', nombre: 'Búsquedas', esperado: ['true', '2', '-1'], mensaje: '"verde" está (true), "azul" está en la posición 2 y "negro" no existe (-1).' }
      ],
      solucion: 'const inventario = ["rojo", "verde", "azul"];\nconsole.log(inventario.includes("verde"));\nconsole.log(inventario.indexOf("azul"));\nconsole.log(inventario.indexOf("negro"));'
    },
    {
      titulo: 'Unir, invertir y juntar',
      dificultad: 'Media',
      consigna: [
        'Declara const a = [1, 2] y const b = [3, 4]. Únelos con concat en una constante c. Invierte c con reverse (muta c) e imprime c y luego c unido sin separador con join("").'
      ],
      pasos: [
        'Declara a y b.',
        'Une con concat en const c.',
        'Invierte con reverse().',
        'Imprime c y luego c.join("").'
      ],
      codigoInicial: '// Declara a y b, une, invierte e imprime\n',
      pista: 'c queda [4, 3, 2, 1] después del reverse, y join("") lo convierte en "4321".',
      tests: [
        { tipo: 'output', nombre: 'Array invertido y texto', esperado: ['[4,3,2,1]', '4321'], mensaje: 'concat une [1, 2] y [3, 4], reverse invierte el orden y join("") lo vuelve texto.' }
      ],
      solucion: 'const a = [1, 2];\nconst b = [3, 4];\nconst c = a.concat(b);\nc.reverse();\nconsole.log(c);\nconsole.log(c.join(""));'
    }
  ]
}
