export const AuthActionTypes = {
	REGISTER: '@AUTH/REGISTER',
	REGISTER_SUCCESS: '@AUTH/REGISTER_SUCCESS',
	REGISTER_FAILURE: '@AUTH/REGISTER_FAILURE',
	LOGIN: '@AUTH/login',
	LOGIN_SUCCESS: '@AUTH/LOGIN_SUCCESS',
	LOGIN_FAILURE: '@AUTH/LOGIN_FAILURE',
};

export const register = (name, email, password, avatar) => {
	return {
		type: AuthActionTypes.LOGIN,
		payload: { name, email, password, avatar },
	};
};

export const registerSuccess = (user) => {
	return {
		type: AuthActionTypes.LOGIN,
		payload: user,
	};
};

export const registerError = (error) => {
	return {
		type: AuthActionTypes.LOGIN,
		payload: error,
	};
};
