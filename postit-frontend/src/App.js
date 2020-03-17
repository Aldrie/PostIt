import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'state';
import Routes from 'routes';

import lightTheme from 'styles/themes/light';
import { GlobalStyle } from 'styles/globalStyle';
// import darkTheme from 'styles/themes/dark';

function App() {
  return (
    <Provider store={store}>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<Routes />
			</ThemeProvider>
		</Provider>
  );
}

export default App;
