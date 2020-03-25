import { UserActionTypes } from './user.actions';

const INITIAL_STATE = {
	name: '',
	avatar: '',
	posts: [],
	loading: false,
	error: '',
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case UserActionTypes.LOAD_USER_POSTS:
			return { ...state, loading: true };

		case UserActionTypes.LOAD_USER_POSTS_SUCCESS:
			return { ...state, loading: false, posts: state.posts.concat(action.payload.posts), ...action.payload.user};

		case UserActionTypes.LOAD_USER_POSTS_FAILURE:
			return { ...state, loading: false,  error: action.payload};

		case UserActionTypes.CLEAR_USER_STATE:
			return INITIAL_STATE;

		default:
			return state;
	}
}
