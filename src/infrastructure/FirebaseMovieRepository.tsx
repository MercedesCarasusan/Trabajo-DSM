import axios from "axios"
import type { Movie } from "../domain/Movie"
import type { MovieRepository } from "../domain/MovieRepository"

const BASE_URL =
    "https://trabajo-dsm-default-rtdb.europe-west1.firebasedatabase.app"

const FirebaseMovieRepository: MovieRepository = {
    getAll: async (): Promise<Movie[]> => {
        const response = await axios.get(`${BASE_URL}/peliculas.json`)

        if (!response.data) return []

        const movies: Movie[] = []

        for (const key in response.data) {
            const movieData = response.data[key]

            movies.push({
                id: key,
                title: movieData.title,
                description: movieData.description,
                category: movieData.category,
                image: movieData.image,

                // CONVERSIÓN OBJETO → ARRAY
                ratings: movieData.ratings
                    ? Object.values(movieData.ratings)
                    : [],

                comments: movieData.comments
                    ? Object.values(movieData.comments).map((c: any) => ({
                        ...c,
                        date: new Date(c.date),
                    }))
                    : [],
            })
        }

        return movies
    },

    getById: async (id: string): Promise<Movie> => {
        const response = await axios.get(`${BASE_URL}/peliculas/${id}.json`)

        const data = response.data

        if (!data) {
            throw new Error("Movie not found")
        }

        return {
            id,
            title: data.title,
            description: data.description,
            category: data.category,
            image: data.image,

            ratings: data.ratings
                ? Object.values(data.ratings)
                : [],

            comments: data.comments
                ? Object.values(data.comments).map((c: any) => ({
                    ...c,
                    date: new Date(c.date),
                }))
                : [],
        }
    },

    save: async (movie: Movie, token: string): Promise<void> => {
        await axios.post(`${BASE_URL}/peliculas.json?auth=${token}`, movie)
    },

    update: async (id: string, movie: Movie, token: string): Promise<void> => {
        await axios.put(
            `${BASE_URL}/peliculas/${id}.json?auth=${token}`,
            movie
        )
    },
}

export default FirebaseMovieRepository