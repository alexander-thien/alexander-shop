import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderWrapper from '.';

function HeaderOnly() {
	const { state } = useLocation();
	return (
		<HeaderWrapper>
			<div className='flex items-center h-[100%] mx-auto w-[80%] justify-between'>
				<Link to='/'>
					<h1 className='font-extrabold text-xl'>AlexanderShop</h1>
				</Link>

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
		</HeaderWrapper>
	);
}

export default HeaderOnly;
