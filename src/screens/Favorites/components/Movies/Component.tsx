import { View, Text } from 'react-native-ui-lib';
import { FlatList } from 'react-native';
import { useDeviceStyle } from '@/hooks'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Movie from '../Movie/Component'
import { useFavStore, FavStore } from '@/zustand'
import GlobalStyles from './Styles';

interface Props { }

function Movies(props: Props) {
  // 1. Manejo del estado.
  const state: FavStore = useFavStore();
  const Style = useDeviceStyle(GlobalStyles);
  const { favMovies } = state;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Renderizado.
  // * -- Void movies result state.
  if (favMovies.length === 0) {
    return (
      <View style={Style.void}>
        <MaterialCommunityIcons name="movie-open-remove" style={Style.v_logo} />
        <Text style={Style.v_title}>{`Aún no agregas peliculas a favoritos`}</Text>
      </View>
    )
  }

  // * -- show Movies state.
  return (
    <View style={Style.container}>
      <FlatList
        data={favMovies}
        renderItem={({ item }) => <Movie movie={item} />}
        keyExtractor={item => item.imdbID}
      />
    </View>
  )
}


// Exportación 🐶.
export default Movies;