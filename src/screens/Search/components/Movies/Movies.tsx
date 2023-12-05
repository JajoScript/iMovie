import { View, Text } from "react-native-ui-lib";
import { ScrollView } from 'react-native'
import { useDeviceStyle } from '@/hooks/styles'
import GlobalStyles from './Styles';

interface Props { }

function Movies(props: Props) {
  // 1. Manejo del estado.
  const Style = useDeviceStyle(GlobalStyles);

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <View style={Style.container}>
      {/* Movies */}

      {/* Page Control */}
      <Text>Page control</Text>
    </View>
  );
}

export default Movies;