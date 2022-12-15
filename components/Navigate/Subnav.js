import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { ROUTES } from '../constants';
import Menu from '../screens/Menu';
import Profile from '../screens/profile';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

function Subnav() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={ROUTES.HOME} component={Home } />
      <Tab.Screen name={ROUTES.MENU} component={Menu } />
      {/* <Tab.Screen name={ROUTES.PROFILE} component={Profile } /> */}
      <Tab.Screen name={ROUTES.SETTINGS_NAVIGATOR} component={SettingsNavigator }options={{headerShown: false}} />


    </Tab.Navigator>
  );
}

export default Subnav;

// 