import { View, Text, TextField } from 'react-native-ui-lib';
import { useState, useEffect } from 'react'
import { useDeviceStyle } from '@/hooks/styles/'
import { MovieCard } from './components/'
import GlobalStyles from './Styles';

interface Movie {
  Poster: string,
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface APIResponse {
  Search: Movie[];
  totalResults: number;
  Response: string;
}

interface Props { }

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
      {/* Buscador. */}
      <Text style={Style.title}>iMovies</Text>
      <TextField
        value={search}
        placeholder="Nombre de la película..."

        onChangeText={setSearch}
        fieldStyle={Style.fieldStyle}
      />

      {/* Resultados. */}
      {search.length >= 3 && <Text>Buscando: {search}</Text>}
      {search.length >= 3 && <Text>Resultados: {total}</Text>}
      {mappingMovies()}
    </View>
  );
}

// 🐶 Exportación.
export default Screen;