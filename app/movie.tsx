import { View, Text } from 'react-native-ui-lib'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react';
import MovieScreen from '@/screens/Movie/Screen'
import NotFoundScreen from '@/screens/Movie/NotFound';
import { getMovieById } from '@/api/'
import { GetMovieById } from '@/types/api'

interface Props { }

function MovieContainer(props: Props) {
  // 1. Manejo del estado.
  const params = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<GetMovieById | null>(null);

  // 2. Ciclo de vida.
  useEffect(() => {
    if (!params.movieId) return;

    // Busqueda de la pelicula mediante su ID.
    setLoading(true);
    const movieId: string = `${params.movieId}`;
    getMovieById(movieId)
      .then((res: GetMovieById) => {
        setLoading(false);
        setMovie(res);
      })
      .catch((err) => {
        setMovie(null);
        setLoading(false);
      })
  }, [params])

  // 3. Metodos.
  // 4. Renderizado.
  if (!movie && !loading) {
    return <NotFoundScreen />;
  }

  return <MovieScreen movie={movie} />;
}


// Exportación 🐶.
export default MovieContainer;