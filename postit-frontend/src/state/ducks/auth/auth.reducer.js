import { AuthActionTypes } from './auth.actions';

const INITIAL_STATE = {
	name: '',
	avatar: '',
	token: '',
	loading: false,
	error: '',
	theme: 'light',
};

export default function authReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case AuthActionTypes.REGISTER:
			return { ...state, loading: true };

		case AuthActionTypes.REGISTER_SUCCESS:
			return { ...state, loading: false, ...action.payload };

		case AuthActionTypes.REGISTER_FAILURE:
				return { ...state, loading: false, error: action.payload };
				
		case AuthActionTypes.LOGIN:
			return { ...state, loading: true };

		case AuthActionTypes.LOGIN_SUCCESS:
			return { ...state, loading: false, ...action.payload };

		case AuthActionTypes.LOGIN_FAILURE:
				return { ...state, loading: false, error: action.payload };

		case AuthActionTypes.CHANGE_THEME:
			return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };

		case AuthActionTypes.LOGOUT:
				return { ...INITIAL_STATE };
		
		default:
			return state;
	};
};
