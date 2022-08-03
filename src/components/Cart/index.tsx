import { observer } from 'mobx-react';
import { FiShoppingCart } from 'react-icons/fi';
import { useProductStore } from '../../store/ProductStore';

function CartComponent() {
	const { getProductsFromCart } = useProductStore();
	const productCount = getProductsFromCart().length;
	return (
		<div className='flex items-center relative cursor-pointer'>
			<FiShoppingCart className='text-[28px]' />
			{!productCount || (
				<span className='absolute w-5 h-5 bg-red-700 text-fuchsia-100 text-[12px] rounded-xl flex items-center justify-center top-[-12px] right-[-12px] font-semibold'>
					{productCount}
				</span>
			)}
		</div>
	);
}

export default observer(CartComponent);
