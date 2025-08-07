class Person {
  firstName: string
  lastname: string
  private _email: string = ""
  private _birthday: Date

  constructor(firstName: string, lastnName: string, birthday: Date) {
    this.firstName = firstName
    this.lastname = lastnName
    this._birthday = birthday
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    if (!value.includes("@")) {
      console.error("Email must contain @")
    } else {
      this._email = value
    }
  }
}

export default Person
