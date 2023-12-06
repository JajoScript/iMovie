import { View, Text, Button, TextField } from 'react-native-ui-lib'
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router'
import { useDeviceStyle } from '@/hooks'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getMovies } from '@/api'
import { GetMovies, Movie } from '@/types/api'
import { Movies } from './components'
import Colors from '@/styles/colors'
import GlobalStyles from './Styles';

interface Props { };

function Screen(props: Props) {
  // 1. Manejo del estado.
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false);
  const Style = useDeviceStyle(GlobalStyles);
  const router = useRouter();

  // 2. Ciclo de vida.
  useEffect(() => {
    if (search.length < 3) {
      setMovies([]);
      return
    };

    setLoading(true);
    getMovies(search)
      .then((res: GetMovies) => {
        setMovies(res.Search);
        setLoading(false);
      })
      .catch((err) => {
        setMovies([]);
        setLoading(false);
      })
  }, [search])

  // 3. Metodos.
  const goToFavorite = () => {
    return router.push({
      pathname: "favorites",
      params: {}
    })
  }

  // 4. Renderizado.
  return (
    <View useSafeArea style={Style.container}>
      {/* Hader & search */}
      <View style={Style.header}>
        {/* Banner logo */}
        <View style={Style.bannerLogo}>
          <MaterialCommunityIcons name='movie-open' style={Style.bl_logo} />
          <Text style={Style.bl_title}>iMovies</Text>
        </View>

        {/* Banner favorites */}
        <View style={Style.bannerFav}>
          <Text style={Style.bf_title}>Mis favoritas</Text>
          <Text style={Style.bf_subtitle}>Solo para ti! Guardamos especialmente tu impresionante gusto por las peliculas.</Text>
          <Button
            label='Ver mis favoritas'
            onPress={goToFavorite}
            style={Style.bf_btn}
            labelStyle={Style.bf_btn_label}
            size='xSmall'
          />
        </View>

        {/* Search bar */}
        <View style={Style.searchBar}>
          <TextField
            value={search}
            label='Buscar pelicula'
            placeholder='Pulp Fiction'
            onChangeText={setSearch}

            style={Style.sb_textField}
            fieldStyle={Style.sb_fieldStyle}
            labelStyle={Style.sb_labelStyle}
            placeholderTextColor={Colors.black_50}

            multiline={false}
            floatingPlaceholder={false}
          />
        </View>
      </View>

      {/* Movies */}
      <View style={Style.body}>
        <Movies loading={loading} movies={movies} search={search} />
      </View>
    </View>
  );
}


// Exportación 🐶.
export default Screen;