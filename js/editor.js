import { crearEditor } from '../vendor/codemirror.bundle.js'

const editoresActivos = new Set()

export function crearEditorApp({ padre, codigo, lenguaje, oscuro, onCambio }) {
  const editor = crearEditor({ padre, codigo, lenguaje, oscuro, onCambio })
  editoresActivos.add(editor)
  return editor
}

export function destruirEditor(editor) {
  if (editor && editor.vista) {
    editor.vista.destroy()
    editoresActivos.delete(editor)
  }
}

export function actualizarTemaEditores(oscuro) {
  for (const editor of editoresActivos) editor.cambiarTema(oscuro)
}

export function destruirTodosLosEditores() {
  for (const editor of [...editoresActivos]) destruirEditor(editor)
  editoresActivos.clear()
}