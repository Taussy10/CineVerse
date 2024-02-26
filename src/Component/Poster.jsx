import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useEffect, useState } from 'react'
// import Data, { Movie } from '../Data/Data'
import { Movie } from '../Data/Data'
import { fetchDataFromApi } from '../Network/Network'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { LinearGradient } from 'expo-linear-gradient'
// import { useDispatch,  useSelector } from 'react-redux'
// import { getApiConfiguration } from '../Redux/HomeSlice'

 // () 
// $ 


const Poster = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  


  const fetchData = () => {
const BASE_URL = "https://api.themoviedb.org/3";
// Change with API key wannna see wether exist or not
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDljOWU0YjJjY2QxM2FlZGNmMGM1OTczMDc0YTE4ZSIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6eBWHRPkmJiPkiWJtcyOHBNDCdDZjowYtFgMhScOww"

const headers = {
    Authorization: `Be arer ${TMDB_TOKEN} `
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDljOWU0YjJjY2QxM2FlZGNmMGM1OTczMDc0YTE4ZSIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6eBWHRPkmJiPkiWJtcyOHBNDCdDZjowYtFgMhScOww'
  }
};





// fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(data => {
//     console.log(response, "Fetched the API")})
//   .catch(err => console.error(err));

  fetch(`${BASE_URL}/movie/upcoming?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(data => {
    setMovies(data.results); // Assuming 'results' contains the list of movies in the API response
    console.log(data, "Got the data");
  })
  .catch(err => console.error(err));

}


console.log(movies, "movies");


  return (

    <View style={{flex:1, backgroundColor:'red'}} >
  
    

 <FlatList 
horizontal
    data={movies}
    renderItem={({ item }) => (
   
       
      <View style={{ backgroundColor:'lightblue', height: responsiveHeight(50), }}> 
   
       
        <ImageBackground style={styles.image}  source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}   
        resizeMode= 'stretch'
 >

  <LinearGradient  
   colors={['rgba(0,0,0,0.0)', '#000C40', 'rgba(0,0,0,0.0)']} // Example gradient colors
   style={styles.gradient}
  />

<View style={{display:'flex', flexDirection:'row' , justifyContent:'center', marginTop:10}}> 
        <TextInput style={styles.input} 
         placeholder='Search Movies'
         keyboardType= 'default'
         />
         
         <TouchableOpacity style={{backgroundColor:'green' , justifyContent:'center',  borderTopRightRadius:20,
      borderBottomRightRadius:20, padding:10}}>
         <Text style={{color:'white'}}> Search </Text>  
         </TouchableOpacity>
         </View>
        <Text style={{fontSize: 70 , color:'white',         marginTop:20,
}}>Welcome</Text> 
         <Text style={{fontSize: 20 , color:'white', marginBottom:50,}}>Watch millions of movies & TV shows</Text> 

        
        </ImageBackground>
   

        </View>
       
    )}
/>


     </View>
  )
}

export default Poster

const styles = StyleSheet.create({
    // poster:{
    //     height: responsiveHeight(30),
    //     width: responsiveWidth(90),
    //     // backgroundColor:'red'
    // },
    image:{
        height: responsiveHeight(50),
        width: responsiveWidth(100),
        // resizeMode: 'strech',
        // backgroundColor:'red',
        // marginLeft:50,
        // justifyContent:'center',
        alignItems:'center',
        borderColor: 'black',
    },
    input:{
      height:responsiveHeight(6),
      width: responsiveWidth(75),
      padding:12,
      backgroundColor:'white',
      color:'black',
      // borderRadius: 20,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      
    },
    gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
})