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

    minWidth: "90%",
    borderRadius: 5,

    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  //* -- Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  logo: {
    fontSize: 20,
    color: Colors.red_900
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.red_900
  },

  //* -- Search bar
  textField: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: Colors.black_900
  },
  fieldStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,

    borderRadius: 5,
    backgroundColor: Colors.black_50
  },
  labelStyle: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: Colors.black_900,

    paddingVertical: 4,
  },
  containerStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,

    borderRadius: 5,
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