import { PostActionTypes } from './posts.actions';

const INITIAL_STATE = {
	posts: [],
	post: {},
	loading: false,
	error: '',
}

export default function postReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case PostActionTypes.LOAD_POSTS:
			return { ...state, loading: true };

		case PostActionTypes.LOAD_POSTS_SUCCESS:
			return { ...state, loading: false, posts: action.payload };
		
		case PostActionTypes.LOAD_POSTS_FAILURE:
			return { ...state, loading: false, error: action.payload };

		case PostActionTypes.LOAD_POST:
			return { ...state, loading: true };
		
		case PostActionTypes.LOAD_POST_SUCCESS:
			return { ...state, post: action.payload };

		case PostActionTypes.LOAD_POST_FAILURE:
			return { ...state, error: action.payload};


		default:
			return { ...state };
	}
}
