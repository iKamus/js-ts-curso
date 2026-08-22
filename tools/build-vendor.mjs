import esbuild from 'esbuild'
import { copyFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vendor = resolve(raiz, 'vendor')

mkdirSync(vendor, { recursive: true })

await esbuild.build({
  entryPoints: [resolve(raiz, 'tools', 'editor-entry.js')],
  outfile: resolve(vendor, 'codemirror.bundle.js'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2020'],
  minify: false,
  sourcemap: false
})

copyFileSync(resolve(raiz, 'node_modules', 'typescript', 'lib', 'typescript.js'), resolve(vendor, 'typescript.js'))

await esbuild.build({
  entryPoints: [resolve(raiz, 'tools', 'prism-entry.js')],
  outfile: resolve(vendor, 'prism.bundle.js'),
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2020'],
  minify: false,
  sourcemap: false
})

copyFileSync(resolve(raiz, 'tools', 'prism-theme.css'), resolve(vendor, 'prism-theme.css'))

console.log('Vendor generado en vendor/:')
console.log('  - vendor/codemirror.bundle.js')
console.log('  - vendor/typescript.js')
console.log('  - vendor/prism.bundle.js')
console.log('  - vendor/prism-theme.css')