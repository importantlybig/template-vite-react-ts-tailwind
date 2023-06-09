import { ReactNode, createContext, useEffect } from 'react';
import { ThemeContextType } from './type';

const defaultTheme = 'light';
const darkTheme = 'dark';

// const initValue: IThemeContext = {
// 	toggleTheme: () => {},
// };

export const ThemeContext = createContext<ThemeContextType>({
	toggleTheme: () => null,
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const getTheme = (): string | null => {
		return localStorage.getItem('theme');
	};

	const updateTheme = (theme: string, themeToRemove?: string | null): void => {
		if (themeToRemove) document.documentElement.classList.remove(themeToRemove);

		document.documentElement.classList.add(theme);
		localStorage.setItem('theme', theme);
	};

	const toggleTheme = () => {
		const oldTheme = getTheme();
		const newTheme = oldTheme === defaultTheme ? darkTheme : defaultTheme;

		updateTheme(newTheme, oldTheme);
	};

	useEffect(() => {
		const theme = getTheme();
		if (!theme) updateTheme(defaultTheme);
		else updateTheme(theme);
	}, []);

	return (
		<ThemeContext.Provider value={{ toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
