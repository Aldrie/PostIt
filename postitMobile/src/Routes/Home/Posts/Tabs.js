import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Create from '~/components/Create';
import Posts from '~/components/Posts';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Main" component={Posts} />
    <Tab.Screen name="Create" component={Create} />
  </Tab.Navigator>
);

export default Tabs;
