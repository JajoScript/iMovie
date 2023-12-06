import { View, Text } from 'react-native-ui-lib'
import { useDeviceStyle } from "@/hooks"
import { useFavStore, FavStore } from '@/zustand'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Movies } from './components'
import GlobalStyle from './Styles'

interface Props { };

function Screen(props: Props) {
  // 1. Manejo del estado.
  const state: FavStore = useFavStore();
  const Style = useDeviceStyle(GlobalStyle)

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Renderizado.
  return (
    <View style={Style.container} useSafeArea>
      {/* Header banner */}
      <View style={Style.header}>
        <MaterialCommunityIcons name="movie-open-star" style={Style.icon} />
        <Text style={Style.title}>Mis Favoritas</Text>
      </View>

      {/* Movie list */}
      <View style={Style.movies}>
        <Movies />
      </View>
    </View>
  )
}


// Exportación 🐶.
export default Screen;