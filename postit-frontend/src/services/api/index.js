import axios from 'axios';
import { store } from 'state';

const api = axios.create({ 
	baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
});

api.interceptors.request.use((config) => {
	const token = store.getState().auth.token;
	config.headers.authorization = `Bearer ${token}`;

	return config;
});

export default api;
