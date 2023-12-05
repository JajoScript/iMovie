import { View, Text, Image } from 'react-native-ui-lib';
import { useDeviceStyle } from '@/hooks/styles/'
import { getMovieResponse } from '@/types/api'
import GlobalStyles from './Styles';

interface Props {
  movie: getMovieResponse
}

function Screen(props: Props) {
  // 1. Manejo del estado.
  const { movie } = props;
  const Style = useDeviceStyle(GlobalStyles);

  // 4. Render.
  console.log(movie)
  return (
    <View style={Style.container} useSafeArea>
      <View style={Style.content}>
        <Image source={{ uri: movie.Poster }} style={{ width: 200, height: 200 }} />
        <Text style={Style.title}>{movie.Title}</Text>
        <Text>{movie.Year}</Text>
        <Text>{movie.Plot}</Text>
        <Text>{movie.Actors}</Text>
      </View>
    </View>
  );
}

// 🐶 Exportación.
export default Screen;