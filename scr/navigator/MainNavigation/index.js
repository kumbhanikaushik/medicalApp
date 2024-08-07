
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../BottomNavigation';
import { Alert } from 'react-native';

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
            <NavigationContainer>
                <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
                    {/* {!userData.token ? (
                        <Stack.Screen name="Login" component={LoginScreen} />
                    ) : (
                        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
                    )} */}
                    <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default MainNavigation;
