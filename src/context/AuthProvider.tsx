import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContexType } from './type';
import { IUserInfo } from './type';
import { handleCallApiBase } from '../api/layer/handleCallApi';
import { authAPI } from '../api/api';
import { useNotification } from '../hooks';
import { NOTIFICATION_TYPE } from './constants';

const initUserInfo = {
	name: '',
	email: '',
	role: '',
	accessToken: '',
};

export const AuthContext = createContext<AuthContexType>({
	authInfo: initUserInfo,
	handleLogin: async () => {},
	handleLogout: () => {},
});

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const navigate = useNavigate();
	const { showNotification } = useNotification();
	const [authInfo, setAuthInfo] = useState<IUserInfo>(initUserInfo);

	const handleLogin = async (email: string, password: string) => {
		await handleCallApiBase({
			api: async () => authAPI.login({ email, password }),
			onSuccess: (data) => {
				showNotification(NOTIFICATION_TYPE.SUCCESS, 'Login success');

				setAuthInfo(data.data);
				navigate('/', { replace: true });
			},
			onSoftError: (error) => {
				showNotification(NOTIFICATION_TYPE.WARNING, error.status?.message);
			},
			onHardError: (error) => {
				showNotification(
					NOTIFICATION_TYPE.ERROR,
					error.message || 'Unexpected error'
				);
			},
		});
	};

	const handleLogout = () => {};
	return (
		<AuthContext.Provider value={{ authInfo, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
}
