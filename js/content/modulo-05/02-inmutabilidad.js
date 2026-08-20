export default {
  id: 'm5-l48',
  numero: 48,
  titulo: 'Inmutabilidad: no mutar tus datos',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Mutar', definicion: 'Modificar un dato existente en el lugar: cambiar un elemento de un array, una propiedad de un objeto, el valor de una variable.' },
    { termino: 'Inmutabilidad', definicion: 'La práctica de NO modificar los datos originales: cada operación crea una versión nueva y deja el original intacto.' },
    { termino: 'Copia', definicion: 'Un dato nuevo con el mismo contenido: con spread ([...array], {...objeto}) o con métodos que no mutan (map, filter, concat).' },
    { termino: 'Métodos que mutan', definicion: 'push, pop, shift, unshift, splice, reverse, sort: modifican el array original. Conocerlos es saber cuándo evitarlos.' },
    { termino: 'Métodos que no mutan', definicion: 'map, filter, concat, slice, spread: devuelven un array nuevo sin tocar el original.' },
    { termino: 'Efecto colateral', definicion: 'El cambio inesperado que una mutación provoca en otra parte del código que usaba el mismo dato.' }
  ],
  secciones: [
    {
      titulo: 'El problema de mutar',
      parrafos: [
        'Cuando pasas un array a una función y esta lo modifica con push, el cambio se ve FUERA de la función: el array original quedó alterado. Si otra parte del código lo usaba, se rompe sin aviso. Es el efecto colateral: tocas una pieza y el castillo tiembla.',
        'La solución es tratar los datos como fotos: cada operación imprime una copia nueva con el cambio. El original queda para quien lo necesite.'
      ],
      codigo: 'const precios = [100, 250, 150];\nconst conIva = precios.map((precio) => precio * 1.21);\nconsole.log("Original:", precios);\nconsole.log("Con IVA:", conIva);',
      salida: 'Original: [100,250,150]\nCon IVA: [121,302.5,181.5]'
    },
    {
      titulo: 'Agregar, quitar y actualizar sin mutar',
      tabla: {
        columnas: ['Operación', 'Mutando (evita)', 'Inmutable (prefiere)'],
        filas: [
          ['Agregar al final', 'array.push(x)', '[...array, x]'],
          ['Agregar al inicio', 'array.unshift(x)', '[x, ...array]'],
          ['Quitar un elemento', 'array.splice(i, 1)', 'array.filter((_, i2) => i2 !== i)'],
          ['Actualizar una propiedad', 'objeto.clave = valor', '{ ...objeto, clave: valor }'],
          ['Concatenar', 'array1.push(...array2)', '[...array1, ...array2]']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'push dentro de una función que recibe el array como parámetro: mutas el array del llamador.',
        'Olvidar que sort muta: sort ordena el array ORIGINAL y devuelve el mismo. Haz [...array].sort() si necesitas el original intacto.',
        'Copiar "de mentira": const copia = original; no copia nada, ambas apuntan al MISMO array. Necesitas spread o slice.',
        'Creer que {...objeto} copia objetos anidados: la copia es superficial, las propiedades que son objetos siguen compartidas.',
        'Reasignar el parámetro con = en vez de devolver un nuevo valor: el llamador no se entera del cambio.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Regla simple: si la función recibe un array u objeto, NO lo modifiques; devuelve uno nuevo.',
        'Usa map/filter/reduce en lugar de for + push cuando transformes arrays.',
        'Para ordenar sin mutar: [...array].sort(comparador).',
        'Copia con spread: const nuevaLista = [...lista, item].',
        'Si una pieza de código muta, que sea obvio por su nombre: por ejemplo una función que muta intencionalmente un carrito local se llama ordenarCarrito, no transformar.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Agregar sin tocar el original',
      codigo: 'const lista = ["pan", "leche"];\nconst listaNueva = [...lista, "café"];\nconsole.log("Original:", lista);\nconsole.log("Nueva:", listaNueva);',
      salida: 'Original: ["pan","leche"]\nNueva: ["pan","leche","café"]',
      explicacion: 'El spread crea un array nuevo con los elementos anteriores más el nuevo. lista sigue con sus dos productos intactos.'
    },
    {
      titulo: 'Actualizar un objeto sin mutarlo',
      codigo: 'const producto = { nombre: "pan", precio: 350 };\nconst productoOferta = { ...producto, precio: 300 };\nconsole.log("Original:", producto);\nconsole.log("Oferta:", productoOferta);',
      salida: 'Original: {"nombre":"pan","precio":350}\nOferta: {"nombre":"pan","precio":300}',
      explicacion: 'El spread copia todas las propiedades y la línea precio: 300 pisa solo esa. El producto original no se enteró del cambio.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Agregar sin push',
      dificultad: 'Fácil',
      consigna: [
        'Escribe la función agregarProducto(lista, producto) que devuelva una lista NUEVA con el producto agregado al final, sin modificar la original. Prueba con lista = ["pan", "leche"] agregando "café", e imprime ambas listas.'
      ],
      pasos: [
        'Declara la lista original.',
        'La función devuelve [...lista, producto].',
        'Imprime la lista original y la nueva.'
      ],
      codigoInicial: '// Implementa agregarProducto sin mutar la lista\n',
      pista: 'return [...lista, producto]; — la original queda intacta.',
      tests: [
        { tipo: 'output', nombre: 'Las dos listas', esperado: ['Original: ["pan","leche"]', 'Nueva: ["pan","leche","café"]'], mensaje: 'La original no debe tener café; la nueva sí.' },
        { tipo: 'codigo', nombre: 'Sin push', explicacion: 'No se debe usar push (muta la lista original).', prohibido: ['push\\s*\\('], mensaje: 'Usa spread en vez de push.' }
      ],
      solucion: 'const lista = ["pan", "leche"];\nfunction agregarProducto(lista, producto) {\n  return [...lista, producto];\n}\nconst listaNueva = agregarProducto(lista, "café");\nconsole.log(`Original: ${JSON.stringify(lista)}`);\nconsole.log(`Nueva: ${JSON.stringify(listaNueva)}`);'
    },
    {
      titulo: 'Actualizar el precio sin mutar',
      dificultad: 'Media',
      consigna: [
        'Escribe aplicarDescuento(producto, porcentaje) que devuelva un objeto NUEVO con el precio rebajado, sin modificar el objeto original. Prueba con { nombre: "pan", precio: 350 } y 10% de descuento, e imprime ambos objetos.'
      ],
      pasos: [
        'Declara el producto original.',
        'La función devuelve { ...producto, precio: nuevoPrecio }.',
        'Imprime original y resultado.'
      ],
      codigoInicial: '// Implementa aplicarDescuento sin mutar el objeto\n',
      pista: 'const nuevoPrecio = producto.precio - (producto.precio * porcentaje) / 100; return { ...producto, precio: nuevoPrecio };',
      tests: [
        { tipo: 'output', nombre: 'Los dos objetos', esperado: ['Original: {"nombre":"pan","precio":350}', 'Oferta: {"nombre":"pan","precio":315}'], mensaje: 'El original conserva 350; el resultado tiene 315.' },
        { tipo: 'codigo', nombre: 'Sin mutar propiedades', explicacion: 'No se debe asignar directamente producto.precio = ...', prohibido: ['producto\\.precio\\s*='], mensaje: 'Devuelve un objeto nuevo con spread.' }
      ],
      solucion: 'const producto = { nombre: "pan", precio: 350 };\nfunction aplicarDescuento(producto, porcentaje) {\n  const nuevoPrecio = producto.precio - (producto.precio * porcentaje) / 100;\n  return { ...producto, precio: nuevoPrecio };\n}\nconst oferta = aplicarDescuento(producto, 10);\nconsole.log(`Original: ${JSON.stringify(producto)}`);\nconsole.log(`Oferta: ${JSON.stringify(oferta)}`);'
    },
    {
      titulo: 'Quitar un producto sin splice',
      dificultad: 'Dificil',
      consigna: [
        'Escribe quitarProducto(lista, nombre) que devuelva una lista NUEVA sin el producto cuyo nombre coincida, dejando la original intacta (usa filter, no splice). Prueba con ["pan", "leche", "café"] quitando "leche", e imprime ambas listas.'
      ],
      pasos: [
        'Declara la lista original.',
        'Filtra: lista.filter((producto) => producto !== nombre).',
        'Imprime original y resultado.'
      ],
      codigoInicial: '// Implementa quitarProducto con filter\n',
      pista: 'filter devuelve un array nuevo sin los elementos que no cumplan la condición.',
      tests: [
        { tipo: 'output', nombre: 'Las dos listas', esperado: ['Original: ["pan","leche","café"]', 'Resultado: ["pan","café"]'], mensaje: 'La original conserva leche; el resultado no.' },
        { tipo: 'codigo', nombre: 'Sin splice', explicacion: 'No se debe usar splice (muta el array).', prohibido: ['splice\\s*\\('], mensaje: 'Usa filter para crear la lista nueva.' }
      ],
      solucion: 'const lista = ["pan", "leche", "café"];\nfunction quitarProducto(lista, nombre) {\n  return lista.filter((producto) => producto !== nombre);\n}\nconst resultado = quitarProducto(lista, "leche");\nconsole.log(`Original: ${JSON.stringify(lista)}`);\nconsole.log(`Resultado: ${JSON.stringify(resultado)}`);'
    }
  ]
}