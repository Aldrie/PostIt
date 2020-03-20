import { UserActionTypes } from './user.actions';

const INITIAL_STATE = {
	name: '',
	avatar: '',
	loading: false,
	error: '',
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case UserActionTypes.LOAD_USER:
			return { ...state, loading: true };

		case UserActionTypes.LOAD_USER_SUCCESS:
			return { ...state, loading: false,  ...action.payload};

		case UserActionTypes.LOAD_USER_FAILURE:
			return { ...state, loading: false,  error: action.payload};

		default:
			return state;
	}
}
