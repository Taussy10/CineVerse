import { StyleSheet, Text, View, FlatList,Pressable, Image } from 'react-native'
import React,{useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {  responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

import CardsTitle from './CardsTitle'
import { useNavigation } from '@react-navigation/native'

const SimillarMovies = ({particularMovieData, navigation }) => {
    // console.log(particularMovieData, "particularMovieData");

    const [simillarMovies, setSimillarMovies] = useState([])
    const id = particularMovieData.id;
  
    // console.log(id);
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => { 
        // Assuming the response contains a property named 'results' which holds the array of similar movies
        setSimillarMovies(response.results);
        // console.log(response, "similar movies");
      })
      .catch(err => console.error(err));
    


    //   fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
    //     .then(response => response.json())
    //     .then(response => { 
    //         setSimillarMovies(response.result)
    //         console.log(response, "simillar movies")})
    //     .catch(err => console.error(err));
        
    //  console.log(simillarMovies, "state");
    // const navigation = useNavigation();

  return (
    <View style={{flex:1, backgroundColor:'green', marginTop:20, }}>

<CardsTitle name ="Simillar Movies"  />

      <FlatList 
      horizontal
      data={simillarMovies}
      renderItem= {({item}) => (
    <View style={{flex:1, }}> 
   <LinearGradient  
   colors={['#141E30', "white",'#243B55']} 
   style={styles.gradient}
  />


    
  <Pressable  onPress={()=> navigation.navigate("Faq",  {
          id:id
        })  
}>
 <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}}
 style={styles.image}/>
 </Pressable>
 
    <Text style={{textAlign:'center', fontSize:18,fontWeight:'500', color:'white' }}>{item.original_title.slice(0,17)}..</Text>

        </View>
      )}/>

    </View>
  )
}

export default SimillarMovies

const styles = StyleSheet.create({
    image:{
        height: responsiveHeight(35),
        width: responsiveWidth(50),
        resizeMode: 'stretch',
        backgroundColor: 'red',
        borderRadius: 50,
        marginRight: 17,
        marginTop: 15,
        marginBottom:10,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
})