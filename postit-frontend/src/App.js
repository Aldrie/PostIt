import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from 'state';
import Routes from 'routes';

import lightTheme from 'styles/themes/light';
import { GlobalStyle } from 'styles/globalStyle';
import { PersistGate } from 'redux-persist/integration/react';
// import darkTheme from 'styles/themes/dark';

function App() {
  return (
    <Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={lightTheme}>
					<GlobalStyle />
					<Routes />
				</ThemeProvider>
			</PersistGate>
		</Provider>
  );
}

export default App;
