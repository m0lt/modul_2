console.log("// ![=================== Arrays 1_1 arrays===================]")

const bucketList: string[] = ["Thailand", "Oman", "Malediven"]
console.log(bucketList)
const luckyNumbers: string[] = ["13", "0", "1337"]
console.log(luckyNumbers)
const favoritePeople: string[] = ["Tick", "Trick", "Track"]
console.log(favoritePeople)

console.log("// ![=================== Arrays 1_2 index===================]")

console.log(bucketList[0])
console.log(bucketList[1])
console.log(bucketList[2])
console.log(luckyNumbers[0])
console.log(luckyNumbers[1])
console.log(luckyNumbers[2])
console.log(favoritePeople[0])
console.log(favoritePeople[1])
console.log(favoritePeople[2])

console.log("// ![=================== Arrays 1_3 length===================]")

console.log(bucketList.length)
console.log(luckyNumbers.length)
console.log(favoritePeople.length)

console.log("// ![=================== Arrays 1_4 push()===================]")

bucketList.push("Buxtehude", "Wuppertal")
console.log(bucketList)
console.log(bucketList.length)

console.log("// ![=================== Arrays 1_5 pop()===================]")
bucketList.pop()
console.log(bucketList)
console.log(bucketList.length)
console.log("// ![=================== Arrays 1_6 shift()===================]")
let firstBucketList = bucketList.shift()
bucketList.shift()
console.log(firstBucketList)
console.log(bucketList)
console.log(bucketList.length)

console.log("// ![=================== Arrays 1_7 unshift()===================]")

bucketList.unshift(firstBucketList, "Dortmund")
console.log(bucketList)
console.log(bucketList.length)

console.log("// ![=================== Arrays 1_8 slice===================]")

const lieblingsReiseZiele: string[] = ["Essen", "Köln", "Bochum", "Herne"]
console.log(lieblingsReiseZiele)

console.log(lieblingsReiseZiele.slice(1, 3))
console.log(lieblingsReiseZiele.slice(1, 3).length)

console.log("// ![=================== Arrays 1_9 push pop unshift shift ===================]")

const numbers: number[] = [23, 54, 75]
numbers.push(1, 2, 3, 4, 5)
console.log(numbers)
numbers.unshift(6, 7, 8, 9, 10)
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.shift()
console.log(numbers)

console.log("// ![=================== Arrays 1_10 split ===================]")

const futuramaQuote =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
console.log(futuramaQuote)
const futuramaQuoteWords: string[] = futuramaQuote.split(" ")
const futuramaQuoteChars: string[] = futuramaQuote.split("")

console.log("// ![=================== Arrays 1_14 concat slice spread ===================]")

const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
]
console.log(oldHollywoodActors)

const actorsReference = oldHollywoodActors

console.log(actorsReference)

oldHollywoodActors.push("Marilyn Monroe")

console.log("Old Actors: ", oldHollywoodActors)
console.log("Reference: ", actorsReference)

const concatCopy: string[] = [].concat(oldHollywoodActors)
console.log("Concat Kopie: ", concatCopy)
concatCopy.push("Test1")
console.log("Concat Kopie Test1: ", concatCopy)
const sliceCopy: string[] = oldHollywoodActors.slice()
console.log("Slice Kopie: ", sliceCopy)
sliceCopy.push("Test2")
console.log("Slice Kopie Test 2: ", sliceCopy)
const spreadCopy: string[] = [...oldHollywoodActors]
console.log("Spread Kopie: ", spreadCopy)
spreadCopy.push("Test3")
console.log("Spread Kopie Test 3: ", spreadCopy)
