import { Row, Col } from "react-bootstrap"
import type { Movie } from "../../domain/Movie"
import MovieCard from "./MovieCard"

interface Props {
  movies: Movie[]
}

const MovieList = ({ movies }: Props) => {

  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))}

    </Row>
  )
}

export default MovieList