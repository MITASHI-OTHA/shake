import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from "expo-font";

export default function RootLayout() {
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();
  const insets = useSafeAreaInsets();
  const [loaded] = useFonts({
    ADLaMDisplay: require('../assets/fonts/ADLaMDisplay-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  
  return (<PaperProvider children={undefined}>
            <View style={{ flex: 1, paddingTop: insets.top }}>
              <Stack>
                <Stack.Screen name="(accueil)" options={{ headerShown: false }}/>
              </Stack>
            </View>
          </PaperProvider>);
}
AppRegistry.registerComponent('poney', () => RootLayout);