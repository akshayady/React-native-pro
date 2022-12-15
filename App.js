import { Text, View } from 'react-native'
import React, { Component } from 'react'
import 'react-native-gesture-handler';
import AuthNav from './components/Navigate/AuthNav';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
              <AuthNav /> 

      </NavigationContainer>
    )
  }
}