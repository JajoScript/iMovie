import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useState, useEffect } from 'react'
import favorite from '@/screens/Favorites/options'
import movie from '@/screens/Movie/options'
import search from '@/screens/Search/options'


interface Props { }

function Layout(props: Props) {
  // 1. Manejo del estado.
  const [isFontLoaded] = useFonts({
    "Poppins-Light": require("@/assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins/Poppins-Bold.ttf"),
  })
  const [loading, setLoading] = useState(true);

  // 2. Ciclo de vida.
  useEffect(() => {
    if (isFontLoaded) {
      SplashScreen.hideAsync();
      setLoading(false);
    }
  }, [isFontLoaded])

  // 4. Renderizado.
  if (loading) {
    return null;
  }

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