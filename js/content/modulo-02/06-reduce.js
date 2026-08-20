export default {
  id: 'm2-l19',
  numero: 19,
  titulo: 'reduce: de muchos elementos a un solo valor',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Acumulador', definicion: 'El valor que reduce va construyendo vuelta a vuelta. Empieza en el valor inicial que le pasas.' },
    { termino: 'Valor inicial', definicion: 'El segundo argumento de reduce: el punto de partida del acumulador. Para sumas suele ser 0.' },
    { termino: 'Reducir', definicion: 'Combinar todos los elementos del array en un único valor: suma, máximo, conteo, texto.' },
    { termino: 'Plegado', definicion: 'El nombre técnico de reduce: ir "plegando" cada elemento sobre el acumulador.' },
    { termino: 'Caja registradora', definicion: 'La analogía clásica: el acumulador es la caja, y cada elemento es una compra que se suma al total.' },
    { termino: 'Inicializador', definicion: 'El objeto o valor con el que arranca el acumulador cuando el acumulado no es numérico: {} para conteos.' },
    { termino: 'Acumular', definicion: 'Ir sumando o combinando resultados parciales en cada vuelta del recorrido.' }
  ],
  secciones: [
    {
      titulo: 'La caja registradora del cierre',
      parrafos: [
        'reduce recorre el array llevando un valor que se va actualizando en cada vuelta: el acumulador. Al terminar devuelve ese valor final. Es la caja registradora del cierre de caja: vas sumando cada venta al total que ya llevabas.',
        'Tiene dos argumentos: el callback y el valor inicial. El callback recibe (acumulador, elemento) y debe devolver el acumulador actualizado. El valor inicial es clave: para sumas, 0; para multiplicaciones, 1.'
      ],
      codigo: 'const ventas = [1500, 2300, 900];\nconst total = ventas.reduce((acumulado, venta) => acumulado + venta, 0);\nconsole.log(total);',
      salida: '4700'
    },
    {
      titulo: 'Los cuatro argumentos del callback',
      parrafos: [
        'El callback de reduce puede recibir cuatro parámetros, aunque casi siempre usas los primeros dos:',
        'El acumulador, el elemento actual, el índice y el array completo. El valor inicial es el segundo argumento de reduce y es el acumulador de la primera vuelta. Si no lo pasas, reduce usa el primer elemento como acumulador y arranca desde el segundo; para arrays vacíos eso da error, así que pásalo siempre.'
      ],
      codigo: 'const precios = [100, 250, 75];\nconst total = precios.reduce((acumulado, precio) => acumulado + precio, 0);\nconsole.log(`Total: ${total}`);',
      salida: 'Total: 425'
    },
    {
      titulo: 'Más que sumas: máximo, promedio y conteo',
      parrafos: [
        'reduce no solo suma. Puedes quedarte con el máximo comparando en cada vuelta, calcular promedios guardando la suma, o construir objetos contando apariciones.',
        'Para el máximo, el acumulador empieza en 0 y en cada vuelta se queda con el mayor entre lo acumulado y el elemento.'
      ],
      codigo: 'const notas = [4, 7, 9];\nconst maxima = notas.reduce((acumulado, nota) => (nota > acumulado ? nota : acumulado), 0);\nconst suma = notas.reduce((a, nota) => a + nota, 0);\nconsole.log(maxima);\nconsole.log(suma / notas.length);',
      salida: '9\n6.666666666666667'
    },
    {
      titulo: 'Contar apariciones con un objeto',
      parrafos: [
        'El acumulador no tiene que ser un número: puede ser un objeto o un array. Para contar cuántas veces aparece cada elemento, arranca con {} y en cada vuelta sumale 1 a la clave correspondiente.',
        'La expresión acc[elemento] = (acc[elemento] || 0) + 1 es el patrón clásico: si la clave no existe, arranca en 0 y suma 1.'
      ],
      codigo: 'const frutas = ["manzana", "pera", "manzana"];\nconst conteo = frutas.reduce((acc, fruta) => {\n  acc[fruta] = (acc[fruta] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(conteo);',
      salida: '{"manzana":2,"pera":1}'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar el valor inicial: reduce sin él arranca con el primer elemento y falla en arrays vacíos. Ponlo siempre.',
        'Olvidar el return en el callback: el acumulador se actualiza con lo que devuelve el callback; sin return, se pierde.',
        'Confundir el orden de los parámetros: primero el ACUMULADOR, después el elemento. Es al revés de map/filter.',
        'No saber qué valor inicial elegir: suma → 0, multiplicación → 1, máximo → 0 (o el primer elemento), conteo → {}.',
        'Mutar el acumulador objeto por error: acc[fruta] = ... está bien porque lo devuelves, pero hacer console.log de acc dentro no.',
        'Esperar que reduce modifique el array: solo devuelve el valor final, el array queda intacto.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Pasa SIEMPRE el valor inicial: evita el error de arrays vacíos y deja claro de dónde parte el acumulador.',
        'Nombra el acumulador y el elemento con sentido: (acumulado, venta) y no (a, b) cuando puedas.',
        'Usa reduce para acumulaciones reales; si es solo sumar, un reduce con + es el estándar.',
        'Para el máximo, considera Math.max con spread (lo verás en la lección 21); reduce brilla con lógica más compleja.',
        'Cuando el acumulador sea un objeto, recuerda devolverlo siempre en el return.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El cierre de caja del día',
      codigo: 'const ventas = [1200, 800, 2300];\nconst total = ventas.reduce((acumulado, venta) => acumulado + venta, 0);\nconsole.log(`Vendiste $${total} hoy`);',
      salida: 'Vendiste $4300 hoy',
      explicacion: 'reduce arranca en 0 y en cada vuelta le suma la venta al acumulador. El template literal muestra el total final.'
    },
    {
      titulo: 'El producto más caro del catálogo',
      codigo: 'const precios = [350, 500, 1200, 300];\nconst masCaro = precios.reduce((mayor, precio) => (precio > mayor ? precio : mayor), 0);\nconsole.log(masCaro);',
      salida: '1200',
      explicacion: 'El acumulador guarda el mayor visto hasta el momento. Cada vuelta compara: si el precio nuevo supera al acumulado, lo reemplaza.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Sumar las ventas del día',
      dificultad: 'Fácil',
      consigna: [
        'Declara const ventas = [1200, 800, 2300]. Usa reduce para sumar todas las ventas, guarda el total en una constante e imprime el total.'
      ],
      pasos: [
        'Declara el array de ventas.',
        'Aplica reduce con acumulador inicial 0.',
        'El callback suma la venta al acumulado.',
        'Guarda el resultado e imprime.'
      ],
      codigoInicial: '// Declara ventas, reduce e imprime\n',
      pista: 'ventas.reduce((acumulado, venta) => acumulado + venta, 0)',
      tests: [
        { tipo: 'output', nombre: 'Total de ventas', esperado: ['4300'], mensaje: '1200 + 800 + 2300 = 4300.' },
        { tipo: 'valor', nombre: 'total existe', expr: 'typeof total', esperado: 'number', mensaje: 'Guarda el resultado de reduce en una variable llamada total.' }
      ],
      solucion: 'const ventas = [1200, 800, 2300];\nconst total = ventas.reduce((acumulado, venta) => acumulado + venta, 0);\nconsole.log(total);'
    },
    {
      titulo: 'El máximo con reduce',
      dificultad: 'Media',
      consigna: [
        'Declara const notas = [4, 7, 9]. Usa reduce para encontrar la nota más alta, guardándola en una constante, e imprime el resultado.'
      ],
      pasos: [
        'Declara el array de notas.',
        'Aplica reduce con acumulador inicial 0.',
        'En el callback, devuelve la nota si es mayor que el acumulado.',
        'Guarda el resultado e imprime.'
      ],
      codigoInicial: '// Declara notas, busca la máxima con reduce e imprime\n',
      pista: '(acumulado, nota) => (nota > acumulado ? nota : acumulado) se queda con el mayor en cada vuelta.',
      tests: [
        { tipo: 'output', nombre: 'Nota máxima', esperado: ['9'], mensaje: 'De 4, 7 y 9, la máxima es 9.' },
        { tipo: 'valor', nombre: 'maxima existe', expr: 'typeof maxima', esperado: 'number', mensaje: 'Guarda el resultado de reduce en una variable llamada maxima.' }
      ],
      solucion: 'const notas = [4, 7, 9];\nconst maxima = notas.reduce((acumulado, nota) => (nota > acumulado ? nota : acumulado), 0);\nconsole.log(maxima);'
    },
    {
      titulo: 'El promedio del curso',
      dificultad: 'Media',
      consigna: [
        'Declara const notas = [7, 8, 9]. Calcula el promedio con reduce: primero suma las notas y después divide por la cantidad. Imprime el promedio redondeado a 1 decimal con toFixed(1).'
      ],
      pasos: [
        'Declara el array de notas.',
        'Suma con reduce y guarda la suma.',
        'Divide la suma por notas.length.',
        'Aplica toFixed(1) e imprime.'
      ],
      codigoInicial: '// Declara notas, calcula el promedio e imprime\n',
      pista: 'const suma = notas.reduce((a, n) => a + n, 0); const promedio = suma / notas.length;',
      tests: [
        { tipo: 'output', nombre: 'Promedio redondeado', esperado: ['8.0'], mensaje: '(7 + 8 + 9) / 3 = 8, y toFixed(1) lo muestra como 8.0.' }
      ],
      solucion: 'const notas = [7, 8, 9];\nconst suma = notas.reduce((acumulado, nota) => acumulado + nota, 0);\nconst promedio = suma / notas.length;\nconsole.log(promedio.toFixed(1));'
    },
    {
      titulo: 'Contar apariciones con un objeto',
      dificultad: 'Dificil',
      consigna: [
        'Declara const letras = ["a", "b", "a", "c", "a", "b"]. Usa reduce con un objeto vacío como acumulador para contar cuántas veces aparece cada letra. Guarda el objeto en una constante, imprímelo y verifica que "a" aparece 3 veces.'
      ],
      pasos: [
        'Declara el array de letras.',
        'Aplica reduce con {} como valor inicial.',
        'En cada vuelta suma 1 a la clave de la letra: acc[letra] = (acc[letra] || 0) + 1.',
        'Devuelve el acumulador y guarda el resultado.',
        'Imprime el objeto y la cantidad de "a".'
      ],
      codigoInicial: '// Declara letras, cuenta con reduce e imprime\n',
      pista: 'El patrón (acc[letra] || 0) + 1 arranca la cuenta en 0 si la letra no existía todavía.',
      tests: [
        { tipo: 'output', nombre: 'El conteo completo', esperado: ['{"a":3,"b":2,"c":1}'], mensaje: 'El objeto debe contar: a aparece 3 veces, b 2 y c 1.' },
        { tipo: 'valor', nombre: 'Cuenta de la a', expr: 'conteo.a', esperado: 3, mensaje: 'La clave "a" del objeto conteo debe valer 3.' }
      ],
      solucion: 'const letras = ["a", "b", "a", "c", "a", "b"];\nconst conteo = letras.reduce((acc, letra) => {\n  acc[letra] = (acc[letra] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(conteo);'
    }
  ]
}
