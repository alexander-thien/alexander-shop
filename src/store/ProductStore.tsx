import { makeAutoObservable, toJS } from 'mobx';
import { createContext, useContext } from 'react';

export interface productItem {
	name: String;
	price: number;
	photoURL: string;
}

class ProductStore {
	products: productItem[] = [
		{
			name: 'Emergency spot patch for acne',
			price: 300,
			photoURL: 'http://localhost:3000/img/emergencySpotPatch@2x.webp',
		},
		{
			name: 'The cleanser and moisturizer set',
			price: 400,
			photoURL: 'http://localhost:3000/img/cleanserMoisturizer@2x.webp',
		},
		{
			name: 'Emergency spot patch for acne',
			price: 500,
			photoURL: 'http://localhost:3000/img/acneBodyWash@2x.webp',
		},
	];

	carts: productItem[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	getProducts = () => {
		return toJS(this.products);
	};
	getProductsFromCart = () => {
		return toJS(this.carts);
	};

	addToCart = (product: productItem) => {
		this.carts.push(product);
	};
}

export const productStore = new ProductStore();
const productStoreContext = createContext(productStore);
export const useProductStore = () => {
	return useContext(productStoreContext);
};
