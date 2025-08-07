import Owner from "./Owner"

class Bauplan {
  _owner: Owner // Konvention um private Variablen oder Methoden zu kennzeichnen
  _rooms: number
  _color: string = "weiß" // so kann man einen default wert setzen
  _basement: boolean

  constructor(owner: Owner, rooms: number, basement: boolean) {
    this._owner = owner
    this._rooms = rooms
    this._basement = basement

  }

  renovieren(newColor: string): void {
    this._color = newColor
    console.log(`Das Haus wurde in ${this._color} gestrichen`)
  }
}
export default Bauplan
