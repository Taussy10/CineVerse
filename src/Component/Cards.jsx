import { StyleSheet, Text, View , Image, FlatList, Pressable} from 'react-native'
import React from 'react'
import { Movie } from '../Data/Data'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useEffect, useState } from 'react'
import Apple from '../../assets/Images/Apple.png'
import { LinearGradient } from 'expo-linear-gradient'


const Cards = ({navigation}) => {
 const [movies, setMovies] = useState([])
useEffect(() => {

  fetchTopRatedMovies()
console.log("TOp rated movies");
}, [])


  function fetchTopRatedMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDljOWU0YjJjY2QxM2FlZGNmMGM1OTczMDc0YTE4ZSIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6eBWHRPkmJiPkiWJtcyOHBNDCdDZjowYtFgMhScOww'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        setMovies(response.results)
        console.log(response)})
      .catch(err => console.error(err));
  }
 
  
console.log( movies,"Got the topRatedMovies");
  return (
    <View>
   {/* <Text>Hello</Text> */}
   {/* You can't acess movies by this cause movies is an array it contains a lot of movies so use flatlist */}

      <FlatList 
      horizontal
      data={movies}
      renderItem={({item}) => (


        <View style={{flex:1, }}> 
   
   <LinearGradient  
   colors={['#141E30', "white",'#243B55']} // Example gradient colors
   style={styles.gradient}
  />

  <Pressable  onPress={() => {navigation.navigate("Details",{
                data: item,
                name: "Tausif"
}) } }>
 <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
 style={styles.image}


 />
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