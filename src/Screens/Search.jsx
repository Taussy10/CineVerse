

import { StyleSheet, Text, View , TextInput, FlatList, TouchableOpacity, ScrollView, Image, Pressable} from 'react-native'
import React,{useState, useEffect} from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Component/Header'
import { StatusBar } from 'expo-status-bar'

const Search = ({navigation}) => {
// to store API response  that is coming form API so that we can use it later

//3. In intially searchResults will have [API data]
const [searchResults, setSearchResults] = useState([]);



//  to store searchInputs that you wrote so why it stored in the string: 
// When the user submits the search query, you typically use it as a parameter 
// in your API request. APIs usually expect search queries as strings.
const [searchQuery, setSearchQuery] = useState('');
    
// useEffect(() => {
//  fetchSearchResults()
// }, [])


    function fetchSearchResults() {  
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
        .then(response =>{
          // 2. API respnse results saves in setSearchResults array
          setSearchResults(response.results)
          console.log(response) })
        .catch(err => console.error(err));
}

// Why I need: I click handlesearch function then api will work{give the data}
// 1. when I click API function respond and give data
   const handleSearch = () => {
     fetchSearchResults();
 };
//  console.log(fetchSearchResults()


//  , "Search");

// console.log(searchResults(), "searchresults");
  return (
  
  <View style={{flex:1,marginTop:30,  }}>
    <StatusBar/>
    <Header/>
 
   <View style={styles.searchContainer}>




      <TextInput style={styles.input} 
     placeholder='Search Movies'
     keyboardType= 'default'
     value={searchQuery}
    //  Whenver the text change{in input tag} this functions occurs
    // value is an parameter that we replaces with value 
    onChangeText={text => setSearchQuery(text)} // Update here
     />

     <TouchableOpacity style={{backgroundColor:'green' , justifyContent:'center',  borderTopRightRadius:20,
  borderBottomRightRadius:20, padding:10}}
      onPress={()=> { handleSearch(); 
        // navigation.navigate("Search") 
       }}
      // onPress={() => {
      //   handleSearch();
      //   navigation.navigate('Search'); // Navigate to the Search tab after searching
      // }}
   >
  <Text style= {{color: 'white',}}>Search</Text>
      </TouchableOpacity>
      </View>

   


<FlatList 
data={searchResults}
keyExtractor={(item) => item.id.toString()}
renderItem={({item}) => (
 <View style={{flex:1, backgroundColor:'red', }}>
   <LinearGradient 
          colors={['#141E30', "white",'#243B55']} 
          >
              {/* <Pressable  onPress={() => {navigation.navigate("Details2", {
    data:searchResults
  }) 
} 
}> */}
  
 <Image source={item.backdrop_path ?{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}: require("../../assets/Images/no-results.png") } style={styles.image} />
 {/* </Pressable> */}

 <Text style={{color:'white' , fontSize:20, fontWeight:'600', textAlign:'center', marginVertical:5,}}>{item.title}</Text>

 </LinearGradient>
             {/* <Text style={{color:'white'}}>Hello</Text> */}
    </View>
)}
/>

     </View>
  )
}

export default Search

const styles = StyleSheet.create({
  
  searchContainer: {
    // Enable it go get search bar in row
    flexDirection: 'row',
    marginLeft: 20,
    //  justifyContent:'space-between',
    //  alignItems:'center'
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
  searchButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },
  searchButtonText: {
    color: 'white',
  },
  resultItem: {
    // paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  image:{
    height: responsiveHeight(30),
    width: responsiveWidth(90),
    resizeMode: 'contain',
    // backgroundColor:'red',
    borderRadius: 40,
    // backgroundColor:'red',
    margin:10,
    // padding:50,
},
});