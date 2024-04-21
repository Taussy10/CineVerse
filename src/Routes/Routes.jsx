import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Splash from '../Screens/Splash'
import VideoPlayer from '../Screens/VideoPlayer'
import MovieDetails from '../Screens/MovieDetails'
import CastDetails from '../Screens/CastDetails'
import Search from '../Component/Search'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import TabRoutes from './TabRoutes'
// import House from 'react-native-vector-icons/FontAwesome6'
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Account from '../Screens/Account'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
import SearchScreen from '../Screens/SearchScreen'
import Test from '../Screens/Test'

const Routes = () => {
    
  return (
    
    // I want to things 1. intialRoutes so that I can use Splash Screen I can't use cause first screen is Home seen tabs function
  // initialRouteName='Home'
    <stack.Navigator initialRouteName='TabRoutes' screenOptions={{headerShown:false}}>
        <stack.Screen name='Splash' component={Splash} />
        <stack.Screen name='Test' component={Test} />

        {/* Made new screen for working with tab navigator*/}
        <stack.Screen name='TabRoutes' component={TabRoutes} />
        <stack.Screen  name='Search' component={Search}/>
        <stack.Screen  name='SearchScreen' component={SearchScreen}/>
        <stack.Screen  name='Home' component={Home}/>
        <stack.Screen  name='MovieDetails' component={MovieDetails}/>
        <stack.Screen  name='VideoPlayer' component={VideoPlayer}/>
        <stack.Screen  name='CastDetails' component={CastDetails}
        options={{headerShown:false, title:"Cast"}}
        />
    </stack.Navigator>

    
    
  )
}

export default Routes

// How did used Tab navigator 
// 1. Created the tab Navigator in same file that we want 
function TabRoutes() {
  return (
    <Tab.Navigator 
    screenOptions={{headerShown:false}}
    >
    
   
    <Tab.Screen name="Home" component={Home}
    options={{
      tabBarLabel: "Home",
      tabBarIcon: (
          {color, size}
        ) => (
  <Ionicons name="home" size={24} color="black" />

          ) 
    }}
    />
    {/* <Tab.Screen name="Search" component={Search}
    options={{
      tabBarLabel: "Search",
      tabBarIcon: (
          {color, size}
        ) => (
  <Ionicons name="search-sharp" size={24} color="black" />

          ) 
    }}
    /> */}
    <Tab.Screen name="Account" component={Account}
    options={{
      tabBarLabel: "Account",
      tabBarIcon: (
          {color, size}
        ) => (
<MaterialCommunityIcons name="account" size={24} color="black" />
          ) 
    }}
    />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})