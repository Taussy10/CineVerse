import { StyleSheet, Text, View, FlatList , Image, Pressable} from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Header from '../Component/Header'



const SearchScreen = ({route, navigation}) => {

  data = route.params.data




  

    console.log(data, "searchScreen");
  return (
    <SafeAreaView>
<Header/>
<FlatList 

data={data}
keyExtractor={(item) => item.id.toString()}
renderItem={({item}) => (
 <View style={{flex:1, backgroundColor:'red', }}>
   <LinearGradient 
          colors={['#141E30', "white",'#243B55']} 
          >


    <Pressable onPress={()=> navigation.navigate("MovieDetails", {
      data: item
})  }>
 <Image source={item.backdrop_path ?{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}: require("../../assets/Images/no-results.png") } style={styles.image} />
 </Pressable>
 <Text style={{color:'white' , fontSize:20, fontWeight:'600', textAlign:'center', marginVertical:5,}}>{item.title}</Text>

 </LinearGradient>
    </View>
)}
/>

    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    image:{
        height: responsiveHeight(30),
        width: responsiveWidth(90),
        resizeMode: 'contain',
        // backgroundColor:'red',
        borderRadius: 40,
        // backgroundColor:'red',
        margin:10,
        // padding:50,
    },
})