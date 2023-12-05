import { View, Text } from "react-native-ui-lib";
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native'
import { useDeviceStyle } from '@/hooks/styles'
import { Movie } from '@/types/api'
import MovieCard from "../MovieCard/MovieCard";
import GlobalStyles from './Styles';

interface Props {
  movies: Movie[]
}

function Movies(props: Props) {
  // 1. Manejo del estado.
  const { movies } = props;
  const Style = useDeviceStyle(GlobalStyles);

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <View style={Style.container}>
      {/* Movies */}
      <FlatList
        data={movies}
        renderItem={(movie) => <MovieCard movie={movie.item} />}
        keyExtractor={(movie) => movie.imdbID}

        style={Style.list}
        contentContainerStyle={Style.listContent}
        horizontal={false}
      />

      {/* Page Control */}
      <Text>Page control</Text>
    </View>
  );
}

export default Movies;