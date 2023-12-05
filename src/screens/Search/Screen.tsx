import { View, Text, TextField, PageControl } from 'react-native-ui-lib';
import { useState, useEffect } from 'react'
import { useDeviceStyle } from '@/hooks/styles/'
import { Movies } from './components/'
import { APIResponse, Movie } from '@/types/api'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/styles/colors'
import GlobalStyles from './Styles';

interface Props { }

function Screen(props: Props) {
  // 1. Manejo del estado.
  const Style = useDeviceStyle(GlobalStyles);
  const [search, setSearch] = useState("");

  // 2. Ciclo de vida.
  useEffect(() => { }, [search])

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
        <Movies />
      </View>
    </View>
  );
}

// 🐶 Exportación.
export default Screen;

/*
function Screen(props: Props) {
  // 1. Manejo del estado.
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const Style = useDeviceStyle(GlobalStyles);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  // 2. Ciclo de vida.
  useEffect(() => {
    const searchMovies = async () => {
      const result: APIResponse = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
        .then((response) => response.json())
        .catch((error) => {
          console.error("🐶 error: ", error)
        })

      console.log("🐶 result: ", result)
      return result;
    }

    // Validación de la consulta para limitar las consultas innecesarias.
    if (search.length >= 3) {
      // FETCH MOVIE SEARCH
      searchMovies().then((result) => {
        setTotal(result.totalResults);
        setMovies(result.Search);
      })
    } else {
      setTotal(0);
      setMovies([]);
    }
  }, [search])

  // 3. Metodos.
  const mappingMovies = () => {
    if (movies.length === 0) {
      return null;
    }

    return movies.map((movie: Movie) => {
      return (
        <MovieCard key={movie.imdbID} />
      );
    });
  }

  return (
    <View style={Style.container} useSafeArea>
      
      <Text style={Style.title}>iMovies</Text>
      <TextField
        value={search}
        placeholder="Nombre de la película..."

        onChangeText={setSearch}
        fieldStyle={Style.fieldStyle}
      />

      
      {search.length >= 3 && <Text>Buscando: {search}</Text>}
      {search.length >= 3 && <Text>Resultados: {total}</Text>}
      {mappingMovies()}
    </View>
  );
}
*/