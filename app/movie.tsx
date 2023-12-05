import Screen from '@/screens/Movie/Screen'
import { useLocalSearchParams } from 'expo-router'
import { getMovieById } from '@/api'
import { getMovieResponse } from '@/types/api'
import { useState, useEffect } from 'react'

interface Props { }

function MovieContainer(props: Props) {
  // 1. Manejo del estado.
  const { movieId } = useLocalSearchParams()
  const [loading, setLoading] = useState(true);
  const [movie, setmovie] = useState<getMovieResponse>()

  // 2. Ciclo de vida.
  useEffect(() => {
    if (!movieId) {
      return
    }

    // Buscar la información de la pelicula.
    let searchId = `${movieId}`
    getMovieById(searchId)
      .then((response: getMovieResponse) => {
        console.log(response)

        setLoading(false)
        setmovie(response)
      })
      .catch(() => { })
  }, [movieId])

  // 3. Metodos.
  // 4. Renderizado.
  if (!movieId || !movie || loading) {
    return null
  }

  return <Screen movie={movie} />
}

// 🐶 Exportación.
export default MovieContainer;