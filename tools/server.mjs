import { serve } from 'https://deno.land/std@0.208.0/http/server.ts'
import { serveStatic } from 'https://deno.land/std@0.208.0/http/file_server.ts'

const port = 3000
const handler = serveStatic({ 
  root: './',
  showDirListing: true,
  quiet: true
})

console.log(`Servidor corriendo en http://localhost:${port}`)

serve(handler, { port })