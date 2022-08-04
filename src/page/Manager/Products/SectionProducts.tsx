import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, GridColumn, GridCellProps } from '@progress/kendo-react-grid';

interface productItem {
	id: number;
	name?: string;
	price?: number;
	photoURL?: string;
	content?: string;
}
const timeout = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const CustomCell = (props: GridCellProps) => {
	return (
		<div className='w-[200px] mx-auto my-2'>
			<img src={props.dataItem.photoURL} alt='' />
		</div>
	);
};

function SectionProducts() {
	const [products, setproducts] = useState<productItem[]>([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await timeout(1000);
		axios.get('http://localhost:3001/products').then((response) => {
			setproducts(response.data);
		});
	};

	return (
		<div className='mt-3'>
			<Grid sortable={true} pageable={true} data={products}>
				<GridColumn field='id' title='ID' width='40px' />
				<GridColumn field='name' title='Name' width='250px' />
				<GridColumn field='price' title='Price' />
				<GridColumn field='content' title='Content' />
				<GridColumn field='photoURL' title='IMG' cell={CustomCell} />
			</Grid>
		</div>
	);
}
export default SectionProducts;
