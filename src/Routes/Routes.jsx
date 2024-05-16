import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import VideoPlayer from '../Screens/VideoPlayer';
import MovieDetails from '../Screens/MovieDetails';
// import CastDetails from '../Screens/CastDetails';
import Search from '../Component/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import TabRoutes from './TabRoutes'
// import House from 'react-native-vector-icons/FontAwesome6'
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BottomNavigation, withTheme } from 'react-native-paper';

import Account from '../Screens/Account';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import SearchScreen from '../Screens/SearchScreen';
// import Test from '../Screens/Test';

const Routes = ({ theme }) => {
    return (
        // I want to things 1. intialRoutes so that I can use Splash Screen I can't use cause first screen is Home seen tabs function
        // initialRouteName='Home'
        <stack.Navigator
            initialRouteName='Splash'
            screenOptions={{ headerShown: false }}
        >
            <stack.Screen
                name='Splash'
                component={Splash}
            />
            <stack.Screen
                name='Test'
                component={Test}
            />

            {/* Made new screen for working with tab navigator*/}
            <stack.Screen
                name='TabRoutes'
                component={TabRoutes}
                initialParams={{ theme: theme }}
            />
            <stack.Screen
                name='Search'
                component={Search}
            />
            <stack.Screen
                name='SearchScreen'
                component={SearchScreen}
            />
            <stack.Screen
                name='Home'
                component={Home}
            />
            <stack.Screen
                name='MovieDetails'
                component={MovieDetails}
            />
            <stack.Screen
                name='VideoPlayer'
                component={VideoPlayer}
            />
            {/* <stack.Screen
                name='CastDetails'
                component={CastDetails}
                options={{ headerShown: false, title: 'Cast' }}
            /> */}
        </stack.Navigator>
    );
};

export default withTheme(Routes);

// How did used Tab navigator
// 1. Created the tab Navigator in same file that we want
function TabRoutes({ navigation, route }) {
    const { theme } = route.params;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={{ bottom: -5, left: 10 }}
                    inactiveColor={theme.colors.primary}
                    theme={{
                        colors: {
                            secondaryContainer: theme.colors.primary, // active icon pill
                            onSecondaryContainer: theme.colors.onPrimary, // active icon color
                            onSurface: theme.colors.primary, // active label color
                            onSurfaceVariant: theme.colors.primary, // inactive text colors
                            // elevation: {
                            //     ...theme.colors.elevation,
                            //     level2: theme.colors.primaryContainer
                            // }
                            elevation: {
                                level2: theme.colors.surfaceVariant,
                            },
                        },
                    }}
                    style={{
                        marginTop: 0,
                        overflow: 'hidden',
                        backgroundColor: theme.colors.elevation.level1,
                        borderTopStyle: 'solid',
                        borderTopWidth: 0.75,
                        borderTopColor: theme.colors.primary,
                        elevation: 3,
                    }}
                    activeIndicatorStyle={{
                        height: 30,
                        aspectRatio: 2,
                    }}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(
                                    route.name,
                                    route.params
                                ),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({
                                focused,
                                color,
                                size: 22,
                            });
                        }

                        return options.tabBarIcon;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                ? options.title
                                : route.title;

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='home'
                            size={20}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='account'
                            size={20}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
{
    /* </LinearGradient> */
}

const styles = StyleSheet.create({});
