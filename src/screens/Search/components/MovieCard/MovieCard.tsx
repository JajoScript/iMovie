import { View, Text } from 'react-native-ui-lib'
import { Pressable } from 'react-native'
import { useDeviceStyle } from '@/hooks/styles/'
import GlobalStyles from './Styles';

interface Props { }

function MovieCard(props: Props) {
  // 1. Manejo del estado.
  const Style = useDeviceStyle(GlobalStyles);

  // 4. Render.
  return (
    <Pressable style={Style.container} onPress={() => console.log("!CLicK")}>
      <Text>Movie 🎥</Text>
    </Pressable>
  );
}

// Exportación 🐶.
export default MovieCard;