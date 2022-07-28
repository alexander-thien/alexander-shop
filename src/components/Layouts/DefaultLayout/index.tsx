import Sidebar from '../Components/Sidebar';
import { Props } from '../../Types';
import HeaderWrapper from '../Components/Header';
import HeaderDefault from '../Components/Header/HeaderDefault';

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<HeaderWrapper>
				<HeaderDefault />
			</HeaderWrapper>
			<div className='container'>
				<Sidebar />
				<div className='content'>{children}</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
