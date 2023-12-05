interface Movie {
  Poster: string,
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface APIResponse {
  Search: Movie[];
  totalResults: number;
  Response: string;
}

// Exportación 🐶.
export type {
  APIResponse,
  Movie
}