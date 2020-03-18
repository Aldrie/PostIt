export const PostActionTypes = {
	LOAD_POSTS: '@POSTS/LOAD_POSTS',
	LOAD_POSTS_SUCCESS: '@POSTS/LOAD_POSTS_SUCCESS',
	LOAD_POSTS_FAILURE: '@POSTS/LOAD_POSTS_FAILURE',

	LOAD_POST: '@POSTS/LOAD_POST',
	LOAD_POST_SUCCESS: '@POSTS/LOAD_POST_SUCCESS',
	LOAD_POST_FAILURE: '@POSTS/LOAD_POST_FAILURE',

	LOAD_USER_POSTS: '@POSTS/LOAD_USER_POSTS',
	LOAD_USER_POSTS_SUCCESS: '@POSTS/LOAD_USER_POSTS_SUCCESS',
	LOAD_USER_POSTS_FAILURE: '@POSTS/LOAD_USER_POSTS_FAILURE',
};

export const loadPosts = (last) => {
	return {
		type: PostActionTypes.LOAD_POSTS,
		payload: last,
	};
};

export const loadPostsSuccess = (posts) => {
	return {
		type: PostActionTypes.LOAD_POSTS_SUCCESS,
		payload: posts,
	};
};

export const loadPostsFailure = (error) => {
	return {
		type: PostActionTypes.LOAD_POSTS_FAILURE,
		payload: error,
	};
};

export const loadPost = (id) => {
	return {
		type: PostActionTypes.LOAD_POST,
		payload: id,
	};
};

export const loadPostSuccess = (post) => {
	return {
		type: PostActionTypes.LOAD_POST_SUCCESS,
		payload: post,
	};
};

export const loadPostFailure = (error) => {
	return {
		type: PostActionTypes.LOAD_POSTS_FAILURE,
		payload: error,
	};
};

export const loadUserPosts = (user, last) => {
	return {
		type: PostActionTypes.LOAD_USER_POSTS,
		payload: { user, last },
	};
};

export const loadUserPostsSuccess = (posts) => {
	return {
		type: PostActionTypes.LOAD_USER_POSTS_SUCCESS,
		payload: posts,
	};
};

export const loadUserPostsFailure = (error) => {
	return {
		type: PostActionTypes.LOAD_USER_POSTS_FAILURE,
		payload: error,
	};
};

