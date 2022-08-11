import { productItem, useProductStore } from '../../store/ProductStore';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { MdDeleteForever } from 'react-icons/md';
export const Cart = observer(() => {
	const {
		getProductsFromCart,
		removeCart,
		fetchGetProductFromCarts,
		addToCart,
		decreaseProduct,
	} = useProductStore();

	useEffect(() => {
		return () => {
			fetchGetProductFromCarts();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const increaseProduct = (product: productItem) => {
		addToCart(product);
		fetchGetProductFromCarts();
	};

	const decrease = (product: productItem) => {
		decreaseProduct(product);
		fetchGetProductFromCarts();
	};
	return (
		<div>
			<div className='w-[full] mt-5 mx-auto flex flex-col'>
				{getProductsFromCart.map((product, item) => (
					<div className='w-full h-[200px] flex p-3 justify-around items-center box-shadow-1 card-products'>
						<div className='w-[150px] rounded-[50%] overflow-hidden justify-between'>
							<img
								src={product.photoURL}
								alt=''
								className='w-full h-full object-cover rounded-[50%]'
							/>
						</div>
						<div className='w-[300px]'>
							<span>{product.name}</span>
						</div>
						<div className='flex flex-col w-[100px] h-full justify-between items-center font-semibold'>
							<Button
								icon='plus'
								fillMode='outline'
								onClick={() => increaseProduct(product)}
							></Button>
							<span>{product.count}</span>
							<Button
								icon='minus'
								fillMode='outline'
								onClick={() => decrease(product)}
							></Button>
						</div>
						<span className='font-semibold'>$ {product.price}</span>
						<MdDeleteForever className='text-[28px] cursor-pointer hover:text-red-700' />
					</div>
				))}
			</div>
			<div className='w-full h-[100px] mt-10 flex items-center p-5 font-semibold'>
				<span>Total Price: $ 200</span>
				<Button
					icon='check'
					fillMode='outline'
					className='ml-auto'
					size={'large'}
				>
					Checkout
				</Button>
			</div>
		</div>
	);
});
