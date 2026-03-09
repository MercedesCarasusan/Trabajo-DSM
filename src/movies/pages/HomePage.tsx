import { useEffect, useState } from "react"
import MoviesService from "../../services/MoviesService"
import type { Movie } from "../../domain/Movie"

import MovieList from "../components/MovieList"
import CategoryFilter from "../components/CategoryFilter"

import { Container } from "react-bootstrap"

const HomePage = () => {

  const [movies, setMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [category, setCategory] = useState<string>("")

  useEffect(() => {

    MoviesService.getAllMovies()
      .then((data) => {
        setMovies(data)
        setFilteredMovies(data)
      })

  }, [])

  useEffect(() => {

    if (category === "") {
      setFilteredMovies(movies)
    } else {

      const filtered = movies.filter(
        (movie) => movie.category === category
      )

      setFilteredMovies(filtered)
    }

  }, [category, movies])

  const categories = Array.from(
    new Set(movies.map((m) => m.category))
  )

  return (

    <Container>

      <h1>Catálogo de películas</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={category}
        onChange={setCategory}
      />

      <MovieList movies={filteredMovies} />

    </Container>

  )
}

export default HomePage