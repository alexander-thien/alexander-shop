import { Link } from 'react-router-dom';
import CartComponent from '../../../Cart';
function Nav() {
	return (
		<div className='w-[20%] flex items-center justify-between'>
			<Link to='/person'>
				<p className='text-[16px] font-medium'>ACCOUNT</p>
			</Link>
			<Link to='/manager/product'>MANAGER</Link>
			<Link to='/cart'>
				<CartComponent />
			</Link>
		</div>
	);
}

export default Nav;
