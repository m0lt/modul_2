import "./style.css"
import typescriptLogo from "./typescript.svg"

function printMessages(): void {
  console.log("Guten Morgen")
  console.log("Guten Mittag")
  console.log("Guten Abend")
  return undefined
}

printMessages()

const test = function (eins: number) {
  return eins + 1
}

console.log(test(2))
