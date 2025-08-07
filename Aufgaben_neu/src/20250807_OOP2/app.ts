import Dog from "./classes/Dog"
import LibraryBook from "./classes/LibraryBook"
import Owner from "./classes/Owner"
import Person from "./classes/Person"

const willi = new Owner("Willi", "hier", 123, new Date("2023-1-1"))

const wuffi = new Dog("Wuffi", 9, willi, "1.1.2025")
console.log(wuffi)

wuffi.age = 50

console.log(wuffi.dogInGerman)

const inputElement = document.querySelector("#myInput") as HTMLInputElement

document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  e.preventDefault()
  wuffi.name = inputElement?.value
  console.log(wuffi)
})

wuffi.sleep()
wuffi.bark()
wuffi.eat()
console.log(wuffi)
wuffi.eat()
console.log(wuffi)
wuffi.eat()
console.log(wuffi)
wuffi.eat()
console.log(wuffi)
wuffi.eat()
console.log(wuffi)

// [=================== Person ===================]

const andre = new Person("Andre", "Schmidt", new Date("2004-01-01"))
andre.email = "andregmail.de"

console.clear()

const goodGirl = new LibraryBook()
