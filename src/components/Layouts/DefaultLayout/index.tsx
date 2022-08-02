import { Props } from '../../Types';
import HeaderDefault from '../Components/Header/HeaderDefault';

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<HeaderDefault />
			<div className='w-[100%] h-[1000px] bg-slate-400 mx-auto'>
				{children}
			</div>
		</div>
	);
};

export default DefaultLayout;
