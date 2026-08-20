export default {
  id: 'm4-l32',
  numero: 32,
  titulo: 'Qué es TypeScript y por qué usarlo',
  nivel: 'Fácil',
  lenguaje: 'typescript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'TypeScript', definicion: 'Un lenguaje que extiende JavaScript con tipos: es JavaScript con un plano detallado de tus datos.' },
    { termino: 'Tipado estático', definicion: 'Los tipos se declaran y se verifican antes de ejecutar el código, no en plena marcha.' },
    { termino: 'Superset', definicion: 'Todo JavaScript válido también es TypeScript válido: puedes escribir JS puro dentro de un archivo .ts.' },
    { termino: 'Compilación', definicion: 'El paso que convierte tu código TypeScript a JavaScript puro, listo para ejecutarse en cualquier navegador.' },
    { termino: 'Verificador de tipos', definicion: 'La parte de TypeScript que revisa tu código y te avisa si le pasas un dato del tipo equivocado.' },
    { termino: 'Anotación de tipo', definicion: 'El dos puntos (:) que acompaña a una variable o parámetro para declarar qué tipo de dato espera.' },
    { termino: 'tsc', definicion: 'El compilador oficial de TypeScript: lee tus archivos .ts y produce archivos .js limpios.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es TypeScript?',
      parrafos: [
        'Imagina que tu tienda anota las ventas en una pizarra con tiza. Cualquiera puede escribir cualquier cosa: un número, un texto, un dibujo. Funciona, pero a la hora de hacer la caja no sabes qué es qué. TypeScript es como pasar a una planilla: cada columna tiene formato fijo (precio: número, producto: texto) y si alguien escribe algo raro, te avisan antes de que arruine los totales.',
        'TypeScript (TS) es un superset de JavaScript: todo lo que ya aprendiste en JS sigue funcionando, pero ahora puedes declarar qué tipo de dato espera cada variable, parámetro y función. El navegador no entiende TypeScript directamente: antes de ejecutar, un paso intermedio (la compilación) lo convierte a JavaScript puro.'
      ],
      codigo: 'const producto: string = "lata";\nconst precio: number = 25;\nconsole.log(producto, precio);',
      salida: 'lata 25'
    },
    {
      titulo: 'Tipado estático vs. dinámico',
      parrafos: [
        'JavaScript es de tipado dinámico: los tipos se descubren en el momento de ejecutar. Eso te da libertad, pero los errores de tipo aparecen tarde y a veces en silencio. TypeScript es de tipado estático: los tipos se verifican antes de ejecutar, apenas escribes el código.',
        'Este ejemplo en JS puro no lanza ningún error: la tienda termina con un total que es texto y nadie se entera.'
      ],
      codigo: 'let total = 100;\ntotal = total + " pesos";\nconsole.log(total);',
      salida: '100 pesos'
    },
    {
      titulo: 'El viaje de TS a JS: la compilación',
      parrafos: [
        'El navegador y Node.js solo entienden JavaScript. TypeScript agrega un paso previo: la compilación (o transpilación). El compilador tsc lee tu archivo .ts, verifica los tipos y produce un .js limpio, sin ninguna anotación de tipo.',
        'En este curso el motor lo hace por ti: escribes TypeScript, el código se transpila a JavaScript y se ejecuta en el sandbox. Pero el concepto es el mismo que en un proyecto real: tipos en el archivo .ts, JavaScript puro en la salida.'
      ],
      codigo: '// archivo tienda.ts\nconst precio: number = 150;\nconsole.log(precio);\n\n// Al compilar queda JavaScript puro:\n// const precio = 150;\n// console.log(precio);',
      salida: '150'
    },
    {
      titulo: 'Qué ganas al tipar',
      parrafos: [
        'Tipar no es un trámite burocrático: es una red de seguridad que te salva en el peor momento. Lo que ganas:'
      ],
      lista: [
        'Errores antes de ejecutar: el verificador te avisa en el editor, no en producción ni en la consola de tu cliente.',
        'Autocompletado preciso: el editor conoce las propiedades de tus datos y te las sugiere al escribir.',
        'Documentación viva: el tipo de cada función es su manual de uso. Nadie necesita adivinar qué recibe y qué devuelve.',
        'Refactor seguro: si cambias la forma de un objeto, el compilador te dice exactamente qué código rompiste.',
        'Trabajo en equipo: el contrato de datos queda explícito, nadie interpreta el formato a su manera.'
      ]
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Pensar que TypeScript corre en el navegador: siempre necesita compilarse a JavaScript antes.',
        'Escribir todo en archivos .js y esperar ayuda de tipos: TypeScript trabaja en archivos .ts.',
        'Anotar a mano cosas que el propio TypeScript ya infiere: anotar de más también ensucia.',
        'Creer que los tipos solo "molestan": son la diferencia entre un error en el editor y un error en producción.',
        'Ignorar los mensajes del verificador: son la guía más valiosa que tienes. Léelos, casi siempre dicen exactamente qué falta.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Tipa los parámetros y el retorno de las funciones: es donde aparecen los errores más caros.',
        'Deja que TypeScript infiera lo simple (const nombre = "lata") y anota lo que no es obvio.',
        'Usa el modo strict desde el día uno: es más exigente y te forma mejores hábitos.',
        'Trata los errores del verificador como mensajes, no como fracasos: cada uno te enseña algo.',
        'Empieza tipando un archivo pequeño en un proyecto real y observa cuántos bugs evitas.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Un error que JS descubre tarde y TS descubre al instante',
      codigo: '// JavaScript: el error aparece cuando ya ejecutaste\nfunction calcularIva(precio) {\n  return precio * 0.21;\n}\nconsole.log(calcularIva("lata"));\n\n// TypeScript: el verificador te frena antes de ejecutar\nfunction calcularIvaTipado(precio: number): number {\n  return precio * 0.21;\n}\nconsole.log(calcularIvaTipado(100));',
      salida: 'NaN\n21',
      explicacion: 'En JS, multiplicar un texto por un número no explota: devuelve NaN en silencio. En TS, pasarle un string a un parámetro number es un error visible desde el editor: te ahorra cajas raras y clientes confundidos.'
    },
    {
      titulo: 'Tu primer código TypeScript',
      codigo: 'const nombre: string = "Tienda";\nconst apertura: number = 2026;\nconsole.log(nombre, apertura);',
      salida: 'Tienda 2026',
      explicacion: 'Cada variable declara su tipo con los dos puntos. Al compilar, esas anotaciones desaparecen y el resultado es JavaScript puro que cualquier navegador entiende.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Primeras anotaciones',
      dificultad: 'Fácil',
      consigna: [
        'Declara tres variables con anotación de tipo: producto de tipo string con el valor "lata", precio de tipo number con 25, y disponible de tipo boolean con true. Luego imprímelas juntas en una sola línea.'
      ],
      pasos: [
        'Usa const para las tres variables.',
        'Anota cada una con su tipo usando los dos puntos: const producto: string = "lata".',
        'Imprime las tres separadas por espacio con un solo console.log.'
      ],
      codigoInicial: '// Declara producto, precio y disponible con sus tipos\n',
      pista: 'const producto: string = "lata"; y así con las otras dos.',
      tests: [
        { tipo: 'output', nombre: 'Las tres variables', esperado: ['lata 25 true'], mensaje: 'Debes imprimir producto, precio y disponible en ese orden.' },
        { tipo: 'codigo', nombre: 'Tipos anotados', explicacion: 'Usar : string, : number y : boolean en las declaraciones', requerido: [':\\s*string', ':\\s*number', ':\\s*boolean'], mensaje: 'Cada variable debe declarar su tipo explícitamente con los dos puntos.' }
      ],
      solucion: 'const producto: string = "lata";\nconst precio: number = 25;\nconst disponible: boolean = true;\nconsole.log(producto, precio, disponible);'
    },
    {
      titulo: 'Una función tipada',
      dificultad: 'Fácil',
      consigna: [
        'Implementa una función saludar(nombre) que reciba un string y devuelva el texto "Hola, " seguido del nombre. Anota el tipo del parámetro y el del retorno. Llámala con "Ana" e imprime el resultado.'
      ],
      pasos: [
        'Anota el parámetro: nombre: string.',
        'Anota el retorno con : string justo después del paréntesis de cierre.',
        'Usa return para devolver el saludo y luego imprime la llamada.'
      ],
      codigoInicial: '// Implementa saludar con parámetro y retorno tipados\n',
      pista: 'function saludar(nombre: string): string { return ... }',
      tests: [
        { tipo: 'output', nombre: 'El saludo', esperado: ['Hola, Ana'], mensaje: 'saludar("Ana") debe devolver el texto exacto "Hola, Ana".' },
        { tipo: 'codigo', nombre: 'Parámetro tipado', explicacion: 'Anotar nombre: string', requerido: ['nombre\\s*:\\s*string'], mensaje: 'El parámetro nombre debe declarar su tipo string.' },
        { tipo: 'codigo', nombre: 'Retorno tipado', explicacion: 'Anotar el tipo de retorno : string', requerido: ['\\)\\s*:\\s*string\\s*\\{'], mensaje: 'La función debe declarar su tipo de retorno después del paréntesis.' }
      ],
      solucion: 'function saludar(nombre: string): string {\n  return "Hola, " + nombre;\n}\nconsole.log(saludar("Ana"));'
    },
    {
      titulo: 'El error que TS evita',
      dificultad: 'Media',
      consigna: [
        'En JavaScript puedes sumar un número con un texto y el resultado te sorprende: "5" + 2 da "52" (texto). Escribe código TypeScript donde precio: number = 5 y cantidad: number = 2, suma ambos como números reales y muestra el resultado y su tipo con typeof.'
      ],
      pasos: [
        'Declara precio y cantidad con anotación : number.',
        'Guarda la suma en una nueva variable total con anotación : number.',
        'Imprime total y luego typeof total.'
      ],
      codigoInicial: '// Declara precio y cantidad como number y súmalos\n',
      pista: 'const total: number = precio + cantidad; luego console.log(total) y console.log(typeof total).',
      tests: [
        { tipo: 'output', nombre: 'Suma real', esperado: ['7', 'number'], mensaje: 'La suma de 5 + 2 es 7 y typeof total debe decir number.' },
        { tipo: 'codigo', nombre: 'Variables anotadas', explicacion: 'Usar : number en las declaraciones', requerido: [':\\s*number'], mensaje: 'Las variables deben declarar su tipo number.' }
      ],
      solucion: 'const precio: number = 5;\nconst cantidad: number = 2;\nconst total: number = precio + cantidad;\nconsole.log(total);\nconsole.log(typeof total);'
    }
  ]
}