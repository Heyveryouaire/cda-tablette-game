import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExampleScreen from '../screens/ExampleScreen';
import GamesNavigation from './../navigators/GamesNavigation';

export default function Navigator() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="example" component={ExampleScreen} options={{headerShown: false}} />
                {/* <Tab.Screen name="home" component={HomeScreen} options={{headerShown: false}} /> */}
                <Tab.Screen name="Jeux" component={GamesNavigation} options={{headerShown: false}} />
                {/* <Tab.Screen name="messagerie" component={MessagerieScreen} options={{headerShown: false}} />
                <Tab.Screen name="setting" component={SettingScreen} options={{headerShown: false}} />
                <Tab.Screen name="help" component={HelpsScreen} options={{headerShown: false}} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}