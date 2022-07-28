import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { Props } from '../Types';

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className='container'>
				<Sidebar />
				<div className='content'>{children}</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
