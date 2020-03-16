import React, { memo } from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = ({ component: Component, layout: Layout, ...rest }) => {
	return(
		<Route {...rest}
		render={(props) => Layout ? 
		<Layout>
			<Component {...props}/>
		</Layout> 
		:	<Component {...props}/>}
		/>
	);
}

export default memo(CustomRoute);
