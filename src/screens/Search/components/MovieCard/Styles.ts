import { StyleSheet } from 'react-native'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    backgroundColor: "brown",

    paddingVertical: 5,
    paddingHorizontal: 10,
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