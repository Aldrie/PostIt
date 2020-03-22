import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { register } from 'state/ducks/auth/auth.actions';

import RegisterComponent from 'components/Auth/Register';

const RegisterContainer = () => {
	const dispatch = useDispatch();

	const dispatchToProps = {
		register: useCallback(
			(name, email, password, avatar) => 
			dispatch(
				register(name, email, password, avatar)
			), [dispatch]),
	};
	return (
		<RegisterComponent {...dispatchToProps}/>
	);
};

export default RegisterContainer;
