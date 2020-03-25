import api from 'services/api';

const loadPost = async (id) => {
	return await api.get(`/posts/${id}`);
};

const loadPosts = async (last) => {
	return await api.get('/posts', {
		params: {
			last,
		},
	});
};

const createPost = async (content) => {
	return await api.post('/posts/create', {
		content,
	});
};

const loadPostsFromUser = async (id, last) => {
	return await api.get(`/posts/user/${id}`, {
		params: {
			last,
		},
	});
};

export default {
	loadPost,
	loadPosts,
	createPost,
	loadPostsFromUser,
};
