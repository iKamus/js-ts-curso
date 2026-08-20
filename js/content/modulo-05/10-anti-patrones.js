export default {
  id: 'm5-l56',
  numero: 56,
  titulo: 'Anti-patrones: hábitos que debes evitar',
  nivel: 'Dificil',
  palabrasClave: [
    { termino: 'Anti-patrón', definicion: 'Una solución que parece cómoda a corto plazo pero que termina costando caro: funciona hoy y rompe mañana.' },
    { termino: '== vs ===', definicion: '== compara con coerción (convierte tipos); === compara sin convertir. === es la regla: "5" == 5 es true, "5" === 5 es false.' },
    { termino: 'Estado global', definicion: 'Variables accesibles desde cualquier parte del código: cómodas de escribir, imposibles de rastrear cuando cambian.' },
    { termino: 'Mutar parámetros', definicion: 'Modificar el array u objeto que una función recibe: el llamador no espera que su dato cambie y se rompe.' },
    { termino: 'Anidamiento profundo', definicion: 'if dentro de if dentro de for: código imposible de seguir. Se evita con returns tempranos y funciones.' },
    { termino: 'Números mágicos', definicion: 'Valores sueltos sin nombre (0.21, 5000, 7) que nadie sabe qué significan. Se reemplazan con constantes.' }
  ],
  secciones: [
    {
      titulo: 'Los sospechosos de siempre',
      parrafos: [
        'Hay hábitos que aparecen en todos los códigos novatos: var en vez de const/let, == en vez de ===, variables globales que cambian solas, funciones que modifican los datos que reciben, y números mágicos que nadie recuerda qué son.',
        'Ninguno es "ilegal": el problema es el costo futuro. Cada uno hace que un bug sea más difícil de encontrar y que el código sea más difícil de mantener.'
      ],
      codigo: '// Anti-patrón: números mágicos\nconst total = 1000 * 1.21;\n\n// Mejor: constantes con nombre\nconst IVA = 0.21;\nconst totalConIva = 1000 * IVA;\nconsole.log(totalConIva);',
      salida: '1210'
    },
    {
      titulo: 'Tabla de anti-patrones y su cura',
      tabla: {
        columnas: ['Anti-patrón', 'Por qué es malo', 'La cura'],
        filas: [
          ['var', 'Sin scope de bloque, se redeclara, sorpresas', 'let y const'],
          ['==', 'Compara "5" == 5 como true: bugs silenciosos', '==='],
          ['Estado global mutable', 'Cualquiera puede cambiarlo sin aviso', 'Pasar y devolver datos'],
          ['Mutación de parámetros', 'El llamador pierde su dato', 'Devolver copias'],
          ['Números mágicos', '0.21 no dice nada', 'Constantes con nombre'],
          ['Funciones largas', 'No se leen, no se prueban', 'Funciones chicas'],
          ['Catch vacío', 'Tragas el error y nunca sabes qué pasó', 'Log del error o re-lanzarlo']
        ]
      }
    },
    {
      titulo: 'Errores comunes al querer arreglar',
      lista: [
        'Reemplazar == por === "pero solo aquí": la inconsistencia es el siguiente bug.',
        'Convertir un estado global en 20 parámetros: el problema no es el número, es la claridad del flujo.',
        'Agregar un catch vacío "para que no explote": el error sigue ahí, solo que ahora es invisible.',
        'Usar var porque "siempre funcionó": hoy funciona, el costo llega cuando el scope crece.',
        'Dejar los números mágicos porque "ya lo entendí yo": en un mes ya no lo entiendes.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Siempre === y !==, sin excepciones.',
        'const por defecto, let solo cuando reasignes.',
        'Las funciones reciben datos y devuelven datos; no tocan variables de afuera.',
        'Toda constante con significado tiene nombre y mayúsculas.',
        'Los errores se manejan de verdad: log, mensaje útil o re-lanzar.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Anti-patrón corregido',
      codigo: '// Anti-patrón: variable global + ==\nlet precioGlobal = 500;\nfunction calcular() {\n  if (precioGlobal == "500") {\n    console.log("Iguales");\n  }\n}\ncalcular();\n\n// Corregido: dato entra y sale, comparación estricta\nfunction calcular(precio) {\n  if (precio === 500) {\n    console.log("Iguales");\n  }\n}\ncalcular(500);',
      salida: 'Iguales\nIguales',
      explicacion: 'La versión corregida no depende de una variable externa: el precio entra por parámetro y la comparación es estricta. Cualquier bug futuro vivirá en una zona acotada.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Erradicar el ==',
      dificultad: 'Fácil',
      consigna: [
        'El código base compara con == (coerción). Reescríbelo con ===. Debe imprimir "Distintos" porque un string y un número no son iguales estrictamente.'
      ],
      pasos: [
        'Cambia == por ===.',
        'Verifica: "5" === 5 es false → "Distintos".'
      ],
      codigoInicial: 'const texto = "5";\nconst numero = 5;\nif (texto == numero) {\n  console.log("Iguales");\n} else {\n  console.log("Distintos");\n}',
      pista: 'Solo cambia el operador: texto === numero.',
      tests: [
        { tipo: 'output', nombre: 'Resultado', esperado: ['Distintos'], mensaje: 'Con ===, "5" y 5 son distintos.' },
        { tipo: 'codigo', nombre: 'Igualdad estricta', explicacion: 'No debe quedar == en el código.', prohibido: ['(^|[^=!])==([^=]|$)'], mensaje: 'Usa === en la comparación.' }
      ],
      solucion: 'const texto = "5";\nconst numero = 5;\nif (texto === numero) {\n  console.log("Iguales");\n} else {\n  console.log("Distintos");\n}'
    },
    {
      titulo: 'Adiós al estado global',
      dificultad: 'Dificil',
      consigna: [
        'El código base usa una variable global total que la función modifica desde adentro. Refactoréalo: la función debe recibir el monto por parámetro, aplicar el IVA (21%) y devolver el resultado. El estado global desaparece. Imprime la llamada con 1000.'
      ],
      pasos: [
        'Elimina la variable global.',
        'conIva(monto) recibe el monto y devuelve monto * 1.21.',
        'Imprime conIva(1000).'
      ],
      codigoInicial: 'let total = 0;\nfunction conIva() {\n  total = 1000 * 1.21; // bug: muta una variable externa\n}\nconIva();\nconsole.log(total);',
      pista: 'function conIva(monto) { return monto * 1.21; } console.log(conIva(1000));',
      tests: [
        { tipo: 'output', nombre: 'El IVA', esperado: ['1210'], mensaje: '1000 * 1.21 = 1210.' },
        { tipo: 'codigo', nombre: 'Sin estado global', explicacion: 'La función no debe modificar una variable externa: recibe y devuelve.', requerido: ['function conIva\\(monto\\)'], prohibido: ['^\\s*let total'], mensaje: 'Elimina la variable global; la función recibe y devuelve.' }
      ],
      solucion: 'function conIva(monto) {\n  return monto * 1.21;\n}\nconsole.log(conIva(1000));'
    },
    {
      titulo: 'Nombres para los números mágicos',
      dificultad: 'Media',
      consigna: [
        'El código base calcula con valores sueltos: 0.21 (IVA) y 5000 (mínimo de envío gratis). Refactoréalo declarando las constantes IVA y MINIMO_ENVIO_GRATIS y úsalas en los cálculos. Debe imprimir 1210 y "Envío gratis".'
      ],
      pasos: [
        'Declara const IVA = 0.21 y const MINIMO_ENVIO_GRATIS = 5000.',
        'Usa IVA en el primer cálculo.',
        'Usa MINIMO_ENVIO_GRATIS en la comparación del envío.'
      ],
      codigoInicial: 'const total = 1000 * 0.21;\nconsole.log(total);\nconst venta = 6000;\nif (venta >= 5000) {\n  console.log("Envío gratis");\n}',
      pista: 'const IVA = 0.21; const MINIMO_ENVIO_GRATIS = 5000;',
      tests: [
        { tipo: 'output', nombre: 'Resultados', esperado: ['210', 'Envío gratis'], mensaje: '1000 * 0.21 = 210 y 6000 supera el mínimo.' },
        { tipo: 'codigo', nombre: 'Constantes con nombre', explicacion: 'Los números deben estar en constantes con nombre.', requerido: ['IVA', 'MINIMO_ENVIO_GRATIS'], mensaje: 'Declara las constantes y úsalas en los cálculos.' },
        { tipo: 'codigo', nombre: 'Sin números en los cálculos', explicacion: 'Los cálculos deben usar las constantes, no los números sueltos.', prohibido: ['\\*\\s*0\\.21', '>=\\s*5000'], mensaje: 'Reemplaza los números mágicos por las constantes en los cálculos.' }
      ],
      solucion: 'const IVA = 0.21;\nconst MINIMO_ENVIO_GRATIS = 5000;\nconst total = 1000 * IVA;\nconsole.log(total);\nconst venta = 6000;\nif (venta >= MINIMO_ENVIO_GRATIS) {\n  console.log("Envío gratis");\n}'
    }
  ]
}