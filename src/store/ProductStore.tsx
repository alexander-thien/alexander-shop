import axios from 'axios';
import { makeAutoObservable, toJS } from 'mobx';
import { createContext, useContext } from 'react';
import { host } from './UserStore';

export interface productItem {
	id: number;
	name: String;
	price: number;
	photoURL: string;
	content?: String;
	type?: 'perfume 1' | 'perfume 2';
	count?: number;
}

class ProductStore {
	products: productItem[] = [];

	carts: productItem[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	get getProducts() {
		return toJS(this.products);
	}

	get getProductsFromCart() {
		return toJS(this.carts);
	}

	getProductById = (id: number) => {
		const product = this.getProducts.find((item) => item.id === id);
		return product;
	};

	fetchGetProduct = async () => {
		const products = await axios.get(`${host}/products`);
		this.products = products.data;
	};

	fetchGetProductFromCarts = async () => {
		const products = await axios.get(`${host}/carts`);
		this.carts = products.data;
	};

	removeCart = (index: number) => {
		this.carts.splice(index, 1);
	};

	decreaseProduct = async (prod: productItem) => {};

	addToCart = async (prod: productItem) => {
		const productIncart = await axios.get(`${host}/carts`);
		const isIncrease = productIncart.data.some(
			(product: productItem) => product.id === prod.id
		);
		if (isIncrease) {
			const productIncart = await axios.get(`${host}/carts/${prod.id}`);
			prod.count = productIncart.data.count + 1;
			this.countProduct(prod);
		} else {
			prod.count = 1;
			await axios.post(`${host}/carts`, {
				...prod,
			});
		}
		this.fetchGetProductFromCarts();
	};

	countProduct = async (prod: productItem) => {
		console.log(prod);
		return await axios.put(`${host}/carts/${prod.id}`, { ...prod });
	};
}

export const productStore = new ProductStore();
const productStoreContext = createContext(productStore);
export const useProductStore = () => {
	return useContext(productStoreContext);
};
