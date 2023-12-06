import { GetMovieById } from '@/types/api/';
import { APIError } from '@/errors/api';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

async function getMovieById(movieId: string) {
  return new Promise<GetMovieById>(async (resolve, reject) => {
    try {
      // Conseguir la pelicula mediante su ID.
      const response: GetMovieById = await fetch(`${API_URL}?apikey=${API_KEY}&i=${movieId}&plot=full`)
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
          throw new APIError("Error al obtener la película mediante su ID");
        });

      return resolve(response);
    } catch (err) {
      console.error(err);
      return reject(err);
    }
  })
}


// Exportación 🐶.
export default getMovieById;