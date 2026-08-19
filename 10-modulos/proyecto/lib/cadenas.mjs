// proyecto/lib/cadenas.mjs — Modulo ES

export const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

export function revertir(texto) {
  return texto.split('').reverse().join('');
}

export function contarVocales(texto) {
  const vocales = 'aeiouAEIOU';
  let contador = 0;
  for (const caracter of texto) {
    if (vocales.includes(caracter)) contador++;
  }
  return contador;
}

export function aSnakeCase(texto) {
  return texto.trim().replace(/\s+/g, '_');
}

export function iniciales(nombreCompleto) {
  const palabras = nombreCompleto.trim().split(/\s+/);
  return palabras.map(palabra => palabra[0].toUpperCase()).join('.') + '.';
}

export default function Descripcion() {
  return 'Biblioteca de cadenas v1.0';
}
