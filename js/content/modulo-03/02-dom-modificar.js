export default {
  id: 'm3-l27',
  numero: 27,
  titulo: 'Modificar el DOM: crear, insertar y eliminar',
  nivel: 'Medio',
  htmlBase: '<ul id="lista"><li>Pan</li><li>Leche</li></ul>',
  palabrasClave: [
    { termino: 'createElement', definicion: 'Crea un elemento nuevo en memoria (document.createElement("li")), pero todavía no está en la página.' },
    { termino: 'appendChild', definicion: 'Agrega un nodo como último hijo de otro: lista.appendChild(li).' },
    { termino: 'append', definicion: 'Agrega uno o varios nodos o textos al final de un elemento: lista.append(li1, li2).' },
    { termino: 'insertBefore', definicion: 'Inserta un nodo antes de otro dentro del mismo padre.' },
    { termino: 'remove', definicion: 'Elimina el propio elemento de la página: elemento.remove().' },
    { termino: 'innerHTML', definicion: 'Escribe o lee el HTML interno de un elemento como texto: lista.innerHTML = "<li>...</li>".' },
    { termino: 'classList', definicion: 'El conjunto de clases de un elemento, con add, remove y toggle para agregar, quitar o alternar.' }
  ],
  secciones: [
    {
      titulo: 'El ciclo de vida de un elemento',
      parrafos: [
        'Crear elementos tiene tres pasos: crear (document.createElement), configurar (texto, clases, atributos) y montar (insertar en la página). Es como armar el cartel de la oferta: primero lo fabricás, después le escribís el precio y por último lo colgás en la vidriera.',
        'Mientras no se monta, el elemento existe solo en memoria: no se ve en la página. El montaje se hace con append, appendChild o insertBefore.'
      ],
      codigo: 'const li = document.createElement("li");\nli.textContent = "Café";\nconst lista = document.querySelector("#lista");\nlista.appendChild(li);\nconsole.log(lista.children.length);',
      salida: '3'
    },
    {
      titulo: 'appendChild vs append',
      parrafos: [
        'appendChild agrega UN nodo al final. append es más flexible: agrega varios nodos o textos a la vez. Ambos son "al final del padre".'
      ],
      tabla: {
        columnas: ['Método', 'Qué hace', 'Ejemplo'],
        filas: [
          ['padre.appendChild(hijo)', 'Agrega un nodo al final', 'lista.appendChild(li)'],
          ['padre.append(a, b)', 'Agrega varios nodos/textos al final', 'lista.append(li1, "texto")'],
          ['padre.insertBefore(nuevo, ref)', 'Agrega un nodo antes de otro', 'lista.insertBefore(li, lista.firstChild)'],
          ['elemento.remove()', 'Elimina el elemento de la página', 'li.remove()'],
          ['elemento.classList.add("x")', 'Agrega una clase', 'li.classList.add("destacado")'],
          ['elemento.classList.remove("x")', 'Quita una clase', 'li.classList.remove("destacado")'],
          ['elemento.classList.toggle("x")', 'Alterna una clase', 'li.classList.toggle("hecho")']
        ]
      }
    },
    {
      titulo: 'innerHTML: escribir estructura rápida',
      parrafos: [
        'innerHTML escribe HTML completo como texto: lista.innerHTML = "<li>Pan</li><li>Leche</li>". Es rápido y cómodo para armar bloques, pero tiene dos reglas: no lo uses con datos de usuarios sin escapar (riesgo de inyección), y al reasignarlo reemplazás TODO el contenido anterior.'
      ],
      codigo: 'const lista = document.querySelector("#lista");\nlista.innerHTML = "<li>Azúcar</li><li>Sal</li>";\nconsole.log(lista.children.length);\nconsole.log(lista.firstElementChild.textContent);',
      salida: '2\nAzúcar'
    },
    {
      titulo: 'Errores comunes',
      lista: [
        'Crear un elemento y olvidar montarlo: se crea, se configura, y no aparece nada en la página porque nunca se insertó.',
        'Reasignar innerHTML sin querer borrar lo anterior: innerHTML = reemplaza todo. Para agregar, usa append.',
        'Buscar el elemento ANTES de montarlo: si creás el li y después hacés document.querySelector("li") pensando encontrarlo, el query fue antes de insertarlo.',
        'appendChild sobre un elemento que no existe: la búsqueda devolvió null y el programa se cae.',
        'Usar classList sin el elemento: recuerda que classList.add("x") va SIN punto en el nombre de la clase.'
      ]
    },
    {
      titulo: 'Buenas prácticas',
      lista: [
        'Sigue el ciclo: crear → configurar → montar. En ese orden.',
        'Prefiere createElement + textContent para contenido de texto: es más seguro que inyectar HTML.',
        'Usa innerHTML solo para estructuras fijas que tú escribes, nunca con texto del usuario.',
        'Nombra las variables con su rol: lista, liNuevo, contenedor.',
        'Si armas varios elementos, montalos todos de una vez (con append(a, b, c)) en lugar de uno por uno.'
      ]
    }
  ],
  ejemplos: [
    {
      titulo: 'Agregar un producto a la lista',
      codigo: 'const lista = document.querySelector("#lista");\nconst li = document.createElement("li");\nli.textContent = "Café";\nlista.appendChild(li);\nconst li2 = document.createElement("li");\nli2.textContent = "Azúcar";\nlista.append(li2);\nconsole.log("Elementos:", lista.children.length);',
      salida: 'Elementos: 4',
      explicacion: 'Se crean dos li en memoria, se configuran con textContent y se montan al final de la lista: uno con appendChild y otro con append. La lista base tenía 2 y quedó con 4.'
    },
    {
      titulo: 'Eliminar y alternar clases',
      codigo: 'const lista = document.querySelector("#lista");\nconst pan = lista.firstElementChild;\npan.classList.add("agotado");\nconsole.log(pan.className);\npan.remove();\nconsole.log("Elementos:", lista.children.length);',
      salida: 'agotado\nElementos: 1',
      explicacion: 'El primer li recibe la clase "agotado" (visible en className) y luego se elimina de la página con remove(). La lista quedó solo con la leche.'
    }
  ],
  ejercicios: [
    {
      titulo: 'Agregar un producto nuevo',
      dificultad: 'Fácil',
      consigna: [
        'La página base tiene una lista con Pan y Leche. Crea un elemento li con el texto "Café" y agrégalo al final de la lista.'
      ],
      pasos: [
        'Busca la lista con querySelector("#lista").',
        'Crea el li con document.createElement("li").',
        'Ponle el texto y montalo con appendChild.'
      ],
      codigoInicial: '// Crea el li, configúralo y móntalo\n',
      pista: 'document.createElement("li") → li.textContent = "Café" → lista.appendChild(li).',
      tests: [
        { tipo: 'dom', nombre: 'La lista tiene 3 productos', verificador: 'var l = document.querySelector("#lista"); return { paso: l !== null && l.children.length === 3, esperado: "3 elementos", obtenido: l ? l.children.length : "null" }', mensaje: 'La lista base tenía 2 y debe quedar con 3.' },
        { tipo: 'dom', nombre: 'El último es Café', verificador: 'var l = document.querySelector("#lista"); var ultimo = l ? l.lastElementChild : null; return { paso: ultimo !== null && ultimo.textContent === "Café", esperado: "Café", obtenido: ultimo ? ultimo.textContent : "null" }', mensaje: 'El último elemento de la lista debe decir Café.' }
      ],
      solucion: 'const lista = document.querySelector("#lista");\nconst li = document.createElement("li");\nli.textContent = "Café";\nlista.appendChild(li);'
    },
    {
      titulo: 'Armar la lista con innerHTML',
      dificultad: 'Fácil',
      consigna: [
        'La página base tiene la lista con Pan y Leche. Usa innerHTML para reemplazar TODO su contenido por: "Pan", "Leche", "Café" y "Azúcar".'
      ],
      pasos: [
        'Busca la lista.',
        'Asigna lista.innerHTML con los cuatro li.',
        'Verifica la cantidad de hijos con console.log.'
      ],
      codigoInicial: '// Reemplaza el contenido de la lista\n',
      pista: 'lista.innerHTML = "<li>Pan</li><li>Leche</li><li>Café</li><li>Azúcar</li>";',
      tests: [
        { tipo: 'output', nombre: 'Cantidad de elementos', esperado: ['4'], mensaje: 'Después de reasignar innerHTML, la lista debe tener 4 hijos.' },
        { tipo: 'dom', nombre: 'Contenido reemplazado', verificador: 'var l = document.querySelector("#lista"); var t = l ? l.textContent : ""; return { paso: t === "PanLecheCaféAzúcar", esperado: "Pan, Leche, Café, Azúcar", obtenido: t }', mensaje: 'El texto completo de la lista debe ser los cuatro productos.' }
      ],
      solucion: 'const lista = document.querySelector("#lista");\nlista.innerHTML = "<li>Pan</li><li>Leche</li><li>Café</li><li>Azúcar</li>";\nconsole.log(lista.children.length);'
    },
    {
      titulo: 'Quitar el último y resaltar',
      dificultad: 'Media',
      consigna: [
        'La página base tiene la lista con Pan y Leche. Elimina el último elemento (Leche) con remove, y agrega la clase "destacado" al primero (Pan).'
      ],
      pasos: [
        'Busca la lista.',
        'lastElementChild es el último li: guárdalo y llama a remove().',
        'firstElementChild es el primero: agrega la clase con classList.add.'
      ],
      codigoInicial: '// Elimina el último y resalta el primero\n',
      pista: 'lista.lastElementChild.remove(); y lista.firstElementChild.classList.add("destacado");',
      tests: [
        { tipo: 'dom', nombre: 'Queda un solo producto', verificador: 'var l = document.querySelector("#lista"); return { paso: l !== null && l.children.length === 1, esperado: "1 elemento", obtenido: l ? l.children.length : "null" }', mensaje: 'Después de eliminar, la lista debe tener 1 elemento.' },
        { tipo: 'dom', nombre: 'El primero tiene la clase', verificador: 'var l = document.querySelector("#lista"); var p = l ? l.firstElementChild : null; return { paso: p !== null && p.classList.contains("destacado"), esperado: "clase destacado", obtenido: p ? p.className : "null" }', mensaje: 'El primer li debe tener la clase destacado.' }
      ],
      solucion: 'const lista = document.querySelector("#lista");\nlista.lastElementChild.remove();\nlista.firstElementChild.classList.add("destacado");'
    }
  ]
}

