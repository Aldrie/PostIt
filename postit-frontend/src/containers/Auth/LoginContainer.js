import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'state/ducks/auth/auth.actions';

import LoginComponent from 'components/Auth/Login';

const LoginContainer = () => {
	const dispatch = useDispatch();

	const dispatchToProps = {
		login: useCallback((email, password) => dispatch(login(email, password)), [dispatch]),
	};
	
	return (
		<LoginComponent {...dispatchToProps} />
	);
};

export default LoginContainer;
