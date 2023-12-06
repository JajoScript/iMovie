import { View, Text } from 'react-native-ui-lib'
import { FlatList } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDeviceStyle } from '@/hooks'
import { Movie as MovieType } from '@/types/api'
import Movie from '../Movie/Component'
import GlobalStyles from './Styles';

interface Props {
  loading: boolean;
  movies: MovieType[];
  search: string;
}

function Movies(props: Props) {
  // 1. Manejo del estado.
  const { loading, movies, search } = props;
  const Style = useDeviceStyle(GlobalStyles);

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Renderizado.
  // * -- loading state.
  if (loading) {
    return (
      <View style={Style.loading}>
        <MaterialIcons name="local-movies" style={Style.l_logo} />
        <Text style={Style.l_title}>Buscando peliculas...</Text>
      </View>
    )
  }

  // * -- Void movies result state.
  if (movies.length === 0 && search.length >= 3) {
    return (
      <View style={Style.void}>
        <MaterialCommunityIcons name="movie-open-remove" style={Style.v_logo} />
        <Text style={Style.v_title}>{`No se encontraron peliculas :(`}</Text>
      </View>
    )
  }

  if (movies.length === 0 && search.length < 3) {
    return (
      <View style={Style.wait}>
        <MaterialCommunityIcons name='movie-search' style={Style.w_logo} />
        <Text style={Style.w_title}>Esperando a tu busqueda</Text>
      </View>
    )
  }

  // * -- show Movies state.
  return (
    <View style={Style.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Movie movie={item} />}
        keyExtractor={item => item.imdbID}
      />
    </View>
  )
}


// Exportación 🐶.
export default Movies;