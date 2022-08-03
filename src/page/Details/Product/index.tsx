import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductStore } from '../../../store/ProductStore';
import SectionOnlyOneProduct from '../../Home/SectionOnlyOneProduct';
import { productItem } from '../../../store/ProductStore';
function Product() {
	const { id } = useParams();
	const { getProductById } = useProductStore();
	const [product, setProduct] = useState<productItem | null>(null);

	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
		if (id !== undefined) {
			const productGet = getProductById(parseInt(id)) || null;

			if (productGet === null) {
				navigate('/');
			} else {
				setProduct(productGet);
			}
		}
	}, [id]);
	return (
		<div>
			<SectionOnlyOneProduct product={product} />
		</div>
	);
}

export default Product;
