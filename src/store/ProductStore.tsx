import { makeAutoObservable, toJS } from 'mobx';
import { createContext, useContext } from 'react';

export interface productItem {
	id: number;
	name: String;
	price: number;
	photoURL: string;
	content?: String;
}

class ProductStore {
	products: productItem[] = [
		{
			id: 1,
			name: 'Emergency spot patch for acne',
			price: 300,
			photoURL: 'http://localhost:3000/img/emergencySpotPatch@2x.webp',
			content:
				"Sudden acne spot? We've got skin emergencies covered with fast-acting hydrocolloid patches that absorb pus and oil. Plus, they're low profile to help spots heal—whenever, wherever.",
		},
		{
			id: 2,
			name: 'The cleanser and moisturizer set',
			price: 400,
			photoURL: 'http://localhost:3000/img/cleanserMoisturizer@2x.webp',
			content:
				'Your essential dermatologist-designed routine for clean, hydrated skin—everyday. Wash away dirt and excess oil with our light-foaming facial cleanser, then seal in hydration with your pick of our lightweight gel moisturizer or creamy, rich moisturizer. Easy.',
		},
		{
			id: 3,
			name: 'Acne body wash',
			price: 500,
			photoURL: 'http://localhost:3000/img/acneBodyWash@2x.webp',
			content:
				'Body acne, handled. A splash of our acne-fighting body wash treats and helps prevent body breakouts—plus washes your pores of regular dirt and grime. Designed by dermatologists, our body wash is formulated with just enough salicylic acid to be tough on acne but kind to all skin types.',
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

	getProductById = (id: number) => {
		const product = this.getProducts().find((item) => item.id === id);
		return product;
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
