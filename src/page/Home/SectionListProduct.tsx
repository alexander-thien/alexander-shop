import CardProduct from '../../components/CardProduct';
import { useProductStore } from '../../store/ProductStore';

function SectionListProduct() {
	const { getProducts } = useProductStore();
	return (
		<div className='h-[700px] w-[90%]  mx-auto mb-[100px]'>
			<p className='text-[38px] w-full font-semibold border-custom'>
				Product List
			</p>
			<div className='flex flex-wrap mt-6 justify-between'>
				{getProducts().map((product) => {
					return <CardProduct product={product} key={product.id} />;
				})}
			</div>
		</div>
	);
}

export default SectionListProduct;
