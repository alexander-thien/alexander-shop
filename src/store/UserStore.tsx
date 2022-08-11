import axios from 'axios';
import { makeAutoObservable, toJS } from 'mobx';
import { createContext, useContext } from 'react';

export const host = 'http://localhost:4000';

export interface UserItem {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	auth?: 'true' | 'false';
	phone?: string;
	address?: string;
}

class UserStore {
	users: UserItem[] = [];
	person: UserItem | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	get getUsers() {
		return toJS(this.users);
	}

	get getPerson() {
		return toJS(this.person);
	}

	timeout = (ms: number) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	registerUser = async (dataItem: any) => {
		const user = await axios.get(`${host}/users?email=${dataItem.email}`);
		if (user.data.length === 0) {
			try {
				await axios.post(`${host}/users`, {
					...dataItem,
				});
				return true;
			} catch (err) {
				console.log(err);
			}
		} else {
			return false;
		}
	};

	loginUser = async (email: string, password: string) => {
		const userLogin = await axios.get(`${host}/users?email=${email}`);
		if (userLogin.data.length > 0) {
			if (userLogin.data[0].password === password) {
				this.person = userLogin.data[0];
				return true;
			}
		}
		return false;
	};

	updateUser = async (newUser: any) => {
		const result = await axios.put(`${host}/users/${this.getPerson?.id}/`, {
			...newUser,
		});
		return result;
	};
}

export const userStore = new UserStore();
const userStoreContext = createContext(userStore);
export const useUserStore = () => {
	return useContext(userStoreContext);
};
