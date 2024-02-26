import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { LinearGradient } from 'expo-linear-gradient'

const CardsTitle = ({name}) => {
  return (
    <View style={{ flex:1}}>
       <LinearGradient  
   colors={['#141E30', "white",'#243B55']} // Example gradient colors
   style={{width:" 100%", alignItems:'center',}}
  >
      <Text style={{color:'black' , fontWeight:'bold', fontSize: 20  }}>{name}</Text>
      </LinearGradient>
    </View>
  )
}

export default CardsTitle

const styles = StyleSheet.create({})