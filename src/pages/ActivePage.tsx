import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Congrat from '../assets/images/congrat.gif';
import { useAsyncFn } from 'react-use';
import { handleCallApiBase } from '../api/layer/handleCallApi';
import { authAPI } from '../api/api';
import { useNotification } from '../hooks';
import { NOTIFICATION_TYPE } from '../context/constants';
import { useEffect, useState } from 'react';

export default function ActivePage() {
	const { activeToken } = useParams();
	const navigate = useNavigate();

	const [valid, setValid] = useState<boolean>(false);

	const { showNotification } = useNotification();

	const [_, activated] = useAsyncFn(async () => {
		await handleCallApiBase({
			api: async () => authAPI.activate(activeToken as string),
			onSuccess: (_) => {
				showNotification(
					NOTIFICATION_TYPE.SUCCESS,
					'Account has been verified.'
				);
				setValid(true);
			},
			onSoftError: (error) => {
				showNotification(NOTIFICATION_TYPE.WARNING, error.status?.message);
				setValid(false);
			},
			onHardError: (error) => {
				// showNotification(
				// 	NOTIFICATION_TYPE.ERROR,
				// 	error.message || 'Unexpected error'
				// );
				setValid(false);
			},
		});
	});

	useEffect(() => {
		setTimeout(() => {
			activated();
			if (valid) navigate('/auth/login', { replace: true });
		}, 500);
	}, []);

	return (
		<>
			{valid ? (
				<div className='h-[80vh] flex items-center justify-center'>
					<div className='flex flex-col'>
						<img src={Congrat} alt='Congrat Gift' className='object-cover' />
						<span className='font-bold text-xl text-primary text-center mt-3 dark:text-white'>
							You have successfully activated your account. Now you can access
							to application.
						</span>
					</div>
				</div>
			) : (
				<h1 className='font-bold text-9xl text-red-600 text-center mt-3'>
					Error in activating account.
				</h1>
			)}
		</>
	);
}
