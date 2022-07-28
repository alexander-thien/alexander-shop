import HeaderOnly from '../Components/Header/HeaderOnly';
import { Props } from '../Types';

const OnlyHeader: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<HeaderOnly />
			<div className='out_side-content'>{children}</div>
		</div>
	);
};

export default OnlyHeader;
