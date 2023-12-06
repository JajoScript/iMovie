import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white_800,
    borderRadius: 5,

    marginVertical: 5,
    marginHorizontal: 5,

    height: 100,

    display: "flex",
    flexDirection: "row",
    columnGap: 10,
  },

  image: {
    flex: 0.3,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Colors.white_100,

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  missing: {
    fontSize: 35,
    color: Colors.black_900,
  },
  poster: {
    height: 100,
    width: "100%",
    resizeMode: "cover",

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  info: {
    flex: 0.8,
    paddingVertical: 10,
  },
  i_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    textAlign: "left",
  },
  i_year: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    textAlign: "left",
  },
  i_type: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    textAlign: "left",
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