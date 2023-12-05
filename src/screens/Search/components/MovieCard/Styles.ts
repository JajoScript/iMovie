import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    backgroundColor: Colors.white_800,
    borderRadius: 5,

    width: "100%",

    display: "flex",
    flexDirection: "row",
    columnGap: 10,
  },

  //* -- Image cover
  imageCover: {
    flex: 0.2,

    maxHeight: 100,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  icon: {
    fontSize: 30,
    color: Colors.black_300
  },

  //* -- Info
  info: {
    flex: 0.8,

    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: Colors.black_900
  },
  year: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: Colors.black_900
  }
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