import { View, Text, Image } from 'react-native-ui-lib';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { useDeviceStyle } from '@/hooks'
import { GetMovieById } from '@/types/api';
import { useRouter } from 'expo-router'
import GlobalStyles from './Styles';

interface Props {
  movie: GetMovieById;
}

function Movie(props: Props) {
  // 1. Manejo del estado.
  const { movie } = props;
  const Style = useDeviceStyle(GlobalStyles);
  const router = useRouter();

  // 2. Ciclo de vida.
  // 3. Metodos.
  const goToMovie = () => {
    router.push({
      pathname: "movie",
      params: {
        movieId: movie.imdbID
      }
    })
  }

  const renderImage = () => {
    if (!movie.Poster || movie.Poster === "N/A") {
      return (
        <MaterialCommunityIcons name="movie-roll" style={Style.missing} />
      )
    }

    return (
      <Image
        source={{ uri: movie.Poster }}
        style={Style.poster}
      />
    )
  }

  // 4. Renderizado.
  return (
    <TouchableOpacity style={Style.container} onPress={goToMovie}>
      {/* Image */}
      <View style={Style.image}>
        {renderImage()}
      </View>

      {/* Info */}
      <View style={Style.info}>
        <Text style={Style.i_title}>{movie.Title}</Text>
        <Text style={Style.i_year}>{movie.Year}</Text>

        {/* Acortar el plot... */}
        <Text style={Style.i_type}>{movie.Plot.slice(0, 100) + "..."}</Text>
      </View>
    </TouchableOpacity>
  )
}


// Exportación 🐶.
export default Movie;