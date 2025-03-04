/**
 * Node JS kjører JavaScript på maskinen din uten nettleser.
 *
 * Vi kan bruke all funksjonalitet som er tilgjengelig i JavaScript.
 * Men vi har også tilgang til funksjonalitet som er spesifikk for Node JS.
 *
 * Applikasjoner som kjører på Node JS kan gjøre ting som ikke er mulig i en nettleser.
 * Men vi har bare terminalen til å vise resultater og feilmeldinger. DOM, som er i nettleser er ikke tilgjengelig.
 *
 * Vi kan foreksempel
 *  - lese og skrive til filer på maskinen.
 *  - lage en web server som kan håndtere meldinger mellom nettleseren og din maskin.
 *  - lage applikasjoner som gjør arbeid i bakgrunnen.
 *
 * Vi har og tilgang til mange pakker som er laget for Node.
 * Vi skal nå bruke en pakke som heter `readline` for å lese input fra terminalen.
 * Dette er en pakke som er innebygd i Node.
 * Vi bruker da `import readline from 'readline';` for å importere pakken.
 */

import readline from 'readline';

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Lag en funksjon handleInput som har en parameter `input`.
 *
 * Basert på alderen(input) skal du skrive ut en melding til terminalen.
 *  - Større eller lik 62: `Du er pensjonist, og kan nyte livet`.
 *  - Større eller lik 18: `Du er voksen, og kan gjøre hva du vil`.
 *  - Mindre enn 18: `Du er ung, og har mange muligheter`.
 *
 * Hvis `input` ikke er et tall skal funksjonen skrive ut `Du må skrive et tall`, og avslutte programmet.
 *
 * Også må du bruke `rlInterface.close()` for å lukke readline interfacet.
 *
 *
 * Tips:
 *  - Bruk `parseInt` for å konvertere input til et tall.
 *  - Bruk `Number.isNaN` for å sjekke om konvertert verdi er et tall.
 *  - Bruk `if` og `else if` for å sjekke alderen.
 */

// -- Din kode her --

rlInterface.question('Hvor gammel er du? ', handleInput);

