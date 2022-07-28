import { Link } from 'react-router-dom';

function Home() {
	return (
		<div>
			<Link to={'/login'}>Go to Login</Link>
		</div>
	);
}

export default Home;
