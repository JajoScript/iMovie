interface Movie {
  Poster: string,
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface GetMovies {
  Search: Movie[];
  totalResults: number;
  Response: string;
}


// Exportación 🐶.
export type {
  GetMovies,
  Movie
}