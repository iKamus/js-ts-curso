export default {
  id: 'm2-l25',
  numero: 25,
  titulo: 'Math y números: redondear, aleatorios y conversiones',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Math', definicion: 'El objeto integrado con herramientas matemáticas: Math.round, Math.floor, Math.ceil, Math.max, Math.min.' },
    { termino: 'Redondear', definicion: 'Llevar un decimal a un entero. round (el más cercano), floor (hacia abajo) y ceil (hacia arriba) son las tres formas.' },
    { termino: 'toFixed', definicion: 'Formatear un número con una cantidad fija de decimales, devolviendo TEXTO: (3.1416).toFixed(2) es "3.14".' },
    { termino: 'Aleatorio', definicion: 'Math.random() devuelve un número entre 0 (incluido) y 1 (excluido). Se combina con floor para dados y rangos.' },
    { termino: 'parseInt', definicion: 'Convierte texto a número entero: parseInt("10px") da 10. Detiene la lectura en el primer carácter no numérico.' },
    { termino: 'parseFloat', definicion: 'Convierte texto a número con decimales: parseFloat("3.14") da 3.14.' },
    { termino: 'Number()', definicion: 'Convierte texto a número de forma estricta: Number("3.14") da 3.14, pero Number("10px") da NaN.' },
    { termino: 'NaN', definicion: 'Not a Number: el resultado de convertir texto que no es numérico. Solo NaN no es igual a sí mismo.' }
  ],
  secciones: [
    {
      titulo: 'El objeto Math: la calculadora integrada',
      parrafos: [
        'JavaScript trae una calculadora lista para usar: el objeto Math. No es una clase ni una función: es un objeto con métodos y constantes matemáticas. Lo usas sin crear nada: Math.round(2.5) directamente.',
        'Sus herramientas más usadas son los redondeos, los extremos (máximo y mínimo) y los aleatorios. Saber cuál elegir depende de lo que quieras: el entero más cercano, el techo o el piso.'
      ],
      codigo: 'console.log(Math.round(2.5));\nconsole.log(Math.floor(2.9));\nconsole.log(Math.ceil(2.1));',
      salida: '3\n2\n3'
    },
    {
      titulo: 'Las tres formas de redondear',
      parrafos: [
        'Math.round lleva al entero más cercano (2.5 va a 3). Math.floor baja siempre al entero anterior (2.9 baja a 2): es el "piso". Math.ceil sube siempre al siguiente (2.1 sube a 3): es el "techo".',
        'La diferencia se ve con números negativos: floor(-2.5) da -3 y ceil(-2.5) da -2. Elige según la dirección que necesites.'
      ],
      codigo: 'console.log(Math.floor(4.99));\nconsole.log(Math.ceil(4.01));\nconsole.log(Math.floor(-2.5));\nconsole.log(Math.ceil(-2.5));',
      salida: '4\n5\n-3\n-2'
    },
    {
      titulo: 'toFixed: decimales fijos en formato texto',
      parrafos: [
        'toFixed(cantidad) devuelve el número como TEXTO con la cantidad fija de decimales. Es el formato perfecto para precios y totales de ticket: (1234.567).toFixed(2) da "1234.57".',
        'Ojo: toFixed redondea, y la devolución es string. Si luego necesitas operar con el número, conviértelo con Number.'
      ],
      codigo: 'const precio = 1234.567;\nconsole.log(precio.toFixed(2));\nconsole.log((5).toFixed(2));\nconsole.log(typeof precio.toFixed(2));',
      salida: '1234.57\n5.00\nstring'
    },
    {
      titulo: 'Math.max, Math.min y Math.random',
      parrafos: [
        'Math.max y Math.min reciben números sueltos y devuelven el mayor o el menor. Con un array, se combinan con spread: Math.max(...numeros).',
        'Math.random() devuelve un número entre 0 (incluido) y 1 (excluido). Para un rango entero se usa el patrón: Math.floor(Math.random() * cantidad) + inicio. Un dado de 6 caras: Math.floor(Math.random() * 6) + 1.'
      ],
      codigo: 'console.log(Math.max(10, 2, 33));\nconsole.log(Math.min(10, 2, 33));\nconst numeros = [4, 9, 2];\nconsole.log(Math.max(...numeros));\nconst dado = Math.floor(Math.random() * 6) + 1;\nconsole.log(`Salió ${dado}`);',
      salida: '33\n2\n9\nSalió 4'
    },
    {
      titulo: 'Number vs parseInt vs parseFloat',
      parrafos: [
        'Los tres convierten texto a número, pero con reglas distintas. Number es estricto: Number("3.14") da 3.14, pero Number("10px") da NaN porque el texto no es 100% numérico. parseInt y parseFloat son permisivos: leen desde el principio hasta que encuentran algo raro. parseInt("10px") da 10 y parseFloat("3.14") da 3.14.',
        'Regla: si el texto viene limpio, usa Number. Si viene con unidades o texto pegado ("10px", "3.14kg"), usa parseInt o parseFloat.'
      ],
      codigo: 'console.log(Number("3.14"));\nconsole.log(Number("10px"));\nconsole.log(parseInt("10px"));\nconsole.log(parseFloat("3.14kg"));',
      salida: '3.14\nNaN\n10\n3.14'
    },
    {
      titulo: 'La tabla de conversión',
      tabla: {
        columnas: ['Herramienta', 'Entrada "3.14"', 'Entrada "10px"', 'Devuelve'],
        filas: [
          ['Number(texto)', '3.14', 'NaN', 'Número o NaN'],
          ['parseInt(texto)', '3', '10', 'Entero'],
          ['parseFloat(texto)', '3.14', '10', 'Número con decimales'],
          ['toFixed(n)', '—', '—', 'Texto con n decimales']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Sumar texto en vez de número: "5" + 5 da "55". Convierte antes: Number("5") + 5 da 10.',
        'Esperar números exactos con decimales: 0.1 + 0.2 da 0.30000000000000004. Usa toFixed para mostrar y redondear.',
        'Confundir floor con round: round(2.9) da 3, floor(2.9) da 2. Eligen direcciones distintas.',
        'Olvidar el + 1 en los rangos aleatorios: Math.floor(Math.random() * 6) va de 0 a 5; con + 1 va de 1 a 6.',
        'Usar toFixed y esperar un número: toFixed devuelve texto. Verifícalo con typeof.',
        'Usar parseInt para algo con decimales: parseInt("3.99") da 3, descarta los decimales. Para eso está parseFloat.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Para precios, formatea con toFixed(2) en el momento de mostrar, y opera con los números sin redondear.',
        'Elige el redondeo según el sentido: cantidades de productos → floor, personas → round o ceil según contexto.',
        'Para el máximo/mínimo de un array: Math.max(...numeros). No escribas comparaciones a mano.',
        'Convierte datos de usuario con Number si esperas texto numérico puro; con parseInt/parseFloat si vienen con unidades.',
        'Comprueba los NaN: isNaN(Number(texto)) antes de usar el valor en cálculos.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El precio del ticket redondeado',
      codigo: 'const subtotal = 1234.567;\nconst iva = subtotal * 0.21;\nconsole.log(`IVA: $${iva.toFixed(2)}`);\nconsole.log(`Total: $${(subtotal + iva).toFixed(2)}`);',
      salida: 'IVA: $259.26\nTotal: $1493.83',
      explicacion: 'toFixed(2) formatea el IVA y el total con dos decimales para el ticket, sin perder la precisión del cálculo interno.'
    },
    {
      titulo: 'El sorteo del sorteo',
      codigo: 'const ganador = Math.floor(Math.random() * 3) + 1;\nconsole.log(`Ganó el cliente número ${ganador}`);',
      salida: 'Ganó el cliente número 2',
      explicacion: 'La salida es un ejemplo: al ser aleatorio, cada ejecución muestra un cliente distinto entre 1 y 3. Math.random() da un decimal entre 0 y 1; al multiplicarlo por 3 y bajar con floor quedan valores 0, 1 o 2; sumar 1 los convierte en 1, 2 o 3.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Las tres formas de redondear',
      dificultad: 'Fácil',
      consigna: [
        'Imprime tres valores de 2.5 y 2.9: Math.round(2.5), Math.floor(2.9) y Math.ceil(2.1), en ese orden.'
      ],
      pasos: [
        'Llama a Math.round(2.5).',
        'Llama a Math.floor(2.9).',
        'Llama a Math.ceil(2.1).',
        'Imprime los tres resultados en orden.'
      ],
      codigoInicial: '// Imprime los tres redondeos\n',
      pista: 'round va al más cercano, floor al piso y ceil al techo.',
      tests: [
        { tipo: 'output', nombre: 'Los tres redondeos', esperado: ['3', '2', '3'], mensaje: 'Math.round(2.5) = 3, Math.floor(2.9) = 2, Math.ceil(2.1) = 3.' }
      ],
      solucion: 'console.log(Math.round(2.5));\nconsole.log(Math.floor(2.9));\nconsole.log(Math.ceil(2.1));'
    },
    {
      titulo: 'El mayor y el menor',
      dificultad: 'Fácil',
      consigna: [
        'Imprime el mayor y el menor de los números 10, 2 y 33 usando Math.max y Math.min, en ese orden.'
      ],
      pasos: [
        'Usa Math.max(10, 2, 33).',
        'Usa Math.min(10, 2, 33).',
        'Imprime ambos resultados en orden.'
      ],
      codigoInicial: '// Imprime el máximo y el mínimo\n',
      pista: 'Math.max devuelve el mayor y Math.min el menor.',
      tests: [
        { tipo: 'output', nombre: 'Máximo y mínimo', esperado: ['33', '2'], mensaje: 'El mayor de 10, 2 y 33 es 33 y el menor es 2.' }
      ],
      solucion: 'console.log(Math.max(10, 2, 33));\nconsole.log(Math.min(10, 2, 33));'
    },
    {
      titulo: 'El dado de seis caras',
      dificultad: 'Media',
      consigna: [
        'Declara const dado = Math.floor(Math.random() * 6) + 1. Imprime "Dado: N". El número debe estar siempre entre 1 y 6.'
      ],
      pasos: [
        'Usa Math.random() multiplicado por 6.',
        'Aplica Math.floor para bajar al entero.',
        'Suma 1 para que el rango empiece en 1.',
        'Guarda en const dado e imprime con el formato "Dado: N".'
      ],
      codigoInicial: '// Declara dado, tíralo e imprime\n',
      pista: 'El patrón del rango entero es Math.floor(Math.random() * cantidad) + inicio.',
      tests: [
        { tipo: 'valor', nombre: 'Dado en el rango', expr: 'dado >= 1 && dado <= 6', esperado: true, mensaje: 'El valor del dado debe estar siempre entre 1 y 6.' },
        { tipo: 'codigo', nombre: 'Usa la receta aleatoria', explicacion: 'El código debe combinar Math.random con Math.floor', requerido: ['Math\\.random', 'Math\\.floor'], prohibido: [], mensaje: 'Sin Math.random no hay aleatoriedad real: el dado no sería aleatorio.' }
      ],
      solucion: 'const dado = Math.floor(Math.random() * 6) + 1;\nconsole.log(`Dado: ${dado}`);'
    },
    {
      titulo: 'Conversiones y decimales',
      dificultad: 'Dificil',
      consigna: [
        'Declara const texto = "12.5px". Imprime cuatro líneas: Number(texto), parseInt(texto), parseFloat(texto) y (10 / 3).toFixed(2).'
      ],
      pasos: [
        'Declara la constante texto.',
        'Convierte con Number(texto) e imprime.',
        'Convierte con parseInt(texto) e imprime.',
        'Convierte con parseFloat(texto) e imprime.',
        'Calcula (10 / 3).toFixed(2) e imprime.'
      ],
      codigoInicial: '// Declara texto y haz las conversiones\n',
      pista: 'Number rechaza el "px" y da NaN; parseInt lee el 12; parseFloat lee 12.5; y toFixed(2) de 10/3 da "3.33".',
      tests: [
        { tipo: 'output', nombre: 'Conversiones y decimales', esperado: ['NaN', '12', '12.5', '3.33'], mensaje: 'Number("12.5px") da NaN, parseInt da 12, parseFloat da 12.5 y (10/3).toFixed(2) da "3.33".' }
      ],
      solucion: 'const texto = "12.5px";\nconsole.log(Number(texto));\nconsole.log(parseInt(texto));\nconsole.log(parseFloat(texto));\nconsole.log((10 / 3).toFixed(2));'
    }
  ]
}