import { observer } from 'mobx-react';
import { useEffect } from 'react';
import CardProduct from '../../components/CardProduct';
import { useProductStore } from '../../store/ProductStore';
// import './home.scss';
import styles from './home.module.scss';

const cx = (styles: any[]) => styles.join(' ');

function SectionListProduct() {
	const { getProducts, fetchGetProduct } = useProductStore();

	useEffect(() => {
		fetchGetProduct();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.wraper}>
			<p className={cx([styles.title, 'border-custom'])}>Product List</p>
			<div className={styles.product_wrapper}>
				{getProducts.map((product) => {
					return <CardProduct product={product} key={product.id} />;
				})}
			</div>
		</div>
	);
}

export default observer(SectionListProduct);
