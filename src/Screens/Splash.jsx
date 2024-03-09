import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Component/Header';
import LogoSVG from '../../assets/SVG/Logo';
import { LinearGradient } from 'expo-linear-gradient';
const Splash = ({navigation}) => {

useEffect(() => {
  const timeout = setTimeout(() => {
    navigation.navigate("TabRoutes");
  }, 4000);

  // return () => clearTimeout(timeout); // Clear the timeout when component unmounts
  }, [])



  return (
    <LinearGradient style={{padding: 20,flex:1,}}
    //  colors={['#141E30', "#243B55",'grey']} 
     colors={['#141E30', "#243B55",'#bdc3c7']} 
    >
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      
  <LogoSVG/>

    </SafeAreaView>
    </LinearGradient>
  )
}

export default Splash

const styles = StyleSheet.create({})