import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
export default function RootLayout() {

  const [loaded] = useFonts({
    WendyOne: require('../assets/fonts/WendyOne-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf')
  })
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
