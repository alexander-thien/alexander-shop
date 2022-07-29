import { Slide } from '@progress/kendo-react-animation';
import { Notification } from '@progress/kendo-react-notification';
import { useEffect, useState } from 'react';
import { useNotificationStore } from '../../store/NotificationStore';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

function NotificationComponent() {
	const { typeNotification } = useNotificationStore();

	const [state, setState] = useState({
		success: false,
		error: false,
		warning: false,
		info: false,
		none: false,
		reset: false,
	});

	useEffect(() => {
		const { type } = toJS(typeNotification);
		if (type !== 'reset') {
			setState({ ...state, [type]: !state[type] });
		} else {
			setState({
				success: false,
				error: false,
				warning: false,
				info: false,
				none: false,
				reset: false,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [typeNotification.type]);

	const { success, error, warning, info, none } = state;

	const Scss = 'p-4, min-w-[250px] text-[14px]';

	return (
		<div className='absolute top-[68px] right-1 z-10'>
			<Slide direction={typeNotification.type ? 'up' : 'down'}>
				{success && (
					<Notification
						type={{ style: 'success', icon: true }}
						className={Scss}
					>
						<span>{typeNotification.message}</span>
					</Notification>
				)}
			</Slide>
			<Slide direction={typeNotification.type ? 'up' : 'down'}>
				{error && (
					<Notification
						type={{ style: 'error', icon: true }}
						className={Scss}
					>
						<span>{typeNotification.message}</span>
					</Notification>
				)}
			</Slide>
			<Slide direction={typeNotification.type ? 'up' : 'down'}>
				{warning && (
					<Notification
						type={{ style: 'warning', icon: true }}
						className={Scss}
					>
						<span>{typeNotification.message}</span>
					</Notification>
				)}
			</Slide>
			<Slide direction={typeNotification.type ? 'up' : 'down'}>
				{info && (
					<Notification
						type={{ style: 'info', icon: true }}
						className={Scss}
					>
						<span>{typeNotification.message}</span>
					</Notification>
				)}
			</Slide>
			<Slide direction={typeNotification.type ? 'up' : 'down'}>
				{none && (
					<Notification
						type={{ style: 'none', icon: true }}
						className={Scss}
					>
						<span>{typeNotification.message}</span>
					</Notification>
				)}
			</Slide>
		</div>
	);
}

export default observer(NotificationComponent);
