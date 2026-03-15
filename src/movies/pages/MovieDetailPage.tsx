import { useEffect, useState, useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router"

import MoviesService from "../../services/MoviesService"

import type { Movie } from "../../domain/Movie"
import type { Rating } from "../../domain/Rating"
import type { Comment } from "../../domain/Comment"

import RatingStars from "../components/RatingStars"
import CommentForm from "../components/CommentForm"
import CommentsList from "../components/CommentsList"
import AddFavoriteButton from "../components/AddFavoriteButton"

import { AuthContext } from "../../auth/AuthContext"

const MovieDetailPage = () => {

  const { id } = useParams()
  const auth = useContext(AuthContext)
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {

    if (!id) return

    MoviesService
      .getMovieById(id)
      .then((data) => setMovie(data))

  }, [id])

  useEffect(() => {

    if (!auth.userId || !id) return

    MoviesService
      .getFavorites(auth.userId)
      .then((favorites) => {
        setIsFavorite(favorites.includes(id))
      })

  }, [auth.userId, id])

  const addRating = async (value: number) => {

    if (!movie || !auth.userId || !auth.token) return

    const rating: Rating = {
      userId: auth.userId,
      email: auth.email,
      value
    }

    await MoviesService.addRating(movie, rating, auth.token)
    alert("Rating guardado")

  }

  const addComment = async (text: string) => {

    if (!movie || !auth.userId || !auth.token) return

    const comment: Comment = {
      userId: auth.userId,
      email: auth.email,
      text,
      date: new Date()
    }

    await MoviesService.addComment(movie, comment, auth.token)
    alert("Comentario guardado")
  }

  const toggleFavorite = async () => {

    if (!auth.userId || !auth.token || !id) return

    if (isFavorite) {
      await MoviesService.removeFavorite(
        auth.userId,
        id,
        auth.token
      )

      setIsFavorite(false)

    } else {

      await MoviesService.addFavorite(
        auth.userId,
        id,
        auth.token
      )

      setIsFavorite(true)
    }
  }

  if (!movie) return <p>Cargando...</p>

  const userRating = movie.ratings.find(
    (r) => r.userId === auth.userId
  )?.value || 0

  return (

    <Container style={{ marginTop: "30px" }}>

      <Row>
        <Col md={4} style={{ textAlign: "center" }}>
          <img
            src={`/imgs/${movie.image}`}
            style={{
              width: "80%",
              maxWidth: "320px",
              aspectRatio: "2 / 3",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </Col>

        <Col md={8} style={{ paddingLeft: "30px" }}>
          <h2>{movie.title}</h2>
          <p>
            ⭐{" "}
            {movie.ratings.length === 0
              ? "Sin puntuaciones"
              : `Media: ${MoviesService.calculateAverageRating(movie)}`}
          </p>
          <p><strong>Categoría:</strong> {movie.category}</p>
          <p>{movie.description}</p>
          {auth.isLogged && (
            <>
              <RatingStars
                onRate={addRating}
                initialRating={userRating}
              />
              <AddFavoriteButton onToggle={toggleFavorite} isFavorite={isFavorite} />
            </>
          )}

          {!auth.isLogged && (
            <p style={{ marginTop: "10px", color: "gray" }}>
              Inicia sesión para puntuar, comentar y añadir a favoritos
            </p>
          )}
        </Col>

      </Row>

      <Row style={{ marginTop: "30px" }}>
        <Col>
          <CommentsList comments={movie.comments} />

          {auth.isLogged && (
            <CommentForm onAddComment={addComment} />
          )}
        </Col>
      </Row>

    </Container>

  )
}

export default MovieDetailPage