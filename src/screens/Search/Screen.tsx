import { View, Text, TextField } from 'react-native-ui-lib';
import { useState, useEffect } from 'react'
import { useDeviceStyle } from '@/hooks/styles/'
import { Movies } from './components/'
import { searchMovies } from '@/api/'
import { searchMoviesResponse, Movie } from '@/types/api'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/styles/colors'
import GlobalStyles from './Styles';

interface Props { }

function Screen(props: Props) {
  // 1. Manejo del estado.
  const Style = useDeviceStyle(GlobalStyles);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  // 2. Ciclo de vida.
  useEffect(() => {
    // Filtro para buscar películas.
    if (search.length < 3) {
      return;
    }

    // Busqueda de las películas.
    searchMovies(search)
      .then((result: searchMoviesResponse) => {
        // console.log("🐶 result: ", result)
        setMovies(result.Search)
      })
      .catch((error) => { })

  }, [search])

  // 3. Metodos.
  // 4. Renderizado.
  return (
    <View style={Style.container} useSafeArea>
      <View style={Style.content}>
        {/* Header */}
        <View style={Style.header}>
          <MaterialCommunityIcons name="movie-open" style={Style.logo} />
          <Text style={Style.title}>iMovies</Text>
        </View>

        {/* Search */}
        <TextField
          label="Buscar"

          value={search}
          onChangeText={setSearch}

          style={Style.textField}
          fieldStyle={Style.fieldStyle}
          labelStyle={Style.labelStyle}
          containerStyle={Style.containerStyle}
          placeholderTextColor={Colors.white_100}

          placeholder='Pulp Fiction'
          floatingPlaceholder={false}
        />

        {/* Results */}
        {search.length >= 3 && <Movies movies={movies} />}
      </View>
    </View>
  );
}

// 🐶 Exportación.
export default Screen;
