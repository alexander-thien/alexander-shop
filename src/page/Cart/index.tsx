import { useProductStore } from '../../store/ProductStore';
import {
	Grid,
	GridColumn as Column,
	GridCellProps,
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

const MyCustomCell = (props: GridCellProps) => (
	<div className='p-3 w-[200px] mx-auto'>
		<img src={props.dataItem.photoURL} alt='' />
	</div>
);

export const Cart = () => {
	const { getProductsFromCart } = useProductStore();
	// const [products, setProducts] = useState(getProductsFromCart());
	return (
		<div className='mt-10 mb-10'>
			<Grid sortable={true} data={getProductsFromCart()}>
				<Column field='id' title='ID' width='80px' filterable={false} />
				<Column field='price' title='Price' filter='numeric' />
				<Column field='name' title='Name' filter='numeric' />
				<Column field='photoURL' title='Image' cell={MyCustomCell} />
			</Grid>
		</div>
	);
};
