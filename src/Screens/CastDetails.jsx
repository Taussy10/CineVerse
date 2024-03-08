import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, Image, View, ScrollView, StatusBar } from 'react-native';
import Header from '../Component/Header';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CastDetails = ({ route, navigation }) => {
  const [clicked, setClicked] = useState(false)

  // const [castDetails, setCastDetails] = useState([]);
  // useEffect(() => {
  //   console.log(getApi() , "Not working ");
  //   console.log(castDetails, "got the castDeatils");
  
  // }, [])

//   const [cast, setCast] = useState([]);
//   // route.params.parameterName 
 
 
//   useEffect(() => {
//    console.log(fetchData(), "hello" ); 
//  console.log(cast, "cast"); }, [])

// let data = route.params.data ;
// console.log(data, "Got the data");
//  data = data.id 
//  console.log(data , "got the id ");







// function fetchData() {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
//     }
//   };
  
//   fetch(`https://api.themoviedb.org/3/person/${data}?language=en-US`, options)
//     .then(response => response.json())
//     .then(response => { 
//    setCast(response.cast);
//       console.log(response, "response")
//     })
//     .catch(err => console.error(err));
  
//   }
  
function toggleHEart() {
  setClicked(!clicked)
  
}
  return (
    <ScrollView>

 <LinearGradient 
       colors={['#141E30', "#243B55",'#243B55']}
       > 
   
    <SafeAreaView style={{flex:1 , padding:20, }} >
      {/* <Header /> */}
      <LinearGradient 
       colors={['#141E30', "#243B55",'grey']} 
      >
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Ionicons name="chevron-back" size={35} color="white" onPress={()=> navigation.goBack() } />
      <AntDesign name="heart" size={35}  color={clicked? "grey":"red"} onPress={()=> toggleHEart()}    />  
          </View>

{/* Profile section in between */}
<View style={{alignItems:'center',}}> 

 <View style={{height:200, width:200, borderRadius:100, padding:10, marginBottom:30,  }}>

  <Image source={require('../../assets/Images/avatar.png')} style={styles.image}/>

  </View>
  <Text style={{fontSize:35,color:'white', fontWeight:'800'}}>Robert Downey Jr.</Text>
  <Text style={{color:'white',fontSize:20,marginVertical:5, }}>Know more{"Link for knowing more "}</Text>
   
   {/* Details such Gender */}
   <View style={{flexDirection:'row', gap:5, backgroundColor:'grey', padding:15, borderRadius:100, width: responsiveWidth(100), alignItems:'center', justifyContent:'center', marginBottom:18, marginTop:10, }}>

    <View>
      <Text style={styles.textColor}>Gender</Text>
      <Text style={styles.textColor}>Male</Text>
    </View>
    <FontAwesome5 name="grip-lines-vertical" size={34} color="white" />

    <View>
      <Text style={styles.textColor}>Gender</Text>
      <Text style={styles.textColor}>Male</Text>
    </View>
    <FontAwesome5 name="grip-lines-vertical" size={34} color="white" />

    <View>
      <Text style={styles.textColor}>Gender</Text>
      <Text style={styles.textColor}>Male</Text>
    </View>
    <FontAwesome5 name="grip-lines-vertical" size={34} color="white" />

    <View>
      <Text style={styles.textColor}>Gender</Text>
      <Text style={styles.textColor}>Male</Text>
    </View>
   </View>


 
   <Text style={{fontSize: 35, color:'white', marginBottom:10, }}>Biography</Text>

 </View>
 <Text style={{fontSize: 18 , color:'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit quae laboriosam 
  nesciunt saepe, perferendis odit sit a quaerat nihil distinctio dicta vero quo nobis obcaecati quod ut autem provident. Dignissimos nostrum tempore fugiat accusantium veniam. Hic, similique corrupti 
  autem corporis inventore quam? Recusandae ab praesentium rem eaque dolorum maiores?</Text>


      {/* <FlatList
        data={cast}
        renderItem={({ item }) => (
          <View>
          <Text>Hello</Text>

          </View>
        )}
      /> */}
          </LinearGradient>

    </SafeAreaView>
    </LinearGradient>

    </ScrollView>

  );
};

export default CastDetails;

const styles = StyleSheet.create({
 textColor:{
  color:'white',
  fontSize: 16
 },
image:{
  height:200, 
  width:200, 
  borderRadius:100}
})