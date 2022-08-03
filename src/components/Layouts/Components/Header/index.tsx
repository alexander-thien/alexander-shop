import { Props } from '../../../Types';

const HeaderWrapper: React.FC<Props> = ({ children }) => {
	return (
		<header className='h-16 border-b-[1px] flex items-center bg-[#fff] fixed w-[100%] z-50'>
			{children}
		</header>
	);
};

export default HeaderWrapper;
