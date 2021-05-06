import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import ExampleScreen from '../screens/ExampleScreen'

export default function Navigator() {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="example" component={ExampleScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}