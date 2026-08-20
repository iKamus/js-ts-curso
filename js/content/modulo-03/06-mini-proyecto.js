export default {
  id: 'm3-l31',
  numero: 31,
  titulo: 'Mini proyecto: la lista de tareas',
  nivel: 'Dificil',
  esProyecto: true,
  htmlBase: '<ul id="lista"></ul>',
  palabrasClave: [
    { termino: 'Proyecto integrador', definicion: 'Un desafío que combina todo el módulo: seleccionar, crear y eliminar nodos, eventos con delegación y persistencia con localStorage.' },
    { termino: 'Persistencia', definicion: 'Guardar los datos para que sobrevivan al cierre de la página: el carrito de tareas guardado en localStorage.' }
  ],
  secciones: [
    {
      titulo: 'La consigna del proyecto',
      parrafos: [
        'Vas a construir la app de tareas de la tienda: una lista donde se agregan pendientes, se marcan como hechas al hacer clic y se guardan para no perderlas al cerrar la página.',
        'El proyecto se divide en tres piezas: primero crear tareas en el DOM, después renderizar la lista completa con clics (delegación), y por último la persistencia en localStorage. Resuelve las tres en orden: la pieza 3 usa las funciones de la 1 y la 2.'
      ],
      lista: [
        'Pieza 1: agregarTarea(nombre) crea el li y lo agrega a la lista y al array tareas.',
        'Pieza 2: renderTareas() pinta toda la lista y el clic alterna la clase "hecha".',
        'Pieza 3: guardarTareas() y cargarTareas() con localStorage.'
      ]
    },
    {
      titulo: 'Lo que se espera del resultado',
      parrafos: [
        'Con las piezas 2 y 3 funcionando, este flujo debe ser posible: agregar tareas, verlas renderizadas, marcar una como hecha con un clic, y guardarlas para que al "recargar" sigan ahí.'
      ],
      codigo: 'tareas = ["lavar vidriera", "ordenar caja"]\nrenderTareas() → lista con dos li\nclic en el primer li → se marca como hecha (clase "hecha")\nguardarTareas() → localStorage["tareas"] = ["lavar vidriera","ordenar caja"]\ncargarTareas() → devuelve el mismo array',
      salida: ''
    }
  ],
  ejemplos: [
    {
      titulo: 'El flujo completo (esquema)',
      codigo: '// 1. Estado\nlet tareas = [];\n\n// 2. Pieza 1: agregar\nfunction agregarTarea(nombre) {\n  // crear li, configurar, montar, guardar en tareas\n}\n\n// 3. Pieza 2: renderizar + clic (delegación en #lista)\nfunction renderTareas() {\n  // limpiar y pintar todos los li\n}\n\n// 4. Pieza 3: persistencia\nfunction guardarTareas() { /* JSON.stringify */ }\nfunction cargarTareas() { /* JSON.parse */ }',
      salida: '',
      explicacion: 'Este es el mapa del proyecto: el estado vive en el array tareas, el DOM se mantiene sincronizado con renderTareas, los clics se delegan en la lista y localStorage garantiza que nada se pierda.'
    }
  ],
  proyecto: {
    objetivos: [
      'Crear elementos con createElement y montarlos en el DOM.',
      'Renderizar una lista completa a partir de un array.',
      'Usar delegación de eventos para marcar tareas al hacer clic.',
      'Persistir el estado con localStorage usando JSON.'
    ]
  },
  ejercicios: [
    {
      titulo: 'Pieza 1: agregar tareas',
      dificultad: 'Media',
      consigna: [
        'Declara let tareas = []. Luego implementa agregarTarea(nombre) que: crea un li, le pone el texto nombre, lo monta en la lista (#lista) y lo guarda en el array tareas con push. Devuelve la nueva cantidad de tareas.',
        'Prueba agregando "lavar vidriera" e imprime el resultado de la función.'
      ],
      pasos: [
        'Declara el array y busca la lista.',
        'En la función: createElement("li"), textContent, appendChild, tareas.push(nombre).',
        'return tareas.length.',
        'Llama a agregarTarea("lavar vidriera") e imprime lo que devuelve.'
      ],
      codigoInicial: '// 1. Declara let tareas = []\n// 2. Implementa agregarTarea\n// 3. Prueba con "lavar vidriera"\n',
      pista: 'const li = document.createElement("li"); li.textContent = nombre; lista.appendChild(li); tareas.push(nombre); return tareas.length;',
      tests: [
        { tipo: 'output', nombre: 'Cantidad devuelta', esperado: ['1'], mensaje: 'agregarTarea("lavar vidriera") debe devolver 1.' },
        { tipo: 'dom', nombre: 'El li está en la página', verificador: 'var l = document.querySelector("#lista"); var li = l ? l.firstElementChild : null; return { paso: li !== null && li.textContent === "lavar vidriera", esperado: "li con texto lavar vidriera", obtenido: li ? li.textContent : "sin li" }', mensaje: 'La lista debe contener un li con el texto de la tarea.' },
        { tipo: 'valor', nombre: 'tareas guarda la tarea', expr: 'JSON.stringify(tareas)', esperado: '["lavar vidriera"]', mensaje: 'El array tareas debe contener el nombre agregado.' }
      ],
      solucion: 'let tareas = [];\nconst lista = document.querySelector("#lista");\nfunction agregarTarea(nombre) {\n  const li = document.createElement("li");\n  li.textContent = nombre;\n  lista.appendChild(li);\n  tareas.push(nombre);\n  return tareas.length;\n}\nconsole.log(agregarTarea("lavar vidriera"));'
    },
    {
      titulo: 'Pieza 2: renderizar y marcar hechas',
      dificultad: 'Dificil',
      consigna: [
        'Con el array tareas ya cargado, implementa renderTareas() que vacíe la lista (#lista) y cree un li por cada tarea. Además, registra en la LISTA un listener de clic (delegación) que alterne la clase "hecha" en el li clickeado (si el clic fue sobre un LI).',
        'Prueba: tareas = ["lavar vidriera", "ordenar caja"], renderTareas(), y un clic en el primer li.'
      ],
      pasos: [
        'renderTareas: lista.innerHTML = "" para vaciar.',
        'for...of sobre tareas creando y montando cada li.',
        'Listener en la lista: if (evento.target.tagName === "LI") → toggle de "hecha".',
        'Dispara el clic en el primer li y verifica.'
      ],
      codigoInicial: 'const lista = document.querySelector("#lista");\nlet tareas = ["lavar vidriera", "ordenar caja"];\n\n// Implementa renderTareas y el listener de clic\n',
      pista: 'evento.target.classList.toggle("hecha") marca o desmarca. Para disparar el clic: lista.firstElementChild.dispatchEvent(new Event("click", { bubbles: true })).',
      tests: [
        { tipo: 'dom', nombre: 'Renderiza las dos tareas', verificador: 'var l = document.querySelector("#lista"); return { paso: l !== null && l.children.length === 2, esperado: "2 li", obtenido: l ? l.children.length : "null" }', mensaje: 'renderTareas debe pintar exactamente 2 elementos.' },
        { tipo: 'dom', nombre: 'El clic marca la tarea', verificador: 'var l = document.querySelector("#lista"); var li = l ? l.firstElementChild : null; return { paso: li !== null && li.classList.contains("hecha"), esperado: "clase hecha en el primer li", obtenido: li ? li.className : "null" }', mensaje: 'Después del clic disparado, el primer li debe tener la clase hecha.' }
      ],
      solucion: 'const lista = document.querySelector("#lista");\nlet tareas = ["lavar vidriera", "ordenar caja"];\n\nfunction renderTareas() {\n  lista.innerHTML = "";\n  for (const tarea of tareas) {\n    const li = document.createElement("li");\n    li.textContent = tarea;\n    lista.appendChild(li);\n  }\n}\n\nlista.addEventListener("click", (evento) => {\n  if (evento.target.tagName === "LI") {\n    evento.target.classList.toggle("hecha");\n  }\n});\n\nrenderTareas();\nlista.firstElementChild.dispatchEvent(new Event("click", { bubbles: true }));'
    },
    {
      titulo: 'Pieza 3: persistencia',
      dificultad: 'Dificil',
      consigna: [
        'Implementa guardarTareas() que guarde el array tareas en localStorage con la clave "tareas" usando JSON.stringify, y cargarTareas() que lo recupere con JSON.parse devolviendo [] si no hay nada guardado.',
        'Prueba: asigna tareas = ["lavar vidriera", "ordenar caja"], llama a guardarTareas(), y luego imprime lo que devuelve cargarTareas() en JSON.'
      ],
      pasos: [
        'guardarTareas: localStorage.setItem("tareas", JSON.stringify(tareas)).',
        'cargarTareas: const guardado = localStorage.getItem("tareas"); return guardado ? JSON.parse(guardado) : [].',
        'Guarda y muestra cargarTareas() con console.log(JSON.stringify(cargarTareas())).'
      ],
      codigoInicial: 'let tareas = ["lavar vidriera", "ordenar caja"];\n\n// Implementa guardarTareas y cargarTareas\n',
      pista: 'El ternario guardado ? JSON.parse(guardado) : [] maneja la primera vez (sin datos).',
      tests: [
        { tipo: 'valor', nombre: 'Quedó guardado en localStorage', expr: 'localStorage.getItem("tareas")', esperado: '["lavar vidriera","ordenar caja"]', mensaje: 'La clave "tareas" debe contener el JSON del array.' },
        { tipo: 'output', nombre: 'cargarTareas devuelve el array', esperado: ['["lavar vidriera","ordenar caja"]'], mensaje: 'El console.log de cargarTareas() debe mostrar el JSON del array recuperado.' },
        { tipo: 'valor', nombre: 'cargarTareas sin datos da []', expr: '(() => { localStorage.removeItem("tareas"); return JSON.stringify(cargarTareas()); })()', esperado: '[]', mensaje: 'Sin datos guardados, cargarTareas debe devolver un array vacío.' }
      ],
      solucion: 'let tareas = ["lavar vidriera", "ordenar caja"];\n\nfunction guardarTareas() {\n  localStorage.setItem("tareas", JSON.stringify(tareas));\n}\n\nfunction cargarTareas() {\n  const guardado = localStorage.getItem("tareas");\n  return guardado ? JSON.parse(guardado) : [];\n}\n\nguardarTareas();\nconsole.log(JSON.stringify(cargarTareas()));'
    }
  ]
}

