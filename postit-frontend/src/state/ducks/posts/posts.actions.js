export const PostActionTypes = {
	LOAD_POSTS: '@POSTS/LOAD_POSTS',
	LOAD_POSTS_SUCCESS: '@POSTS/LOAD_POSTS_SUCCESS',
	LOAD_POSTS_FAILURE: '@POSTS/LOAD_POSTS_FAILURE',

	LOAD_POST: '@POSTS/LOAD_POST',
	LOAD_POST_SUCCESS: '@POSTS/LOAD_POST_SUCCESS',
	LOAD_POST_FAILURE: '@POSTS/LOAD_POST_FAILURE',

	CREATE_POST: '@POST/CREATE',
	CREATE_POST_SUCCESS: '@POST/CREATE_SUCCESS',
	CREATE_POST_FAILURE: '@POST/CREATE_FAILURE',
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

export const createPost = (content) => {
	return {
		type: PostActionTypes.CREATE_POST,
		payload: content,
	};
};

export const createPostSuccess = (post) => {
	return {
		type: PostActionTypes.CREATE_POST_SUCCESS,
		payload: post,
	};
};

export const createPostFailure = (error) => {
	return {
		type: PostActionTypes.CREATE_POST_FAILURE,
		payload: error,
	};
};

