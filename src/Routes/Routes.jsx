import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Splash from '../Screens/Splash'
import VideoPlayer from '../Screens/VideoPlayer'
import Details from '../Screens/Details'
const stack = createNativeStackNavigator()
const Routes = () => {
    
  return (

    <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <stack.Screen name='Splash' component={Splash} />
        <stack.Screen  name='Home' component={Home}/>
        <stack.Screen  name='Details' component={Details}/>
        <stack.Screen  name='VideoPlayer' component={VideoPlayer}/>
    </stack.Navigator>
    // <View>
    //   <Text>Routes</Text>
    // </View>
  )
}

export default Routes

const styles = StyleSheet.create({})