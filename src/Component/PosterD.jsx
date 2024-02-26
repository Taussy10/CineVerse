// import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import { useEffect, useState } from 'react'
// // import Data, { Movie } from '../Data/Data'
// import { Movie } from '../Data/Data'
// import { fetchDataFromApi } from '../Network/Network'
// import { useDispatch,  useSelector } from 'react-redux'
// import { getApiConfiguration } from '../Redux/HomeSlice'
// import useFetch from '../Hooks/useFetch'
 // () 
// $ 
const {data , loading} = useFetch("/movie/now_playing")

const Poster = () => {
  const [background, setBackground] = useState("")

  useEffect(() => {
    
    apiTesting()
  //  Add dependency otherwise it keep logging
  }, [] )

  
  // ;const [query, setQuery] = useState("/movie/now_playing")
  // Too state: 1. for input to store 2.for poster image so that it can show change wehenever it refresh

  // const searchQueryHandler = () => {
    
  // }

  // const {data , loading} = useFetch("/movie/popular")

  const dispatch = useDispatch()
  const url= useSelector((state) => state.home.url ) 
//  console.log(url, "I'm URL");

  //  const apiTesting = ()  => {
  //   fetchDataFromApi("/movie/now_playing")
  //   .then((response) => {
    
  //     dispatch(getApiConfiguration(response , "API") ) 
  //   })
  //  }


  //  const apiTesting = () => {
  //   fetchDataFromApi("/movie/now_playing")
  //     .then((response) => {
  //       // Convert the response data to a JavaScript object
  //       const responseData = JSON.parse(JSON.stringify(response));
  //       console.log(responseData, "ConsoleData");
  //       dispatch(getApiConfiguration(responseData, "ResponseData"));
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };

 console.log(useFetch,"Fetch");
  return (
    <View style={{flex:1, backgroundColor:'lightblue'}} >
      {/* <Image  source={require('../../assets/Images/Apple.png')} style={styles.image} /> */}
      {/* <ImageBackground style={styles.image}  source={require('../../assets/Images/Apple.png')}> */}
      {/* <ImageBackground style={styles.image}  source={{uri:url.poster_path}}> */}

        {/* so that everything can allign */}
        <View style={{ justifyContent:'center', alignItems:'center',  height: responsiveHeight(40)}}>
         <Text style={{fontSize: 70 , color:'white'}}>Welcome</Text> 
         <Text style={{fontSize: 20 , color:'white'}}>Watch Millions of movies & TV shows</Text> 
         <Text style={{fontSize: 70 , color:'white'}}>{url.total_pages}</Text> 

        <View style={{display:'flex', flexDirection:'row' , justifyContent:'center'}}> 
        <TextInput style={styles.input} 
         placeholder='Search Movies'
         keyboardType= 'default'
         />
         
         <TouchableOpacity style={{backgroundColor:'green' , justifyContent:'center',  borderTopRightRadius:20,
      borderBottomRightRadius:20, padding:10}}>
         <Text style={{color:'white'}}> Search </Text>  
         </TouchableOpacity>
         </View>
        </View>
                   

      {/* </ImageBackground> */}
      
        {/* Poster */}
       {/* <FlatList 
       horizontal
       showsHorizontalScrollIndicator={false}
       data={Movie}
       renderItem={ ({item})  => (
 
        <ImageBackground source={{ uri:item.img}} style={styles.image}> 


         <TextInput style={styles.input} 
         placeholder='Search Movies'
         keyboardType= 'default'
         />
        </ImageBackground>
        
        

       )}
       
       /> */}


    
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
        // resizeMode: 'contain',
        // backgroundColor:'red',
        // marginLeft:50,
        justifyContent:'center',
        // alignItems:'center',
        
    },
    input:{
      height:responsiveHeight(6),
      width: responsiveWidth(70),
      padding:12,
      backgroundColor:'white',
      color:'black',
      // borderRadius: 20,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      
    }
})