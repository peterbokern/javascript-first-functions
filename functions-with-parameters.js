//Zowel normale als arrow functies gebruikt.

/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

const greeter = (name) => console.log(`hoi ${name}`);
greeter("John");

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

const minutesToSeconds = (minutes) => console.log(minutes * 60);
minutesToSeconds(1);
minutesToSeconds(3);
minutesToSeconds(23);

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

//normal function
function merge(string1, string2) {
  return string1 + string2;
}

const mergedString = merge("abra", "cadabra");
console.log(mergedString);

//Arrow function
const mergeArrow = (string1, string2) => string1 + string2;
const mergedStringArrow = mergeArrow("abra", "cadabra");
console.log(mergedStringArrow);

// Faster
const mergeArrowFast = (string1, string2) => console.log(string1 + string2);
mergeArrowFast("abra", "cadabra");

/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(dogAge) {
  return `Jouw hond is ${dogAge * 7} jaar oud in mensenjaren`;
}

dogYears = calculateDogYears(6);
console.log(dogYears);

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

//In het echte leven natuurlijk beter om return te gebruiken en niet console.log in de functie maar voor deze opdracht OK
const wrapper = (word, character) => console.log(`${character}${word}${character}`);
wrapper("bril", "*");
wrapper("beep", "_");
wrapper("kaas", "Q");

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

const createDetailString = (object) => console.log(`Het beroep van ${object.firstName} ${object.lastName} is ${object.profession}.`);
createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'});
createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'})