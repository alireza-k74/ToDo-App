import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationRef} from './methods';
import {LoginScreen, SignUpScreen, SplashScreen} from '~/screens';

export type MainStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
};

export const mainStack = [
  {
    name: 'Splash',
    component: SplashScreen,
    options: {headerShown: false},
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: {headerShown: false},
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
    options: {headerShown: false},
  },
];

const Stack = createNativeStackNavigator();

export default function RootScreen() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {mainStack.map(screen => (
          //@ts-ignore
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
