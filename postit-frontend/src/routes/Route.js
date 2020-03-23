import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';

const CustomRoute = ({ component: Component, layout: Layout, isPrivate, ...rest }) => {

	const auth = localStorage.getItem('token');
	
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
