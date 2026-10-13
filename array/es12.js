/*
  ESERCIZIO 12 - map()

  .map() crea un nuovo array applicando una funzione a ogni elemento.

  Sintassi:  array.map(funzione)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es12_1(arr) {
  return arr.map(n => n * 2);
  // 1. Restituisci un nuovo array con ogni numero moltiplicato per 2
  // TODO: scrivi qui la tua soluzione
}
function es12_2(arr) {
  return arr.map(n => n.toUpperCase());
  // 2. Restituisci un nuovo array con ogni stringa in maiuscolo
  // TODO: scrivi qui la tua soluzione
}

function es12_3(arr) {
  return arr.map(n => n.length);
  // 3. Restituisci un nuovo array con la lunghezza di ogni stringa
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es12_1, es12_2, es12_3 };
