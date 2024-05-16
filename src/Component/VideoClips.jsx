import { View, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useState, useRef, useCallback } from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import YoutubeIframe from 'react-native-youtube-iframe';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
    responsiveWidth,
    responsiveHeight,
} from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from '../Component/Header';

import CardsTitle from './CardsTitle';
import { Text, withTheme } from 'react-native-paper';

const VideoClips = ({ route, particularMovieData, theme }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [movieVideo, setMovieVideo] = useState([]);
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('video has finished playing!');
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    // const id = route.params.id;
    const id = particularMovieData.id;

    // console.log(id,"videoPlayer");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4',
        },
    };

    fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            //console.log(response)
            setMovieVideo(response.results);
        })
        .catch((err) => console.error(err));

    return (
        // <ScrollView>
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={[
                    theme.colors.primaryContainer,
                    theme.colors.primaryContainer,
                ]}
                style={{
                    borderRadius: 5,
                    marginBottom: 50,
                    paddingTop: 5
                }}
            >
                <Text
                    variant='headlineSmall'
                    style={{ textAlign: 'center', marginBottom: 5 }}
                >
                    Video Clips
                </Text>

                <FlatList
                    horizontal
                    data={movieVideo}
                    renderItem={({ item }) => (
                        <View style={{
                          marginRight: 5,
                          overflow: 'hidden',
                          height: 210
                        }}>
                            <YoutubePlayer
                                // 200 is it's peak point
                                height={200}
                                width={responsiveWidth(80)}
                                play={playing}
                                videoId={`${item.key}`}
                                onChangeState={onStateChange}
                                style={{ backgroundColor: 'green' }}
                            />
                        </View>
                    )}
                />
            </LinearGradient>
        </SafeAreaView>
    );
};
{
    /* </ScrollView> */
}
export default withTheme(VideoClips);

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        height: responsiveHeight(80),
    },
});
