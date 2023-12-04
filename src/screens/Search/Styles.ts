import { StyleSheet } from 'react-native'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",

    color: "black"
  },

  //* -- Search bar.
  fieldStyle: {
    backgroundColor: "gray",

    paddingVertical: 5,
    paddingHorizontal: 10,

    borderRadius: 5,
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