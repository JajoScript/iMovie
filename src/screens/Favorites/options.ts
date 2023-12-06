import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Colors from '@/styles/colors'

const screenOptions: NativeStackNavigationOptions = {
  headerTitle: "",

  headerStyle: {
    backgroundColor: Colors.black_700,
  },
  headerBackTitle: "Volver",
  headerTintColor: Colors.white_800,
  headerBackTitleStyle: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
  },
  orientation: "portrait",
}


// Exportación 🐶.
export default screenOptions;