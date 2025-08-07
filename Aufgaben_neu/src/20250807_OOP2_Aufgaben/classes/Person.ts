import type { gender } from "../enums/gender"

class Person {
  _name: string = ""
  _gender?: gender
  _birthday: Date

  constructor(birthday: Date) {
    this._birthday = birthday
  }

  get birthday() {
    return this._birthday
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
  get gender() {
    return this._gender
  }

  set gender(value) {
    this._gender = value
  }
}

export default Person
