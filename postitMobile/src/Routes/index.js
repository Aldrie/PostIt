import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import AuthRoutes from './AuthRoutes';

import lightTheme from '~/styles/themes/light';

const Routes = () => (
  <ThemeProvider theme={lightTheme}>
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  </ThemeProvider>
);

export default Routes;
