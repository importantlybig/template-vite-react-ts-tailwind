import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface IForwardLink {
	to: string;
	children: ReactNode;
}

export default function ForwardLink({ to, children }: IForwardLink) {
	return (
		<Link
			className='dark:text-dark-subtle text-lg text-light-subtle dark:hover:text-white hover:text-primary transition'
			to={to}
		>
			{children}
		</Link>
	);
}
