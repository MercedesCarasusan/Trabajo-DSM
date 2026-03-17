import { Card, Button } from "react-bootstrap"
import { Link } from "react-router"
import type { Movie } from "../../domain/Movie"
import MoviesService from "../../services/MoviesService"

import "./movieCard.css"

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {

  const averageRating = MoviesService.calculateAverageRating(movie)

  const renderStars = (rating: number) => {
    const rounded = Math.round(rating)
    return "⭐".repeat(rounded) + "☆".repeat(5 - rounded)
  }

  return (

    <Card className="movie-card">

      <div className="poster-container">
        <img
          src={`/imgs/${movie.image}`}
          alt={movie.title}
          className="poster-img"
        />

        <div className="movie-overlay">

          <h5 className="movie-title">{movie.title}</h5>

          <p className="movie-rating">
            {movie.ratings.length === 0
              ? "Sin puntuaciones"
              : `${renderStars(averageRating)} (${averageRating})`}
          </p>

          <p className="movie-category">
            {movie.category}
          </p>

          <Link to={`/movie/${movie.id}`}>
            <Button variant="danger" size="sm">
              Ver detalles
            </Button>
          </Link>

        </div>
      </div>

    </Card>
  )
}

export default MovieCard