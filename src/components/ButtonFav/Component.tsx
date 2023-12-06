import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDeviceStyle } from '@/hooks/'
import GlobalStyles from './Styles'

interface Props {
  onPress?: () => void;
}

function ButtonFav(props: Props) {
  // 1. Manejo del estado.
  const { onPress } = props;
  const Style = useDeviceStyle(GlobalStyles);

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Renderizado.
  return (
    <TouchableOpacity onPress={onPress} style={Style.container}>
      <MaterialCommunityIcons name="movie-open-star" style={Style.icon} />
    </TouchableOpacity>
  )
};


// Exportación 🐶.
export default ButtonFav;