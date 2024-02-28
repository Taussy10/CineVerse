// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React,{useState} from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'


// const VideoPlayer = ({route}) => {

// const [video, setVideo] = useState([])

// const id = route.params.id;




// // console.log(id,"videoPlayer");

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
//     }
//   };
  
//   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
//     .then(response => response.json())
//     .then(response => { //console.log(response)   
//     setVideo(response.results) 
//     })
//     .catch(err => console.error(err));

//     console.log(video,"hello");


//   return (
//     <SafeAreaView style={{flex:1, backgroundColor:'yellow'}}>

//       <FlatList 
//       data={video}
//       renderItem={({item}) => (

//        <Text> {`https://www.youtube.com/watch?v=${item.key}`}   </Text> 
//       ) }
//       />
//     </SafeAreaView>
//   )
// }

// export default VideoPlayer



// import * as React from 'react';
import { View, StyleSheet, Button, FlatList, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useState , useRef, useCallback} from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import YoutubeIframe from 'react-native-youtube-iframe';
import YoutubePlayer from "react-native-youtube-iframe";


const VideoPlayer = ({route}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
const [movieVideo, setMovieVideo] = useState([])
const [playing, setPlaying] = useState(false);

const onStateChange = useCallback((state) => {
  if (state === "ended") {
    setPlaying(false);
    Alert.alert("video has finished playing!");
  }
}, []);

const togglePlaying = useCallback(() => {
  setPlaying((prev) => !prev);
}, []);


const id = route.params.id;




// console.log(id,"videoPlayer");

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => { //console.log(response)   
    setMovieVideo(response.results) 
    })
    .catch(err => console.error(err));

    // console.log(movieVideo ,"hello");

  return (
    <SafeAreaView style={styles.container}>


 <FlatList 
//  horizontal
      data={movieVideo}
      renderItem={({item}) => (

        <View> 
{/* Youtube */}
<View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={`${item.key}`}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
</View>
      ) }
      />
    </SafeAreaView>
  );
}

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  // buttons: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});
