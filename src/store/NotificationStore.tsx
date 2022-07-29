import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

export interface NotificationType {
	type: 'success' | 'info' | 'error' | 'warning' | 'none' | 'reset';
	message: String;
}

class NotificationStore {
	typeNotification: NotificationType = {
		type: 'reset',
		message: '',
	};
	constructor() {
		makeAutoObservable(this);
	}

	callNotification = (notificall: NotificationType, time: number = 3000) => {
		this.typeNotification.type = notificall.type;
		this.typeNotification.message = notificall.message;
		setTimeout(() => {
			this.typeNotification.type = 'reset';
			this.typeNotification.message = '';
		}, time);
	};
}
export const notificationStore = new NotificationStore();
const notificationStoreContext = createContext(notificationStore);
export const useNotificationStore = () => {
	return useContext(notificationStoreContext);
};
