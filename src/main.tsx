import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './i18n/i18n';
import './index.css';

import ContextProvider from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<ContextProvider>
		<App />
	</ContextProvider>
	// </React.StrictMode>
);
