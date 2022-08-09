import { Link } from 'react-router-dom';
import { useUserStore } from '../../../../store/UserStore';
import CartComponent from '../../../Cart';
function Nav() {
	const { person } = useUserStore();

	return (
		<div className='w-[15%] flex items-center justify-between'>
			<Link to={`${person.auth === 'true' ? '/person' : '/login'}`}>
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
