import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import {DrawerScreen} from '../screens/drawer';
import {Dashboard} from '.././screens/adminscreens';
export const Drawernavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault={false}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};
