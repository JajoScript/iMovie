import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.black_900
  },
  content: {
    backgroundColor: Colors.white_900,

    width: "90%",
    minHeight: "20%",
    maxHeight: "90%",

    borderRadius: 5,

    paddingVertical: 5,
    paddingHorizontal: 10,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  //* -- Info
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
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