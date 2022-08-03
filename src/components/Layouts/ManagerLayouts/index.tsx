import { Props } from '../../Types';
import HeaderDefault from '../Components/Header/HeaderDefault';

const ManagerLayouts: React.FC<Props> = ({ children }) => {
	return (
		<>
			<HeaderDefault />
			<div className='w-[90%] mx-auto pt-[60px]'>{children}</div>
		</>
	);
};

export default ManagerLayouts;
