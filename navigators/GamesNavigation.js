import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import ListGamesScreen from '../screens/ListGamesScreen';
import GamesDetailsScreen from '../screens/GamesDetailsScreen';

export default function GamesNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        initialRouteName= 'games'     
        >
            <Stack.Screen name="games" component={ListGamesScreen} options={{headerShown: false}} />
            <Stack.Screen name="gamesDetails" component={GamesDetailsScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}