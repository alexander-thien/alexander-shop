import SectionList from './SectionList';
import SectionListProduct from './SectionListProduct';
import SectionOnlyOneProduct from './SectionOnlyOneProduct';

function Home() {
	return (
		<div>
			<SectionOnlyOneProduct />
			<SectionList />
			<SectionListProduct />
		</div>
	);
}

export default Home;
