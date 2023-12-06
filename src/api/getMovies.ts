import { GetMovies } from '@/types/api/';
import { APIError } from '@/errors/api';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

async function getMovies(search: string) {
  return new Promise<GetMovies>(async (resolve, reject) => {
    try {
      // Conseguir las peliculas mediante los parametros de busqueda.
      const response: GetMovies = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
          throw new APIError("Error al obtener las películas");
        });

      if (response.Response === "False") {
        throw new APIError("Error al obtener las películas");
      }

      return resolve(response);
    } catch (err) {
      return reject(err);
    };
  });
};


// Exportación 🐶.
export default getMovies;