console.log("[=================== Sort 1_3 sort ===================]")
const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70]
console.log(numArray1.sort())
const numArray1Sorted = numArray1.sort((a, b) => b - a)
console.log(numArray1Sorted)

console.log("[=================== Sort 2_3 slice ===================]")

const oldPainters: string[] = [
  "Caspar David Friedrich",
  "Mary Cassatt",
  "Rosa Bonheur",
  "Francisco de Goya",
  "Édouard Manet",
]
const newPainters: string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"]

const oldFemalePainters = [...oldPainters.slice(1, 3)]
console.log("Old Female Painters: ", oldFemalePainters)

const oldMalePainters: string[] = [...oldPainters.slice(0, 1), ...oldPainters.slice(3, 5)]
console.log("Old Male Painters: ", oldMalePainters)

const newFemalePainters = newPainters.slice(2, 4).concat()
console.log("New Female Painters: ", newFemalePainters)

const newMalePainters = newPainters.slice(0, 2).concat()
console.log("New Male Painters: ", newMalePainters)

const femalePainters = oldFemalePainters.concat(newFemalePainters)
console.log("Female Painters: ", femalePainters)

const malePainters = [...oldMalePainters, ...newMalePainters]
console.log("Male Painters: ", malePainters)
console.log("[=================== Iteration 1_2 slice ===================]")

const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
]

console.log(
  "Direkt: ",
  drinks.map((value) => value.toUpperCase())
)

function upperCasen(wort: string): string {
  return wort.toUpperCase()
}

console.log("Callback: ", drinks.map(upperCasen))
console.log("[=================== Iteration 1_4 map ===================]")

// celsius = (℉ - 32) / 1.8

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120]

const celsius = fahrenheit.map((f) => (f - 32) / 1.8)
console.log(celsius)
console.log("[=================== Iteration 1_5 map ===================]")
const checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6,
  27, 71, 26, 15, 78,
]

const checkedNum = checkNumber.map((value) => {
  const num = value
  if (num % 3 === 0) {
    return num + 100
  } else {
    return num
  }
})

console.log(checkedNum)

console.log("[=================== Iteration 1_6 map oder forEach ===================]")

const album: string[] = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"]

function cleanNames(fileName: string) {
  if (fileName.indexOf(".") !== -1) {
    const index = fileName.indexOf(".")
    return fileName.slice(0, index).toLowerCase()
  } else {
    return "invalid"
  }
}

const albumClean = album.map(cleanNames)
console.log(albumClean)

console.log("[=================== Iteration 1_7 map ===================]")
const fruits: string[] = ["🍇", "🍌", "🍒", "🍎"]

const fruchtSaft = fruits.map((f) => f + "🍷")
console.log(fruchtSaft)

console.log("[=================== Iteration 1_8 filter ===================]")
const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function printEvenNumbers(number: number) {
  if (number % 2 === 0) {
    return number
  }
}
function printOddNumbers(number: number) {
  if (number % 2 !== 0) {
    return number
  }
}

console.log("Even Numbers. ", zahlen.filter(printEvenNumbers))
console.log("Odd Numbers. ", zahlen.filter(printOddNumbers))

const evenNumbers = zahlen.filter((zahl) => zahl % 2 === 0)
console.log(evenNumbers)
const oddNumbers = zahlen.filter((zahl) => zahl % 2 !== 0)
console.log(oddNumbers)

console.log("[=================== Array 1_2 filter ===================]")

const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
]

function showHeroesCleaned(hero: string | null | undefined) {
  if (hero !== null && hero !== undefined) {
    return hero
  }
}

const heroArrCleaned = heroArr.filter(showHeroesCleaned)
console.log(heroArr)
console.log(heroArrCleaned)

console.log("[=================== Array 2_1 filter ===================]")

const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
]

const kurzeWoerter = woerter.filter(function (wort) {
  if (wort.length <= 6) {
    return wort
  }
})

console.log(kurzeWoerter)

const woerterOhneEe = woerter.filter((wort) => wort.includes("E") == false && wort.includes("e") == false)
console.log(woerterOhneEe)
