export const UserActionTypes = {
	LOAD_USER: '@USER/LOAD',
	LOAD_USER_SUCCESS: '@USER/LOAD_SUCCESS',
	LOAD_USER_FAILURE: '@USER/LOAD_FAILURE',
}

export const loadUser = (id) => {
	return {
		type: UserActionTypes.LOAD_USER,
		payload: id,
	}
}


export const loadUserSuccess = (user) => {
	return {
		type: UserActionTypes.LOAD_USER_SUCCESS,
		payload: user,
	}
}

export const loadUserFailure = (error) => {
	return {
		type: UserActionTypes.LOAD_USER_FAILURE,
		payload: error,
	}
}
