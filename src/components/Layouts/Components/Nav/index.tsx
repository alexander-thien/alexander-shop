import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className='w-[50%] flex items-center justify-between'>
			<Link to='/product'>
				<p className='text-[18px] font-medium'>PRODUCT</p>
			</Link>
			<Link to='/favorite'>
				<p className='text-[18px] font-medium'>FAVORITE</p>
			</Link>
			<Link to='/person'>
				<p className='text-[18px] font-medium'>ACCOUNT</p>
			</Link>
			<Link to='/cart'>
				<p className='text-[18px] font-medium'>CART</p>
			</Link>
		</div>
	);
}

export default Nav;
