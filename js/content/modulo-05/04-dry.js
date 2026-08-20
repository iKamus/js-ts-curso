export default {
  id: 'm5-l50',
  numero: 50,
  titulo: 'DRY: no repetir código',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'DRY', definicion: 'Don\'t Repeat Yourself: cada conocimiento debe vivir en UN solo lugar del código.' },
    { termino: 'Duplicación', definicion: 'Copiar el mismo fragmento de lógica en varios sitios: un cambio de regla obliga a corregirlo en todos.' },
    { termino: 'Extraer función', definicion: 'Sacar el bloque repetido a una función con nombre y llamarla desde cada lugar.' },
    { termino: 'Parámetro', definicion: 'Lo que hace reutilizable a la función extraída: lo que cambia entre un uso y otro entra por parámetro.' },
    { termino: 'Regla única de origen', definicion: 'Si la regla cambia (ej: el IVA), se edita en un solo lugar y todo el programa se entera.' }
  ],
  secciones: [
    {
      titulo: 'El costo de copiar y pegar',
      parrafos: [
        'Cuando copias el mismo cálculo en tres funciones, cada una tiene su propia copia de la verdad. El día que cambie la regla (el IVA sube de 21% a 25%), tienes que acordarte de los tres lugares. Si olvidas uno, la app queda incoherente sin que nadie te avise.',
        'La cura es extraer: la regla vive en una función única, y cada uso es una llamada con sus datos. Cambias la función una vez y todos los usos se actualizan solos.'
      ],
      codigo: 'function conIva(precio) {\n  return precio * 1.21;\n}\nconsole.log(conIva(100));\nconsole.log(conIva(250));\nconsole.log(conIva(500));',
      salida: '121\n302.5\n605'
    },
    {
      titulo: 'Señales de duplicación',
      lista: [
        'El mismo bloque de 3+ líneas aparece en dos o más funciones.',
        'El mismo cálculo con las mismas constantes copiado en distintos archivos.',
        'Mensajes o formatos construidos de forma idéntica en varios lugares.',
        'Un cambio de regla te obliga a editar varios sitios "para que quede parejo".'
      ],
      parrafos: []
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Extraer en exceso: crear una función para una línea que se usa dos veces (eso es sobre-ingeniería; la proporción importa).',
        'Copiar la lógica pero con pequeñas diferencias de una copia a otra: los bugs viven en las diferencias.',
        'Extraer sin parámetros: si la función siempre calcula lo mismo, no era duplicación, era una constante.',
        'Dejar el código duplicado "porque ya funciona": el problema es el futuro cambio de regla.',
        'Extraer a una función con nombre confuso: la regla queda oculta detrás de un mal nombre.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Regla de tres: al tercer uso del mismo bloque, extráelo a función.',
        'Lo que cambia entre usos entra por parámetro; lo que no cambia, vive dentro de la función.',
        'Nombra la función con la REGLA que representa: calcularEnvio, formatearMoneda, aplicarIva.',
        'Usa la función en TODOS los lugares, incluidos los nuevos.',
        'El resultado: un solo lugar para editar, un solo lugar para testear.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Antes y después',
      codigo: '// Antes: el IVA calculado en tres lugares\nconsole.log(100 * 1.21);\nconsole.log(250 * 1.21);\nconsole.log(500 * 1.21);\n\n// Después: la regla en un solo lugar\nfunction conIva(precio) {\n  return precio * 1.21;\n}\nconsole.log(conIva(100));\nconsole.log(conIva(250));\nconsole.log(conIva(500));',
      salida: '121\n302.5\n605\n121\n302.5\n605',
      explicacion: 'Si el IVA cambia a 1.25, la versión DRY se edita en una línea. La duplicada exige editar tres líneas y rezar por no olvidar ninguna.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Extraer la regla del IVA',
      dificultad: 'Fácil',
      consigna: [
        'El código base calcula el IVA repetido en tres console.log. Refactoréalo: define la función calcularIva(precio) que devuelva precio * 0.21, y usa esa función en los tres cálculos. Imprime los tres resultados.'
      ],
      pasos: [
        'Define calcularIva(precio) con la regla del 21%.',
        'Reemplaza cada cálculo por la llamada a la función.',
        'Imprime los tres resultados.'
      ],
      codigoInicial: '// Refactor: la regla del IVA en una sola función\nconst p1 = 100 * 0.21;\nconst p2 = 250 * 0.21;\nconst p3 = 500 * 0.21;\nconsole.log(p1);\nconsole.log(p2);\nconsole.log(p3);',
      pista: 'const iv1 = calcularIva(100); const iv2 = calcularIva(250); const iv3 = calcularIva(500);',
      tests: [
        { tipo: 'output', nombre: 'Los tres IVA', esperado: ['21', '52.5', '105'], mensaje: '100*0.21=21, 250*0.21=52.5, 500*0.21=105.' },
        { tipo: 'codigo', nombre: 'La función existe', explicacion: 'Debe existir calcularIva con la multiplicación dentro.', requerido: ['function calcularIva'], mensaje: 'Extrae el cálculo a una función.' },
        { tipo: 'codigo', nombre: 'Sin cálculo duplicado', explicacion: 'Los console.log no deben contener la multiplicación (solo llamadas).', prohibido: ['console\\.log\\([^)]*\\*\\s*0\\.21'], mensaje: 'El 0.21 debe vivir solo dentro de la función.' }
      ],
      solucion: 'function calcularIva(precio) {\n  return precio * 0.21;\n}\nconsole.log(calcularIva(100));\nconsole.log(calcularIva(250));\nconsole.log(calcularIva(500));'
    },
    {
      titulo: 'Un solo formato de moneda',
      dificultad: 'Media',
      consigna: [
        'Dos funciones imprimen precios con formatos ligeramente distintos. Refactoréalo: crea formatearMoneda(precio) que devuelva `$${precio.toFixed(2)}` y úsala en las dos funciones. La primera (pan: 350) debe imprimir "Pan: $350.00" y la segunda (leche: 500.5) "Leche: $500.50".'
      ],
      pasos: [
        'Define formatearMoneda con toFixed(2) y el signo $.',
        'Úsala dentro de mostrarPan y mostrarLeche.',
        'Llama a ambas.'
      ],
      codigoInicial: 'function mostrarPan() {\n  console.log(`Pan: $${350 .toFixed(2)}`);\n}\nfunction mostrarLeche() {\n  console.log(`Leche: $${(500.5).toFixed(2)}`);\n}\nmostrarPan();\nmostrarLeche();',
      pista: 'Ambas funciones quedan: console.log(`Pan: ${formatearMoneda(350)}`); etc.',
      tests: [
        { tipo: 'output', nombre: 'Precios formateados', esperado: ['Pan: $350.00', 'Leche: $500.50'], mensaje: 'Ambos precios deben mostrarse con el mismo formato.' },
        { tipo: 'codigo', nombre: 'toFixed solo en la función', explicacion: 'El toFixed debe vivir solo en formatearMoneda, no en los console.log.', requerido: ['formatearMoneda'], prohibido: ['console\\.log\\([^)]*toFixed'], mensaje: 'Extrae el formateo a formatearMoneda y úsala en ambas.' }
      ],
      solucion: 'function formatearMoneda(precio) {\n  return `$${precio.toFixed(2)}`;\n}\nfunction mostrarPan() {\n  console.log(`Pan: ${formatearMoneda(350)}`);\n}\nfunction mostrarLeche() {\n  console.log(`Leche: ${formatearMoneda(500.5)}`);\n}\nmostrarPan();\nmostrarLeche();'
    },
    {
      titulo: 'Extraer la regla de envío',
      dificultad: 'Dificil',
      consigna: [
        'El costo de envío se calcula con la misma regla en tres funciones: gratis si el total es 5000 o más, 800 si no. Extrae la función calcularEnvio(total) con esa regla y usa las tres funciones base (venta1: total 3000, venta2: total 6000, venta3: total 5000), imprimiendo el envío de cada una.'
      ],
      pasos: [
        'Define calcularEnvio(total) con la regla: total >= 5000 ? 0 : 800.',
        'Reemplaza los cálculos repetidos por la llamada.',
        'Imprime los tres envíos.'
      ],
      codigoInicial: 'function venta1() {\n  const total = 3000;\n  console.log(total >= 5000 ? 0 : 800);\n}\nfunction venta2() {\n  const total = 6000;\n  console.log(total >= 5000 ? 0 : 800);\n}\nfunction venta3() {\n  const total = 5000;\n  console.log(total >= 5000 ? 0 : 800);\n}\nventa1();\nventa2();\nventa3();',
      pista: 'const envio = calcularEnvio(total); console.log(envio);',
      tests: [
        { tipo: 'output', nombre: 'Los tres envíos', esperado: ['800', '0', '0'], mensaje: '3000 paga 800; 6000 y 5000 son gratis.' },
        { tipo: 'codigo', nombre: 'La regla en una función', explicacion: 'La condición debe vivir dentro de calcularEnvio; las ventas solo la llaman.', requerido: ['calcularEnvio'], prohibido: ['console\\.log\\([^)]*(>= 5000|\\?\\s*0\\s*:\\s*800)'], mensaje: 'Las ventas deben imprimir calcularEnvio(total), no el cálculo.' }
      ],
      solucion: 'function calcularEnvio(total) {\n  return total >= 5000 ? 0 : 800;\n}\nfunction venta1() {\n  const total = 3000;\n  console.log(calcularEnvio(total));\n}\nfunction venta2() {\n  const total = 6000;\n  console.log(calcularEnvio(total));\n}\nfunction venta3() {\n  const total = 5000;\n  console.log(calcularEnvio(total));\n}\nventa1();\nventa2();\nventa3();'
    }
  ]
}