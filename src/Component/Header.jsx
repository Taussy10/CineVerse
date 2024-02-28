import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoSVG from '../../assets/SVG/Logo'
import { LinearGradient } from 'expo-linear-gradient'

const Header = () => {
  return (
    // Only in main Screen write SafeAreaView otherwise it will take even sapce in
    //  components in the name of safeAreaView and we use SafeAreaView
// flex:1 , 
    <View style={{flex:1,justifyContent:'center',  alignItems:'center'}}>
      <LinearGradient  
   colors={['#141E30', "white",'#243B55']} // Example gradient colors
   style={{width:"100%",alignItems:'center' }}
  >
      <LogoSVG/>
      </LinearGradient>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})