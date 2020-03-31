import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '~/components/LoginComponent';
import RegisterComponent from '~/components/RegisterComponent';

const Stack = createStackNavigator();

const AuthRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginComponent} />
    <Stack.Screen name="Register" component={RegisterComponent} />
  </Stack.Navigator>
);

export default AuthRoutes;
