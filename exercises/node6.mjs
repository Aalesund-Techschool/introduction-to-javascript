/**
 * Du skal i denne oppgaven lese innhold fra en CSV-fil og skrive ut informasjonen til konsollen.
 * En CSV-fil er en tekstfil som inneholder data i tabellform, hvor hver verdi er adskilt med et komma.
 * Hver rad i filen representerer en rad i tabellen, og hver kolonne representerer en kolonne i tabellen.
 * Alle rader er adskilt med en linjeskift (\n).
 *
 * Filen har følgende overskrifter:
 * Expense, Category, Quantity, VAT, Total
 *
 * Importerer modulen fs fra Node.js standardbiblioteket.
 * Modulen har flere funksjoner for å jobbe med filer.
 * Vi skal bruke funksjonen readFileSync for å lese innholdet i en fil.
 * # https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options
 */
import { readFileSync } from 'node:fs';

/**
/* Bruk funksjonen readFileSync for å lese filen monthly_expenses.csv i samme mappe som denne filen.
/* Bruk stien './monthly_expenses.csv' som første argument.
/* Bruk 'utf8' som andre argument for å få innholdet som en tekststreng.
*/

// --- Lag en variabel dataString og sett den til resultatet av readFileSync-metoden.

/**
* Innholdet du nå har lest inn er en tekststreng som inneholder data i CSV-format.
* For å prosessere denne teksten, må du dele den opp i linjer.
* Del opp teksten i linjer ved å bruke metoden split('\n') på dataString.
* split-metoden er en metode som finnes på alle tekststrenger i JavaScript.
* Oppgitt argument til metoden er hva funkjsonen skal dele teksten på.
*/

// --- Lag en variabel dataLines og sett den til resultatet av split-metoden.

/**
* Du har nå delt opp teksten i linjer, og kan nå prosessere hver linje for seg.
* Resultatet fra split-metoden er en liste(array) med tekststrenger, hvor hver tekststreng representerer en linje i CSV-filen.
* Den første linjen i filen inneholder overskrifter for kolonnene.
* For prosesseringen av dataen er det lurt å lagre overskriftene i en variabel, og fjern den fra listen med data.
* For fjerning av elementer i en liste(array) finnes det flere metoder.
* - shift metoden fjerner det første elementet i listen og returnerer det. Denne metoden endrer listen.
* - slice metoden returnerer en ny liste med elementer fra en gitt startindeks til en gitt slutindeks. Denne metoden endrer ikke listen.
* - splice metoden fjerner elementer fra en liste og returnerer de fjernede elementene. Denne metoden endrer listen.
* - pop metoden fjerner det siste elementet i listen og returnerer det. Denne metoden endrer listen.
*/

// --- Lag en variabel headers som bare inneholder overskriftene for kolonnene.


/**
 * Du må gjøre noe forhåndsarbeid før vi kan prosessere dataen.
 * Bruk en map funksjon for å lage en ny liste med data hvor hver linje er delt opp i kolonner.
 * For hver linje i dataLines skal du splitte linjen på komma.
 * - string.split(',') deler en tekststreng på komma.
*/


// --- Lag en variabel data og sett den til resultatet av map-metoden.

/**
 * Du skal nå prosessere linjene i dataLines.
 * Hver linje skal nå inneholde alle kolonner for den linjen.
 * Det er 5 kolonner i hver linje.
 * Bruk enten indeksering eller destrukturering for å hente ut verdiene fra listen.
 *    - Indeksering
 *        const values = line.split(',');
 *        const name = values[0]; // Navn på utgift
 *    - Destrukturering
 *        const [name, category, quantity, vat, total] = line.split(',');
 *
 * Du skal finne:
 *  - Total sum av alle utgiftene
 *
 *  - Den dyreste utgiften
 *  - Den billigste utgiften
 *
 *  - Den dyreste katogorien
 *
 *  Du kan og finne andre ting du synes er interessant.
 */

