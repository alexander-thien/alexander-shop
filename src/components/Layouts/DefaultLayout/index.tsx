import { Props } from '../../Types';
import Footer from '../Components/Footer';
import HeaderDefault from '../Components/Header/HeaderDefault';

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<HeaderDefault />
			<div className='w-[100%] mx-auto pt-[60px]'>{children}</div>
			<Footer />
		</>
	);
};

export default DefaultLayout;
