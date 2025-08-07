class Customer {
  _name: string = ""
  _email: string = ""
  _address: string = "Str.1"
  _postalCode: string = ""
  _city: string = ""

  get name() {
    return this._name
  }
  set name(value: string) {
    if (value.length > 60) {
      console.error("Name zu lang")
    } else {
      this._name = value
    }
  }
  get email() {
    return this._email
  }
  set email(value: string) {
    if (!value.includes("@")) {
      console.error("Keine gültige Mail")
    } else {
      this._email = value
      console.log(this._email)
    }
  }
  get address() {
    return this._address
  }
  set address(value: string) {
    this._address = value
  }
  get postalCode() {
    return this._postalCode
  }
  set postalCode(value: string) {
    if (!(Number(value) < 0 || Number(value) > 99999) && value.length === 5) {
      this._postalCode = value
      console.log("Neue PLZ", this._postalCode)
    } else {
      console.error("Keine gültige PLZ")
    }
  }
  get city() {
    return this._city
  }
  set city(value: string) {
    this._city = value
  }
}

export default Customer
