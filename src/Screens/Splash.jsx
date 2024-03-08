import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash = ({navigation}) => {

useEffect(() => {
  const timeout = setTimeout(() => {
    navigation.navigate("TabRoutes");
  }, 3000);

  // return () => clearTimeout(timeout); // Clear the timeout when component unmounts
  }, [])



  return (
    <SafeAreaView>
      <Text>Splash</Text>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({})