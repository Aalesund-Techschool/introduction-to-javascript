import {logTask} from './_helper.mjs';
/**
 * Vi skal se på objekter i JavaScript.
 * Objekter er en samling av egenskaper og metoder.
 * Vi kan bruke objekter til å samle på informasjon og funksjonalitet som kan brukes i koden vår.
 *
 * https://www.w3schools.com/js/js_objects.asp
 */
 
 const person = {
    firstName: 'Ola',
    lastName: 'Nordmann',
    age: 30,
 }

logTask('Oppgave 1');
/**
 * Bruk console.log til å skrive ut person-objektet til terminalen.
 */

// -- Din kode her --

logTask('Oppgave 2');
/**
 * For å hente ut en egenskap fra et objekt, kan vi bruke dot notation.
 * For eksempel: person.firstName
 * Det går også an å bruke bracket notation: person['firstName']
 *
 * Bruk dot notasjonen for å bygge opp en variabel som inneholder teksten: 'Ola er 30 år'.
 * Du kan bruke + for å sette sammen tekst og variabler.
 * 'Mitt navn er: ' + person.firstName
 *
 * Du an og bruke template literals for å sette sammen tekst og variabler.
 * `Mitt navn er: ${person.firstName}` 
 * Da må du bruke backticks (``) i stedet for anførselstegn ('')
 * Og du setter inn variabler i ${} i stedet for å bruke +
 */

// -- Din kode her --


logTask('Oppgave 3');
/**
 * Du kan også endre egenskaper i et objekt.
 * For eksempel: person.firstName = 'Kari'
 *
 * Personnen har hatt bursdag og er nå 31 år.
 * Endre alderen til person-objektet til 31 og skriv ut person-objektet til terminalen.
 */
// -- Din kode her --
