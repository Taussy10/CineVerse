import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, Image, View } from 'react-native';
import Header from '../Component/Header';

const CastDetails = ({ route }) => {
  // const [castDetails, setCastDetails] = useState([]);
  // useEffect(() => {
  //   console.log(getApi() , "Not working ");
  //   console.log(castDetails, "got the castDeatils");
  
  // }, [])

  const [cast, setCast] = useState([]);
  // route.params.parameterName 
 
 
  useEffect(() => {
   console.log(fetchData(), "hello" ); 
 console.log(cast, "cast"); }, [])

// route.params
// const datas = route.params.data ;
let data = route.params.data ;
console.log(data, "Got the data");
 data = data.id 
 console.log(data , "got the id ");
// console.log(data, "Data of castdetails");






// After putting in function it works data is send to castDetails array

// jabki ye kaam nahi kar raha hai




// function getApi() {
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
//   }
// };

// fetch(`https://api.themoviedb.org/3/person/${data}?language=en-US `, options)
//   .then(response => response.json())
//   .then(response => { setCastDetails(response.castDetails) ,console.log(response, "Got the response from API")} )
//   .catch(err => console.error(err));
// }
// above it's not working  belwo it's working


function fetchData() {
  // console.log(id);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/person/${data}?language=en-US`, options)
    .then(response => response.json())
    .then(response => { 
   setCast(response.cast);
      console.log(response, "response")
    })
    .catch(err => console.error(err));
  
  }
  
  return (
    <SafeAreaView style={{flex:1}} >
      {/* <Header /> */}

      <Text>Hello</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>

            <Text>{item.gender}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CastDetails;
