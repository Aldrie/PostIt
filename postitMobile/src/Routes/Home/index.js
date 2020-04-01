import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PostRoutes from './Posts';
import CustomDrawer from '~/components/CustomDrawer';
import Settings from '~/components/Settings';

const Drawer = createDrawerNavigator();

const HomeRoutes = () => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="Posts" component={PostRoutes} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
);

export default HomeRoutes;
