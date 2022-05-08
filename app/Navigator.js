import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import reg from './helpers/reg';
import { SignUp, SetupProfile, SelectCountry, Home } from './pages/_index';
import screens from './helpers/screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={reg.screenOptions}>
      <Stack.Screen name={screens.SIGN_UP} component={SignUp} />
      <Stack.Screen name={screens.SET_UP_PROFILE} component={SetupProfile} />
      <Stack.Screen name={screens.SELECT_COUNTRY} component={SelectCountry} />
      <Stack.Screen name={screens.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
