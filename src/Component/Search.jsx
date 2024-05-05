

import { StyleSheet, Text, View , TextInput, FlatList, TouchableOpacity, ScrollView, Image, Pressable, ActivityIndicator} from 'react-native'
import React,{useState, useEffect} from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { LinearGradient } from 'expo-linear-gradient'
import Header from './Header'
import { StatusBar } from 'expo-status-bar'

const Search = ({navigation}) => {
// to store API response  that is coming form API so that we can use it later

//3. In intially searchResults will have [API data]
const [searchResults, setSearchResults] = useState([]);
const [loading, setloading] = useState(false)
// by using useEffect when something will happen{Changing searhResults in input tag{that's why in arra we have search results}} it will render the data
useEffect(() => {
  if (searchResults.length > 0) {
    navigation.navigate("SearchScreen", {
      data: searchResults,
    });
  }
}, [searchResults]);


//  to store searchInputs that you wrote so why it stored in the string: 
// When the user submits the search query, you typically use it as a parameter 
// in your API request. APIs usually expect search queries as strings.
const [searchInput, setSearchInput] = useState('');
// searchInput
    
// useEffect(() => {
//  fetchSearchResults()
// }, [fetchSearchResults])


    function fetchSearchResults() {  
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`, options)
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
    //  navigation.navigate("SearchScreen",{
    //   data: searchResults,
    // }) 
 };
//  console.log(fetchSearchResults() , "HELlo")


//  , "Search");

// console.log(searchResults(), "searchresults");
  return (
  
  <View style={{flex:1,marginTop:5,  }}>
    <StatusBar/>
 
   <View style={styles.searchContainer}>



      <TextInput style={styles.input} 
 
      
     placeholder='Search Movies....'
     keyboardType= 'default'
     value={searchInput}
    //  Whenver the text change{in input tag} this functions occurs
    // value is an parameter that we replaces with value 
    onChangeText={text => setSearchInput(text)} // Update here
     />

<TouchableOpacity style={{backgroundColor:'green' , justifyContent:'center',  borderTopRightRadius:20,
  borderBottomRightRadius:20, padding:10}}

  // Bad approach
  // onPress={()=> { handleSearch(); 
  //   navigation.navigate("SearchScreen",{
  //     data: searchResults,
  //   }) 
  //  }}

  onPress={handleSearch}
  >


  <Text style= {{color: 'white',}}>Search</Text>
      </TouchableOpacity>


      </View>
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
 

});