import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react';
import search from '@/screens/Search/options'
import movie from '@/screens/Movie/options'
import favorites from '@/screens/Favorites/options'

interface Props { }

//@dev-note: Para evitar que la pantalla de splash se oculte automaticamente.
SplashScreen.preventAutoHideAsync();

function Layout(props: Props) {
  // 1. Manejo del estado.
  const [isFontLoaded] = useFonts({
    "Poppins-Light": require("@/assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  const [loading, setLoading] = useState(true);

  // 2. Ciclo de vida.
  useEffect(() => {
    if (isFontLoaded) {
      SplashScreen.hideAsync();
      setLoading(false);
    }
  }, [isFontLoaded])


  // 3. Metodos.
  // 4. Renderizado.
  if (loading) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={search} />
      <Stack.Screen name="movie" options={movie} />
      <Stack.Screen name="favorites" options={favorites} />
    </Stack>
  )
}


// Exportación 🐶.
export default Layout;