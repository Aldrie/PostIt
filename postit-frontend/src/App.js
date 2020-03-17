import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';

import lightTheme from 'styles/themes/light';
import { GlobalStyle } from 'styles/globalStyle';
// import darkTheme from 'styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
  );
}

export default App;
