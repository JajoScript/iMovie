import { View, Text } from 'react-native-ui-lib';
import { useDeviceStyle } from '@/hooks/styles/'
import GlobalStyles from './Styles';

interface Props { }

function Screen(props: Props) {
  // 1. Manejo del estado.
  const Style = useDeviceStyle(GlobalStyles);

  return (
    <View style={Style.container} useSafeArea>
      <Text style={Style.title}>Más info de la peli!</Text>
    </View>
  );
}

// 🐶 Exportación.
export default Screen;