import { movies } from "./movies"
import "./styles.css"

type Movie = [string, string, string, string, string[], string]

const movieSearchInput = document.querySelector("#movieSearchInput") as HTMLInputElement
const movieSearchButton = document.querySelector("#movieSearchButton") as HTMLButtonElement
const yearUpButton = document.querySelector("#yearUpButton") as HTMLButtonElement
const yearDownButton = document.querySelector("#yearDownButton") as HTMLButtonElement
const yearBestRateButton = document.querySelector("#yearBestRateButton") as HTMLButtonElement
const movieResults = document.querySelector("#movieResults") as HTMLDivElement

function filterMovies(data: Movie[], term: string): Movie[] {
  const q = term.trim().toLowerCase()
  if (!q) return data
  return data.filter(([title, year, director, length, genres, rating]) =>
    [title, year, director, length, rating, ...genres].some((v) => String(v).toLowerCase().includes(q))
  )
}

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

function renderMovies(list: Movie[]): void {
  movieResults.innerHTML = ""
  const frag = document.createDocumentFragment()
  list.forEach((m) => frag.appendChild(createMovieCard(m)))
  movieResults.appendChild(frag)
}

// Zustand
let currentList: Movie[] = movies.slice()

// Initial alles zeigen
renderMovies(currentList)

// Suche
function applySearch() {
  currentList = filterMovies(movies, movieSearchInput.value)
  renderMovies(currentList)
}
movieSearchButton.addEventListener("click", (e) => {
  e.preventDefault()
  applySearch()
})
// Optional live Suche
movieSearchInput.addEventListener("input", applySearch)

// Sortieren
yearUpButton.addEventListener("click", (e) => {
  e.preventDefault()
  currentList = currentList.slice().sort((a, b) => Number(a[1]) - Number(b[1]))
  renderMovies(currentList)
})

yearDownButton.addEventListener("click", (e) => {
  e.preventDefault()
  currentList = currentList.slice().sort((a, b) => Number(b[1]) - Number(a[1]))
  renderMovies(currentList)
})

yearBestRateButton.addEventListener("click", (e) => {
  e.preventDefault()
  currentList = currentList.slice().sort((a, b) => Number(b[5]) - Number(a[5]))
  renderMovies(currentList)
})
