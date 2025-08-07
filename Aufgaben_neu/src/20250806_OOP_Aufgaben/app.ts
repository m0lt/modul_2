import IceCreamFlavor from "./classes/IceCreamFlavor" //sollte automatisch erstellt werden?
import SchoolClass from "./classes/SchoolClass"
import Schueler from "./classes/Schueler"

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

const 

const fuenfA = new SchoolClass(1, "5a", new Date(2026, 0, 1))
const fuenfB = new SchoolClass(2, "5bb")
const fuenfC = new SchoolClass(3, "5C", new Date(2027, 0, 1))

console.log(fuenfA)
console.log(fuenfB)
console.log(fuenfC)

fuenfA.name = "5A"
fuenfB.name = "5B"

console.log(fuenfA)
console.log(fuenfB)


