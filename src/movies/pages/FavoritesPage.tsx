import { useEffect, useState, useContext } from "react"
import { Container } from "react-bootstrap"

import MoviesService from "../../services/MoviesService"
import { AuthContext } from "../../auth/AuthContext"

import type { Movie } from "../../domain/Movie"

import MovieList from "../components/MovieList"

const FavoritesPage = () => {

  const auth = useContext(AuthContext)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {

    if (!auth.userId) return
    const loadFavorites = async () => {
      const favoriteIds = await MoviesService.getFavorites(auth.userId)
      const allMovies = await MoviesService.getAllMovies()
      const favoriteMovies = allMovies.filter((m) =>
        favoriteIds.includes(m.id)
      )

      setMovies(favoriteMovies)
    }

    loadFavorites()

  }, [auth.userId])

  return (

    <Container>

      <h1>Mis favoritos</h1>
      {movies.length === 0 && (
        <p>No tienes películas favoritas todavía</p>
      )}

      <MovieList movies={movies} />

    </Container>
  )
}

export default FavoritesPage