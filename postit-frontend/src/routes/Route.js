import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CustomRoute = ({ component: Component, layout: Layout, isPrivate, ...rest }) => {

	const auth = useSelector(state => state.auth.token);
	
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
