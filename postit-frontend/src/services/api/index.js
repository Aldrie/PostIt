import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({ 
	baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
	headers: {
		...(token && {authorization: token}),
	},
});

export default api;
