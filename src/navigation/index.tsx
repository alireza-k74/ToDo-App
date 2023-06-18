import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LoginScreen,
  SettingsScreen,
  SignUpScreen,
  SplashScreen,
} from '~/screens';
import DrawerStack from './DrawerStack';
import {navigationRef} from './methods';
import {HeaderLeft} from '~/components';
import {Colors} from '~/styles/colors';

export type MainStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Drawer: undefined;
  Settings: undefined;
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
  {
    name: 'Settings',
    component: SettingsScreen,
    options: {headerShown: false},
  },
  {
    name: 'Drawer',
    component: DrawerStack,
    options: {
      headerShown: true,
      title: 'Profile',
      headerTintColor: Colors.black,
      headerLeft: () => <HeaderLeft />,
      headerStyle: {
        borderBottomWidth: 1,
      },
    },
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
