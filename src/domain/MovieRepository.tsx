import type { Movie } from "./Movie"

export interface MovieRepository {
  getAll(): Promise<Movie[]>
  getById(id: string): Promise<Movie>
  save(movie: Movie, token: string): Promise<void>
  update(id: string, movie: Movie, token: string): Promise<void>
}