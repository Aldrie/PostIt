import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Route from 'routes/Route';

import AuthPage from 'pages/Auth';
import HomePage from 'pages/Home';

import LoginContainer from 'containers/Auth/LoginContainer';
import RegisterContainer from 'containers/Auth/RegisterContainer';
import PresentationComponent from 'components/Presentation';

const Routes = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact layout={AuthPage} component={PresentationComponent}/>
				
				<Route path="/auth/login" exact layout={AuthPage} component={LoginContainer}/>
				<Route path="/auth/register" exact layout={AuthPage} component={RegisterContainer}/>
				
				<Route path="/home" exact layout={HomePage} component={() => <span>Home</span>}/>
				<Route path="/home/create" exact layout={HomePage} component={() => <span>Create</span>}/>

				<Route component={() => <Redirect to="/"/>} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
