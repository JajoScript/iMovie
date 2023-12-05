import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "60%"
  },

  listContent: {
    paddingVertical: 5,
    paddingHorizontal: 5,

    rowGap: 10,

    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.white_800,
    borderStyle: "dashed"
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