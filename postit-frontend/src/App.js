import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';

import lightTheme from 'styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
			<Routes />
		</ThemeProvider>
  );
}

export default App;
