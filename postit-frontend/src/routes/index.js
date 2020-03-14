import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import AuthPage from 'pages/Auth';
import LoginContainer from 'containers/LoginContainer';

const Routes = () => {
	return(
		<BrowserRouter>
			<Route path="/">
				<AuthPage>
					<LoginContainer />
				</AuthPage>
			</Route>
		</BrowserRouter>
	);
}

export default Routes;
