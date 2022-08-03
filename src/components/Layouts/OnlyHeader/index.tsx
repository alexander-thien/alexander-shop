import HeaderOnly from '../Components/Header/HeaderOnly';
import { Props } from '../../Types';

const OnlyHeader: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<HeaderOnly />
			<div className='bg-[#f8f8fa] w-[100%] h-[100vh] pt-[60px]'>
				{children}
			</div>
		</div>
	);
};

export default OnlyHeader;
