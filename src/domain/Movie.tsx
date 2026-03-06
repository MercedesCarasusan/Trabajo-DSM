import type { Rating } from "./Rating"
import type { Comment } from "./Comment"

export interface Movie {
  id: string
  title: string
  description: string
  category: string
  image: string
  ratings: Rating[]
  comments: Comment[]
}