import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { register } from 'state/ducks/auth/auth.actions';

import RegisterComponent from 'components/Auth/Register';

const RegisterContainer = () => {
	const dispatch = useDispatch();
	const authState = useSelector(state => state.auth);

	const dispatchToProps = {
		register: useCallback(
			(name, email, password, avatar) => 
			dispatch(
				register(name, email, password, avatar)
			), [dispatch]),
	};

	const stateToProps = {
		loading: authState.loading,
	};

	return (
		<RegisterComponent {...dispatchToProps} {...stateToProps} />
	);
};

export default RegisterContainer;
