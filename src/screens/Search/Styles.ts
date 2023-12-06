import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    backgroundColor: Colors.black_900,

    flex: 1,
  },

  //* -- Header.
  header: {
    flex: 0.3,
  },

  bannerLogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,

    paddingVertical: 5
  },
  bl_logo: {
    fontSize: 30,
    color: Colors.red_800
  },
  bl_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: Colors.white_900,
  },

  bannerFav: {
    marginVertical: 5,
    marginHorizontal: 10,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    rowGap: 5,

    backgroundColor: Colors.white_50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bf_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: Colors.black_900,
  },
  bf_subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: Colors.black_900,

    textAlign: "left",
  },
  bf_btn: {
    backgroundColor: Colors.red_800,
    marginVertical: 5,
  },
  bf_btn_label: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: Colors.black_700,
  },

  searchBar: {
    marginVertical: 5,
    marginHorizontal: 10,

    // backgroundColor: "red"
  },
  sb_textField: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: Colors.black_900,
  },
  sb_fieldStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,

    borderRadius: 5,
    backgroundColor: Colors.white_900,
  },
  sb_labelStyle: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: Colors.white_900,
    textAlign: "left",
  },

  //* -- Body.
  body: {
    flex: 0.7,

    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.black_100,

    marginVertical: 10,
    marginHorizontal: 10,
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