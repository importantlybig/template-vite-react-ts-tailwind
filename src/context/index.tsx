import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './ThemeProvider';
import NotificationProvider from './NotificationProvider';
import AuthProvider from './AuthProvider';

export default function ContextProvider({ children }: { children: ReactNode }) {
	return (
		<BrowserRouter>
			<NotificationProvider>
				<AuthProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</AuthProvider>
			</NotificationProvider>
		</BrowserRouter>
	);
}
