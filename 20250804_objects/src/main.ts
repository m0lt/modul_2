console.log("[=================== Objects 1_3 ===================]")

type Apple = {
  color: string
  size: string
  isSweet: boolean
}

const redApple: Apple = { color: "red", size: "big", isSweet: true }
const greenApple: Apple = { color: "green", size: "small", isSweet: false }
const yellowApple: Apple = { color: "yellow", size: "big", isSweet: true }

const apples: Apple[] = [redApple, greenApple, yellowApple]

const pinkApple: Apple = { color: "pink", size: "big", isSweet: false }
apples.push(pinkApple)

apples.forEach((apfel) => {
  console.log(apfel.color)
})

console.log("Anzahl Äpfel: ", apples.length)

console.log("[=================== Objects 1_4 ===================]")

type Pet = {
  tiertyp: string
  namen: string[]
}

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
]
console.log("Alle Haustiere: ", unsereHaustiere)

//Nala und Droopy
console.log(unsereHaustiere[0].namen[1])
console.log(unsereHaustiere[1].namen[2])

//Hundenamen
console.log(unsereHaustiere[1].namen)

//Namen ändern
unsereHaustiere[1].namen[2] = "Snoopy"
unsereHaustiere[0].namen[2] = "Pinky"

console.log("Alle Haustiere NEU: ", unsereHaustiere)

const hamster: Pet = {
  tiertyp: "Hamster",
  namen: ["Bernhard", "Werner"],
}

unsereHaustiere.push(hamster)
console.log("Alle Haustiere mit Hamstern: ", unsereHaustiere)

console.log("[=================== Objects 1_5 ===================]")
type Lager = {
  schreibtisch: {
    schublade: string
  }
  schrank: {
    "Obere Schublade": {
      Ordner1: string
      Ordner2: string
    }
    "Untere Schublade": string
  }
}

const unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
}

console.log(unserLager.schrank["Obere Schublade"].Ordner2)
console.log(unserLager.schreibtisch.schublade)
console.log(unserLager.schrank["Untere Schublade"])

console.log("[=================== Objects 1_6 ===================]")

type Musik = {
  kunstler: string
  title: string
  release_jahr: number
  formate: string[]
  gold: boolean
}

const meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
]

console.log(meineTopVier[0].kunstler)
console.log(meineTopVier[1].formate[3])
console.log(meineTopVier[1].gold)
console.log(meineTopVier[2].release_jahr, " und ", meineTopVier[3].release_jahr)
console.log(meineTopVier[3].formate[2])
console.log(meineTopVier[3].title.split(" ")[4])

const NirvanaNevermind = {
  kunstler: "Nirvana",
  title: "Nevermind",
  release_jahr: 1991,
  formate: ["LP", "CD", "MC", "Download", "Streaming"],
  gold: true,
}

meineTopVier.push(NirvanaNevermind)
console.log(meineTopVier)

console.log("[=================== Objects 2_2 ===================]")

type PeriodActive = {
  start: number
  end: number | string
  extra?: number
}

type Singer = {
  name: string
  country: string
  period_active: PeriodActive
  genre: string
}

