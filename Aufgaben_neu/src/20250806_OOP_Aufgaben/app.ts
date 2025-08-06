import IceCreamFlavor from "./classes/IceCreamFlavor" //sollte automatisch erstellt werden?

const schokolade = new IceCreamFlavor("Schokolade", 1.5, true, "schoki")
const vanille = new IceCreamFlavor("Vanille", 1.2, true, "Langweilig")
const bananeGurke = new IceCreamFlavor("Banane Gurke", 0.5, false)
const rose = new IceCreamFlavor("Rose", 3, false, "🌹")

const eissorten: IceCreamFlavor[] = [schokolade, vanille, bananeGurke, rose]

eissorten.forEach((e) => {
  console.log(
    `${e._name}: Preis: ${e._price}, Beschreibung: ${e._description}, Ist beliebt: ${e._isPopular ? "Ja" : "Nein"}.`
  )
})

import SchoolClass from "./classes/SchoolClass"

const deutsch = new SchoolClass(1, "Deutsch", new Date(2026, 0, 1))
const englisch = new SchoolClass(2, "Englisch")
const mathe = new SchoolClass(3, "Mathe", new Date(2027, 0, 1))

console.log(deutsch)
console.log(englisch)
console.log(mathe)

deutsch.name = "German"
englisch.name = "English"

console.log(deutsch)
console.log(englisch)
