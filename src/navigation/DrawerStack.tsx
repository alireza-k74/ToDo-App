//Main navigation route
import React from 'react';
import {scale} from 'react-native-size-matters';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '~/screens';

export type UserDrawerStackParamList = {
  Home: undefined;
};

export const drawerStacks = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {headerShown: false},
  },
];

const DrawerNav = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={
        {
          // headerShown: true,
          // swipeEnabled: true,
          // overlayColor: 'transparent',
          // drawerStyle: {
          //   backgroundColor: 'transparent',
          //   borderTopRightRadius: scale(30),
          //   borderBottomRightRadius: scale(30),
          // },
        }
      }
      //   drawerContent={() => <Menu />}
    >
      {drawerStacks.map(screen => (
        //@ts-ignore
        <DrawerNav.Screen key={screen.name} {...screen} />
      ))}
    </DrawerNav.Navigator>
  );
};

export default DrawerStack;
