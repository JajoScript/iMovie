import { View, Text } from 'react-native-ui-lib';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDeviceStyle } from '@/hooks'
import GlobalStyle from './Styles';

interface Props { };

function Screen(props: Props) {
  // 1. Manejo del estado.
  const Style = useDeviceStyle(GlobalStyle);

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Renderizado.
  return (
    <View style={Style.notFound} useSafeArea>
      <MaterialCommunityIcons name="movie-open-off" style={Style.nf_logo} />
      <Text style={Style.nf_title}>404</Text>
      <Text style={Style.nf_subtitle}>Pelicula not found</Text>
    </View>
  );
}


// Exportación 🐶.
export default Screen;