export default {
  id: 'm1-l04',
  numero: 4,
  titulo: 'Operadores',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Operador', definicion: 'Un símbolo que realiza una operación con uno o más valores, como + (suma), === (comparación) o && (y lógico).' },
    { termino: 'Operando', definicion: 'Cada valor que participa en una operación. En 5 + 3, los operandos son 5 y 3.' },
    { termino: 'Igualdad estricta', definicion: 'Comparación con === que exige mismo valor Y mismo tipo. Es la recomendada siempre.' },
    { termino: 'Precedencia', definicion: 'El orden en que JavaScript resuelve los operadores cuando hay varios: como en matemática, primero * y /, después + y -. El paréntesis manda.' },
    { termino: 'Cortocircuito', definicion: 'El comportamiento de && y || de evaluar solo lo necesario: si ya se decidió el resultado, lo demás no se ejecuta.' },
    { termino: 'Operador ternario', definicion: 'Un if/else en una sola expresión: condicion ? valorSiVerdadero : valorSiFalso.' },
    { termino: 'Falsy', definicion: 'Valores que se comportan como false en condiciones: 0, "" (texto vacío), null, undefined, NaN y false.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es un operador?',
      parrafos: [
        'Un operador es una operación con uno o dos valores. Es como la receta de cocina entre dos ingredientes: tienes el ingrediente izquierdo, el símbolo de la operación, y el ingrediente derecho. 5 + 3 le dice a JavaScript "suma 5 y 3".',
        'Los operadores se agrupan en familias: aritméticos (calcular), de comparación (comparar valores), lógicos (combinar verdaderos y falsos) y unos cuantos modernos muy útiles como ?? y ?.'
      ]
    },
    {
      titulo: 'Operadores aritméticos',
      parrafos: [
        'Son los que ya conoces de la matemática, con dos agregados: el módulo % (el resto de una división) y la potencia **. También existen los atajos +=, -=, *=, /= (sumar y asignar en un solo paso) y los incrementos ++ y -- (sumar o restar 1).'
      ],
      tabla: {
        columnas: ['Operador', 'Qué hace', 'Ejemplo', 'Resultado'],
        filas: [
          ['+', 'Suma (o concatena texto)', '7 + 5', '12'],
          ['-', 'Resta', '7 - 5', '2'],
          ['*', 'Multiplicación', '7 * 5', '35'],
          ['/', 'División', '7 / 2', '3.5'],
          ['%', 'Resto (módulo)', '7 % 2', '1'],
          ['**', 'Potencia', '2 ** 3', '8'],
          ['+=', 'Suma y asigna', 'let x = 2; x += 3', 'x vale 5'],
          ['++', 'Incrementa en 1', 'let x = 2; x++', 'x vale 3']
        ]
      },
      codigo: 'console.log(17 % 5);\nconsole.log(3 ** 2);\nlet caja = 10;\ncaja += 5;\nconsole.log(caja);',
      salida: '2\n9\n15'
    },
    {
      titulo: 'Operadores de comparación: === vs ==',
      parrafos: [
        'La comparación más importante del lenguaje es la igualdad estricta ===: devuelve true solo si los dos valores son iguales Y del mismo tipo. Su opuesta es !== (distinto estricto).',
        'La igualdad suelta == intenta "acomodar" los tipos antes de comparar (convierte implícitamente), lo que produce resultados confusos: 5 == "5" es true, mientras que 5 === "5" es false. Regla de oro: usa siempre === y !==, y olvídate de == y !=. También hay comparaciones de orden: <, >, <=, >=.'
      ],
      codigo: 'console.log(5 === 5);\nconsole.log(5 === "5");\nconsole.log(5 == "5");\nconsole.log(10 >= 8);\nconsole.log("a" !== "b");',
      salida: 'true\nfalse\ntrue\ntrue\ntrue',
      lista: [
        'En la vida real, == solo aporta bugs silenciosos: 0 == "" es true, "" == false es true. Con === todo eso queda en false, que es lo lógico.'
      ]
    },
    {
      titulo: 'Operadores lógicos: &&, || y !',
      parrafos: [
        'Los operadores lógicos combinan condiciones. && (y) devuelve true solo si AMBAS son verdaderas. || (o) devuelve true si AL MENOS UNA es verdadera. ! (negación) invierte el valor: !true es false.',
        'Tienen un comportamiento llamado cortocircuito: en A && B, si A es falsa, B ni se evalúa (el resultado ya es false). En A || B, si A es verdadera, B ni se evalúa. Esto se aprovecha en código real, como verás en las buenas prácticas.'
      ],
      codigo: 'console.log(true && true);\nconsole.log(true && false);\nconsole.log(true || false);\nconsole.log(false || false);\nconsole.log(!true);\nconsole.log(!(5 > 10));',
      salida: 'true\nfalse\ntrue\nfalse\nfalse\ntrue'
    },
    {
      titulo: 'Operador ternario: la decisión en una línea',
      parrafos: [
        'El ternario es un if/else compacto que devuelve un valor: condicion ? valorSiVerdadero : valorSiFalso. "¿La condición es verdadera? Entonces lo primero; si no, lo segundo." Piensa en el guardia del supermercado: ¿tenés más de 18? → dejalo pasar : pedile el DNI.'
      ],
      codigo: 'const edad = 20;\nconst mensaje = edad >= 18 ? "puede pasar" : "necesita DNI";\nconsole.log(mensaje);',
      salida: 'puede pasar'
    },
    {
      titulo: 'Nullish coalescing ??',
      parrafos: [
        'El operador ?? devuelve el valor de la derecha solo si el de la izquierda es null o undefined. Es perfecto para poner valores por defecto sin caer en trampas: la diferencia con || es que ?? NO reacciona a otros valores falsy como 0 o "".'
      ],
      codigo: 'const sinPrecio = null;\nconst precio = sinPrecio ?? 100;\nconsole.log(precio);\nconsole.log(0 ?? 100);\nconsole.log(0 || 100);',
      salida: '100\n0\n100'
    },
    {
      titulo: 'Optional chaining ?.',
      parrafos: [
        'El encadenamiento opcional ?. permite acceder a una propiedad sin miedo a que no exista: si lo que está antes del ?. es null o undefined, toda la expresión devuelve undefined en lugar de lanzar un error. Es como llamar a la puerta de una casa que puede no existir: si no hay casa, vuelves sin drama.',
        'Necesitas un objeto para probarlo (los dominarás en la lección 11). Adelanto un ejemplo mínimo.'
      ],
      codigo: 'const usuario = { nombre: "Ana" };\nconsole.log(usuario.nombre);\nconsole.log(usuario.direccion?.ciudad);\nconsole.log(usuario.direccion.ciudad);',
      salida: 'Ana\nundefined\n(Error: no se puede leer "ciudad" de undefined)',
      lista: [
        'Observa la tercera línea: sin ?. el programa se cae con un TypeError. El ?. te salva justamente de ese error.'
      ]
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar = (asignación) dentro de condiciones: if (edad = 18) asigna en lugar de comparar y siempre es verdadero.',
        'Confiar en == y !=: usan conversiones ocultas que dan resultados sorprendentes. Usa === y !== siempre.',
        'Olvidar la precedencia: 2 + 3 * 4 es 14 (primero la multiplicación). Cuando haya duda, usa paréntesis.',
        'Pensar que || es lo mismo que ??: || filtra también 0, "" y false; ?? solo filtra null y undefined.',
        'Concatenar con + y sumar con + sin mirar los tipos: "5" + 5 da "55", no 10.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Siempre === y !==, nunca == y !=.',
        'Usa paréntesis para hacer evidente el orden de las operaciones: (precio - descuento) * 1.21.',
        'Usa ?? para valores por defecto cuando el "0" o el "" sean valores legítimos, y || solo cuando quieras el primer valor "verdadero".',
        'Aprovecha el cortocircuito: guarda && y || para casos simples y claros.',
        'Para el ternario, mantenlo corto; si la lógica es larga, mejor un if/else tradicional (lección 6).'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El ticket con operadores',
      codigo: 'const precioUnitario = 100;\nconst cantidad = 3;\nconst total = precioUnitario * cantidad;\nconst conDescuento = total >= 250;\nconsole.log("Total:", total);\nconsole.log("¿Aplica descuento?", conDescuento ? "sí" : "no");',
      salida: 'Total: 300\n¿Aplica descuento? sí',
      explicacion: 'Multiplicamos para obtener el total, comparamos con >= para saber si aplica descuento y usamos el ternario para traducir el booleano a texto legible.'
    },
    {
      titulo: 'Valores por defecto con ??',
      codigo: 'const stock = 0;\nconsole.log("Stock:", stock ?? "sin dato");\nconst comentario = null;\nconsole.log("Comentario:", comentario ?? "sin comentarios");',
      salida: 'Stock: 0\nComentario: sin comentarios',
      explicacion: 'El ?? respeta el 0 (un stock de 0 es un dato real) pero reemplaza el null. Con || el primer caso habría mostrado "sin dato" por error: por eso ?? es más preciso para defaults.'
    }
  ],
  ejercicios: [
    {
      titulo: 'El resto de la división',
      dificultad: 'Fácil',
      consigna: ['Imprime el resultado de estas tres operaciones, una por línea: el resto de dividir 29 entre 5, la potencia de 4 al cubo, y el resultado de 20 + 3 * 5.'],
      pasos: [
        'Primera línea: 29 % 5.',
        'Segunda línea: 4 ** 3.',
        'Tercera línea: 20 + 3 * 5 (respeta la precedencia: la multiplicación va primero).'
      ],
      codigoInicial: '// Escribe las tres operaciones\n',
      pista: '29 % 5: 5 entra 5 veces en 29 (25) y sobran 4. 4 ** 3 es 4 * 4 * 4. 20 + 3 * 5: primero 3 * 5.',
      tests: [
        { tipo: 'output', nombre: 'Las tres operaciones', esperado: ['4', '64', '35'], mensaje: 'Los resultados son: 4 (resto), 64 (potencia) y 35 (multiplicación primero).' }
      ],
      solucion: 'console.log(29 % 5);\nconsole.log(4 ** 3);\nconsole.log(20 + 3 * 5);'
    },
    {
      titulo: 'Igualdad estricta vs suelta',
      dificultad: 'Fácil',
      consigna: ['Imprime, en este orden, el resultado de comparar: 5 con el texto "5" usando ===, 5 con el texto "5" usando ==, y 0 con el texto vacío "" usando ==.'],
      pasos: [
        'Línea 1: 5 === "5".',
        'Línea 2: 5 == "5".',
        'Línea 3: 0 == "".'
      ],
      codigoInicial: '// Escribe las tres comparaciones\n',
      pista: 'Con ===, número y texto nunca son iguales. Con ==, JavaScript convierte y muchas veces "acomoda": 0 == "" es true, aunque no tenga sentido.',
      tests: [
        { tipo: 'output', nombre: 'Las tres comparaciones', esperado: ['false', 'true', 'true'], mensaje: '=== con tipos distintos da false; == convierte y da true en ambos casos. Así se ve por qué == es peligroso.' }
      ],
      solucion: 'console.log(5 === "5");\nconsole.log(5 == "5");\nconsole.log(0 == "");'
    },
    {
      titulo: '¿Es hora de abrir?',
      dificultad: 'Media',
      consigna: ['La tienda abre si son las 9 en punto O si ya pasaron las 9. Escribe una condición lógica con || que devuelva true cuando la hora sea mayor o igual a 9, y false cuando sea menor. Prueba con la constante hora = 8.'],
      pasos: [
        'Declara const hora = 8.',
        'Crea una variable abierta que sea el resultado de hora >= 9.',
        'Imprime el valor de abierta y también su negación con !.'
      ],
      codigoInicial: '// Declara la hora, calcula si está abierta e imprime ambos valores\n',
      pista: 'hora >= 9 da false con 8. La negación !false da true. Usa el operador ! para la segunda impresión.',
      tests: [
        { tipo: 'output', nombre: 'Abierta y su negación', esperado: ['false', 'true'], mensaje: 'Con hora = 8, la tienda está cerrada (false) y su negación es true.' },
        { tipo: 'valor', nombre: 'abierta existe', expr: 'typeof abierta', esperado: 'boolean', mensaje: 'La variable abierta debe ser un booleano.' }
      ],
      solucion: 'const hora = 8;\nconst abierta = hora >= 9;\nconsole.log(abierta);\nconsole.log(!abierta);'
    },
    {
      titulo: 'Descuento con ternario',
      dificultad: 'Media',
      consigna: ['La tienda aplica descuento a partir de 1000 de compra. Declara const total = 1250 y crea una variable con el ternario que diga "descuento" si total >= 1000 y "sin descuento" si no. Imprime el resultado.'],
      pasos: [
        'Declara const total = 1250.',
        'Usa el ternario: total >= 1000 ? "descuento" : "sin descuento".',
        'Guarda el resultado en una constante y la imprimes.'
      ],
      codigoInicial: '// Declara el total, aplica el ternario e imprime\n',
      pista: 'La estructura es: condicion ? "valor si verdadero" : "valor si falso".',
      tests: [
        { tipo: 'output', nombre: 'Resultado del descuento', esperado: ['descuento'], mensaje: '1250 es mayor o igual a 1000, así que el ternario debe devolver "descuento".' },
        { tipo: 'valor', nombre: 'resultado existe', expr: 'typeof resultado', esperado: 'string', mensaje: 'Debes guardar el resultado del ternario en una variable llamada resultado.' }
      ],
      solucion: 'const total = 1250;\nconst resultado = total >= 1000 ? "descuento" : "sin descuento";\nconsole.log(resultado);'
    }
  ]
}