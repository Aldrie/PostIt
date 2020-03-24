import api from 'services/api';

const loadUser = async (id) => {
	return await api.get(`/users/${id}`);
};

export default {
	loadUser,
};
