import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigators/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { loadFonts } from "./assets/fonts";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Montserrat_700Bold, Inter_700Bold, Montserrat_600SemiBold, Inter_600SemiBold } from '@expo-google-fonts/dev'
import { useCallback } from "react";

  

export default function App() {
  SplashScreen.preventAutoHideAsync();
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold, Inter_700Bold, Montserrat_600SemiBold, Inter_600SemiBold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView}
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <AppNavigator />
    </SafeAreaView>
  );
}
