import type { Movie } from "./Movie"

export interface MovieRepository {
  getAll(): Promise<Movie[]>
  getById(id: string): Promise<Movie>
  save(movie: Movie, token: string): Promise<void>
  update(id: string, movie: Movie, token: string): Promise<void>
  addFavorite(userId: string, movieId: string, token: string): Promise<void>
  getFavorites(userId: string): Promise<string[]>
  removeFavorite(userId: string, movieId: string, token: string): Promise<void>
}