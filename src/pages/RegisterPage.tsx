import { Formik } from 'formik';
import * as Yup from 'yup';
import FormTitle from '../components/form/FormTitle';
import FormInput from '../components/form/FormInput';
import SubmitButon from '../components/form/SubmitButon';
import ForwardLink from '../components/Link/ForwardLink';
import { handleCallApiBase } from '../api/layer/handleCallApi';
import { authAPI } from '../api/api';
import { useNotification } from '../hooks';
import { NOTIFICATION_TYPE } from '../context/constants';

export default function Register() {
	const { showNotification } = useNotification();

	return (
		<div className='flex justify-center items-center h-[80vh]'>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				validationSchema={Yup.object({
					name: Yup.string().required('Name is required'),
					email: Yup.string()
						.email('Invalid email format')
						.required('Email is required'),
					password: Yup.string()
						.required('Password is required')
						.min(8, 'Must be 8 characters or more')
						.max(25, 'Must be 20 characters or less'),
					// .matches(/(?=.*[A-Z])/, 'Need one uppercase character')
					// .matches(/(?=.*[0-9])/, 'Need one number character')
					// .matches(/(?=.*[!@#$%^&*])/, 'Need one special character')
				})}
				onSubmit={async (values, { resetForm }) => {
					const payload = {
						name: values.name,
						email: values.email,
						password: values.password,
					};

					await handleCallApiBase({
						api: async () => authAPI.register({ ...payload }),
						onSuccess: (data) => {
							showNotification(
								NOTIFICATION_TYPE.SUCCESS,
								'Successful registration, please check your email to verify account.'
							);
							resetForm();
						},
						onSoftError: (error) => {
							showNotification(
								NOTIFICATION_TYPE.WARNING,
								error.status?.message
							);
						},
						onHardError: (error) => {
							showNotification(
								NOTIFICATION_TYPE.ERROR,
								error.message || 'Unexpected error'
							);
						},
					});
				}}
			>
				{(formik) => (
					<form
						onSubmit={formik.handleSubmit}
						className=' dark:bg-secondary bg-slate-200 drop-shadow-xl rounded p-6  w-96 h-auto'
					>
						<FormTitle>Register Form</FormTitle>
						<FormInput
							id='name'
							autoComplete='off'
							label='Name'
							name='name'
							type='text'
							placeholder='Enter your name'
							onChange={formik.handleChange}
							value={formik.values['name']}
							isError={formik.errors.name ? true : false}
							error={formik.errors.name ? formik.errors.name : undefined}
						/>

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

						<SubmitButon type='submit' value='Register' />

						<div className='flex justify-between'>
							<ForwardLink to='/auth/forgot-password'>
								Forgot password
							</ForwardLink>
							<ForwardLink to='/auth/login'>Login</ForwardLink>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}
