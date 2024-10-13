import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
