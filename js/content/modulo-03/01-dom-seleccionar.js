export default {
  id: 'm3-l26',
  numero: 26,
  titulo: 'El DOM y cómo seleccionar elementos',
  nivel: 'Medio',
  htmlBase: '<h1 id="titulo">Mi tienda de barrio</h1><p class="oferta">Pan a $350</p><p class="oferta">Leche a $500</p><p class="oferta">Café a $900</p>',
  palabrasClave: [
    { termino: 'DOM', definicion: 'Document Object Model: la representación en forma de árbol que el navegador arma con tu HTML. Cada etiqueta es un nodo.' },
    { termino: 'Nodo', definicion: 'Cada pieza del árbol: un elemento (div, p, li...), un texto o un atributo.' },
    { termino: 'querySelector', definicion: 'El método para buscar un elemento por selector CSS: document.querySelector(".titulo") encuentra el primero que coincida.' },
    { termino: 'querySelectorAll', definicion: 'Igual que querySelector pero devuelve TODAS las coincidencias, en un NodeList.' },
    { termino: 'getElementById', definicion: 'El método clásico para buscar un elemento por su atributo id.' },
    { termino: 'NodeList', definicion: 'Una lista de nodos, parecida a un array. Se recorre con for...of, pero no tiene todos los métodos de array.' },
    { termino: 'Selector CSS', definicion: 'La forma de apuntar a elementos: #id para id, .clase para clases, tag para etiquetas.' }
  ],
  secciones: [
    {
      titulo: '¿Qué es el DOM?',
      parrafos: [
        'Cuando el navegador carga una página, arma el DOM: un árbol de nodos donde cada etiqueta HTML es una rama. El título es un nodo, cada párrafo es un nodo, y así hasta las hojas (el texto y los atributos).',
        'JavaScript puede caminar por ese árbol, buscar nodos, leerlos y modificarlos. Ese "diálogo" entre tu código y la página es la base de toda la interactividad web: mostrar un mensaje, cambiar un color, ocultar una sección.'
      ],
      codigo: '<body>\n  <h1 id="titulo">Tienda</h1>\n  <p class="oferta">Hoy: pan a $350</p>\n  <p class="oferta">Leche a $500</p>\n</body>',
      salida: 'Árbol del DOM:\nbody\n ├─ h1#titulo ("Tienda")\n ├─ p.oferta ("Hoy: pan a $350")\n └─ p.oferta ("Leche a $500")'
    },
    {
      titulo: 'Seleccionar elementos: querySelector',
      parrafos: [
        'document.querySelector(selector) recibe un selector CSS (como en los estilos) y devuelve el PRIMER elemento que coincida. Es el método que usarás el 90% de las veces: poderoso y consistente.',
        'Los selectores: #nombre para un id, .clase para una clase, etiqueta para el tipo, y combinaciones como .lista li (los li dentro de .lista).'
      ],
      tabla: {
        columnas: ['Método', 'Qué hace', 'Ejemplo', 'Resultado'],
        filas: [
          ['document.querySelector("#x")', 'Primer elemento con id x', 'querySelector("#titulo")', 'el h1'],
          ['document.querySelector(".x")', 'Primer elemento con clase x', 'querySelector(".oferta")', 'el primer p.oferta'],
          ['document.querySelector("p")', 'Primer elemento de tipo p', 'querySelector("p")', 'el primer párrafo'],
          ['document.querySelectorAll(".x")', 'TODOS los elementos con clase x', 'querySelectorAll(".oferta")', 'NodeList con 2 párrafos'],
          ['document.getElementById("x")', 'Elemento con id x (clásico)', 'getElementById("titulo")', 'el h1']
        ]
      }
    },
    {
      titulo: 'querySelectorAll y el NodeList',
      parrafos: [
        'querySelectorAll devuelve un NodeList: una lista estática de los elementos que coincidieron. Se recorre con for...of o con forEach. No es un array exacto: no tiene map ni filter por defecto (puedes convertirlo con [...lista]).',
        'Consejo: si esperás una lista, usa querySelectorAll; si esperás un solo elemento, querySelector. No mezcles.'
      ],
      codigo: 'const ofertas = document.querySelectorAll(".oferta");\nfor (const oferta of ofertas) {\n  console.log(oferta.textContent);\n}',
      salida: 'Hoy: pan a $350\nLeche a $500'
    },
    {
      titulo: 'Leer el contenido de un elemento',
      parrafos: [
        'textContent devuelve el texto del elemento (sin etiquetas) y se puede escribir para cambiar el texto. innerHTML devuelve o escribe el HTML interno, etiquetas incluidas. Regla: para texto, textContent; para estructura HTML, innerHTML (con cuidado, como verás en buenas prácticas).'
      ],
      codigo: 'const titulo = document.querySelector("#titulo");\nconsole.log(titulo.textContent);\ntitulo.textContent = "Mi tienda";\nconsole.log(titulo.textContent);',
      salida: 'Tienda\nMi tienda'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'querySelector devuelve null si no encuentra nada: si intentas .textContent sobre null, el programa se cae. Verifica con if (elemento) antes de usarlo.',
        'Olvidar el punto de la clase o la # del id en el selector: querySelector("titulo") busca una ETIQUETA <titulo>, no el id.',
        'Esperar que querySelectorAll devuelva un array: es un NodeList. Convierte con [...lista] si necesitas métodos de array.',
        'Usar getElementById con un punto o con #: getElementById("titulo") va SIN #.',
        'Buscar elementos que aún no existen en el DOM: si el elemento se crea después con JavaScript, búscalo después de crearlo, no antes.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Prefiere querySelector/querySelectorAll: un solo método para todos los selectores CSS.',
        'Usa id para elementos únicos y clases para grupos: es más semántico que buscar por etiqueta.',
        'Guarda el elemento en una constante si lo usarás varias veces: no lo busques mil veces.',
        'Usa textContent para texto, no innerHTML: evita riesgos de seguridad y es más rápido.',
        'Siempre verifica que el elemento exista antes de tocarlo.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Saludar al título de la página',
      codigo: 'const titulo = document.querySelector("#titulo");\nconsole.log("Encontré:", titulo.textContent);\ntitulo.textContent = "¡Hola desde JavaScript!";\nconsole.log("Ahora dice:", titulo.textContent);',
      salida: 'Encontré: Tienda\nAhora dice: ¡Hola desde JavaScript!',
      explicacion: 'Busca el h1 por su id, imprime su texto, lo cambia y verifica el cambio. Este flujo (buscar, leer, escribir) es la base de todo trabajo con el DOM.'
    },
    {
      titulo: 'Recorrer todas las ofertas',
      codigo: 'const ofertas = document.querySelectorAll(".oferta");\nconsole.log("Cantidad:", ofertas.length);\nfor (const oferta of ofertas) {\n  console.log("-", oferta.textContent);\n}',
      salida: 'Cantidad: 2\n- Hoy: pan a $350\n- Leche a $500',
      explicacion: 'querySelectorAll junta los dos párrafos con clase oferta, y el for...of los recorre uno por uno. La página base de esta lección ya tiene esos dos párrafos.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Encontrar el título',
      dificultad: 'Fácil',
      consigna: [
        'La página base ya contiene un elemento con id "titulo". Búscalo con querySelector, guardalo en una constante llamada titulo, e imprime su texto actual.'
      ],
      pasos: [
        'const titulo = document.querySelector("#titulo");',
        'Imprime titulo.textContent.'
      ],
      codigoInicial: '// Busca el título y muestra su texto\n',
      pista: 'El id va con # en el selector: "#titulo".',
      tests: [
        { tipo: 'output', nombre: 'Texto del título', esperado: ['Mi tienda de barrio'], mensaje: 'El título de la página base dice "Mi tienda de barrio".' },
        { tipo: 'dom', nombre: 'titulo existe y es el h1', verificador: 'var t = document.querySelector("#titulo"); return { paso: t !== null && t.tagName === "H1", esperado: "un elemento h1#titulo", obtenido: t ? t.tagName : "null" }', mensaje: 'La variable titulo debe guardar el elemento h1.' }
      ],
      solucion: 'const titulo = document.querySelector("#titulo");\nconsole.log(titulo.textContent);'
    },
    {
      titulo: 'Contar las ofertas',
      dificultad: 'Fácil',
      consigna: [
        'La página base tiene varios párrafos con la clase "oferta". Usa querySelectorAll para contarlos e imprime "Ofertas: N" donde N sea la cantidad.'
      ],
      pasos: [
        'Busca todos los .oferta con querySelectorAll.',
        'Imprime la cantidad con template literal.'
      ],
      codigoInicial: '// Cuenta las ofertas y muéstralas\n',
      pista: 'La cantidad es ofertas.length. El mensaje: `Ofertas: ${ofertas.length}`.',
      tests: [
        { tipo: 'output', nombre: 'Cantidad de ofertas', esperado: ['Ofertas: 3'], mensaje: 'La página base tiene tres párrafos con clase oferta.' }
      ],
      solucion: 'const ofertas = document.querySelectorAll(".oferta");\nconsole.log(`Ofertas: ${ofertas.length}`);'
    },
    {
      titulo: 'Cambiar el texto del título',
      dificultad: 'Fácil',
      consigna: [
        'Busca el h1 con id "titulo" y cambia su texto a "Bienvenidos". Luego imprime el nuevo texto.'
      ],
      pasos: [
        'Busca el título y guárdalo en una constante.',
        'Asigna titulo.textContent = "Bienvenidos".',
        'Imprime el texto para verificar.'
      ],
      codigoInicial: '// Cambia el título e imprime el nuevo texto\n',
      pista: 'textContent se lee y se escribe: titulo.textContent = "Bienvenidos".',
      tests: [
        { tipo: 'output', nombre: 'Nuevo texto', esperado: ['Bienvenidos'], mensaje: 'Después del cambio, el texto debe ser "Bienvenidos".' },
        { tipo: 'dom', nombre: 'El h1 quedó cambiado', verificador: 'var t = document.querySelector("#titulo"); return { paso: t !== null && t.textContent === "Bienvenidos", esperado: "Bienvenidos", obtenido: t ? t.textContent : "null" }', mensaje: 'El elemento real del documento debe tener el texto nuevo.' }
      ],
      solucion: 'const titulo = document.querySelector("#titulo");\ntitulo.textContent = "Bienvenidos";\nconsole.log(titulo.textContent);'
    }
  ]
}

