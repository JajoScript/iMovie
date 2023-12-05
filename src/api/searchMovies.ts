import { searchMoviesResponse, Movie } from '@/types/api'

async function searchMovies(search: string) {
  return new Promise<searchMoviesResponse>(async (resolve, reject) => {
    try {
      const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
      const API_URL = process.env.EXPO_PUBLIC_API_URL;

      const response: searchMoviesResponse = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
        .then((response) => response.json())
        .catch((err) => {
          console.log("Error", err);
          throw new Error(err);
        })

      return resolve(response);
    } catch (err) {
      return reject(err);
    };
  });
};

// Exportación 🐶.
export default searchMovies;