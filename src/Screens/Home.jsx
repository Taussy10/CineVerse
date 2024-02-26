import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Poster from '../Component/Poster'
import CardsTitle from '../Component/CardsTitle'
import Cards from '../Component/Cards'
import Header from '../Component/Header'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {

  return (
    // VirtualizedLists should never be nested inside plain ScrollViews with the same orientation 
    // because it can break windowing and other functionality - use another VirtualizedList-backed container instead.
    // Basically you can't nest flatList{VirtualisedLists} inside scrollView so put scrollView top then safeAreaView
    <ScrollView > 
    <SafeAreaView style={{flex:1 }}>
        <Header/>
      {/* <Text>Hello</Text> */}
        <Poster />
      <CardsTitle name ="Trending Movies" />
      
      <Cards navigation={navigation} />
      <CardsTitle name ="Latest Movies" />
      <Cards navigation={navigation} />
     
    </SafeAreaView>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { LinearGradient } from 'expo-linear-gradient'
// import { SafeAreaView } from 'react-native-safe-area-context'
// const Home = () => {
//   return (
//     // backgroundColor:'red',
//     <SafeAreaView style={{ flex:1}}>
       
     
//       <LinearGradient
//       colors={['#bdc3c7', '#89fffd']}

//       style={{height:'100%'}}

//       > 
//   <Text>Home</Text>
   
//       </LinearGradient>

      
//     </SafeAreaView>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})