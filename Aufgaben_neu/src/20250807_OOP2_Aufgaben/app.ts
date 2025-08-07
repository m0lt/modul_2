import Animals from "./classes/Animals"
import Customer from "./classes/Customer"

const bello = new Animals("Dog", 12, "Red")

console.log(bello)

console.log(bello.age)
bello.age = 9
console.log(bello)

console.log("[=================== OPP Class 2_3 ===================]")

const customer1 = new Customer()
customer1.email = "hallo.de"
customer1.email = "hallo@hallo.de"

console.log(customer1.address)

customer1.postalCode = "44444"
customer1.postalCode = "00001"
