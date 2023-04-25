import { Formik } from 'formik';
import * as Yup from 'yup';
import FormTitle from '../components/form/FormTitle';
import FormInput from '../components/form/FormInput';
import SubmitButon from '../components/form/SubmitButon';
import ForwardLink from '../components/Link/ForwardLink';
import { useAuth } from '../hooks';

export default function Login() {
	const { handleLogin } = useAuth();

	return (
		<div className='flex justify-center items-center h-[80vh]'>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={Yup.object({
					email: Yup.string()
						.email('Invalid email format')
						.required('Email is required'),
					password: Yup.string()
						.min(8, 'Must be 8 characters or more')
						.max(25, 'Must be 20 characters or less')
						// .matches(/(?=.*[A-Z])/, 'Need one uppercase character')
						// .matches(/(?=.*[0-9])/, 'Need one number character')
						// .matches(/(?=.*[!@#$%^&*])/, 'Need one special character')
						.required('Password is required'),
				})}
				onSubmit={(values, { resetForm }) => {
					handleLogin(values.email, values.password);
					resetForm();
				}}
			>
				{(formik) => (
					<form
						onSubmit={formik.handleSubmit}
						className=' dark:bg-secondary bg-slate-200 drop-shadow-xl rounded p-6  w-96 h-auto'
					>
						<FormTitle>Login Form</FormTitle>
						<FormInput
							id='email'
							autoComplete='on'
							label='Email'
							name='email'
							type='email'
							placeholder='Enter your email'
							onChange={formik.handleChange}
							value={formik.values['email']}
							isError={formik.errors.email ? true : false}
							error={formik.errors.email ? formik.errors.email : null}
						/>

						<FormInput
							id='password'
							autoComplete='off'
							label='Password'
							name='password'
							type='password'
							placeholder='Enter your password'
							onChange={formik.handleChange}
							value={formik.values['password']}
							isError={formik.errors.password ? true : false}
							error={
								formik.errors.password ? formik.errors.password : undefined
							}
						/>

						<SubmitButon type='submit' value='Login' />

						<div className='flex justify-between'>
							<ForwardLink to='/auth/forgot-password'>
								Forgot password
							</ForwardLink>
							<ForwardLink to='/auth/register'>Register</ForwardLink>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}
