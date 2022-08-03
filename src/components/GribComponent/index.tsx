import {
	Grid,
	GridColumn as Column,
	GridDataStateChangeEvent,
	GridCellProps,
} from '@progress/kendo-react-grid';
import { process, State } from '@progress/kendo-data-query';
import products from './product.json';
import { useEffect, useState } from 'react';

const initialDataState: State = {
	sort: [{ field: 'code', dir: 'asc' }],
	take: 10,
	skip: 0,
};
function GribComponent() {
	const [dataState, setDataState] = useState<State>(initialDataState);

	return (
		<div>
			<Grid
				pageable={true}
				sortable={true}
				filterable={true}
				style={{ height: '400px' }}
				data={process(products, dataState)}
				{...dataState}
				onDataStateChange={(e: GridDataStateChangeEvent) => {
					console.log(e);
					setDataState(e.dataState);
				}}
			>
				<Column
					field='ProductID'
					title='ID'
					width='80px'
					filterable={false}
				/>
				<Column field='ProductName' title='Name' width='250px' />
				<Column
					field='UnitPrice'
					title='Price'
					filter='numeric'
					width='150px'
				/>
				<Column
					field='UnitsInStock'
					title='In stock'
					filter='numeric'
					width='150px'
				/>
				<Column
					field='Discontinued'
					filter='boolean'
					cell={(props: GridCellProps) => {
						return (
							<td>
								<input
									disabled={true}
									type='checkbox'
									checked={props.dataItem[props.field || '']}
								/>
							</td>
						);
					}}
				/>
			</Grid>
		</div>
	);
}

export default GribComponent;
