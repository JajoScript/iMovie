import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  //* -- Movie Screen
  scroll: {
    flex: 1,

    marginVertical: 10,
  },
  container: {
    flex: 1,

    backgroundColor: Colors.black_900,
  },

  fav: {
    width: 40,
    height: 40,

    borderRadius: 50,

    position: "absolute",
    right: 20,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 2,
  },
  star: {},

  image: {
    height: 200,
    width: '100%',

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 10,
  },
  poster: {
    height: "100%",
    width: 150,

    resizeMode: "cover",
  },
  missing: {
    height: 200,
    width: 150,
    backgroundColor: Colors.white_100,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "relative",
  },
  m_logo: {
    fontSize: 45,
    color: Colors.black_900,
    opacity: 0.5,
  },
  m_btn: {
    position: "absolute",

    bottom: -15,
  },

  info: {
    marginVertical: 10,
    marginHorizontal: 10,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  i_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: Colors.white_900
  },
  i_year: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    color: Colors.white_900
  },

  desc: {
    flex: 0.9,

    marginVertical: 5,
    marginHorizontal: 10,

    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  plot: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textAlign: "justify",
    color: Colors.white_900
  },

  //* -- NOT FOUND SCREEN
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.black_900
  },
  nf_logo: {
    fontSize: 30,
    color: Colors.white_200,
  },
  nf_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    color: Colors.white_200,
  },
  nf_subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 25,
    color: Colors.white_200,
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