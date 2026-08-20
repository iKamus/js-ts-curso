export default {
  id: 'm1-l06',
  numero: 6,
  titulo: 'Estructuras de control: if/else y switch',
  nivel: 'Básico',
  palabrasClave: [
    { termino: 'Condición', definicion: 'Una expresión booleana (true o false) que decide si un bloque de código se ejecuta.' },
    { termino: 'Bloque', definicion: 'Un grupo de instrucciones entre llaves {}. Se ejecuta como una unidad.' },
    { termino: 'Rama', definicion: 'Cada camino posible dentro de una estructura de control: la rama del if, la del else, la del else if.' },
    { termino: 'switch', definicion: 'Estructura que compara un valor contra varios casos (case) y ejecuta el que coincida.' },
    { termino: 'case', definicion: 'Cada opción dentro de un switch: "si el valor es este, ejecuta esto".' },
    { termino: 'break', definicion: 'Instrucción que corta la ejecución: en un switch, impide "contagiarse" hacia el siguiente case.' },
    { termino: 'default', definicion: 'El caso de un switch que se ejecuta cuando ningún case coincide.' },
    { termino: 'Fallthrough', definicion: 'El comportamiento del switch de seguir ejecutando los case siguientes si no hay break. A veces intencional, a menudo un bug.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es el control de flujo?',
      parrafos: [
        'Hasta ahora tus programas corren en línea recta: una instrucción tras otra. Pero la vida real no es recta: "si llueve, llevo paraguas; si no, gorra". El control de flujo le da a tu programa la capacidad de decidir y tomar caminos distintos según las condiciones.',
        'Es el corazón de la lógica de cualquier app: validar formularios, aplicar descuentos, mostrar mensajes distintos según el estado del usuario.'
      ]
    },
    {
      titulo: 'if, else if y else',
      parrafos: [
        'La estructura básica: if (condición) ejecuta un bloque si la condición es true. else ejecuta otro cuando es false. Y puedes encadenar else if para probar varias condiciones en orden: la primera que dé true gana, y el resto no se evalúa.',
        'La condición entre paréntesis siempre se convierte a booleano. Recuerda los valores falsy: 0, "" , null, undefined, NaN y false se comportan como false.'
      ],
      codigo: 'const stock = 3;\nif (stock === 0) {\n  console.log("Agotado");\n} else if (stock < 5) {\n  console.log("Últimas unidades");\n} else {\n  console.log("Hay stock");\n}',
      salida: 'Últimas unidades'
    },
    {
      titulo: 'switch: muchas opciones, un solo valor',
      parrafos: [
        'Cuando tienes que comparar UNA variable contra muchos valores posibles, switch es más limpio que una escalera de else if. La sintaxis: switch (valor) { case opción: ... break; default: ... }.',
        'El break es fundamental: sin él, el código "se cae" al siguiente case (fallthrough) y ejecuta de más. Quitar el break a propósito se usa en casos raros, pero al empezar, pon siempre break.'
      ],
      codigo: 'const dia = "martes";\nswitch (dia) {\n  case "lunes":\n    console.log("Abrimos 10 a 18");\n    break;\n  case "martes":\n    console.log("Abrimos 9 a 20");\n    break;\n  default:\n    console.log("Horario estándar");\n}',
      salida: 'Abrimos 9 a 20'
    },
    {
      titulo: 'Cuándo elegir switch en vez de if',
      parrafos: [
        'Regla simple: switch brilla cuando comparas la MISMA variable contra valores EXACTOS (números, strings, enums). if/else if brilla cuando las condiciones son más complejas: rangos (x > 10), combinaciones con &&, comparaciones de objetos.',
        'En los módulos avanzados verás alternativas modernas (objetos como mapas de casos), pero esta base te alcanza para todo lo que sigue.'
      ],
      lista: [
        'if/else: rangos, condiciones compuestas, cualquier expresión booleana.',
        'switch: un único valor contra varios casos exactos.'
      ]
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar el break en un switch: el código sigue ejecutando los case siguientes (fallthrough accidental).',
        'Poner punto y coma después del if: if (x > 5); { ... } — el bloque se ejecuta SIEMPRE porque la condición quedó vacía.',
        'Usar = en vez de === en la condición: if (edad = 18) asigna 18 y la condición siempre es true.',
        'Confundir else if con if anidado innecesario: prefiere la escalera plana y legible.',
        'Olvidar el default en el switch: sin él, los valores inesperados simplemente no hacen nada (a veces correcto, pero suele ser un descuido).'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Siempre === en las condiciones.',
        'Bloques con llaves aunque tengan una sola línea: evita bugs de lectura.',
        'Evalúa primero los casos más específicos y deja el genérico para el final.',
        'Mantén las condiciones cortas: si una condición es larga, guárdala en una variable con nombre descriptivo (const esMayor = edad >= 18).',
        'Termina los switch con default: maneja siempre el caso inesperado.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Descuento por monto',
      codigo: 'const total = 1250;\nif (total >= 2000) {\n  console.log("Descuento del 20%");\n} else if (total >= 1000) {\n  console.log("Descuento del 10%");\n} else {\n  console.log("Sin descuento");\n}',
      salida: 'Descuento del 10%',
      explicacion: 'El orden importa: 1250 no llega a 2000, pero sí supera 1000, así que entra en la segunda rama. Si invirtieras los rangos, la lógica se rompería.'
    },
    {
      titulo: 'El switch del menú',
      codigo: 'const opcion = "2";\nswitch (opcion) {\n  case "1":\n    console.log("Elegiste café");\n    break;\n  case "2":\n    console.log("Elegiste té");\n    break;\n  default:\n    console.log("Opción inválida");\n}',
      salida: 'Elegiste té',
      explicacion: 'El switch compara opcion contra cada case con ===. Como vale "2" (texto), coincide con el segundo case. Ojo: "2" === 2 es false, así que los tipos importan también aquí.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Número positivo o negativo',
      dificultad: 'Fácil',
      consigna: ['Declara const numero = -5. Escribe un if que imprima "positivo" si numero > 0, "negativo" si numero < 0, y "cero" en cualquier otro caso.'],
      pasos: [
        'Declara la constante numero.',
        'Escribe if, else if y else con las tres condiciones.',
        'Cada rama imprime su mensaje.'
      ],
      codigoInicial: '// Declara numero y escribe la estructura if\n',
      pista: 'La condición del medio usa else if (numero < 0) y el caso restante (cero) va en el else final.',
      tests: [
        { tipo: 'output', nombre: 'Clasifica el número', esperado: ['negativo'], mensaje: 'Con numero = -5, la rama que debe ejecutarse es la de "negativo".' }
      ],
      solucion: 'const numero = -5;\nif (numero > 0) {\n  console.log("positivo");\n} else if (numero < 0) {\n  console.log("negativo");\n} else {\n  console.log("cero");\n}'
    },
    {
      titulo: 'Notas del examen',
      dificultad: 'Fácil',
      consigna: ['Declara const nota = 7. Imprime "aprobado" si nota >= 6, "desaprobado" si nota < 4, y "recupera" en el resto de los casos.'],
      pasos: [
        'Primera condición: nota >= 6 → "aprobado".',
        'Segunda condición: nota < 4 → "desaprobado".',
        'El caso restante (4, 5) → "recupera".'
      ],
      codigoInicial: '// Declara nota y escribe la estructura\n',
      pista: 'Con nota = 7 la primera condición es true y el resto ni se evalúa.',
      tests: [
        { tipo: 'output', nombre: 'Resultado de la nota', esperado: ['aprobado'], mensaje: '7 es mayor o igual a 6: debe imprimir "aprobado".' }
      ],
      solucion: 'const nota = 7;\nif (nota >= 6) {\n  console.log("aprobado");\n} else if (nota < 4) {\n  console.log("desaprobado");\n} else {\n  console.log("recupera");\n}'
    },
    {
      titulo: 'El menú del kiosco',
      dificultad: 'Media',
      consigna: ['Un kiosco vende: "1" → "alfajor", "2" → "chocolate", "3" → "caramelos", y cualquier otra cosa → "no tenemos eso". Declara const eleccion = 2 y arma el switch que imprime el producto correspondiente.'],
      pasos: [
        'Usa switch (eleccion) con tres case y un default.',
        'Cada case con su console.log y su break.',
        'El default imprime el mensaje de producto inexistente.'
      ],
      codigoInicial: '// Declara la elección y arma el switch\n',
      pista: 'Los case comparan con ===, así que con eleccion = 2 (número) el case "2" (texto) NO coincide. Usa números sin comillas.',
      tests: [
        { tipo: 'output', nombre: 'Producto elegido', esperado: ['chocolate'], mensaje: 'Con eleccion = 2 (número), debe imprimir "chocolate". Cuidado con las comillas en los case.' }
      ],
      solucion: 'const eleccion = 2;\nswitch (eleccion) {\n  case 1:\n    console.log("alfajor");\n    break;\n  case 2:\n    console.log("chocolate");\n    break;\n  case 3:\n    console.log("caramelos");\n    break;\n  default:\n    console.log("no tenemos eso");\n}'
    }
  ]
}