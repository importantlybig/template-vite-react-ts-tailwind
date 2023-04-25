import Cookies, {
	CookieChangeOptions,
	CookieSetOptions,
} from 'universal-cookie';

const cookies = new Cookies();

export default cookies;

// export const setAccessToken = (cookieOptions: CookieChangeOptions) => {
// 	return cookies.set(
// 		cookieOptions.name,
// 		cookieOptions.value,
// 		cookieOptions.options?.expires as CookieSetOptions
// 	);
// };

// export const getAccessToken = cookies.get('accessToken');
