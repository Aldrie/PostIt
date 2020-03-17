import { AuthActionTypes } from './auth.actions';

const INITIAL_STATE = {
	name: '',
	token: '',
	avatar: '',
	loading: false,
	error: '',
};

export default function authReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case AuthActionTypes.LOGIN:
			return { ...state, loading: true };

		case AuthActionTypes.LOGIN_SUCCESS:
			return { ...state, loading: false, ...action.payload };

		case AuthActionTypes.LOGIN_ERROR:
				return { ...state, error: action.payload };

		
		default:
			return state;
	};
};
