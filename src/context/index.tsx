import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';

export default function ContextProvider({ children }: { children: ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
