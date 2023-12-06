interface FavStore {
  favMovies: string[],

  addFavMovie: (movieId: string) => void,
}


// Exportación 🐶.
export type { FavStore };