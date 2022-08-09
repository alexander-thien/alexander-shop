import { makeAutoObservable, toJS } from 'mobx';
import { createContext, useContext } from 'react';

export interface UserItem {
	id: number;
	firstName: String | string;
	lastName: String | string;
	email: String;
	password: String;
	auth?: 'true' | 'false';
	phone?: String;
	address?: String;
}

class UserStore {
	users: UserItem[] = [];
	person: UserItem = {
		id: 0,
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		auth: 'false',
		address: '',
		phone: '',
	};

	constructor() {
		makeAutoObservable(this);
	}

	getUsers = () => {
		return toJS(this.users);
	};

	getPerson = () => {
		return toJS(this.person);
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
			this.person.auth = 'true';
		}

		await this.timeout(2000);
		return login;
	};

	userUpdate = (newUser: UserItem) => {
		this.person = { ...newUser };
	};
}

export const userStore = new UserStore();
const userStoreContext = createContext(userStore);
export const useUserStore = () => {
	return useContext(userStoreContext);
};
