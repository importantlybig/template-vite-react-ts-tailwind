// (2)
import { ApiClientLayer } from './layer/apiClientLayer';
import cookies from '../services/cookies';

export const api = new ApiClientLayer({
	baseURL: import.meta.env.VITE_API_URL,
});

api.addInterceptor().request.use((config) => {
	// const accessToken = getAccessToken();
	const accessToken = cookies.get('accessToken');

	if (accessToken && config.headers) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}

	return config;
});
