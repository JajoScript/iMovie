import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDeviceStyle } from '@/hooks/'
import GlobalStyles from './Styles'

interface Props {
  onPress?: () => void;
  isFav: boolean;
}

function ButtonFav(props: Props) {
  // 1. Manejo del estado.
  const { onPress, isFav } = props;
  const Style = useDeviceStyle(GlobalStyles);

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Renderizado.
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isFav ? Style.disabled : Style.container}
      disabled={isFav}>
      <AntDesign
        name={isFav ? "star" : "staro"}
        style={isFav ? Style.d_icon : Style.icon} />
    </TouchableOpacity>
  )
};


// Exportación 🐶.
export default ButtonFav;