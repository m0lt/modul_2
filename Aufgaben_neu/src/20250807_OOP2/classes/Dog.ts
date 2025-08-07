import type Owner from "./Owner"

class Dog {
  _owner: Owner
  _breed: string | undefined = ""
  _favoriteFood?: string = ""
  private _birthday: string
  private _numberofMeals: number = 0
  private _name: string | undefined = ""
  private _age: number = 0

  constructor(name: string, age: number, owner: Owner, birthday: string) {
    this._name = name
    this._birthday = birthday

    if (age < 0 || age > 40) {
      new Error("Dog Age must between 0-40 Years")
    } else {
      this._age = age
    }
    this._owner = owner
    console.log("Dog was created")
  }

  get age() {
    return this._age
  }

  set age(value: number) {
    if (value < 0 || value > 40) {
      console.log("Dog Age must between 0-40 Years")
    } else {
      this._age = value
    }
  }

  get dogInGerman(): string {
    return "Hund"
  }

  get name(): string | undefined {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  sleep(): void {
    console.log(`${this._name} is sleeping.`)
  }

  bark(): void {
    console.log(`${this._name} says: "Wuff wuff wuff"`)
  }

  eat() {
    this._numberofMeals++
    if (this._numberofMeals > 4) {
      this.sleep()
    }
  }
}

export default Dog
