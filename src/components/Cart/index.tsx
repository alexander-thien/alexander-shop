import { Badge } from '@progress/kendo-react-indicators';
import { observer } from 'mobx-react';
import { FiShoppingCart } from 'react-icons/fi';
import { useProductStore } from '../../store/ProductStore';

function CartComponent() {
	const { getProductsFromCart } = useProductStore();
	return (
		<div className='flex items-center relative cursor-pointer'>
			<FiShoppingCart className='text-[28px]' />
			{getProductsFromCart.length > 0 && (
				<Badge>{getProductsFromCart.length}</Badge>
			)}
		</div>
	);
}

export default observer(CartComponent);
