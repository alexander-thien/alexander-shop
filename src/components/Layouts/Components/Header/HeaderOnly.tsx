import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HeaderOnly() {
	const { state } = useLocation();
	return (
		<div className='flex items-center h-[100%] mx-auto w-[80%] justify-between'>
			<h1 className='font-extrabold text-xl'>AlexanderShop</h1>
			{state === null ? (
				<Link
					to='/register'
					state={{ register: true }}
					className='font-normal'
				>
					Get stated
				</Link>
			) : (
				<Link to='/login' className='font-normal'>
					Login
				</Link>
			)}
		</div>
	);
}

export default HeaderOnly;
