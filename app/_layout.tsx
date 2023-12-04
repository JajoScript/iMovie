import { Stack } from 'expo-router'
import favorite from '@/screens/Favorites/options'
import movie from '@/screens/Movie/options'
import search from '@/screens/Search/options'


interface Props { }

function Layout(props: Props) {
  return (
    <Stack>
      <Stack.Screen name="index" options={search} />
      <Stack.Screen name="movie" options={movie} />
      <Stack.Screen name="favorites" options={favorite} />
    </Stack>
  );
}

// Exportación 🐶.
export default Layout;