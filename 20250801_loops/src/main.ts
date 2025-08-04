console.log("[=================== Loops 1_1 ===================]")

for (let i = 1; i <= 10; i++) {
  console.log("Hello World ", i)
}

console.log("[=================== Loops 1_2 ===================]")

let numbersToTen: number[] = []

for (let i = 0; i <= 10; i++) {
  numbersToTen.push(i)
}

console.log(numbersToTen)

console.log("[=================== Loops 1_3 ===================]")

let j = 0
while (j < 10) {
  console.log("Hello World: ", j)
  j++
}
console.log("[=================== Loops 1_4 ===================]")

let friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

for (let i = 0; i < friendNames.length; i++) {
  console.log("Versuch 1: ", friendNames[i])
}
console.log("for ... of")
for (const names of friendNames) {
  console.log("Versuch 2: ", names)
}

console.log("[=================== Loops 1_7 ===================]")

const ausgabeDiv = document.querySelector<HTMLDivElement>("#doWhile")
let i = 1

do {
  const p = document.createElement("p")
  ausgabeDiv?.appendChild(p)
  p.textContent = `The Number is: ${i}`
  i++
} while (i < 6)

console.log("[=================== Loops 1_8 ===================]")
const ausgabeDiv2 = document.querySelector<HTMLDivElement>("#doWhile2")
let k = 0
do {
  if (k % 2 === 0) {
    const pTag = document.createElement("p")
    ausgabeDiv2?.appendChild(pTag)
    pTag.textContent = `Gerade Nummer: ${k}`
  }
  k++
} while (k <= 20)

console.log("[=================== Loops 2_1 ===================]")

let returnArray: string[] = []
function createImageNames(num: number): string {
  let imgName

  if (num < 10) {
    imgName = `image_00${num}.jpg`
  } else if (num >= 10 && num < 100) {
    imgName = `image_0${num}.jpg`
  } else if (num >= 100 && num < 999) {
    imgName = `image_${num}.jpg`
  } else {
    imgName = "Error"
  }
  return imgName
}

for (i = 0; i <= 100; i++) {
  let currentName = createImageNames(i)
  returnArray.push(currentName)
}

console.log(returnArray)

console.log("[=================== Loops 2_2 ===================]")

const inputElement = document.querySelector<HTMLInputElement>("#loopValue")
const buttonElement = document.querySelector<HTMLButtonElement>("#loopButton")
const outputElement = document.querySelector<HTMLElement>("#loopMeOutput")

let os: string[] = []
buttonElement?.addEventListener("click", function buttonCallback() {
  if (inputElement) {
    let loopValue = Number(inputElement.value)
    if (loopValue > 0) {
      for (let l = 0; l < loopValue; l++) {
        os.push("O")
      }
      const oOutput = os.join("")
      outputElement.textContent = "L" + oOutput + "P"
      os = []
    }
  }
})

console.log("[=================== Loops 2_3 ===================]")

function isVowel(iC: string): boolean {
  switch (iC) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":
      return true
    default:
      return false
  }
}

function getNumberOfVowels(inputText: string) {
  const rawInputText: string = inputText
  const charArray: string[] = rawInputText.split("")
  console.log(charArray)
  const inputTextLength: number = inputText.length
  let vowelCounter: number = 0
  for (i = 0; i < inputTextLength; i++) {
    if (isVowel(charArray[i])) {
      vowelCounter++
    }
  }
  return vowelCounter
}

getNumberOfVowels("Hallo")

console.log("[=================== Loops 2_4 ===================]")

function addToFifty(): void {
  let randomSum = 0
  while (randomSum <= 50) {
    let randomNum = Math.round(Math.random() * 10)
    console.log("Random Number: ", randomNum)
    console.log("Random Sum: ", randomSum)
    randomSum = randomSum + randomNum
  }
  console.log("Random Result: ", randomSum)
}
addToFifty()

console.log("[=================== Loops 3_6 ===================]")

const ergebnisse: number[] = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46]

function durchschnitt(ergebnisseInput: number[]) {
  let anzWerte = ergebnisseInput.length
  console.log("Anzal Arbeiten: ", anzWerte)
  let punkteSumme = 0
  for (i = 0; i < anzWerte; i++) {
    punkteSumme = punkteSumme + ergebnisseInput[i]
  }
  let durchschnWert = punkteSumme / anzWerte
  console.log("Durchschnittswert: ", durchschnWert)
  if (durchschnWert < 50) {
    return "Ungenügend"
  } else if (durchschnWert >= 50 && durchschnWert < 60) {
    return "Mangelhaft"
  } else if (durchschnWert >= 60 && durchschnWert < 70) {
    return "Ausreichend"
  } else if (durchschnWert >= 70 && durchschnWert < 80) {
    return "Befriedigend"
  } else if (durchschnWert >= 80 && durchschnWert < 90) {
    return "Gut"
  } else if (durchschnWert >= 90) {
    return "Sehr Gut"
  } else {
    return "Error"
  }
}

console.log(durchschnitt(ergebnisse))
