// importamos la libreria de axios
import axios from 'axios';

// Destructuring
const { REACT_APP_API_BASE_URL: baseURL } = process.env;

// importamos un cliente que vamos a utilizar para hacer las peticiones a nuestro end points
const client = axios.create({
	baseURL
	// baseURL: process.env.REACT_APP_API_BASE_URL,
});

const setAuthorizationHeader = (token) => {
	client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
client.login = (credentials) =>
	client.post('/apiv1/auth/login', credentials).then((auth) => {
		setAuthorizationHeader(auth.token);
		return auth;
	});

export const configuraClient = (accessToken) => {
	if (accessToken) {
		setAuthorizationHeader(accessToken);
	}
};

client.interceptors.response.use((response) => response.data);

export default client;
