import { StyleSheet, Text, View , Image, FlatList, Pressable} from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useEffect, useState } from 'react'
// import Apple from '../../assets/Images/Apple.png'
import { LinearGradient } from 'expo-linear-gradient'


const Cards = ({navigation, data}) => {

 
  
  return (
    <View>
   {/* <Text>Hello</Text> */}
   {/* You can't acess movies by this cause movies is an array it contains a lot of movies so use flatlist */}

      <FlatList 
      horizontal
      data={data}
      renderItem={({item}) => (
        <View style={{flex:1, }}> 

   <LinearGradient  
   colors={['#141E30', "white",'#243B55']} 
   style={styles.gradient}
  />

  <Pressable  onPress={() => {navigation.navigate("Details", {
    data: item
  }) 
} 
}>
  

   <Image  source={item.poster_path ? {uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}: require("../../assets/Images/no-poster.png") }
 style={styles.image}/>
 </Pressable>
 
        </View>
        
      )}
      />

    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    image:{
        height: responsiveHeight(35),
        width: responsiveWidth(50),
        resizeMode: 'contain',
        // backgroundColor:'red',
        borderRadius: 60,

    },
    gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
})

