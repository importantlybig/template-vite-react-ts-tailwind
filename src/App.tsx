import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';

const LoaderPage = React.lazy(() => import('./pages/LoadingPage/LoadingPage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const ActivePage = React.lazy(() => import('./pages/ActivePage'));
const LoginPage = React.lazy(() => import('../src/pages/LoginPage'));

function App() {
	const { pathname } = useLocation();

	return (
		<div className='w-screen h-screen bg-slate-100 dark:bg-primary'>
			<NavBar pathName={pathname} />

			<React.Suspense fallback={<LoaderPage />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='auth/register' element={<RegisterPage />} />
					<Route path='auth/active/:activeToken' element={<ActivePage />} />
					<Route path='auth/login' element={<LoginPage />} />
				</Routes>
			</React.Suspense>
		</div>
	);
}

export default App;
