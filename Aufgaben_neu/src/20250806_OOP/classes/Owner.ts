class Owner {
  _vorName: string
  private _nachName: string
  _handyNr: number
  _eMail?: string

  constructor(vorName: string, nachName: string, handyNr: number, eMail: string) {
    this._vorName = vorName
    this._nachName = nachName
    this._handyNr = handyNr
    this._eMail = eMail
  }
  printInfo(): void {
    console.log(`Der Besitzer ist ${this._vorName ?? "Unbekannt"} und seine Handynummer lautet ${this._handyNr}`)
  }
  get nachName() {
    return this._nachName
  }

  set nachName(value: string) {
    this._nachName = value
  }
}

export default Owner
