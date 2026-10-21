/*
  ESERCIZIO 13 - Optional chaining (?.)

  L'optional chaining ?. permette di accedere a proprietà
  annidate senza errori se una proprietà non esiste.

  Sintassi:  oggetto?.proprieta
  Sintassi:  oggetto?.prop1?.prop2
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es13_1(obj) {
  return obj.indirizzo?.citta
  // 1. Restituisci obj.indirizzo?.citta (con optional chaining)
  // TODO: scrivi qui la tua soluzione
}

function es13_2(persona) {
  return persona.contatti?.email ?? "non presente";
  // 2. Restituisci persona.contatti?.email ?? "non presente"
  // TODO: scrivi qui la tua soluzione
}

function es13_3(obj) {
  return obj.dati?.nome ?? "anonimo";
  // 3. Restituisci obj.dati?.nome ?? "anonimo"
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es13_1, es13_2, es13_3 };