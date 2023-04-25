import { Formik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';

export interface ISearchForm {
	showResetIcon?: boolean;
	placeholder?: string;
	inputClassName?: string;
	onSubmit?: () => void;
	onReset?: () => void;
}

const defaultInputStyle =
	'border-light-subtle dark:focus:border-white focus:border-primary dark:text-white text-sm  border-2 transition bg-transparent rounded p-2 outline-none dark:border-dark-subtle dark:hover:border-slate-200';

export default function SearchInput({
	showResetIcon,
	placeholder,
	inputClassName = defaultInputStyle,
	onSubmit,
	onReset,
}: ISearchForm) {
	return (
		<Formik
			initialValues={{ searchField: '' }}
			onSubmit={(values) => {
				console.log(values.searchField);
			}}
		>
			{(formik) => (
				<form onSubmit={formik.handleSubmit} className='relative'>
					<input
						type='text'
						id='searchField'
						name='searchField'
						autoComplete='off'
						className={inputClassName}
						placeholder={placeholder}
						onChange={formik.handleChange}
						value={formik.values['searchField']}
					/>

					{showResetIcon ? (
						<button
							onClick={() => {
								formik.resetForm();
							}}
							type='button'
							className='absolute top-1/2 -translate-y-1/2 right-2 text-primary dark:text-white'
						>
							<AiOutlineClose />
						</button>
					) : null}
				</form>
			)}
		</Formik>
	);
}
