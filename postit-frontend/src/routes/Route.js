import React, { useState, useEffect, memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CustomRoute = ({ component: Component, layout: Layout, isPrivate, ...rest }) => {

	const authState = useSelector(state => state.auth);

	const [auth, setAuth] = useState(localStorage.getItem('token'));

	useEffect(() => {
		setAuth(localStorage.getItem('token'));
	}, [authState]);
	
	return(
		<Route {...rest}
		render={(props) => 
			isPrivate ? auth
				? (
					<Layout>
						<Component {...props}/>
					</Layout>
				) : (
					<Redirect to="/"/>
				)
				: !auth ? (
					<Layout>
						<Component {...props}/>
					</Layout>
				) 
				:(
					<Redirect to="/posts"/>
				)
			}
		/>
	);
}

export default memo(CustomRoute);
