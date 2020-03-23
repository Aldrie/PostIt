import api from 'services/api';

const loadPosts = async (last) => {
	return await api.get('/posts', {
		params: {
			last,
		},
	});
};

const createPost = async (content) => {
	return await api.post('/posts', {
		content,
	});
};

const loadPostsFromUser = async (id, last) => {
	return await api.get(`/posts/${id}`, {
		params: {
			last,
		},
	});
};

export default {
	loadPosts,
	createPost,
	loadPostsFromUser,
};
