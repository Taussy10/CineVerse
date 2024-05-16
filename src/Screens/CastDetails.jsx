import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, Image, View, ScrollView, StatusBar } from 'react-native';
import Header from '../Component/Header';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FontAwesome5 } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
// import Avatar from 'react-native-paper/lib/typescript/components/Avatar/AvatarIcon';
import { Avatar } from 'react-native-paper';


const CastDetails = ({ route, navigation }) => {
  const [clicked, setClicked] = useState(false)
  const [castDetails, setCastDetails] = useState([]);


const names = route.params.name
const datas = route.params.data
// console.log(names);
// console.log(datas, "mil gaya");

const id = datas.id
// console.log(id);
// Alaways use useffect otherwise whenever it mount it will console the code
useEffect(() => {
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
  }
};







fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options)
  .then(response => response.json())
  .then(response => {    setCastDetails([response]) 
    // What's need to put data into array
    // ,console.log(response)
  })
  .catch(err => console.error(err));



}, [])

console.log(castDetails, "CastDetails");




function toggleHEart() {
  setClicked(!clicked)
  
}
  return (
    <ScrollView>


 {/* <LinearGradient 
       colors={['#141E30', "#243B55",'#243B55']}

       style={{flex:1,}}
       >  */}
   
    <SafeAreaView style={{flex:1 , padding:20, }} >
      <Header />
      {/* <ScrollView> */}
      {/* <LinearGradient 
       colors={['#141E30', "#243B55",'#6984a2']} 
      > */}




      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Ionicons name="chevron-back" size={35} color="white" onPress={()=> navigation.goBack() } />
      <AntDesign name="heart" size={35}  color={clicked? "grey":"red"} onPress={()=> toggleHEart()}    />  


          </View>
{/* <ScrollView > */}

          <FlatList 
  data={castDetails}
  renderItem={({item}) => (
  <View style={{flex:1,}}>
{/* Profile section in between */}
<View style={{alignItems:'center',}}> 

 <View style={{height:200, width:200, borderRadius:100, padding:10, marginBottom:30,  }}>

 <Avatar.Image size={200}  source={{uri:`https://image.tmdb.org/t/p/w500/${item.profile_path}`}} style={styles.image}  />
  </View>

  <Text style={{fontSize:35,color:'white', fontWeight:'800', marginBottom:20, }}>{item.name}</Text>
   
   {/* Details such Gender */}
   {/* <View style={{flexDirection:'row', gap:5, backgroundColor:'grey', padding:25, borderRadius:100, width: responsiveWidth(90), height: responsiveHeight(10),  alignItems:'center', justifyContent:'center', marginBottom:18, marginTop:10, }}> */}
   <View style={{flexDirection:'row', gap:24, }}>
   <Text style={styles.textColor}>Gender</Text>
   <Text style={styles.textColor}>Birthday</Text>
   <Text style={styles.textColor}>Known for</Text>
   </View>
   <View style={{borderColor:'black', borderWidth:1 }}> 

   {/* Line */}
   <View style={{borderColor:'white', borderWidth:1 , width: responsiveWidth(100)  }}>
   
   {/* <Text style={{fontSize:20 }}>Rating</Text> */}
      </View>

   </View>
   <View style={{flexDirection:'row',gap:40}}>
   <Text style={[styles.textColor , ]}>{item.gender ===1 ? "Female":"male"}</Text>
   {/* <Text style={styles.textColor}>  {item.birthday === null ? "Hello" : item.birthday.slice(0, 4)}</Text> */}
   <Text style={styles.textColor}>{item.birthday === null ?"NA":item.birthday.slice(0,4)   }</Text>
   <Text style={styles.textColor}>{item.known_for_department}</Text>
   
   </View>
   {/* </View> */}
 {/* <ScrollView>  */}
   
    {/* <FontAwesome5 naeme="grip-lines-vertical" size={34} color="white" /> */}
{/* <Entypo name="dots-three-vertical" size={20} color="white" /> */}
  
    {/* </ScrollView> */}


 
   <Text style={{fontSize: 35, color:'white', marginBottom:10,  }}>Biography</Text>

 </View>


 <Text style={{fontSize: 18 , color:'white',marginLeft:10 ,  }}>{item.biography}</Text>
  </View>






)}
// ListHeaderComponent={
// <View>
// <View style={{height:200, width:200, borderRadius:100, padding:10, marginBottom:30,  }}>

// <Avatar.Image size={200}  source={{uri:`https://image.tmdb.org/t/p/w500/${item.profile_path}`}} style={styles.image}  />
//  </View>
// </View>

// }
/>
{/* </ScrollView> */}


          {/* </LinearGradient> */}
          {/* </ScrollView> */}
    </SafeAreaView>
    {/* </LinearGradient> */}

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
  borderRadius:100,
resizeMode:'cover'}
})


// import { StyleSheet, Text, View } from 'react-native'
// import React,{useState} from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const CastDetails = ({route}) => {
// const [castDetails, setCastDetails] = useState([])

// const datas = route.params.data
//   const id = datas.id
//   // console.log(id, "Got id ");
//   // console.log(datas,"CastDtails");


//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/person/54693?language=en-US', options)
//     .then(response => response.json())
//     .then(response => {  
//     // We have to store the data to ourselves so we can  use it later 
//       // console.log( setCastDetails(response, "CastDsetails") ); 
//       // console.log(response)
//     } 
//       )
//     .catch(err => console.error(err));
// // console.log(castDetails, "got the image");



//   return (
//     <SafeAreaView>
//       <Text>CastDetails</Text>
//     </SafeAreaView>
//   )
// }

// export default CastDetails

// const styles = StyleSheet.create({})