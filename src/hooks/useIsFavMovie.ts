import { FavStore, useFavStore } from '@/zustand/'
import { useState, useEffect } from 'react'

function useIsFavMovie(imdbId: string) {
  // 1. Manejo del estado.
  const [isFavMovie, setIsFavMovie] = useState(false);
  const state: FavStore = useFavStore();

  // 2. Ciclo de vida.
  useEffect(() => {
    if (!imdbId) return;

    const movie = state.favMovies.find((movie) => movie.imdbID === imdbId)
    setIsFavMovie(movie ? true : false);
  }, [imdbId, state]);

  // 3. Metodos.
  // 4. Resultados.
  return isFavMovie;
};

export default useIsFavMovie;