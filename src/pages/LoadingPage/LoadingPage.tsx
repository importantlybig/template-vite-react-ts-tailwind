import React from 'react';
import LoaderImage from '../../assets/images/loader.gif';

const LoadingPage: React.FC = () => {
	return (
		<div className='h-[80vh] flex items-center justify-center'>
			<div className='flex flex-col'>
				<img src={LoaderImage} alt='' width={120} />
				<div className='text-center mt-3'>Loading...</div>
			</div>
		</div>
	);
};

export default LoadingPage;
