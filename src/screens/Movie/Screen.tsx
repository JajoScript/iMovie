import { View, Text, Image } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ButtonFav } from '@/components/';
import { useDeviceStyle } from '@/hooks';
import { GetMovieById } from '@/types/api';
import { useFavStore, FavStore } from '@/zustand';
import GlobalStyle from './Styles';

interface Props {
  movie: GetMovieById | null
};

function Screen(props: Props) {
  // 1. Manejo del estado.
  const { movie } = props;
  const Style = useDeviceStyle(GlobalStyle);
  const navigation = useNavigation();
  const state: FavStore = useFavStore();

  // 2. Ciclo de vida.
  useEffect(() => {
    if (!movie) return;

    navigation.setOptions({ title: movie.Title });
  }, [movie])

  // 3. Metodos.
  const handleFav = () => {
    if (!movie) return;

    state.addFavMovie(movie.imdbID);
  };

  const renderImage = () => {
    if (movie?.Poster !== 'N/A') {
      return (
        <View style={Style.missing}>
          <Image source={{ uri: movie?.Poster }} style={Style.poster} />

          <View style={Style.m_btn} >
            <ButtonFav onPress={handleFav} />
          </View>
        </View>
      );
    }

    return (
      <View style={Style.missing}>
        <MaterialCommunityIcons name="movie-roll" style={Style.m_logo} />

        <View style={Style.m_btn} >
          <ButtonFav onPress={handleFav} />
        </View>
      </View>
    )
  };


  // 4. Renderizado.
  return (
    <View style={Style.container} useSafeArea>
      <ScrollView style={Style.scroll}>
        {/* Poster */}
        <View style={Style.image}>
          {renderImage()}
        </View>

        {/* Basic Info */}
        <View style={Style.info}>
          <Text style={Style.i_title}>{movie?.Title}</Text>
          <Text style={Style.i_year}>{movie?.Year}</Text>
        </View>

        {/* Plot */}
        <View style={Style.desc}>
          <Text style={Style.plot}>{movie?.Plot}</Text>
        </View>
      </ScrollView>

    </View>
  );
}


// Exportación 🐶.
export default Screen;