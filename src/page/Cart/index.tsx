import { productItem, useProductStore } from '../../store/ProductStore';
import {
	Grid,
	GridColumn as Column,
	GridCellProps,
	GridFilterCellProps,
	GridFilterChangeEvent,
	GridRowProps,
} from '@progress/kendo-react-grid';
import { DropdownFilterCell } from '../../components/DropDownFillter';
import {
	CompositeFilterDescriptor,
	filterBy,
} from '@progress/kendo-data-query';
import { useMemo, useState } from 'react';
import { MyCommandCell } from './MyCommandCell';
import { observer } from 'mobx-react';
import React from 'react';

const MyCustomCell = (props: GridCellProps) => (
	<div className='p-3 w-[200px] mx-auto'>
		<img src={props.dataItem.photoURL} alt='' />
	</div>
);

const rowRender = (
	trElement: React.ReactElement<HTMLTableRowElement>,
	props: GridRowProps
) => {
	const trProps: any = {
		style: {
			backgroundColor: 'rgb(255, 255, 255, 1)',
		},
	};
	return React.cloneElement(trElement, { ...trProps });
};

export const Cart = observer(() => {
	const { getProductsFromCart, removeCart } = useProductStore();
	const [products, setProducts] = useState(getProductsFromCart());

	const [filter, setFilter] = useState<CompositeFilterDescriptor>();
	const CommandCell = (props: GridCellProps) => (
		<MyCommandCell {...props} remove={remove} />
	);

	const remove = (dataItem: productItem) => {
		const newData = deleteItem(dataItem);
		setProducts(newData);
	};

	const totalPrice = useMemo(() => {
		return products.reduce((result, product) => result + product.price, 0);
	}, [products]);

	const deleteItem = (item: productItem) => {
		const data = [...products];
		let index = data.findIndex((record) => record.id === item.id);
		removeCart(index);
		data.splice(index, 1);
		return data;
	};

	const filterChange = (event: GridFilterChangeEvent) => {
		setProducts(filterBy(getProductsFromCart(), event.filter));
		setFilter(event.filter);
	};

	const types: string[] = Array.from(
		new Set(getProductsFromCart().map((p: productItem) => p.type || ''))
	);

	const TypesFilterCell: any = (props: GridFilterCellProps) => (
		<DropdownFilterCell {...props} data={types} defaultItem={'All'} />
	);
	return (
		<>
			<div className='mt-10 mb-10 h-[600px] overflow-y-auto'>
				{products.length > 0 ? (
					<Grid
						sortable={true}
						data={products}
						filterable={true}
						filter={filter}
						onFilterChange={filterChange}
						className='border-none'
						rowRender={rowRender}
					>
						<Column
							field='id'
							title='ID'
							width='80px'
							filterable={false}
						/>
						<Column
							field='price'
							title='Price'
							filterable={false}
						/>
						<Column field='name' title='Name' filterable={false} />
						<Column
							field='type'
							title='Type'
							filterable={true}
							filterCell={TypesFilterCell}
						/>
						<Column
							field='photoURL'
							title='Image'
							filterable={false}
							cell={MyCustomCell}
							width='200px'
						/>
						<Column
							cell={CommandCell}
							width='100px'
							filterable={false}
						/>
					</Grid>
				) : (
					<h1 className='text-center text-[20px] font-semibold'>
						Don't have any products in cart
					</h1>
				)}
			</div>
			<div className='mt-8 text-[18px] font-semibold text-end'>
				{products.length > 0 && <span>Total: $ {totalPrice}</span>}
			</div>
		</>
	);
});
