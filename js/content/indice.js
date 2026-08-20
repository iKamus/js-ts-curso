import m1l01 from './modulo-01/01-que-es-js.js'
import m1l02 from './modulo-01/02-variables.js'
import m1l03 from './modulo-01/03-tipos-primitivos.js'
import m1l04 from './modulo-01/04-operadores.js'
import m1l05 from './modulo-01/05-template-literals.js'
import m1l06 from './modulo-01/06-control-de-flujo.js'
import m1l07 from './modulo-01/07-bucles.js'
import m1l08 from './modulo-01/08-funciones.js'
import m1l09 from './modulo-01/09-scope-closures.js'
import m1l10 from './modulo-01/10-arrays.js'
import m1l11 from './modulo-01/11-objetos.js'
import m1l12 from './modulo-01/12-manejo-de-errores.js'
import m1l13 from './modulo-01/13-mini-proyecto.js'
import m2l14 from './modulo-02/01-strings-i.js'
import m2l15 from './modulo-02/02-strings-ii.js'
import m2l16 from './modulo-02/03-arrays-i.js'
import m2l17 from './modulo-02/04-forEach-map.js'
import m2l18 from './modulo-02/05-filter.js'
import m2l19 from './modulo-02/06-reduce.js'
import m2l20 from './modulo-02/07-find-some-every-sort.js'
import m2l21 from './modulo-02/08-spread-rest.js'
import m2l22 from './modulo-02/09-destructuring.js'
import m2l23 from './modulo-02/10-flechas-callbacks.js'
import m2l24 from './modulo-02/11-encadenar-metodos.js'
import m2l25 from './modulo-02/12-math-numeros.js'
import m2l26 from './modulo-02/13-mini-proyecto.js'
import m3l26 from './modulo-03/01-dom-seleccionar.js'
import m3l27 from './modulo-03/02-dom-modificar.js'
import m3l28 from './modulo-03/03-eventos.js'
import m3l29 from './modulo-03/04-formularios.js'
import m3l30 from './modulo-03/05-localstorage.js'
import m3l31 from './modulo-03/06-mini-proyecto.js'
import m4l32 from './modulo-04/01-que-es-typescript.js'
import m4l33 from './modulo-04/02-tipos-primitivos.js'
import m4l34 from './modulo-04/03-arrays-tuplas-objetos.js'
import m4l35 from './modulo-04/04-interfaces.js'
import m4l36 from './modulo-04/05-tipos-union-type.js'
import m4l37 from './modulo-04/06-funciones-tipadas.js'
import m4l38 from './modulo-04/07-any-unknown-never.js'
import m4l39 from './modulo-04/08-narrowing-aserciones.js'
import m4l40 from './modulo-04/09-clases-ts.js'
import m4l41 from './modulo-04/10-modulos-ts.js'
import m4l42 from './modulo-04/11-generics.js'
import m4l43 from './modulo-04/12-enums-literales.js'
import m4l44 from './modulo-04/13-dom-ts.js'
import m4l45 from './modulo-04/14-tsconfig-strict.js'
import m4l46 from './modulo-04/15-mini-proyecto.js'
import m5l47 from './modulo-05/01-convenciones-nombres.js'
import m5l48 from './modulo-05/02-inmutabilidad.js'
import m5l49 from './modulo-05/03-funciones-puras.js'
import m5l50 from './modulo-05/04-dry.js'
import m5l51 from './modulo-05/05-comentarios.js'
import m5l52 from './modulo-05/06-testing.js'
import m5l53 from './modulo-05/07-linters.js'
import m5l54 from './modulo-05/08-legibilidad.js'
import m5l55 from './modulo-05/09-depuracion.js'
import m5l56 from './modulo-05/10-anti-patrones.js'
import m5l57 from './modulo-05/11-proyecto-final.js'

export const curso = [
  {
    id: 'modulo-1',
    numero: 1,
    titulo: 'Fundamentos de JavaScript',
    descripcion: 'Variables, tipos, operadores, estructuras de control, funciones, arrays y objetos: la base de todo.',
    trivia: 'JavaScript nació en 1995 y se escribió en solo 10 días. Brendan Eich lo creó en Netscape, y aunque se llamó "JavaScript" por una estrategia de marketing, no tiene nada que ver con el lenguaje Java.',
    lecciones: [m1l01, m1l02, m1l03, m1l04, m1l05, m1l06, m1l07, m1l08, m1l09, m1l10, m1l11, m1l12, m1l13]
  },
  {
    id: 'modulo-2',
    numero: 2,
    titulo: 'Métodos de arrays, strings y datos',
    descripcion: 'Las herramientas para transformar y consultar datos: métodos de strings y arrays, funciones funcionales (map, filter, reduce), spread, destructuring y más.',
    trivia: 'El método reduce es tan poderoso que con él se puede implementar casi cualquier otro método de arrays: map, filter e incluso flat se pueden escribir a partir de un reduce.',
    lecciones: [m2l14, m2l15, m2l16, m2l17, m2l18, m2l19, m2l20, m2l21, m2l22, m2l23, m2l24, m2l25, m2l26]
  },
  {
    id: 'modulo-3',
    numero: 3,
    titulo: 'El DOM y la página',
    descripcion: 'Seleccionar y modificar elementos, reaccionar a eventos, leer formularios y persistir datos con localStorage.',
    trivia: 'El DOM no es parte de JavaScript: es la interfaz que el navegador ofrece para manipular la página. JavaScript solo la usa, como usa la pantalla o el mouse.',
    lecciones: [m3l26, m3l27, m3l28, m3l29, m3l30, m3l31]
  },
  {
    id: 'modulo-4',
    numero: 4,
    titulo: 'TypeScript',
    descripcion: 'El tipado que te salva: tipos primitivos, interfaces, uniones, clases, generics y el modo estricto. De JavaScript a TypeScript sin perder el ritmo.',
    trivia: 'TypeScript fue creado en 2012 por Microsoft y su nombre no es casualidad: es JavaScript con tipos. Hoy es uno de los lenguajes más usados del mundo, detrás de prácticamente todas las apps web grandes.',
    lecciones: [m4l32, m4l33, m4l34, m4l35, m4l36, m4l37, m4l38, m4l39, m4l40, m4l41, m4l42, m4l43, m4l44, m4l45, m4l46]
  },
  {
    id: 'modulo-5',
    numero: 5,
    titulo: 'Buenas prácticas',
    descripcion: 'El oficio: nombres claros, funciones puras, código sin repetir, testing, linters y los anti-patrones a evitar. El proyecto final une todo el curso.',
    trivia: 'El término "bug" (bicho) viene de 1947: un ingeniero de Harvard encontró una polilla atascada en una computadora y la pegó en el cuaderno de registro con la nota "first actual case of bug being found".',
    lecciones: [m5l47, m5l48, m5l49, m5l50, m5l51, m5l52, m5l53, m5l54, m5l55, m5l56, m5l57]
  }
]