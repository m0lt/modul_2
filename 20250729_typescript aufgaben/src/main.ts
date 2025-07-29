// ![=================== Aufgabe 1_4 ===================]
function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
  let nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}`
  let powerOutput = `Er:sie hat die Fähigkeit: ${heroPower}`
  let enemyOutput = `Sein:ihr größte:r Gegner:in ist: ${heroEnemy}`

  console.log("Aufgabe 1_4: ", nameOutput, powerOutput, enemyOutput)
}

showHero("Batman", "tanzen", "Robin")
// ![=================== Aufgabe 1_6 ===================]

const x = 1

function returnOne() {
  return 1
}

const y = returnOne()

if (x == y) {
  console.log("Aufgabe 1_6: Wird das gedruckt?")
}

// ![=================== Aufgabe 1_7 ===================]

function multiPliziereMitZwei(num: number): number {
  return num * 2
}

console.log("Aufgabe 1_7: ", multiPliziereMitZwei(2))

// ![=================== Aufgabe 1_8 ===================]

function alterBerechnen(birthYear: number): number {
  let currentDate = 2025
  let birthYearValue = birthYear
  return currentDate - birthYearValue
}

const meinAlter = alterBerechnen(1991)

console.log("Aufgabe 1_8")
console.log("Mein Alter: ", meinAlter)

const zweitesAlter = 23
console.log("Zweites Alter: ", zweitesAlter)

function alterVergleichen(meinAlter: number, zweitesAlter: number): number {
  return meinAlter - zweitesAlter
}

const altersDifferenz = alterVergleichen(meinAlter, zweitesAlter)
console.log("Differenz: ", altersDifferenz)

// ![=================== Aufgabe 1_9 ===================]
console.log("Aufgabe 1_9")

function erstelleVorstellungsText(
  vorNameInput: string,
  nachNameInput: string,
  geburtsOrtInput: string,
  alterInput: number,
  wohnOrtInput: string
) {
  return (
    "Mein Name ist " +
    vorNameInput +
    " " +
    nachNameInput +
    ".  Ich bin in " +
    geburtsOrtInput +
    " geboren.  Ich lerne bei SuperCode.  Ich bin " +
    alterInput +
    " Jahre alt.  Ich wohne in " +
    wohnOrtInput +
    "."
  )
}

console.log(erstelleVorstellungsText("Malte", "Pfeiffer", "Volkmarsen", 33, "Düsseldorf"))
