import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationRef} from './methods';
import { SplashScreen } from '~/screens';

export const mainStack = [
  {
    name: 'Splash',
    component: SplashScreen,
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
