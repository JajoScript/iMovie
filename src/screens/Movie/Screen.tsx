import { View, Text, Image } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { ButtonFav } from '@/components/';
import { useDeviceStyle, useIsFavMovie } from '@/hooks';
import { GetMovieById, Movie } from '@/types/api';
import { useFavStore, FavStore } from '@/zustand';
import GlobalStyle from './Styles';

interface Props {
  movie: GetMovieById | null
};

function Screen(props: Props) {
  // 1. Manejo del estado.
  const { movie } = props;
  const Style = useDeviceStyle(GlobalStyle);
  const isFav = useIsFavMovie(movie?.imdbID || '');
  const navigation = useNavigation();
  const state: FavStore = useFavStore();

  // 2. Ciclo de vida.
  useEffect(() => {
    if (!movie) return;

    navigation.setOptions({ title: movie.Title });
  }, [movie])

  // 3. Metodos.
  console.log("state", state)
  const handleFav = () => {
    if (!movie) return;

    // Adapter.
    state.addFavMovie(movie);
  };

  const renderImage = () => {
    if (movie?.Poster !== 'N/A') {
      return (
        <View style={Style.missing}>
          <Image source={{ uri: movie?.Poster }} style={Style.poster} />
        </View>
      );
    }

    return (
      <View style={Style.missing}>
        <MaterialCommunityIcons name="movie-roll" style={Style.m_logo} />
      </View>
    )
  };

  const renderFavorite = () => {
    return (
      <ButtonFav
        onPress={handleFav}
        isFav={isFav}
      />
    )
  }

  // 4. Renderizado.
  return (
    <View style={Style.container} useSafeArea>
      <ScrollView style={Style.scroll}>
        {/* Favorite */}
        <View style={Style.fav}>
          {renderFavorite()}
        </View>

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