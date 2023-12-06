import { View, Text } from 'react-native-ui-lib'
import { useFavStore, FavStore } from '@/zustand'

interface Props { };

function Screen(props: Props) {
  // 1. Manejo del estado.
  const state: FavStore = useFavStore();
  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Renderizado.
  console.log(state);
  return (
    <View>
      <Text>Mis favotiras</Text>
      {state.favMovies.map((movieId: string, index: number) => {
        return <Text key={index}>{movieId}</Text>
      })}
    </View>
  )
}


// Exportación 🐶.
export default Screen;