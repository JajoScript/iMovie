import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    width: 35,
    height: 35,

    backgroundColor: Colors.red_900,
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: Colors.white_900
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