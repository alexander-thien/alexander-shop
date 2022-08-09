import classNames from 'classnames';
import CardProduct from '../../components/CardProduct';
import { useProductStore } from '../../store/ProductStore';
// import './home.scss';
import styles from './home.module.scss';

const cx = (styles: any[]) => styles.join(' ');

function SectionListProduct() {
	const { getProducts } = useProductStore();

	return (
		<div className={styles.wraper}>
			<p className={cx([styles.title, 'border-custom'])}>Product List</p>
			<div className={styles.product_wrapper}>
				{getProducts().map((product) => {
					return <CardProduct product={product} key={product.id} />;
				})}
			</div>
		</div>
	);
}

export default SectionListProduct;
