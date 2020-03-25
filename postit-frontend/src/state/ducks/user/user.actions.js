export const UserActionTypes = {
	LOAD_USER_POSTS: '@USER/LOAD',
	LOAD_USER_POSTS_SUCCESS: '@USER/LOAD_USER_POSTS_SUCCESS',
	LOAD_USER_POSTS_FAILURE: '@USER/LOAD_USER_POSTS_FAILURE',

	CLEAR_USER_STATE : '@USER/CLEAR_USER_STATE',
}

export const loadUserPosts = (id, last) => {
	return {
		type: UserActionTypes.LOAD_USER_POSTS,
		payload: { id, last },
	};
};

export const loadUserPostsSuccess = (user, posts) => {
	return {
		type: UserActionTypes.LOAD_USER_POSTS_SUCCESS,
		payload: {
			user,
			posts,
		},
	};
};

export const loadUserPostsFailure = (error) => {
	return {
		type: UserActionTypes.LOAD_USER_POSTS_FAILURE,
		payload: error,
	};
};

export const clearUserState = (error) => {
	return {
		type: UserActionTypes.CLEAR_USER_STATE,
	};
};
