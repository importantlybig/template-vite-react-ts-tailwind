import React, { ReactNode, createContext, useState } from 'react';
import { NotificationContextType } from './type';
import { NOTIFICATION_TYPE } from './constants';

let timeoutID: number;
export const NotificationContext = createContext<NotificationContextType>({
	showNotification: () => null,
});

export default function NotificationProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [notificationContent, setNotificationContent] = useState<string>('');
	const [inputClassNotification, setInputClassNotification] =
		useState<string>('');

	const showNotification = (type: string, value: string) => {
		if (timeoutID) clearTimeout(timeoutID);

		switch (type) {
			case NOTIFICATION_TYPE.SUCCESS:
				setInputClassNotification('bg-green-500');
				break;
			case NOTIFICATION_TYPE.ERROR:
				setInputClassNotification('bg-red-500');
				break;
			case NOTIFICATION_TYPE.WARNING:
				setInputClassNotification('bg-orange-500');
				break;
			default:
				setInputClassNotification('bg-red-500');
		}

		setNotificationContent(value);

		timeoutID = setTimeout(() => {
			setNotificationContent('');
		}, 3500);
	};

	return (
		<NotificationContext.Provider value={{ showNotification }}>
			{children}
			{notificationContent && (
				<div className='fixed left-1/2 -translate-x-1/2 top-24 '>
					<div className='bounce-custom shadow-md shadow-gray-400 rounded'>
						<p
							className={
								inputClassNotification +
								' text-center text-primary px-4 py-2 font-semibold dark:text-white'
							}
						>
							{notificationContent}
						</p>
					</div>
				</div>
			)}
		</NotificationContext.Provider>
	);
}
