import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from '~/components';
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
      drawerContent={prop => <CustomDrawerContent {...prop} />}>
      {drawerStacks.map(screen => (
        //@ts-ignore
        <DrawerNav.Screen key={screen.name} {...screen} />
      ))}
    </DrawerNav.Navigator>
  );
};

export default DrawerStack;
