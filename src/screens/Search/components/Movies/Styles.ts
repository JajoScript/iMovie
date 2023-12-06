import { StyleSheet } from 'react-native'
import Colors from '@/styles/colors'

//* -- Estilo General.
const global = StyleSheet.create({
  //* -- Loading state.
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  l_logo: {
    fontSize: 40,
    color: Colors.white_100,
  },
  l_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white_100,
    marginTop: 10
  },

  //* -- Void Movie State.
  void: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  v_logo: {
    fontSize: 40,
    color: Colors.white_100,
  },
  v_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white_100,
    marginTop: 10,
    textAlign: "center",
    width: "90%"
  },

  //* -- Wait state.
  wait: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  w_logo: {
    fontSize: 40,
    color: Colors.white_100,
  },
  w_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white_100,
    marginTop: 10,
    textAlign: "center",
    width: "90%"
  },

  //* -- Movies state.
  container: {
    flex: 1,
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