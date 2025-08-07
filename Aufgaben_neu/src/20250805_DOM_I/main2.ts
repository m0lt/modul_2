import { movies } from "./movies.ts"
import "./styles.css"

const movieSearchInput = document.querySelector("#movieSearchInput") as HTMLInputElement
let movieSearchvalue: string | null
const movieSearchButton = document.querySelector("#movieSearchButton") as HTMLButtonElement
const yearUpButton = document.querySelector("#yearUpButton") as HTMLButtonElement
const yearDownButton = document.querySelector("#yearDownButton") as HTMLButtonElement
const yearBestRateButton = document.querySelector("#yearBestRateButton") as HTMLButtonElement

const movieResults = document.querySelector("#movieResults") as HTMLDivElement

let currentSearch: string = ""
if (currentSearch === "") {
  movies.forEach((entry) => {
    const result = document.createElement("div") as HTMLDivElement
    let title = entry[0]
    result.innerText = title
    movieResults.appendChild(result)
    console.log("Current Search: ", currentSearch)
  })
} else {
  movieResults.innerHTML = ""
}

type Movie = [string, string, string, string, string[], string]

function createMovieCard([title, year, director, length, genres, rating]: Movie): HTMLDivElement {
  const card = document.createElement("div")
  card.className = "resultCard"
  card.innerHTML = `
    <h3 style="margin:12px 0 6px 0">${title}</h3>
    <p>${year}</p>
    <p style="font-weight:600; margin:6px 0">${director}</p>
    <p>${length}</p>
    <p>${genres.join(", ")}</p>
    <p style="margin-top:6px">${rating}</p>
  `
  return card
}

movieSearchButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log(movies)
  movieSearchvalue = movieSearchInput.value
  console.log("Movie search value:", movieSearchvalue)
  currentSearch = movieSearchvalue.trim().toLowerCase()
  console.log("Current search in input: ", currentSearch)

  if (currentSearch === "") {
    movies.forEach((entry) => {
      let title = entry[0]
      let year = entry[1]
      let director = entry[2]
      let length = entry[3]
      let genre = entry[4]
      let rating = entry[5]

      const resultCard = document.createElement("div") as HTMLDivElement
      result.innerText = title
      movieResults.appendChild(result)
      console.log("Current Search: ", currentSearch)
    })
  } else {
    movieResults.innerHTML = ""
  }
})

yearUpButton.addEventListener("click", (e) => {
  e.preventDefault()

  currentSearch = ""
})
