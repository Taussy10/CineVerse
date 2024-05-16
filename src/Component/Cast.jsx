import { StyleSheet, View, FlatList, Image, Pressable } from 'react-native';
import React from 'react';
import {
    responsiveWidth,
    responsiveHeight,
} from 'react-native-responsive-dimensions';
import { Surface, Text, withTheme } from 'react-native-paper';

const Cast = ({ data, navigation, theme }) => {
    const nullImage = (
        <Image
            source={require('../../assets/Images/avatar.png')}
            style={{
                borderRadius: 62.5,
                height: 125,
                width: 125,
                resizeMode: 'stretch',
            }}
        />
    );
    return (
        <View style={{ flex: 1 }}>
            <Text
                variant='headlineMedium'
                style={{
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 5,
                }}
            >
                Top Cast
            </Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10,
                            marginBottom: 20,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                    >
                        {/* Adjust this part to display the cast details */}
                        <Surface
                            elevation={2}
                            style={{
                                borderRadius: 52,
                                height: 104,
                                width: 104,
                                borderColor: theme.colors.primary,
                                borderWidth: 2,
                            }}
                        >
                            <View>
                                {/* for js code different curly and for uri diffrent curly */}
                                <Pressable
                                    onPress={() =>
                                        navigation.push('CastDetails', {
                                            data: item,
                                            name: 'Tausif',
                                        })
                                    }
                                >
                                    <Image
                                        source={
                                            item.profile_path
                                                ? {
                                                      uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
                                                  }
                                                : require('../../assets/Images/avatar.png')
                                        }
                                        style={styles.profileImage}
                                    />
                                </Pressable>
                                <Text
                                    variant='labelMedium'
                                    style={{
                                        color: theme.colors.secondary,
                                        marginTop: 8,
                                        textAlign: 'center',
                                    }}
                                >
                                    {item.original_name}
                                </Text>
                            </View>
                        </Surface>
                    </View>
                )}
            />
        </View>
    );
};

export default withTheme(Cast);

const styles = StyleSheet.create({
    profileImage: {
        borderRadius: 50,
        height: 100,
        width: 100,
        resizeMode: 'cover',
    },
});
