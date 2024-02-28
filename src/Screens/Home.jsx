import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Poster from '../Component/Poster'
import CardsTitle from '../Component/CardsTitle'
import Cards from '../Component/Cards'
import Header from '../Component/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { getNowPlayingMovies } from '../Network/Network'
import { getPopularMovies } from '../Network/Network'

const Home = ({navigation}) => {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  // const [topRatedMoviesData, setTopRatedMoviesData] = useState([]);
  // const [upComingMoviesData, setUpComingMoviesData] = useState([]);

  useEffect(() => {
    const handleApi = async () => {
      try {
        const { data, status } = await getNowPlayingMovies();
        if (status === 200) {
          setNowPlayingData(data.results);
        } else {
          Alert.alert(`Request failed with ${data}`);
        }
      } catch (error) {
        console.log(error);
        Alert.alert(`Request failed with error: ${error.message}`);
      }
    };

    handleApi();
  }, [])

  useEffect(() => {
    const handleApi = async () => {
      try {
        const { data, status } = await getPopularMovies();
        if (status === 200) {
          setPopularMoviesData(data.results);
        } else {
          Alert.alert(`Request failed with ${data}`);
        }
      } catch (error) {
        console.log(error);
        Alert.alert(`Request failed with error: ${error.message}`);
      }
    };

    handleApi();
  })

  // useEffect(() => {
  //   const handleApi = async () => {
  //     try {
  //       const { data, status } = await getTopRatedMovies();
  //       if (status === 200) {
  //         setTopRatedMoviesData(data.results);
  //       } else {
  //         Alert.alert(`Request failed with ${data}`);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       Alert.alert(`Request failed with error: ${error.message}`);
  //     }
  //   };

  //   handleApi();
  // })


  return (
    // VirtualizedLists should never be nested inside plain ScrollViews with the same orientation 
    // because it can break windowing and other functionality - use another VirtualizedList-backed container instead.
    // Basically you can't nest flatList{VirtualisedLists} inside scrollView so put scrollView top then safeAreaView
    <ScrollView > 
    <SafeAreaView style={{flex:1 }}>
        <Header/>
      {/* <Text>Hello</Text> */}

        <Poster />

      <CardsTitle name ="Trending Movies" />
      
      <Cards navigation={navigation} data={nowPlayingData} />
      <CardsTitle name ="Latest Movies"  />
      <Cards navigation={navigation} data={popularMoviesData} />
     
    </SafeAreaView>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { LinearGradient } from 'expo-linear-gradient'
// import { SafeAreaView } from 'react-native-safe-area-context'
// const Home = () => {
//   return (
//     // backgroundColor:'red',
//     <SafeAreaView style={{ flex:1}}>
       
     
//       <LinearGradient
//       colors={['#bdc3c7', '#89fffd']}

//       style={{height:'100%'}}

//       > 
//   <Text>Home</Text>
   
//       </LinearGradient>

      
//     </SafeAreaView>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})