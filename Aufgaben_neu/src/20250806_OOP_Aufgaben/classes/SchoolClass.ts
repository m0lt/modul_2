class SchoolClass {
  _id: number
  _name: string
  _endDate?: Date

  constructor(id: number, name: string, endDate?: Date) {
    this._id = id
    this._name = name
    this._endDate = endDate
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }
}

export default SchoolClass
