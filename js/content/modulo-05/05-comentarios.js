export default {
  id: 'm5-l51',
  numero: 51,
  titulo: 'Comentarios: el porqué, no el qué',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Comentario', definicion: 'Texto del código que el motor ignora: sirve para comunicar a los humanos.' },
    { termino: 'Código autodocumentado', definicion: 'Código tan claro por sus nombres que casi no necesita comentarios para entenderse.' },
    { termino: 'Comentario de "qué"', definicion: 'Explica lo obvio ("suma 1 al contador") y repite el código: es ruido.' },
    { termino: 'Comentario de "porqué"', definicion: 'Explica la razón oculta: por qué se eligió esta solución, qué riesgo evita. Eso no se puede leer del código.' },
    { termino: 'Comentario engañoso', definicion: 'Un comentario que quedó viejo y ya no describe el código: peor que ningún comentario, porque miente.' },
    { termino: 'JSDoc', definicion: 'Comentarios con formato /** ... */ que documentan la firma de una función: qué espera y qué devuelve.' }
  ],
  secciones: [
    {
      titulo: 'El comentario correcto',
      parrafos: [
        'El código dice QUÉ hace; el comentario debe decir POR QUÉ lo hace. Si escribes "// suma 1 al total" arriba de total++, el comentario repite la línea de código: no aporta. En cambio "// el primer cliente no paga envío" explica una regla de negocio que el código no puede contar.',
        'La prueba del valor: si borras el comentario y el código sigue entendiéndose igual, el comentario sobra.'
      ],
      codigo: '// El envío es gratis desde 5000: regla de la tienda\nconst envio = total >= 5000 ? 0 : 800;',
      salida: ''
    },
    {
      titulo: 'Cuándo comentar de verdad',
      lista: [
        'Reglas de negocio: "los viernes el descuento es doble".',
        'Decisiones no obvias: "usamos filter en vez de splice porque no queremos mutar".',
        'Advertencias: "no tocar este orden: el evento depende de la carga previa".',
        'Números mágicos: qué significa el 21 (IVA) o el 5000 (mínimo de envío gratis).',
        'APIs compartidas (JSDoc): qué recibe y qué devuelve una función que otros usan.'
      ]
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Comentar el QUÉ: // incrementa i sobre i++: repite lo evidente.',
        'Comentarios que mienten: cambiaste la lógica y el comentario quedó viejo. Ahora confunde.',
        'Comentarios en línea en cada variable: el ruido tapa el código real.',
        'Comentarios para compensar malos nombres: si "x" necesita explicación, renombra la variable en vez de explicarla.',
        'Bloques enormes de historia: "esto lo escribió..." no ayuda a leer el código.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Primero intenta que el código se explique solo con buenos nombres; el comentario es el refuerzo, no el plan.',
        'Comenta el PORQUÉ: reglas, decisiones, advertencias.',
        'Si el código cambia, actualiza el comentario en el mismo cambio: un comentario viejo es una trampa.',
        'Para documentar funciones reutilizables, usa JSDoc: /** @param {number} precio */.',
        'Menos comentarios y mejores: calidad sobre cantidad.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El mismo código, dos estilos',
      codigo: '// Estilo ruidoso: comenta lo que el código ya dice\nlet i = 0; // contador\n// sumamos uno al contador\ni = i + 1;\n// mostramos el contador\nconsole.log(i);\n\n// Estilo claro: nombres que se explican solos\nlet contador = 0;\ncontador++;\nconsole.log(contador);',
      salida: '1\n1',
      explicacion: 'La segunda versión no necesita comentarios porque los nombres cuentan la historia. Los comentarios quedan reservados para el porqué.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Quitar los comentarios ruidosos',
      dificultad: 'Fácil',
      consigna: [
        'El código base está lleno de comentarios que repiten lo obvio. Reescríbelo con nombres claros y SIN ningún comentario, manteniendo el mismo comportamiento: calcula el precio con envío y lo imprime. Precio 3500, envío 800.'
      ],
      pasos: [
        'Nombra bien las variables: precio, envio, total.',
        'Elimina todos los comentarios.',
        'Mantén la salida exacta: 4300.'
      ],
      codigoInicial: '// precio del producto\nlet p = 3500;\n// costo del envío\nlet e = 800;\n// sumamos ambos para el total\nlet t = p + e;\n// mostramos el resultado\nconsole.log(t);',
      pista: 'const precio = 3500; const envio = 800; const total = precio + envio; console.log(total);',
      tests: [
        { tipo: 'output', nombre: 'El total', esperado: ['4300'], mensaje: '3500 + 800 = 4300.' },
        { tipo: 'codigo', nombre: 'Sin comentarios', explicacion: 'No debe quedar ningún comentario en el código.', prohibido: ['//', '/\\*'], mensaje: 'Elimina todos los comentarios y usa nombres claros.' },
        { tipo: 'codigo', nombre: 'Nombres descriptivos', explicacion: 'Las variables deben llamarse precio, envio y total.', requerido: ['precio', 'envio', 'total'], mensaje: 'Usa nombres que se expliquen solos.' }
      ],
      solucion: 'const precio = 3500;\nconst envio = 800;\nconst total = precio + envio;\nconsole.log(total);'
    },
    {
      titulo: 'Convertir el comentario en código',
      dificultad: 'Media',
      consigna: [
        'El código base usa una variable críptica "d" explicada por un comentario. Refactoréalo: renombra la variable a descuento, calcula el precio final (500 - descuento) y elimina el comentario. Imprime el resultado.'
      ],
      pasos: [
        'Renombra d a descuento.',
        'Calcula el precio final restando el descuento.',
        'Borra el comentario y mantén la salida: 450.'
      ],
      codigoInicial: '// d = descuento de 50 pesos\nconst d = 50;\nconst precioFinal = 500 - d;\nconsole.log(precioFinal);',
      pista: 'La variable se explica sola: const descuento = 50;',
      tests: [
        { tipo: 'output', nombre: 'Precio final', esperado: ['450'], mensaje: '500 - 50 = 450.' },
        { tipo: 'codigo', nombre: 'Sin comentarios', explicacion: 'El comentario debe desaparecer (el nombre lo reemplaza).', prohibido: ['//'], mensaje: 'Borra el comentario: el nombre descriptivo lo reemplaza.' },
        { tipo: 'codigo', nombre: 'Nombre descriptivo', explicacion: 'La variable debe llamarse descuento.', requerido: ['descuento'], mensaje: 'Renombra la variable.' }
      ],
      solucion: 'const descuento = 50;\nconst precioFinal = 500 - descuento;\nconsole.log(precioFinal);'
    },
    {
      titulo: 'Comentar el porqué',
      dificultad: 'Media',
      consigna: [
        'El código base calcula un límite de stock con un número que parece mágico: 20. Agrega UN comentario que explique el POR QUÉ (regla de la tienda: la cámara refrigerada guarda máximo 20 cajas de leche) y mantén la salida. El comentario debe estar en la línea de la constante.'
      ],
      pasos: [
        'Escribe el comentario explicando la regla de negocio.',
        'Mantén el cálculo igual.',
        'Imprime: 20.'
      ],
      codigoInicial: 'const MAX_CAJAS = 20;\nconsole.log(MAX_CAJAS);',
      pista: '// La cámara refrigerada guarda como máximo 20 cajas de leche\nconst MAX_CAJAS = 20;',
      tests: [
        { tipo: 'output', nombre: 'El máximo', esperado: ['20'], mensaje: 'La constante vale 20.' },
        { tipo: 'codigo', nombre: 'Comentario del porqué', explicacion: 'Debe haber un comentario que explique la regla.', requerido: ['cámara refrigerada|MAX_CAJAS.*20|20.*MAX_CAJAS'], mensaje: 'Agrega un comentario que explique el porqué del número.' }
      ],
      solucion: '// La cámara refrigerada guarda como máximo 20 cajas de leche\nconst MAX_CAJAS = 20;\nconsole.log(MAX_CAJAS);'
    }
  ]
}