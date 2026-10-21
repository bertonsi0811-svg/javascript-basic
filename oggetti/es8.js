/*
  ESERCIZIO 8 - Object.values()

  Object.values() restituisce un array con i valori di un oggetto.

  Sintassi:  Object.values(oggetto)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es8_1(obj) {
  return Object.values(obj);
  // 1. Restituisci i valori di obj
  // TODO: scrivi qui la tua soluzione
}

function es8_2(obj) {
  return Object.values(obj)[0];
  // 2. Restituisci il primo valore di obj (values[0])
  // TODO: scrivi qui la tua soluzione
}

function es8_3(prezzi) {
    var somma= 0;
  const va = Object.values(prezzi)
  for (let i = 0; i < va.length; i++) {
    const elementi = va[i];
    somma+=elementi;
  }
 return somma;

  // 3. Riceve un oggetto con prezzi e restituisce la somma dei valori
  // Suggerimento: Object.values() + ciclo for
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es8_1, es8_2, es8_3 };