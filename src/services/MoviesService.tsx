import type { Movie } from "../domain/Movie"
import type { Rating } from "../domain/Rating"
import type { Comment } from "../domain/Comment"
import type { MovieRepository } from "../domain/MovieRepository"
import { Repository } from "../infrastructure/Repository"

const MoviesService = (repository: MovieRepository) => {

  return {

    getAllMovies: async (): Promise<Movie[]> => {
      return await repository.getAll()
    },

    getMovieById: async (id: string): Promise<Movie> => {
      return await repository.getById(id)
    },

    calculateAverageRating: (movie: Movie): number => {
      if (movie.ratings.length === 0) return 0

      const sum = movie.ratings.reduce(
        (acc, r) => acc + r.value,
        0
      )

      return Number((sum / movie.ratings.length).toFixed(2))
    },

    addRating: async (
      movie: Movie,
      rating: Rating,
      token: string
    ): Promise<void> => {

      const existing = movie.ratings.find(
        (r) => r.userId === rating.userId
      )

      let updatedRatings: Rating[]

      if (existing) {
        updatedRatings = movie.ratings.map(r =>
          r.userId === rating.userId ? rating : r
        )
      } else {
        updatedRatings = [...movie.ratings, rating]
      }

      const updatedMovie: Movie = {
        ...movie,
        ratings: updatedRatings,
      }

      await repository.update(movie.id, updatedMovie, token)
    },

    addComment: async (
      movie: Movie,
      comment: Comment,
      token: string
    ): Promise<void> => {

      const updatedMovie: Movie = {
        ...movie,
        comments: [...movie.comments, comment],
      }

      await repository.update(movie.id, updatedMovie, token)
    },

  }
}

export default MoviesService(Repository)