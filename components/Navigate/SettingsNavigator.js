import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import Profile from '../screens/profile';
import Settings from '../screens/SettingsDetail';

const Stack = createStackNavigator();

function SettingsNavigator() {
    console.log(Stack);
  return (
    <Stack.Navigator 
    screenOptions={{
     headerShown : false,
    }}
    initialRouteName={ROUTES.LOGIN} >
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={Settings} />

    </Stack.Navigator>
  );
};


export default SettingsNavigator;

