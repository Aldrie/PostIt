import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import lightTheme from '~/styles/themes/light';

import AuthRoutes from './Auth';
import HomeRoutes from './Home';

const Stack = createStackNavigator();

const Routes = () => (
  <ThemeProvider theme={lightTheme}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Auth" component={AuthRoutes} />
          <Stack.Screen name="Home" component={HomeRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </ThemeProvider>
);

export default Routes;
