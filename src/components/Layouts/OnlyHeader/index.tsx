import HeaderOnly from '../Components/Header/HeaderOnly';
import { Props } from '../../Types';
import HeaderWrapper from '../Components/Header';

const OnlyHeader: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<HeaderWrapper>
				<HeaderOnly />
			</HeaderWrapper>
			<div className='out_side-content'>{children}</div>
		</div>
	);
};

export default OnlyHeader;
