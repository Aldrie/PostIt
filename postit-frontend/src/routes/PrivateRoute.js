import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ ...rest }) => {
	return <Route {...rest}/>
}

export default PrivateRoute;
