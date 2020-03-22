import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'state/ducks/auth/auth.actions';

import LoginComponent from 'components/Auth/Login';

const LoginContainer = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.auth);

	const dispatchToProps = {
		login: useCallback((email, password) => dispatch(login(email, password)), [dispatch]),
	};

	const stateToProps = {
		loading: state.loading,
		error: state.error,
	};
	
	return (
		<LoginComponent {...dispatchToProps} {...stateToProps} />
	);
};

export default LoginContainer;
