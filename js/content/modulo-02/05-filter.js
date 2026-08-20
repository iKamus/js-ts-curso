export default {
  id: 'm2-l18',
  numero: 18,
  titulo: 'filter: quedarte solo con lo que cumple',
  nivel: 'Medio',
  lenguaje: 'javascript',
  htmlBase: null,
  palabrasClave: [
    { termino: 'Filtrar', definicion: 'Seleccionar los elementos de un array que cumplen una condición y descartar los demás.' },
    { termino: 'Condición', definicion: 'Una expresión que devuelve true o false. El callback de filter la evalúa para cada elemento.' },
    { termino: 'Predicado', definicion: 'El nombre técnico del callback de filter: recibe un elemento y devuelve un booleano.' },
    { termino: 'Array nuevo', definicion: 'filter nunca muta el original: devuelve un array nuevo con los que pasaron el filtro.' },
    { termino: 'Criba', definicion: 'La herramienta que separa lo que sirve de lo que no. filter es la criba del array.' },
    { termino: 'Falsy', definicion: 'Valores que se comportan como false: 0, "", null, undefined, NaN. filter((x) => x) los descarta.' },
    { termino: 'Encadenar', definicion: 'Usar el resultado de filter como entrada de otro método: filtrar y después mapear o reducir.' }
  ],
  secciones: [
    {
      titulo: 'La criba del almacén',
      parrafos: [
        'filter recorre el array, le pasa cada elemento a un callback que responde true o false, y arma un array NUEVO solo con los que respondieron true. Es la criba del almacén: los productos que pasan la prueba van a la caja, los demás se quedan afuera.',
        'El callback se llama predicado porque "predica" sobre cada elemento: ¿cumple o no cumple? Si la condición no la cumple nadie, el resultado es un array vacío, no un error.'
      ],
      codigo: 'const precios = [1200, 800, 2500, 450];\nconst baratos = precios.filter((precio) => precio < 1000);\nconsole.log(baratos);\nconsole.log(precios);',
      salida: '[800,450]\n[1200,800,2500,450]'
    },
    {
      titulo: 'Cómo funciona por dentro',
      parrafos: [
        'Puedes pensar en filter como un for que va acumulando: por cada elemento, si el predicado devuelve true, lo agrega a un array nuevo; si devuelve false, lo salta. Al final devuelve ese array nuevo.',
        'El callback recibe el elemento, el índice y el array completo, como en map y forEach. Pero lo que define el filtro es el valor que devuelve: true se queda, false se va.'
      ],
      codigo: 'const notas = [8, 5, 10, 7];\nconst aprobadas = notas.filter((nota) => nota >= 6);\nconsole.log(aprobadas);',
      salida: '[8,10,7]'
    },
    {
      titulo: 'Filtrar objetos: la condición sobre propiedades',
      parrafos: [
        'El poder real de filter aparece con arrays de objetos: puedes filtrar por cualquier propiedad. "Dame los productos con precio menor a 400" o "dame los clientes de la ciudad de Córdoba".'
      ],
      codigo: 'const productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\nconst baratos = productos.filter((p) => p.precio < 400);\nconsole.log(baratos);',
      salida: '[{"nombre":"pan","precio":350},{"nombre":"alfajor","precio":300}]'
    },
    {
      titulo: 'La tabla de lo que ya sabes vs filter',
      tabla: {
        columnas: ['Método', 'Devuelve', 'Tamaño del resultado', 'Uso'],
        filas: [
          ['forEach', 'undefined', 'No aplica', 'Efectos por cada elemento'],
          ['map', 'Array nuevo', 'Igual al original', 'Transformar cada elemento'],
          ['filter', 'Array nuevo', 'Menor o igual', 'Quedarte con los que cumplen']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Olvidar el return en el predicado: si el callback no devuelve true o false, filter interpreta undefined (false) y el array queda vacío.',
        'Creer que filter muta el original: nunca lo hace. Guarda el resultado en una variable.',
        'Usar filter con una asignación en vez de una comparación: filter((p) => p.precio = 400) asigna en vez de comparar; usa ===.',
        'Esperar que filter modifique los elementos: filter solo selecciona. Si quieres transformar los que pasan, encadena un map.',
        'Confundir el orden: en el callback, el elemento es el primer parámetro, la condición se evalúa sobre él.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Escribe el predicado como pregunta: (precio) => precio < 1000 se lee "¿precio menor a 1000?".',
        'Nombra el resultado con el criterio: baratos, aprobadas, mayoresDeEdad.',
        'Si la condición es compleja, sácala a una función con nombre y pásala: array.filter(esBarato).',
        'Para descartar valores falsy: array.filter(Boolean) elimina 0, "", null y undefined de una sola vez.',
        'Encadena filter con map cuando necesites seleccionar y transformar en un solo pipeline.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Los productos aptos',
      codigo: 'const productos = [\n  { nombre: "té", apto: true },\n  { nombre: "harina", apto: true },\n  { nombre: "juguete", apto: false }\n];\nconst aptos = productos.filter((p) => p.apto);\nconsole.log(aptos.map((p) => p.nombre));',
      salida: '["té","harina"]',
      explicacion: 'El predicado p.apto ya es un booleano, así que filter devuelve directo los productos con apto: true. El map final solo deja los nombres para mostrar.'
    },
    {
      titulo: 'El stock que se está acabando',
      codigo: 'const stock = [\n  { nombre: "pan", cantidad: 2 },\n  { nombre: "leche", cantidad: 15 },\n  { nombre: "sal", cantidad: 1 }\n];\nconst porReponer = stock.filter((p) => p.cantidad < 5);\nconsole.log(porReponer.map((p) => p.nombre));',
      salida: '["pan","sal"]',
      explicacion: 'El filtro selecciona los productos con menos de 5 unidades. Es la misma lógica de "alertas de reposición" de cualquier sistema de stock.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Los pares de la lista',
      dificultad: 'Fácil',
      consigna: [
        'Declara const numeros = [1, 2, 3, 4, 5, 6]. Usa filter para quedarte con los pares (n % 2 === 0), guarda el resultado en una constante e imprime el array filtrado.'
      ],
      pasos: [
        'Declara el array de números.',
        'Aplica filter con la condición n % 2 === 0.',
        'Guarda el resultado en una constante.',
        'Imprime el array filtrado.'
      ],
      codigoInicial: '// Declara numeros, filtra pares e imprime\n',
      pista: 'const pares = numeros.filter((n) => n % 2 === 0);',
      tests: [
        { tipo: 'output', nombre: 'Solo pares', esperado: ['[2,4,6]'], mensaje: 'De 1 a 6, los pares son 2, 4 y 6.' },
        { tipo: 'valor', nombre: 'pares es un array', expr: 'Array.isArray(pares)', esperado: true, mensaje: 'Guarda el resultado de filter en una constante llamada pares.' }
      ],
      solucion: 'const numeros = [1, 2, 3, 4, 5, 6];\nconst pares = numeros.filter((n) => n % 2 === 0);\nconsole.log(pares);'
    },
    {
      titulo: 'Productos por debajo del límite',
      dificultad: 'Media',
      consigna: [
        'Declara el array productos con tres objetos: pan (350), leche (500) y alfajor (300). Usa filter para quedarte con los de precio menor a 400, y luego con map extrae solo los nombres. Imprime el array de nombres.'
      ],
      pasos: [
        'Declara el array de productos con nombre y precio.',
        'Filtra con p.precio < 400.',
        'Encadena o aplica map para quedarte con los nombres.',
        'Imprime el resultado.'
      ],
      codigoInicial: '// Declara productos, filtra por precio e imprime los nombres\n',
      pista: 'productos.filter((p) => p.precio < 400) devuelve los objetos; con .map((p) => p.nombre) extraes los nombres.',
      tests: [
        { tipo: 'output', nombre: 'Nombres de los baratos', esperado: ['["pan","alfajor"]'], mensaje: 'pan (350) y alfajor (300) están por debajo de 400; leche (500) queda afuera.' }
      ],
      solucion: 'const productos = [\n  { nombre: "pan", precio: 350 },\n  { nombre: "leche", precio: 500 },\n  { nombre: "alfajor", precio: 300 }\n];\nconst baratos = productos.filter((p) => p.precio < 400);\nconsole.log(baratos.map((p) => p.nombre));'
    },
    {
      titulo: 'Las palabras largas',
      dificultad: 'Media',
      consigna: [
        'Declara const palabras = ["sol", "estrella", "luna", "universo"]. Usa filter para quedarte con las de más de 4 letras (p.length > 4), guarda el resultado e imprime el array.'
      ],
      pasos: [
        'Declara el array de palabras.',
        'Filtra con la condición p.length > 4.',
        'Guarda el resultado en una constante.',
        'Imprime el array filtrado.'
      ],
      codigoInicial: '// Declara palabras, filtra por largo e imprime\n',
      pista: '"sol" y "luna" tienen 3 y 4 letras; la condición es mayor a 4.',
      tests: [
        { tipo: 'output', nombre: 'Solo las largas', esperado: ['["estrella","universo"]'], mensaje: 'estrella (8 letras) y universo (8 letras) superan las 4 letras.' }
      ],
      solucion: 'const palabras = ["sol", "estrella", "luna", "universo"];\nconst largas = palabras.filter((p) => p.length > 4);\nconsole.log(largas);'
    },
    {
      titulo: 'Quitar los valores vacíos',
      dificultad: 'Dificil',
      consigna: [
        'Declara const datos = [0, "hola", "", null, 42, undefined]. Usa filter para quedarte solo con los valores que no son falsy (es decir, "hola" y 42), guarda el resultado e imprime el array.'
      ],
      pasos: [
        'Declara el array con los seis valores.',
        'Usa filter con el predicado (valor) => valor.',
        'Guarda el resultado en una constante.',
        'Imprime el array limpio.'
      ],
      codigoInicial: '// Declara datos, filtra los falsy e imprime\n',
      pista: '0, "", null y undefined se comportan como false. El predicado (v) => v aprovecha eso: solo pasan los truthy.',
      tests: [
        { tipo: 'output', nombre: 'Solo los truthy', esperado: ['["hola",42]'], mensaje: 'De los seis valores, solo "hola" y 42 son truthy.' }
      ],
      solucion: 'const datos = [0, "hola", "", null, 42, undefined];\nconst limpios = datos.filter((valor) => valor);\nconsole.log(limpios);'
    }
  ]
}
