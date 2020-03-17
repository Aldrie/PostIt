import React from 'react';
import { BrowserRouter, Switch, Redirect, Route as DomRoute } from 'react-router-dom';

import Route from 'routes/Route';

import AuthPage from 'pages/Auth';
import HomePage from 'pages/Home';

import LoginContainer from 'containers/Auth/LoginContainer';
import RegisterContainer from 'containers/Auth/RegisterContainer';
import PresentationComponent from 'components/Presentation';

import CreateContainer from 'containers/CreateContainer';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import UserContainer from 'containers/UserContainer';

const Routes = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact layout={AuthPage} component={PresentationComponent}/>
				
				<Route path="/login" exact layout={AuthPage} component={LoginContainer}/>
				<Route path="/register" exact layout={AuthPage} component={RegisterContainer}/>
				
				<Route path="/posts" exact layout={HomePage} component={PostsContainer} isPrivate/>
				<Route path="/posts/:id" exact layout={HomePage} component={PostContainer} isPrivate/>

				<Route path="/create" exact layout={HomePage} component={CreateContainer} isPrivate/>

				<Route path="/users/:id" exact layout={HomePage} component={UserContainer} isPrivate/>

				<DomRoute path="*" component={() => <Redirect to="/"/>} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
