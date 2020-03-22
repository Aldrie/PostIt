import api from 'services/api';

const register = async (name, email, password, avatar ) => {
	const formData = new FormData();
	console.log(avatar);
	formData.append('name', name);
	formData.append('email', email);
	formData.append('password', password);
	formData.append('avatar', avatar);

	return await api.post('/users/register', formData);
};

const login = async (email, password) => {
	return await api.post('/users/login', { email, password });
};

export default {
	register,
	login,
};
