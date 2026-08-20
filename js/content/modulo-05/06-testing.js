export default {
  id: 'm5-l52',
  numero: 52,
  titulo: 'Testing: probar tu código sin librerías',
  nivel: 'Dificil',
  palabrasClave: [
    { termino: 'Test unitario', definicion: 'Una prueba pequeña que verifica que una función devuelve lo esperado para una entrada dada.' },
    { termino: 'Aserción', definicion: 'La comparación entre lo obtenido y lo esperado: si no coinciden, el test falla.' },
    { termino: 'Caso de prueba', definicion: 'Una entrada concreta y su resultado esperado: casos típicos, límites (0, máximo) y casos de borde.' },
    { termino: 'Mensaje de fallo', definicion: 'El texto que dice QUÉ se esperaba y QUÉ se obtuvo: sin él, un fallo no te dice nada.' },
    { termino: 'Suite de tests', definicion: 'Un conjunto de casos que se corren juntos para confirmar que el código sigue funcionando después de cada cambio.' }
  ],
  secciones: [
    {
      titulo: 'Probar es proteger tu futuro',
      parrafos: [
        'Un test no le sirve al código de HOY: le sirve al de MAÑANA. Cuando cambias una función y sin querer rompes algo, los tests te avisan al instante, como la alarma de la tienda cuando alguien abre la puerta de atrás.',
        'No necesitas librerías para empezar: una función que compara y un grupo de casos alcanzan. La estructura: probarIgual(actual, esperado) imprime PASA o FALLA con detalle.'
      ],
      codigo: 'function probarIgual(actual, esperado) {\n  if (actual === esperado) {\n    console.log("PASA");\n  } else {\n    console.log(`FALLA: esperado ${esperado}, obtenido ${actual}`);\n  }\n}\nprobarIgual(2 + 2, 4);\nprobarIgual(2 + 2, 5);',
      salida: 'PASA\nFALLA: esperado 5, obtenido 4'
    },
    {
      titulo: 'Qué casos probar',
      tabla: {
        columnas: ['Tipo de caso', 'Qué busca', 'Ejemplo para calcularIva'],
        filas: [
          ['Caso típico', 'El camino feliz', 'calcularIva(1000) → 210'],
          ['Caso límite', 'El borde del dominio', 'calcularIva(0) → 0'],
          ['Caso de borde', 'Valores raros pero posibles', 'calcularIva(1) → 0.21'],
          ['Caso negativo', 'La entrada inválida', 'calcularIva(-100)']
        ]
      }
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Comparar con == o con un solo = : == tolera "4" == 4 y = asigna en vez de comparar. Usa ===.',
        'FALLA sin mensaje: "no da" no sirve; el mensaje debe decir esperado vs obtenido.',
        'Probar solo el caso feliz: los bugs viven en los bordes (0, máximo, vacío).',
        'Test que depende de Math.random o de la fecha: no es repetible.',
        'Escribir tests y no correrlos después de cada cambio: la red de seguridad solo funciona si está activa.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Cada test: una entrada, un resultado esperado, un mensaje claro.',
        'Aserción con === y para arrays/objetos con JSON.stringify.',
        'Cubre típico + límite + borde en cada función importante.',
        'Corre la suite después de CADA modificación, aunque sea chica.',
        'Si un cambio rompe un test, el test ganó: te mostró exactamente dónde quedó el problema.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Testear una función de verdad',
      codigo: 'function calcularDescuento(precio, porcentaje) {\n  return precio - (precio * porcentaje) / 100;\n}\nfunction probarIgual(actual, esperado) {\n  if (actual === esperado) {\n    console.log("PASA");\n  } else {\n    console.log(`FALLA: esperado ${esperado}, obtenido ${actual}`);\n  }\n}\nprobarIgual(calcularDescuento(1000, 10), 900);\nprobarIgual(calcularDescuento(1000, 0), 1000);\nprobarIgual(calcularDescuento(1000, 100), 0);',
      salida: 'PASA\nPASA\nPASA',
      explicacion: 'Tres casos: típico (10%), límite (0%) y borde (100%). Si mañana alguien rompe la fórmula, al menos uno de estos fallará y lo sabrás al instante.'
    }
  ],
  ejercicios: [
    {
      titulo: 'La función probarIgual',
      dificultad: 'Fácil',
      consigna: [
        'Implementa probarIgual(actual, esperado) que imprima "PASA" si coinciden (con ===) y, si no, "FALLA: esperado X, obtenido Y". Prueba con probarIgual(5, 5) y probarIgual(5, 6).'
      ],
      pasos: [
        'Compara con ===.',
        'En el fallo, usa template literal con esperado y obtenido.',
        'Corre las dos pruebas.'
      ],
      codigoInicial: '// Implementa probarIgual y corre las dos pruebas\n',
      pista: 'console.log(`FALLA: esperado ${esperado}, obtenido ${actual}`);',
      tests: [
        { tipo: 'output', nombre: 'Las dos pruebas', esperado: ['PASA', 'FALLA: esperado 6, obtenido 5'], mensaje: '5===5 pasa; 5 vs 6 falla con el mensaje exacto.' }
      ],
      solucion: 'function probarIgual(actual, esperado) {\n  if (actual === esperado) {\n    console.log("PASA");\n  } else {\n    console.log(`FALLA: esperado ${esperado}, obtenido ${actual}`);\n  }\n}\nprobarIgual(5, 5);\nprobarIgual(5, 6);'
    },
    {
      titulo: 'Suite para calcularTotal',
      dificultad: 'Media',
      consigna: [
        'Dada la función calcularTotal(precios) que suma un array, escribe probarIgual (como en el ejercicio anterior) y prueba TRES casos: calcularTotal([100, 200, 300]) contra 600, calcularTotal([]) contra 0, y calcularTotal([10]) contra 10. Imprime los resultados.'
      ],
      pasos: [
        'Define calcularTotal con for...of.',
        'Define probarIgual.',
        'Corre los tres casos: típico, vacío y unitario.'
      ],
      codigoInicial: '// Implementa calcularTotal, probarIgual y la suite de 3 casos\n',
      pista: 'probarIgual(calcularTotal([100, 200, 300]), 600); probarIgual(calcularTotal([]), 0); probarIgual(calcularTotal([10]), 10);',
      tests: [
        { tipo: 'output', nombre: 'La suite completa', esperado: ['PASA', 'PASA', 'PASA'], mensaje: 'Los tres casos deben pasar.' }
      ],
      solucion: 'function calcularTotal(precios) {\n  let acumulado = 0;\n  for (const precio of precios) {\n    acumulado += precio;\n  }\n  return acumulado;\n}\nfunction probarIgual(actual, esperado) {\n  if (actual === esperado) {\n    console.log("PASA");\n  } else {\n    console.log(`FALLA: esperado ${esperado}, obtenido ${actual}`);\n  }\n}\nprobarIgual(calcularTotal([100, 200, 300]), 600);\nprobarIgual(calcularTotal([]), 0);\nprobarIgual(calcularTotal([10]), 10);'
    },
    {
      titulo: 'El test que atrapa el bug',
      dificultad: 'Dificil',
      consigna: [
        'La función promedio(notas) del código base está MAL: suma las notas pero no divide. Corrígela (divide por la cantidad, y devuelve 0 si el array está vacío). Luego escribe probarIgual y verifica con promedio([8, 6, 10]) contra 8 y promedio([]) contra 0. La salida debe mostrar PASA en ambos.'
      ],
      pasos: [
        'Corrige la función: divide la suma por notas.length.',
        'Maneja el vacío: si longitud es 0, devuelve 0.',
        'Define probarIgual y corre los dos casos.'
      ],
      codigoInicial: 'function promedio(notas) {\n  let suma = 0;\n  for (const nota of notas) {\n    suma += nota;\n  }\n  return suma; // bug: no divide\n}\n// Corrige la función y agrega los tests',
      pista: 'return notas.length === 0 ? 0 : suma / notas.length;',
      tests: [
        { tipo: 'output', nombre: 'Tests del promedio', esperado: ['PASA', 'PASA'], mensaje: 'promedio([8,6,10]) debe dar 8 y promedio([]) debe dar 0.' }
      ],
      solucion: 'function promedio(notas) {\n  let suma = 0;\n  for (const nota of notas) {\n    suma += nota;\n  }\n  return notas.length === 0 ? 0 : suma / notas.length;\n}\nfunction probarIgual(actual, esperado) {\n  if (actual === esperado) {\n    console.log("PASA");\n  } else {\n    console.log(`FALLA: esperado ${esperado}, obtenido ${actual}`);\n  }\n}\nprobarIgual(promedio([8, 6, 10]), 8);\nprobarIgual(promedio([]), 0);'
    }
  ]
}