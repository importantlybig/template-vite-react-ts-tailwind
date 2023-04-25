import { ReactNode } from 'react';

export default function FormTitle({ children }: { children: ReactNode }) {
	return (
		<h1 className='text-xl dark:text-highlight-dark text-primary font-semibold text-center'>
			{children}
		</h1>
	);
}
