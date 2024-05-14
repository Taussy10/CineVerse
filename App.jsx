import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Routes from './src/Routes/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';

import {
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider,
    configureFonts,
} from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

export default function App() {
    const colorScheme = useColorScheme();
    const sourceColor = colorScheme === 'dark' ? '#ff6995' : '#ec407a';

    let [loaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });

    const baseFont = {
        fontFamily: 'Mono-Sans',
    };

    const baseVariants = configureFonts({ config: baseFont });
    const customVariants = {
        bodyLarge: {
            ...baseVariants.bodyLarge,
            fontFamily: 'Poppins_300Light',
        },
        bodyMedium: {
            ...baseVariants.bodyMedium,
            fontFamily: 'Poppins_400Regular',
        },
        bodySmall: {
            ...baseVariants.bodySmall,
            fontFamily: 'Poppins_300Light',
        },

        displayLarge: {
            ...baseVariants.displayLarge,
            fontFamily: 'Poppins_300Light',
        },
        displayMedium: {
            ...baseVariants.displayMedium,
            fontFamily: 'Poppins_400Regular',
        },
        displaySmall: {
            ...baseVariants.displaySmall,
            fontFamily: 'Poppins_300Light',
        },

        headlineLarge: {
            ...baseVariants.headlineLarge,
            fontFamily: 'Poppins_600SemiBold',
        },
        headlineMedium: {
            ...baseVariants.headlineMedium,
            fontFamily: 'Poppins_600SemiBold',
        },
        headlineSmall: {
            ...baseVariants.headlineSmall,
            fontFamily: 'Poppins_500Medium',
        },

        labelLarge: {
            ...baseVariants.labelLarge,
            fontFamily: 'Poppins_400Regular',
        },
        labelMedium: {
            ...baseVariants.labelMedium,
            fontFamily: 'Poppins_300Light',
        },
        labelSmall: {
            ...baseVariants.labelSmall,
            fontFamily: 'Poppins_200ExtraLight',
        },

        titleLarge: {
            ...baseVariants.titleLarge,
            fontFamily: 'Poppins_500Medium',
        },
        titleMedium: {
            ...baseVariants.titleMedium,
            fontFamily: 'Poppins_600SemiBold',
        },
        titleSmall: {
            ...baseVariants.titleSmall,
            fontFamily: 'Poppins_600SemiBold',
        },
    };

    const fonts = configureFonts({
        config: {
            ...baseVariants,
            ...customVariants,
        },
    });

    const { theme } = useMaterial3Theme();

    const paperTheme =
        colorScheme === 'dark'
            ? {
                  ...MD3DarkTheme,
                  colors: theme.dark,
                  fonts: fonts,
              }
            : {
                  ...MD3LightTheme,
                  colors: theme.light,
                  fonts: fonts,
              };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: paperTheme.colors.elevation.level1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    if (!loaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routes theme={paperTheme} />
            </NavigationContainer>
        </Provider>
    );
}
