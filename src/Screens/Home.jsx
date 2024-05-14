import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Poster from '../Component/Poster';
import CardsTitle from '../Component/CardsTitle';
import Cards from '../Component/Cards';
import Header from '../Component/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { getNowPlayingMovies } from '../Network/Network';
import { getPopularMovies } from '../Network/Network';
import Search from '../Component/Search';
import { withTheme } from 'react-native-paper';

const Home = ({ navigation, theme }) => {
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
    }, []);

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
    });

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
        // <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                {/* <Text>Hello</Text> */}
                <Search navigation={navigation} />

                <ScrollView>
                    <Poster />

                    <View style={styles.bodyContent}>
                        <CardsTitle name='Trending Movies' />

                        <Cards
                            navigation={navigation}
                            data={nowPlayingData}
                        />
                        <CardsTitle name='Latest Movies' />
                        <Cards
                            navigation={navigation}
                            data={popularMoviesData}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        // </ScrollView>
    );
};

export default withTheme(Home);

const styles = StyleSheet.create({
    bodyContent: {
        paddingVertical: 15,
    },
});
