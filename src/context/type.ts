import { IResponse } from '../api/types';

// Context Type
export type ThemeContextType = {
	toggleTheme: () => void;
};

export type NotificationContextType = {
	showNotification: (type: string, value: string) => void;
};

export type AuthContexType = {
	authInfo: IUserInfo;
	handleLogin: (email: string, password: string) => Promise<void>;
	handleLogout: () => void;
};

export interface IUserInfo {
	name: string;
	email: string;
	role: string;
	accessToken: string;
}
