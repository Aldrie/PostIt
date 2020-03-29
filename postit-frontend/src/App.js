import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { store, persistor } from 'state';
import { changeTheme } from 'state/ducks/auth/auth.actions';
import Routes from 'routes';

import lightTheme from 'styles/themes/light';
import { GlobalStyle } from 'styles/globalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import darkTheme from 'styles/themes/dark';

function App() {

	const [theme, setTheme] = useState('');

	useEffect(() => {
		setTheme(store.getState().auth.theme);
		window.changeTheme = () => {
			store.dispatch(changeTheme());
			setTheme(store.getState().auth.theme);
		};
	}, []);

  return (
    <Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider
					theme={
						theme === 'light' ?
						lightTheme : darkTheme 
					}
				>
					<GlobalStyle />
					<ToastContainer />
					<Routes />
				</ThemeProvider>
			</PersistGate>
		</Provider>
  );
}

export default App;
