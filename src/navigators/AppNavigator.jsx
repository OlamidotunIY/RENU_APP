import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/StartScreen';
import routes from './routes';
import UserProvider from '../context/UserProvider';

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }} >
            <AppStack.Group >
                <AppStack.Screen name="Start" component={StartScreen} />
            </AppStack.Group>
            <AppStack.Group >
                <AppStack.Screen name={routes.AUTH_NAVIGATOR.SIGNUPNAVIGATOR} component={UserProvider} />
            </AppStack.Group>
        </AppStack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator

const styles = StyleSheet.create({})
