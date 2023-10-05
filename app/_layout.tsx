import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider, IconButton } from 'react-native-paper';
import { lightTheme } from '../theme/lightTheme';
import { darkTheme } from '../theme/darkTheme';
import { Text } from '../components/Themed';
import { UIProvider } from '../context/UIProvider';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    < RootLayoutNav />
  )

}

const RootLayoutNav = () => {
  const colorScheme = useColorScheme();

  return (

    <UIProvider>

      <PaperProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>

        {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <Stack>

          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              presentation: 'containedTransparentModal',
            }} />
          <Stack.Screen name="[id]" options={{ animation: 'slide_from_bottom', headerShown: false, presentation: 'containedTransparentModal' }} />
          <Stack.Screen name="question" options={{ animation: 'slide_from_bottom', headerShadowVisible: false, title: '', presentation: 'containedTransparentModal' }} />

        </Stack>
        {/* </ThemeProvider> */}

      </PaperProvider >

    </UIProvider>

  );
}
