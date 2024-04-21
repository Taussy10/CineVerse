import { StyleSheet, Text, View, Image, ScrollView, FlatList,StatusBar, Pressable } from 'react-native'
import React,{useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Cast from '../Component/Cast'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Component/Header'
import SimillarMovies from '../Component/SimillarMovies'
import VideoClips from '../Component/VideoClips'

// () 

   
const MovieDetails = ({ route , navigation}) => {
  const [cast, setCast] = useState([]);
 // route.params.parameterName 


 useEffect(() => {
  console.log(fetchData(), "hello" ); 
console.log(cast, "cast"); }, [])
 const data = route.params.data;

//  console.log(data, "Data of movies");

const id = data.id;
console.log(id, "Id from Details");

function fetchData() {
// console.log(id);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
  .then(response => response.json())
  .then(response => { 
 setCast(response.cast);
    console.log(response, "response")
  })
  .catch(err => console.error(err));

}

  
    return (
      <ScrollView >
        <LinearGradient 
       colors={['#141E30', "#243B55",'#243B55']}  >
        {/* <StatusBar /> */}

    <SafeAreaView style={{flex:1,  padding:20, }}>
    <Header/>

        {/* <View style={{  backgroundColor:'lightgreen',marginRight:10, marginLeft:10, marginTop:30  }}> */}
        <LinearGradient 
       colors={['#141E30', "#243B55",'#bdc3c7']} 
      >
       
      <Image style={styles.posterImage} source={{uri:`https://image.tmdb.org/t/p/w500/${data.poster_path}`}}/>
        {/* </View> */}
        <Text style={{fontSize:35, fontWeight:'700' , textAlign:'center',color:'white'}}>{data.title}</Text>
        <Text style={{fontSize:30 }}>Overview</Text>
        {/* slice{slice means so it cut chars except when you say cut between two chars } function: when you use (10) it will remove first 10 character 
        but if you use (-10) then it will remove last characters but 
        if you use (0,10) it will remove all chacters except 1-10 chars */}
        <Text style={{fontSize:25,color:'white'}}>{data.overview.slice(0,142)}... </Text>
 
   <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:5, marginTop:30}}>
   <Text style={{fontSize:20 , fontWeight:'700',   }}>Laguage</Text>
   <Text style={{fontSize:20, fontWeight:'700',  }}>Released date</Text>
   <Text style={{fontSize:20, fontWeight:'700',  }}>Rating</Text>
   </View>

   <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', }}>
   <Text style={{fontSize:20, textAlign:'center',  width: responsiveWidth(25), color:'white'  }}>{data.original_language}</Text>
   <Text style={{fontSize:20, color:'white' }}>{data.release_date}</Text>
   <Text style={{fontSize:20 , color:'white' }}>{data.vote_average}</Text>
   </View>
    
    <View style={{borderColor:'black', borderWidth:1 }}>
   
    {/* <Text style={{fontSize:20 }}>Rating</Text> */}
       </View>


{/* data is in fetchAPI and I want to use it find it how later */}
       {/* <Text style={{fontSize:20 }}>Director: {item.Directing}</Text>
    <Text style={{fontSize:20 }}>Writer: {item.release_date}</Text>
    <Text style={{fontSize:20 }}>{item.release_date}</Text> */}

{/* You can allign text: center , justify and allignitems works only on parent component */}
{/* responsiveHeight(10) , responsiveWidth(10)*/}





         {/* for cast name */}

{/* cast componnet */}
             <Cast data={cast} navigation={navigation} />
         



     <VideoClips particularMovieData={data}  />

     </LinearGradient>

    </SafeAreaView>
    </LinearGradient>
    </ScrollView>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
    posterImage:{
        height: responsiveHeight(70) ,
        // width: responsiveWidth(90),
        borderRadius: 70,
        // resizeMode: 'repeat'

    }
})