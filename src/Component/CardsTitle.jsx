import { StyleSheet, View } from 'react-native';
import React from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, withTheme } from 'react-native-paper';

const CardsTitle = ({ name, theme }) => {
    const spacing = 10;

    return (
        <View
            style={{
                flex: 1,
                padding: spacing,
                background: theme.colors.primaryContainer,
            }}
        >
            <Text
                variant='titleLarge'
                style={{
                    color: theme.colors.primary,
                }}
            >
                {name}
            </Text>
        </View>
    );
};

export default withTheme(CardsTitle);

const styles = StyleSheet.create({});
