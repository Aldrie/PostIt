export const AuthActionTypes = {
	REGISTER: '@AUTH/REGISTER',
	REGISTER_SUCCESS: '@AUTH/REGISTER_SUCCESS',
	REGISTER_FAILURE: '@AUTH/REGISTER_FAILURE',

	LOGIN: '@AUTH/LOGIN',
	LOGIN_SUCCESS: '@AUTH/LOGIN_SUCCESS',
	LOGIN_FAILURE: '@AUTH/LOGIN_FAILURE',

	LOGOUT: '@AUTH/LOGOUT'
	
};

export const register = (name, email, password, avatar) => {
	return {
		type: AuthActionTypes.REGISTER,
		payload: { name, email, password, avatar },
	};
};

export const registerSuccess = (user) => {
	return {
		type: AuthActionTypes.REGISTER_SUCCESS,
		payload: user,
	};
};

export const registerFailure = (error) => {
	return {
		type: AuthActionTypes.REGISTER_FAILURE,
		payload: error,
	};
};

export const login = (email, password) => {
	return {
		type: AuthActionTypes.LOGIN,
		payload: { email, password }
	};
}

export const loginSuccess = (user) => {
	return {
		type: AuthActionTypes.LOGIN_SUCCESS,
		payload: user,
	};
}

export const loginFailure = (error) => {
	return {
		type: AuthActionTypes.LOGIN_FAILURE,
		payload: error,
	};
}

export const logOut = (error) => {
	return {
		type: AuthActionTypes.LOGOUT,
		payload: error,
	};
};
