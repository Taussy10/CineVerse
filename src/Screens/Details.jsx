import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

// () 
const Details = ({route}) => {
  // route.params.parameterName 
    const data = route.params.data;
    console.log(data, "Data of movies");
    return (
      <ScrollView>
    <SafeAreaView style={{flex:1, backgroundColor:'lightblue', padding:20}}>
        {/* <View style={{  backgroundColor:'lightgreen',marginRight:10, marginLeft:10, marginTop:30  }}> */}
      
      <Image style={styles.image} source={{uri:`https://image.tmdb.org/t/p/w500/${data.poster_path}`}}/>
        {/* </View> */}
        <Text style={{fontSize:25, }}>{data.title}</Text>
        <Text style={{fontSize:20 }}>Overview</Text>
        {/* slice{slice means so it cut chars except when you say cut between two chars } function: when you use (10) it will remove first 10 character 
        but if you use (-10) then it will remove last characters but 
        if you use (0,10) it will remove all chacters except 1-10 chars */}
        <Text style={{fontSize:25,}}>{data.overview.slice(0,142)}... </Text>
 
   <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10, marginTop:30, backgroundColor:'lightgreen'}}>
   <Text style={{fontSize:20 }}>Language</Text>
   <Text style={{fontSize:20 }}>Released date</Text>
   <Text style={{fontSize:20 }}>Rating</Text>
   </View>

   <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
   <Text style={{fontSize:20 }}>{data.original_language}</Text>
   <Text style={{fontSize:20 }}>{data.release_date}</Text>
   <Text style={{fontSize:20 }}>{data.vote_average}</Text>
   </View>
    
    <View style={{borderColor:'black', borderWidth:1 }}>
   
    {/* <Text style={{fontSize:20 }}>Rating</Text> */}
       </View>

       <Text style={{fontSize:20 }}>Director: {data.release_date}</Text>
    <Text style={{fontSize:20 }}>Writer: {data.release_date}</Text>
    <Text style={{fontSize:20 }}>{data.release_date}</Text>

{/* You can allign text: center , justify and allignitems works only on parent component */}

     <Text style={{textAlign:'center'}}>Top Cast</Text>
     <View style={{borderRadius:"50%", height: responsiveHeight(10) , width: responsiveWidth(10)  , backgroundColor:"red" }}> 
     
     <Text >Top Cast</Text>
     </View>


    </SafeAreaView>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
    image:{
        height: responsiveHeight(70) ,
        // width: responsiveWidth(90)
    }
})