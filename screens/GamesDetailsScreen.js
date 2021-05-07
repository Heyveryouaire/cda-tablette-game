import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GamesDetailsScreen = ({ route, navigation }) => {
    const {game} =  route.params;
    console.log(game)
    return(
        <SafeAreaView>
            <ScrollView>
                <Text>{game.title}</Text>
                <Text>{game.paragraphe}</Text>
            </ScrollView>
        </SafeAreaView>

    )
}

export default GamesDetailsScreen;