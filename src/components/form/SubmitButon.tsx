import { ImSpinner3 } from 'react-icons/im';

type ButtonType = 'button' | 'submit' | 'reset';

export interface ISubmitButton {
	type: ButtonType;
	value: string;
	busy?: boolean;
	onClick?: () => void;
}

export default function SubmitButon({
	type,
	value,
	busy,
	onClick,
}: ISubmitButton) {
	return (
		<button
			type={type}
			className='w-full bg-transparent rounded border-2 border-light-subtle text-primary my-4 dark:text-highlight-dark dark:border-dark-subtle hover:bg-opacity-90 dark:hover:border-slate-200 transition font-semibold text-lg cursor-pointer h-10 flex items-center justify-center'
			onClick={onClick}
		>
			{busy ? <ImSpinner3 className='animate-spin' /> : value}
		</button>
	);
}
