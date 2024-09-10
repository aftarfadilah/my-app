import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import Favourite from './favourite';
import Boxoffice from './boxoffice';

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="home" component={Home}
                     options={{ drawerLabel: 'Home' }} />
     <Drawer.Screen name="Favourite" component={Favourite}
                     options={{ drawerLabel: 'Favourite' }} />
     <Drawer.Screen name="Boxoffice" component={Boxoffice}
                     options={{ drawerLabel: 'Box Office' }} />
   </Drawer.Navigator>
  );
}

