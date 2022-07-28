import Sidebar from '../Components/Sidebar';
import { Props } from '../../Types';
import HeaderDefault from '../Components/Header/HeaderDefault';

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<HeaderDefault />
			<div className='container'>
				<Sidebar />
				<div className='content'>{children}</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
