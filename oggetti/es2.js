/*
  ESERCIZIO 2 - Dot notation (.)

  Per accedere a una proprietà di un oggetto si usa
  il punto seguito dal nome della proprietà.

  Sintassi:  oggetto.proprieta
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es2_1(obj) {
  return obj.nome;
  // 1. Restituisci obj.nome
  // TODO: scrivi qui la tua soluzione
}

function es2_2(pers) {
  return pers.cognome;
  // 2. Restituisci pers.cognome
  // TODO: scrivi qui la tua soluzione
}

function es2_3(studente) {
  return studente.nome + " " + "ha" + " " + studente.eta + " " + "anni";
  // 3. Restituisci studente.nome + " ha " + studente.eta + " anni"
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es2_1, es2_2, es2_3 };