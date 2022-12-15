import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Subnav from './Subnav';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function AuthNav() {
console.log(Stack);
  return (

    <Stack.Navigator screenOptions={{ headerTitle: 'Hotel Rajkumar',
    headerStyle: {
      backgroundColor: 'orange'
    }
    }} initialRouteName = {ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.HOME} component={Subnav} options={{headerShown: false}}/>


     
    </Stack.Navigator>
  );
};

export default AuthNav;