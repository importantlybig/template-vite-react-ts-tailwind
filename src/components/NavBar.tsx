import ForwardLink from '../components/Link/ForwardLink';
import { AiFillStar, AiOutlineLogin } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { useTheme } from '../hooks';
import SearchInput from './form/SearchInput';
import { useAuth } from '../hooks';

export interface INavBar {
	pathName?: string;
}

export default function NavBar({ pathName }: INavBar) {
	const { toggleTheme } = useTheme();
	const { authInfo } = useAuth();

	console.log('authInfo', authInfo);

	return (
		<>
			{pathName?.startsWith('/auth/active') ? null : (
				<div className='w-screen border-b-2 border-primary shadow-sm shadow-slate-200'>
					<div className='flex justify-between items-center px-28 py-8 '>
						<span className='flex items-center'>
							<span className='font-bold dark:text-highlight-dark'>RM10</span>
							<AiFillStar className='text-highlight-dark' />
						</span>

						<div className='flex items-center space-x-6'>
							<div className='border-2 border-light-subtle dark:border-dark-subtle dark:hover:border-slate-200 p-1 rounded'>
								<MdDarkMode
									className='text-2xl dark:text-slate-200'
									onClick={toggleTheme}
								/>
							</div>

							<SearchInput placeholder='Search movie' />

							<ForwardLink
								// className='text-light-subtle dark:text-slate-200 text-lg hover:text-primary'
								to={authInfo?.accessToken ? '/' : '/auth/login'}
							>
								<div className='flex items-center border-2 border-light-subtle p-1 px-2 rounded hover:border-primary dark:border-dark-subtle dark:hover:border-slate-200'>
									<AiOutlineLogin className='mr-2 text-xl dark:text-slate-200' />
									<p>{authInfo?.accessToken ? 'Logout' : 'Login'}</p>
								</div>
							</ForwardLink>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
