/*
  ESERCIZIO RIASSUNTIVO 4 - Trasforma in maiuscolo

  Dato l'array ["ciao", "mondo", "javascript"]:
  - trasforma ogni stringa in maiuscolo (map)
  - unisci il risultato in una stringa separata da spazi (join)
  - restituisci la stringa

  Risultato: "CIAO MONDO JAVASCRIPT"
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es18() {
  const parole = ["ciao", "mondo", "javascript"];
  const MAIUSCOLO =  parole.map(n => n.toUpperCase());
  const spazi = MAIUSCOLO.join(" ");
  return spazi;
  // TODO: scrivi qui la tua soluzione
}

// --- NON MODIFICARE SOTTO ---
export { es18 };
