/*
  ESERCIZIO 8 - replace()

  Sostituisce la prima occorrenza trovata.

  Sintassi:  stringa.replace(vecchio, nuovo)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es8_1() {
  return "rosso".replace("rosso", "blu");
  // 1. Sostituisci "rosso" con "blu" nella stringa "rosso"
  // TODO: scrivi qui la tua soluzione
}

function es8_2(frase) {
  return frase.replace("Mario", "Luca");
  // 2. Nella frase ricevuta, sostituisci "Mario" con "Luca"
  // TODO: scrivi qui la tua soluzione
}

function es8_3() {
  return "2024".replace("2024", "2025");
  // 3. Sostituisci "2024" con "2025" nella stringa "2024"
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es8_1, es8_2, es8_3 };
