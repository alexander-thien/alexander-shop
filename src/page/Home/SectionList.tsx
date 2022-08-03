import { Avatar } from '@progress/kendo-react-layout';
import { useState } from 'react';

interface productItem {
	name: String;
	img: string;
	content: String;
	active?: boolean;
}

const products: productItem[] = [
	{
		name: 'Tretinoin',
		img: 'http://localhost:3000/img/tretinoin@2x.webp',
		content:
			'A vitamin A derivative that helps clear acne and smooth out texture and can improve dark spots and fine lines.',
	},
	{
		name: 'Azelaic Acid',
		img: 'http://localhost:3000/img/azelaic@2x.webp',
		content:
			'A multitasking exfoliant that helps unclog pores, smooth texture, and brighten skin.',
	},
	{
		name: 'Niacinamide',
		img: 'http://localhost:3000/img/niacinamide@2x.png',
		content:
			'A form of vitamin B3 that soothes inflammation, fades dark spots, and fights free radicals.',
	},
	{
		name: 'Clindamycin',
		img: 'http://localhost:3000/img/clindamycin@2x.webp',
		content:
			'An antibiotic that fights acne-contributing bacteria and soothes inflammation.',
	},
	{
		name: 'Metronidazole',
		img: 'http://localhost:3000/img/metronidazole@2x.webp',
		content:
			'An antibiotic that can help soothe inflammation, including redness and swelling.',
	},
	{
		name: 'Zinc Pyrithione',
		img: 'http://localhost:3000/img/zinc@2x.webp',
		content:
			'An antimicrobial that helps keep acne-contributing bacteria and fungi in check.',
	},
	{
		name: 'Tranexamic Acid',
		img: 'http://localhost:3000/img/tranexamic@2x.webp',
		content:
			'A brightening amino acid derivative that helps lighten dark spots and reduce redness.',
	},
];

const SectionList = () => {
	const [product, setProduct] = useState<productItem>({
		name: products[0].name,
		img: products[0].img,
		content: products[0].content,
	});

	const handleSetProduct = (product: productItem, index: number) => {
		products.forEach((item) => {
			item.active = false;
		});
		products[index].active = true;
		setProduct({ ...product });
	};

	return (
		<div className='mt-6 w-[90%] mx-auto flex justify-between h-[500px]'>
			<div className='w-[30%]'>
				<span className='text-[20px] font-semibold'>
					Proven ingredients, picked for your goals
				</span>
				<p className='border-custom'></p>
				<div className='mt-6 '>
					<p className='text-14px font-semibold'>{product.name}</p>
					<p className='mt-5'>{product.content}</p>
					<p className='mt-6'>Ingredients subject to consultation.</p>
				</div>
			</div>
			<div className='w-[60%] flex justify-around flex-wrap'>
				{products.map((product, index) => (
					<div
						key={index}
						className='w-[25%] text-center cursor-pointer'
						onClick={() => handleSetProduct(product, index)}
					>
						<Avatar
							style={{ width: '100px', height: '100px' }}
							themeColor='light'
							// eslint-disable-next-line react/jsx-no-comment-textnodes
						>
							<img
								src={product.img}
								style={{ width: 64, height: 64 }}
							/>
						</Avatar>
						<div className='mt-6'>
							<span
								className={`text-[14px] ${
									!product.active ||
									'border-custom font-semibold'
								}`}
							>
								{product.name}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionList;
