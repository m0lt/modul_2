import type Schueler from "./Schueler"

class SchoolClass {
  _id: number
  _name: string
  _endDate?: Date
  _schueler: Schueler[]

  constructor(id: number, name: string, schueler: Schueler[], endDate?: Date) {
    this._id = id
    this._name = name
    this._endDate = endDate
    this._schueler = schueler
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }
}

export default SchoolClass
