import { View, Text } from 'react-native-ui-lib';
import Screen from '@/screens/Search/Screen'

interface Props { }

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
function SearchContainer(props: Props) {
  // 1. Manejo del estado.
  return <Screen />
}

// 🐶 Exportación.
export default SearchContainer;