import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Tabs';

const Stack = createStackNavigator();

const PostRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={Tabs} />
  </Stack.Navigator>
);

export default PostRoutes;
