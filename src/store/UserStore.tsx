import { makeAutoObservable, toJS } from 'mobx';
import { createContext, useContext } from 'react';

export interface UserItem {
	id: number;
	firstName: String;
	lastName: String;
	email: String;
	password: String;
}

class UserStore {
	users: UserItem[] = [];
	person: UserItem | false = false;

	constructor() {
		makeAutoObservable(this);
	}

	getUsers = () => {
		return toJS(this.users);
	};

	timeout = (ms: number) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	addUser = async (
		email: String,
		password: String,
		firstName: String,
		lastName: String
	) => {
		const user: UserItem = {
			email,
			password,
			firstName,
			lastName,
			id: +Math.floor(Math.random() * 100),
		};
		await this.timeout(2000);
		this.users.push(user);
		console.log(this.users);
		return true;
	};

	userLogin = async (email: String, password: String) => {
		const usersList: UserItem[] = this.getUsers();
		const login =
			usersList.find(
				(user) => user.email === email && user.password === password
			) || false;
		if (login) {
			this.person = login;
		}

		await this.timeout(2000);
		return login;
	};
}

export const userStore = new UserStore();
const userStoreContext = createContext(userStore);
export const useUserStore = () => {
	return useContext(userStoreContext);
};
