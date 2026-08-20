export default {
  id: 'm1-l09',
  numero: 9,
  titulo: 'Scope y closures',
  nivel: 'Medio',
  palabrasClave: [
    { termino: 'Scope (ámbito)', definicion: 'La zona del código donde una variable existe y es accesible.' },
    { termino: 'Scope global', definicion: 'El ámbito más externo: las variables globales son accesibles desde cualquier parte del programa.' },
    { termino: 'Scope de función', definicion: 'El ámbito interno de una función: lo que declaras ahí solo existe dentro de ella.' },
    { termino: 'Scope de bloque', definicion: 'El ámbito entre llaves {}: let y const viven solo dentro de su bloque.' },
    { termino: 'Closure', definicion: 'Cuando una función "recuerda" las variables del lugar donde nació, aunque ese lugar ya terminó de ejecutarse.' },
    { termino: 'Estado privado', definicion: 'Datos que solo una función puede ver y modificar, inaccesibles desde afuera: la especialidad de los closures.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es el scope?',
      parrafos: [
        'El scope es la regla de "quién ve qué". Imagina la tienda: los empleados ven la caja registradora, pero el cliente solo ve la vidriera. Cada variable tiene una zona donde existe; fuera de esa zona, no se puede usar.',
        'Hay tres niveles: global (visible en todo el programa), de función (visible dentro de la función) y de bloque (visible dentro de las llaves {}) para let y const. La regla de oro: siempre que puedas, declara lo más adentro posible.'
      ],
      codigo: 'let global = "visible en todos lados";\nfunction probar() {\n  let local = "solo dentro de la función";\n  console.log(global);\n  console.log(local);\n}\nprobar();\nconsole.log(global);\nconsole.log(local);',
      salida: 'visible en todos lados\nsolo dentro de la función\nvisible en todos lados\n(Error: local is not defined)'
    },
    {
      titulo: 'Scope de bloque: let y const vs var',
      parrafos: [
        'let y const respetan el bloque: una variable declarada dentro de un if o un for no existe fuera. var NO respeta el bloque (se escapa a la función), lo que causa bugs difíciles de rastrear. Por eso var está en desgracia.',
        'Ejemplo típico: un contador de bucle. Con let i, la i solo existe dentro del for. Con var, la i queda viva después del bucle.'
      ],
      codigo: 'if (true) {\n  let dentro = "bloque";\n  var escapada = "afuera";\n}\nconsole.log(escapada);\nconsole.log(dentro);',
      salida: 'afuera\n(Error: dentro is not defined)'
    },
    {
      titulo: '¿Qué es un closure?',
      parrafos: [
        'Un closure es una función que "se lleva puesto" el entorno donde nació. Cuando creas una función dentro de otra, la función interna recuerda las variables de la externa, incluso después de que la externa terminó de ejecutarse.',
        'Piensa en un termo: la función externa arma el termo con su contenido (las variables), y cada función interna que le das a alguien es un mate que trae el líquido de ese termo. El mate sigue sirviendo agua del termo original, aunque el termo ya no esté en la mano.'
      ],
      codigo: 'function crearContador() {\n  let contador = 0;\n  return function () {\n    contador++;\n    return contador;\n  };\n}\nconst contar = crearContador();\nconsole.log(contar());\nconsole.log(contar());\nconsole.log(contar());',
      salida: '1\n2\n3'
    },
    {
      titulo: 'Closures y estado privado',
      parrafos: [
        'El superpoder del closure: la variable contador del ejemplo anterior es INVISIBLE desde afuera. Nadie puede modificarla directamente; solo a través de la función interna. Eso es estado privado: datos protegidos con su propia interfaz de acceso.',
        'Este patrón se usa en código real para contadores, cachés, configuraciones por usuario y controladores de eventos, y es la base conceptual de las clases privadas que verás en módulos avanzados.'
      ],
      codigo: 'function crearCajaFuerte() {\n  let codigo = "1234";\n  return {\n    abrir(clave) {\n      return clave === codigo ? "abierta" : "clave incorrecta";\n    }\n  };\n}\nconst caja = crearCajaFuerte();\nconsole.log(caja.abrir("1234"));\nconsole.log(caja.abrir("0000"));\nconsole.log(caja.codigo);',
      salida: 'abierta\nclave incorrecta\nundefined'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Usar una variable fuera de su scope → ReferenceError: x is not defined. Si aparece, revisa dónde la declaraste.',
        'Crear variables globales accidentales: escribir precio = 5 sin let/const la declara global, contaminando todo el programa.',
        'Esperar que var respete el bloque: var declarada en un if existe después del if. Usa let y const y el problema desaparece.',
        'Confundir el closure con una copia: las funciones internas recuerdan la MISMA variable compartida, no una copia (por eso el contador suma 1, 2, 3 y no 1, 1, 1).',
        'Olvidar que un bucle con var comparte la variable: los clásicos bugs de i final con var vienen de acá.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Declara las variables en el scope más chico posible: menos exposición, menos bugs.',
        'Evita variables globales: pasa los datos como parámetros.',
        'Usa closures para encapsular estado: si algo solo debe cambiar de formas controladas, escóndelo en un closure.',
        'Nombra bien las funciones internas: una función anónima en un closure dificulta la lectura; dale nombre descriptivo cuando ayude.',
        'Cuando un closure crezca, considera una clase (módulo 8 del curso): es la evolución natural del mismo patrón.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'El contador de clientes',
      codigo: 'function crearContadorDeClientes() {\n  let clientes = 0;\n  return function () {\n    clientes++;\n    return `Cliente número ${clientes}`;\n  };\n}\nconst registrar = crearContadorDeClientes();\nconsole.log(registrar());\nconsole.log(registrar());',
      salida: 'Cliente número 1\nCliente número 2',
      explicacion: 'Cada llamada a registrar incrementa la misma variable clientes del closure. Si crearás dos contadores, cada uno tendría su propia variable independiente.'
    },
    {
      titulo: 'Cada closure guarda su propio estado',
      codigo: 'function crearSumadora(incremento) {\n  return function (valor) {\n    return valor + incremento;\n  };\n}\nconst mas10 = crearSumadora(10);\nconst mas100 = crearSumadora(100);\nconsole.log(mas10(5));\nconsole.log(mas100(5));',
      salida: '15\n105',
      explicacion: 'Las dos funciones nacieron de la misma fábrica, pero cada una recuerda su propio incremento: el closure atrapa los valores de SU ejecución.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Scope en acción',
      dificultad: 'Fácil',
      consigna: ['Declara una variable global llamada mensaje con el valor "global". Luego crea una función probar que declare una variable local también llamada mensaje con el valor "local" y la imprima. Llama a probar y luego imprime la global.'],
      pasos: [
        'Declara la variable global mensaje.',
        'Dentro de probar, declara otra mensaje con let y príntela.',
        'Después de llamar a probar, imprime la global.'
      ],
      codigoInicial: '// Declara la global, define probar, llama e imprime\n',
      pista: 'La función imprime su variable local ("local"); después de la llamada, el console.log externo imprime la global ("global").',
      tests: [
        { tipo: 'output', nombre: 'Local y global', esperado: ['local', 'global'], mensaje: 'La función imprime su propia variable (local) y el programa después imprime la global.' }
      ],
      solucion: 'const mensaje = "global";\nfunction probar() {\n  const mensaje = "local";\n  console.log(mensaje);\n}\nprobar();\nconsole.log(mensaje);'
    },
    {
      titulo: 'El contador protegido',
      dificultad: 'Media',
      consigna: ['Crea la función crearContador que tenga una variable interna contador = 0 y devuelva una función que la incremente y la devuelva. Luego crea el contador, llámalo tres veces e imprime cada resultado.'],
      pasos: [
        'La función externa declara el contador interno.',
        'La función interna incrementa y devuelve.',
        'Crea const contar = crearContador() y llama tres veces imprimiendo.'
      ],
      codigoInicial: '// Define crearContador y úsala tres veces\n',
      pista: 'return function () { contador++; return contador; } — cada llamada imprime un número distinto.',
      tests: [
        { tipo: 'output', nombre: 'Tres incrementos', esperado: ['1', '2', '3'], mensaje: 'El contador privado debe incrementar en cada llamada: 1, 2, 3.' }
      ],
      solucion: 'function crearContador() {\n  let contador = 0;\n  return function () {\n    contador++;\n    return contador;\n  };\n}\nconst contar = crearContador();\nconsole.log(contar());\nconsole.log(contar());\nconsole.log(contar());'
    },
    {
      titulo: 'La fábrica de sumas',
      dificultad: 'Dificil',
      consigna: ['Crea la función crearSumadora que reciba un número base y devuelva una función que reciba otro número y devuelva la suma de ambos. Crea dos sumadoras (base 5 y base 10) y prueba cada una con el número 3.'],
      pasos: [
        'La externa recibe base.',
        'La interna recibe valor y devuelve base + valor.',
        'Crea sumar5 y sumar10, imprime ambas llamadas con 3.'
      ],
      codigoInicial: '// Define crearSumadora y las dos instancias\n',
      pista: 'const sumar5 = crearSumadora(5); luego console.log(sumar5(3)) → 8. Y sumar10(3) → 13.',
      tests: [
        { tipo: 'output', nombre: 'Las dos sumadoras', esperado: ['8', '13'], mensaje: 'sumar5(3) = 8 y sumar10(3) = 13, cada una recuerda su propia base.' }
      ],
      solucion: 'function crearSumadora(base) {\n  return function (valor) {\n    return base + valor;\n  };\n}\nconst sumar5 = crearSumadora(5);\nconst sumar10 = crearSumadora(10);\nconsole.log(sumar5(3));\nconsole.log(sumar10(3));'
    }
  ]
}