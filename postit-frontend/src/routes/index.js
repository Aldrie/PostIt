import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import AuthPage from 'pages/Auth';
import HomePage from 'pages/Home';

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
						<Route component={() => <Redirect to="/"/>}/>
					</Switch>
				</AuthPage>
			</Route>
			
			<Route path="/home">
				<Switch>
					<HomePage>
						<Route path="/home" exact component={() => <span>Home</span>}/>
						<Route path="/home/posts" exact component={() => <span>Posts</span>}/>
					</HomePage>
				</Switch>
			</Route>
		</BrowserRouter>
	);
}

export default Routes;
