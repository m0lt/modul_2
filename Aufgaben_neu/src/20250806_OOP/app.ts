import Bauplan from "./classes/Bauplan" //sollte automatisch erstellt werden?
import Owner from "./classes/Owner" //sollte automatisch erstellt werden?
import Rooms from "./classes/Rooms"
import { RoomType } from "./enums/RoomType"

const room_haus = new Rooms(2, [RoomType.BEDROOM, RoomType.BATHROOM, RoomType.KITCHEN])

const besitzer1 = new Owner("Joe", "Doe", 123, "hallo@hallo.de")

const haus1 = new Bauplan(besitzer1, 3, true)

haus1.renovieren("Rot")

besitzer1._vorName = "Kim"
console.log(besitzer1)

room_haus.anzeigen()

console.log(besitzer1.nachName)

besitzer1.nachName = "Peter"
console.log(besitzer1.nachName)
