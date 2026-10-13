/*
  ESERCIZIO 13 - filter()

  .filter() crea un nuovo array con solo gli elementi che
  soddisfano una condizione.

  Sintassi:  array.filter(funzione)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es13_1(arr) {
  return arr.filter(n => n > 10)
  // 1. Restituisci solo i numeri maggiori di 10
  // TODO: scrivi qui la tua soluzione
}

function es13_2(arr) {
  return arr.filter(n => n.length >= 5);
  // 2. Restituisci solo le stringhe con lunghezza >= 5
  // TODO: scrivi qui la tua soluzione
}

function es13_3(arr) {
  return arr.filter(n => n % 2 === 0);
  // 3. Restituisci solo i numeri pari
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es13_1, es13_2, es13_3 };
