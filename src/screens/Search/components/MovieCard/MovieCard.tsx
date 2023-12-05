import { View, Text } from 'react-native-ui-lib'
import { Pressable, Image } from 'react-native'
import { useRouter } from 'expo-router'
import { useState, useEffect } from 'react'
import { useDeviceStyle } from '@/hooks/styles/'
import { Movie } from '@/types/api'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlobalStyles from './Styles';

interface Props {
  movie: Movie
}

function MovieCard(props: Props) {
  // 1. Manejo del estado.
  const { movie } = props;
  const [hasImage, setHasImage] = useState(movie.Poster !== "N/A");
  const Style = useDeviceStyle(GlobalStyles);
  const router = useRouter();

  // 3. Metodos
  const mappingImage = () => {
    if (hasImage) {
      return (
        <Image source={{ uri: movie.Poster }} style={Style.image} />
      )
    }

    return (
      <View style={Style.image}>
        <MaterialCommunityIcons name="movie-roll" style={Style.icon} />
      </View>
    )
  }

  const goToMovieDetail = () => {
    return router.push({
      params: {
        movieId: movie.imdbID,
      },
      pathname: "movie"
    })
  }

  // 4. Render.
  return (
    <Pressable style={Style.container} onPress={goToMovieDetail}>
      {/* Image cover */}
      <View style={Style.imageCover}>
        {mappingImage()}
      </View>

      {/* Info */}
      <View style={Style.info}>
        <Text style={Style.title}>{movie.Title}</Text>
        <Text style={Style.year}>{movie.Year}</Text>
      </View>
    </Pressable>
  );
}

// Exportación 🐶.
export default MovieCard;