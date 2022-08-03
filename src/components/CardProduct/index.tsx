import { Button } from '@progress/kendo-react-buttons';
import { useProductStore } from '../../store/ProductStore';

function CardProduct(product: any) {
	const productItem = product.product;

	const { addToCart } = useProductStore();

	return (
		<div className='w-[30%] min-h-[400px] box-shadow-1 p-3 mt-3'>
			<div className='min-h-[200px] w-full overflow-hidden '>
				<img
					src={productItem.photoURL}
					alt=''
					className='object-contain'
				/>
			</div>
			<div className='text-[18px]  mt-3 '>
				<h1 className='font-semibold'>{productItem.name}</h1>
				<h1 className='mt-6'>${productItem.price}</h1>
			</div>

			<Button
				fillMode={'outline'}
				className='mt-6 border-[#332e54] text-[#332e54]'
				onClick={() => addToCart(productItem)}
			>
				Add to cart
			</Button>
		</div>
	);
}

export default CardProduct;
