import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.black_900,
  },

  header: {
    flex: 0.1,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    columnGap: 10,
  },
  icon: {
    fontSize: 30,
    color: Colors.red_900
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: Colors.red_900
  },

  movies: {
    flex: 1,

    marginVertical: 5,
    marginHorizontal: 10,

    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.black_500
  },
})

//* -- Estilo iOS.
const ios = StyleSheet.create({
  ...global
});

//* -- Estilo Android.
const android = StyleSheet.create({
  ...global
});

const styles = {
  ios,
  android
}


// 🐶 Exportación.
export default styles;