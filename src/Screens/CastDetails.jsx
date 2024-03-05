import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, Image, View } from 'react-native';
import Header from '../Component/Header';

const CastDetails = ({ route }) => {
  const [cast, setCast] = useState([]);

  const data = route.params.data;
console.log(data, "Data of castdetails");


const id = data.id
console.log(id, "got the id");
data.forEach(element => {
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
  }
};

fetch(`https://api.themoviedb.org/3/person/${element.id}?language=en-US`, options)
  .then(response => response.json())
  .then(response => {   
    setCast(response.cast);
    console.log(response, "Cast details from CastDetails")})
  .catch(err => console.error(err));
});


console.log(cast, "Got cast");
  return (
    <SafeAreaView style={{marginTop:50,}}>
      <Header />
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Hello</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CastDetails;
