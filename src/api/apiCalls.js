import axios from 'axios';
import { toast } from 'react-toastify';
const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

export const signupApi = async (body) => {
	toast.info('Signing up...');
	const { firstname, lastname, email, password } = body;
	try {
		const response = await api.post('/auth/signup', {
			firstname,
			lastname,
			email,
			password
		});
		toast.success(response.data.message + ' Please login to continue');
	} catch (error) {
		const errorMessage = error.response?.data?.message || 'An error occurred';
		toast.error(errorMessage);
		throw error;
	}
};

export const loginApi = async (body) => {
	toast.info('Logging in...');
	const { email, password } = body;
	try {
		const response = await api.post('/auth/login', {
			email,
			password
		});
		toast.success('Logged in successfully');
		return response.data.token;
	} catch (error) {
		const errorMessage = error.response?.data?.message || 'An error occurred';
		toast.error(errorMessage);
		throw error;
	}
};

export const getUserInfoApi = async (token) => {
	toast.info('Getting user info...');
	try {
		const response = await api.get(`/user/getUser`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || 'An error occurred';
		toast.error(errorMessage);
		throw error;
	}
};

export const getTransactionsApi = async (token) => {
	toast.info('Getting transactions...');
	try {
		const response = await api.get(`/transactions`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		const errorMessage = error.response?.data?.message || 'An error occurred';
		toast.error(errorMessage);
		throw error;
	}
};
