import { JSDOM } from 'jsdom'

const dom = new JSDOM(
  '<!doctype html><html><body><div id="sidebar"></div><div id="contenido"></div><iframe id="sandbox"></iframe></body></html>',
  { url: 'http://localhost/', pretendToBeVisual: true }
)
const w = dom.window
w.matchMedia = () => ({ matches: false })
globalThis.window = w
globalThis.document = w.document
globalThis.localStorage = w.localStorage
globalThis.matchMedia = w.matchMedia
globalThis.location = w.location

await import('../js/main.js')
console.log('main.js importado sin errores de top-level')
console.log('Sidebar renderizada:', document.getElementById('sidebar').children.length > 0)
console.log('Contenido renderizado:', document.getElementById('contenido').children.length > 0)