import { GetMovieById } from '@/types/api'

interface FavStore {
  favMovies: GetMovieById[],

  addFavMovie: (movieId: GetMovieById) => void,
}


// Exportación 🐶.
export type { FavStore };