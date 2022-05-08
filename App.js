/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './app/Navigator';

const App = () => {
  const navigationTheme = {
    colors: {background: 'fff'},
  };
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
