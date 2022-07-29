import { Link } from 'react-router-dom';
import HeaderWrapper from '.';
import Nav from '../Nav';

function HeaderDefault() {
	return (
		<HeaderWrapper>
			<div className='flex items-center h-[100%] mx-auto w-[90%] justify-between'>
				<Link to='/'>
					<h1 className='font-extrabold text-xl'>AlexanderShop</h1>
				</Link>
				<Nav />
				<h1>Login</h1>
			</div>
		</HeaderWrapper>
	);
}

export default HeaderDefault;
