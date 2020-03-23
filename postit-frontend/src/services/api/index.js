import axios from 'axios';

const api = axios.create({ 
	baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
	headers: {
		authorization: `Bearer ${localStorage.getItem('token')}`,
	},
});

export default api;
