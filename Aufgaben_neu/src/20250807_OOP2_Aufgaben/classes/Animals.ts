class Animals {
  _species: string
  _age: number
  _color: string

  constructor(species: string, age: number, color: string) {
    this._age = age
    this._color = color
    this._species = species
  }

  get age() {
    return this._age
  }

  set age(value: number) {
    this._age = value
  }
  get species() {
    return this._species
  }

  set species(value: string) {
    this._species = value
  }
  get color() {
    return this._color
  }

  set color(value: string) {
    this._color = value
  }
}

export default Animals
