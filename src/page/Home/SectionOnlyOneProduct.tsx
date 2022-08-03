import { Button } from '@progress/kendo-react-buttons';
import { useEffect, useState } from 'react';
import { productItem, useProductStore } from '../../store/ProductStore';

function SectionOnlyOneProduct(props: productItem | any) {
	const { addToCart } = useProductStore();

	const [data, setData] = useState({
		id: 0,
		name: 'Custom FormulaR for acne',
		price: 450,
		photoURL: 'http://localhost:3000/img/customFormula@2x.webp',
		content:
			"Sudden acne spot? We've got skin emergencies covered with fast-acting hydrocolloid patches that absorb pus and oil. Plus, they're low profile to help spots heal—whenever, wherever.",
	});

	useEffect(() => {
		if (props.product !== undefined) {
			setData({ ...props.product });
		}
	}, [props.product]);

	return (
		<div className='w-[100%] h-[800px] bg-[#efeef5] pt-8'>
			<div className='w-[90%] mx-auto text-center flex justify-center'>
				<div className=''>
					<img src={data.photoURL} alt='' />
				</div>
				<div className='pt-5 text-start w-[35%]'>
					<p className='text-[38px] font-semibold '>{data.name}</p>
					<p className='mt-4'>
						{data.content ||
							'Help clear your skin with a personalized, Rx acne cream—prescribed for you by a dermatology provider. Your Curology Custom Formula is made with acne-busting ingredients picked for you, which can include tretinoin, azelaic acid, clindamycin, and more.'}
					</p>
					<p className='mt-5 text-[22px] font-semibold'>
						Proven to tackle
					</p>
					<div className='flex mt-4 text-[13px] font-semibold'>
						<span className='px-2  rounded-[5px] bg-[#ffff] mr-3 '>
							Breakouts
						</span>
						<span className='px-2  rounded-[5px] bg-[#ffff] mr-3 '>
							Clogged pores
						</span>
						<span className='px-2  rounded-[5px] bg-[#ffff] mr-3 '>
							Whiteheads
						</span>
						<span className='px-2  rounded-[5px] bg-[#ffff] mr-3 '>
							Redness
						</span>
					</div>
					<div className='mt-4'>
						<ul>
							<li className='mt-5'>
								Results in 90 days, or get your $ back
							</li>
							<li className='mt-5'>
								Free online access to a dermatology provider
							</li>
							<li className='mt-5'>
								Easy bi-monthly deliveries of your routine
							</li>
						</ul>
					</div>
					<div className='mt-10'>
						<Button
							fillMode={'outline'}
							themeColor='inverse'
							className='px-20 py-6 font-semibold text-[18px]'
							onClick={() => addToCart(data)}
						>
							Add to cart
						</Button>
					</div>
					<p className='mt-5 text-[12px]'>
						$4.95 S&H. Subscription required. Billed bi-monthly.
					</p>
				</div>
			</div>
		</div>
	);
}

export default SectionOnlyOneProduct;