const singers: Singer[] = [
  { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
]

console.log("Unsortiert: ", singers)

singers.sort((a, b) => {
  return a.name.localeCompare(b.name)
})

console.log("Sortiert: ", singers)

singers.sort((a, b) => {
  return a.period_active.start - b.period_active.start
})

console.log("Sortiert 2: ", singers)

console.log("[=================== Objects 2_5 ===================]")

type PeriodActiveTwo = {
  start: number
  end: number | string
  extra?: number
}

type SingerTwo = {
  name: string
  country: string
  period_active: PeriodActiveTwo
  genre: string
}

const singersTwo: SingerTwo[] = [
  { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
]

const singerSearchInput = document.querySelector<HTMLInputElement>("#singerSearchInput")
const singerSearchButton = document.querySelector<HTMLButtonElement>("#singerSearchButton")
const searchResultRows = document.querySelector<HTMLElement>("#searchResults")

function findSinger(searchTerm: string): SingerTwo[] {
  return singersTwo.filter((singer) => singer.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

function writeResults(results: SingerTwo[]) {
  if (searchResultRows) {
    searchResultRows.innerHTML = ""
    results.forEach((singer) => {
      const newRow = document.createElement("tr")
      const nameTd = document.createElement("td")
      nameTd.textContent = singer.name

      const countryTd = document.createElement("td")
      countryTd.textContent = singer.country

      const periodTd = document.createElement("td")
      periodTd.textContent = `${singer.period_active.start} – ${singer.period_active.end}`

      const genreTd = document.createElement("td")
      genreTd.textContent = singer.genre

      newRow.appendChild(nameTd)
      newRow.appendChild(countryTd)
      newRow.appendChild(periodTd)
      newRow.appendChild(genreTd)
      searchResultRows.appendChild(newRow)
    })
  }
}

singerSearchButton?.addEventListener("click", function searchSinger() {
  if (singerSearchInput) {
    const searchTerm = singerSearchInput.value
    console.log(searchTerm)
    const filteredSingers = findSinger(searchTerm)
    console.log(filteredSingers)
    writeResults(filteredSingers)
  }
})

console.log("[=================== Tuple 1_1 ===================]")

type starWarsActor = [string, string]

let starWarsCast: starWarsActor[] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Darth Vader", "James Earl Jones"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
]

starWarsCast.forEach(([character, actor]) => {
  console.log(`${character} wurde gespielt von ${actor}`)
})

console.log("[=================== Tuple 2_1 ===================]")

//Nummer (number), Name (string), Abteilung (string) und Jahresgehalt (number)
type mitarbeiter = [number, string, string, number]
let belegschaft: mitarbeiter[] = [
  [1, "Peter", "Marketing", 50000],
  [2, "Petra", "Einkauf", 40000],
  [3, "Piotr", "IT", 70000],
  [4, "Peedah", "Controlling", 60000],
  [5, "Ptah", "Recht", 80000],
]

belegschaft.forEach(([nummer, name, abteilung, gehalt]) => {
  console.log(nummer, " ", name, " ", abteilung, " ", gehalt)
})

console.log("[=================== Enum 1_1 ===================]")

enum weekday {
  Monday, // 0
  Tuesday, // 1
  Wednesday, // 2
  Thursday, // 3
  Friday, // 4
  Saturday, // 5
  Sunday, // 6
}

enum months {
  Januray,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  Octobre,
  November,
  December,
}

console.log(weekday)
console.log(months)

for (const key in weekday) {
  if (key) console.log(key)
}
for (const key in months) {
  console.log(key)
}

console.log("[=================== Enum 1_2 ===================]")

enum pizzaSize {
  Small,
  Medium,
  Large,
  Family,
}

enum pizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Pepper,
  Tuna,
}

type pizza = [pizzaSize, pizzaIngredients[]]

const lieblingsPizza: pizza[] = [
  [pizzaSize.Small, [pizzaIngredients.Onion, pizzaIngredients.Pepper]],
  [pizzaSize.Medium, [pizzaIngredients.Cheese, pizzaIngredients.Tuna]],
  [pizzaSize.Large, [pizzaIngredients.Salami]],
  [pizzaSize.Family, [pizzaIngredients.Onion, pizzaIngredients.Cheese, pizzaIngredients.Pepper]],
]

console.log(lieblingsPizza)
console.log("[=================== Enum 2_1 ===================]")

enum HtmlError {
  Ok = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

let randomError = Math.round(Math.random() * 5)
console.log(randomError)

function showHtmlError(error: number) {
  if (error <= 2) {
    return HtmlError.Ok
  } else if (error === 3) {
    return HtmlError.Redirect
  } else if (error === 4) {
    return HtmlError.BadRequest
  } else {
    return HtmlError.InternalServerError
  }
}

console.log(showHtmlError(randomError))
console.log("[=================== Enum 2_2 ===================]")

enum clothingColors {
  Gelb = "#FFFF00",
  Orange = "#ffae00ff",
  Pink = "#ff00bfff",
  Blau = "#3700fcff",
  Lila = "#9c00fcff",
  Grau = "#878787ff",
}

//Warum das Array? So bekomme ich den Namen der Farben nicht als Buttonbeschriftung
const allColors: clothingColors[] = [
  clothingColors.Gelb,
  clothingColors.Orange,
  clothingColors.Pink,
  clothingColors.Blau,
  clothingColors.Lila,
  clothingColors.Grau,
]

const colorBtnSection = document.querySelector<HTMLElement>("#colorBtnSection")

//wenn ich über das enum iteriere, kriege ich beides
// Object.entries(allColors).forEach(([name, value]) => {
Object.entries(clothingColors).forEach(([name, value]) => {
  if (colorBtnSection) {
    const colorBtn = document.createElement("button")
    colorBtn.textContent = name
    colorBtn.style.background = value

    colorBtnSection.appendChild(colorBtn)
  }
})

console.log("[=================== Map 2_1 ===================]")

console.log("[=================== Map 3_1 ===================]")

console.log("[=================== Set 2_1 ===================]")

const marvelChars: string[] = [
  "Iron Man",
  "Iron Man",
  "Captain America",
  "Thor",
  "Thor",
  "Hulk",
  "Black Widow",
  "Spider Man",
]

console.log(marvelChars)

const marvelCharsNew = new Set(marvelChars)

console.log(marvelCharsNew)

//Duplikate wurden bereinigt
