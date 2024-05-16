import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    FlatList,
    StatusBar,
    Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import Cast from '../Component/Cast';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Component/Header';
import SimillarMovies from '../Component/SimillarMovies';
import VideoClips from '../Component/VideoClips';
import { Text, withTheme } from 'react-native-paper';

// ()

const MovieDetails = ({ route, navigation, theme }) => {
    const [cast, setCast] = useState([]);
    // route.params.parameterName

    useEffect(() => {
        console.log(fetchData(), 'hello');
        // console.log(cast, 'cast');
    }, []);
    const data = route.params.data;

    //  console.log(data, "Data of movies");

    const id = data.id;
    // console.log(id, 'Id from Details');

    function fetchData() {
        // console.log(id);
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4',
            },
        };

        fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                setCast(response.cast);
                console.log(response, 'response');
            })
            .catch((err) => console.error(err));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ paddingHorizontal: 10 }}>
                <LinearGradient
                    colors={[
                        theme.colors.elevation.level1,
                        theme.colors.elevation.level1,
                    ]}
                >
                    <Image
                        style={styles.posterImage}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
                        }}
                    />
                    <Text
                        variant='bodyLarge'
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                        }}
                    >
                        {data.overview.slice(0, 142)}...{' '}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 5,
                            marginTop: 30,
                        }}
                    >
                        <Text
                            variant='titleMedium'
                            style={{
                                color: theme.colors.secondary,
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            Language
                        </Text>
                        <Text
                            variant='titleMedium'
                            style={{
                                color: theme.colors.secondary,
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            Released date
                        </Text>
                        <Text
                            variant='titleMedium'
                            style={{
                                color: theme.colors.secondary,
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            Rating
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 30,
                        }}
                    >
                        <Text
                            variant='labelSmall'
                            style={{
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            {data.original_language}
                        </Text>
                        <Text
                            variant='labelSmall'
                            style={{
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            {data.release_date}
                        </Text>
                        <Text
                            variant='labelSmall'
                            style={{
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            {data.vote_average}
                        </Text>
                    </View>

                    <View
                        style={{
                            borderTopColor: theme.colors.outline,
                            borderTopWidth: 0.5,
                            borderTopStyle: 'dashed',
                            marginHorizontal: 20,
                        }}
                    >
                        {/* <Text style={{fontSize:20 }}>Rating</Text> */}
                    </View>
                    <Cast
                        data={cast}
                        navigation={navigation}
                    />

                    <VideoClips particularMovieData={data} />
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};

export default withTheme(MovieDetails);

const styles = StyleSheet.create({
    posterImage: {
        height: responsiveHeight(70),
        // width: responsiveWidth(90),
        borderRadius: 10,
        // resizeMode: 'repeat'
    },
});
