import { getMovieResponse } from '@/types/api'

async function getMovieById(movieId: string) {
  return new Promise<getMovieResponse>(async (resolve, reject) => {
    try {
      const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
      const API_URL = process.env.EXPO_PUBLIC_API_URL;

      const response: getMovieResponse = await fetch(`${API_URL}?apikey=${API_KEY}&i=${movieId}&plot=full`)
        .then((response) => response.json())
        .catch((err) => {
          console.log("Error", err);
          throw new Error(err);
        })

      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
};

export default getMovieById;