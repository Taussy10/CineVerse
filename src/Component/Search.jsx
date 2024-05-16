import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
    Pressable,
    ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import { withTheme } from 'react-native-paper';

const Search = ({ navigation, theme }) => {
    const borderRadius = 5;
    const spacing = 10;

    const styles = StyleSheet.create({
        searchContainer: {
            // Enable it go get search bar in row
            flexDirection: 'row',
            paddingHorizontal: spacing * 2,
            marginBottom: spacing * 2
        },
        input: {
            height: responsiveHeight(6),
            width: responsiveWidth(75),
            paddingHorizontal: spacing * 2,
            paddingVertical: spacing,
            backgroundColor: theme.colors.background,
            color: theme.colors.onBackground,
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
        },
        searchButton: {
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            padding: 10,
        },
        searchButtonText: {
            color: theme.colors.onPrimary,
        },
    });
    // to store API response  that is coming form API so that we can use it later

    //3. In intially searchResults will have [API data]
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setloading] = useState(false);
    // by using useEffect when something will happen{Changing searhResults in input tag{that's why in arra we have search results}} it will render the data
    useEffect(() => {
        if (searchResults.length > 0) {
            navigation.navigate('SearchScreen', {
                data: searchResults,
            });
        }
    }, [searchResults]);

    //  to store searchInputs that you wrote so why it stored in the string:
    // When the user submits the search query, you typically use it as a parameter
    // in your API request. APIs usually expect search queries as strings.
    const [searchInput, setSearchInput] = useState('');
    // searchInput

    function fetchSearchResults() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4',
            },
        };

        fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                // 2. API respnse results saves in setSearchResults array
                setSearchResults(response.results);
                // console.log(response);
            })
            .catch((err) => console.error(err));
    }

    // Why I need: I click handlesearch function then api will work{give the data}
    // 1. when I click API function respond and give data
    const handleSearch = () => {
        fetchSearchResults();
    };
    return (
        <View style={{ height: responsiveHeight(7) }}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Search movies'
                    keyboardType='default'
                    value={searchInput}
                    //  Whenver the text change{in input tag} this functions occurs
                    // value is an parameter that we replaces with value
                    onChangeText={(text) => setSearchInput(text)} // Update here
                />

                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={handleSearch}
                >
                    <Text style={{ color: 'white' }}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default withTheme(Search);
