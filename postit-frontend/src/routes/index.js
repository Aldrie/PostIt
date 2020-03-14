import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import AuthPage from 'pages/Auth';
import LoginContainer from 'containers/Auth/LoginContainer';
import RegisterContainer from 'containers/Auth/RegisterContainer';
import PresentationPage from 'pages/Presentation';

const Routes = () => {
	return(
		<BrowserRouter>
			<Route path="/" exact component={PresentationPage}/>

			<Route path="/auth">
				<AuthPage>
					<Switch>
						<Route path="/auth/login" component={LoginContainer} exact/>
						<Route path="/auth/register" component={RegisterContainer} exact/>
					</Switch>
				</AuthPage>
			</Route>
		</BrowserRouter>
	);
}

export default Routes;
