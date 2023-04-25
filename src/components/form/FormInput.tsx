import { ChangeEventHandler } from 'react';

interface IFormInput {
	id: string;
	label: string;
	name: string;
	type: string;
	classname?: string;
	autoComplete: string;
	placeholder?: string;
	onChange: ChangeEventHandler;
	value: string;
	isError?: boolean;
	error?: string | null;
}

export default function FormInput({
	id,
	label,
	name,
	type,
	classname,
	autoComplete,
	placeholder,
	onChange,
	value,
	isError,
	error,
	...rest
}: IFormInput) {
	return (
		<div className='flex flex-col-reverse'>
			{isError ? (
				<span className='left-0 text-xs font-light text-red-500'>{error}</span>
			) : null}
			<input
				id={name}
				name={name}
				type={type}
				autoComplete={autoComplete}
				className={
					`w-full p-1 text-sm outline-none bg-transparent rounded transition ${
						isError
							? 'border-2 border-red-600 dark:border-red-600'
							: 'border-2 border-light-subtle dark:border-dark-subtle dark:focus:border-white focus:border-primary dark:text-white'
					}` + classname
				}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				{...rest}
			/>
			<label
				className='font-semibold dark:text-slate-200 text-primary mt-4 dark:peer-focus:text-white peer-focus:text-primar transition self-start '
				htmlFor={name}
			>
				{label}
			</label>
		</div>
	);
}
