import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Splash from '../Screens/Splash'
import VideoPlayer from '../Screens/VideoPlayer'
import Details from '../Screens/Details'
import Faq from '../Screens/Faq'
import CastDetails from '../Screens/CastDetails'
import Search from '../Screens/Search'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import TabRoutes from './TabRoutes'
// import House from 'react-native-vector-icons/FontAwesome6'
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Account from '../Screens/Account'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
import Details2 from '../Screens/Details2'

const Routes = () => {
    
  return (
    
    // I want to things 1. intialRoutes so that I can use Splash Screen I can't use cause first screen is Home seen tabs function
  // initialRouteName='Search' 
    <stack.Navigator  screenOptions={{headerShown:false}}>
        {/* <stack.Screen name='Splash' component={Splash} /> */}

        {/* Made new screen for working with tab navigator*/}
        <stack.Screen name='TabRoutes' component={Tabs} />
        <stack.Screen  name='Search' component={Search}/>
        <stack.Screen  name='Home' component={Home}/>
        <stack.Screen  name='Details' component={Details}/>
        <stack.Screen  name='Details2' component={Details2}/>
        <stack.Screen  name='VideoPlayer' component={VideoPlayer}/>
        <stack.Screen  name='Faq' component={Faq}/>
        <stack.Screen  name='CastDeatils' component={CastDetails}/>
    </stack.Navigator>

    
    // <View>
    //   <Text>Routes</Text>
    // </View>
  )
}

export default Routes

// How did used Tab navigator 
// 1. Created the tab Navigator in same file that we want 
function Tabs() {
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
    <Tab.Screen name="Search" component={Search}
    options={{
      tabBarLabel: "Search",
      tabBarIcon: (
          {color, size}
        ) => (
  <Ionicons name="search-sharp" size={24} color="black" />

          ) 
    }}
    />
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