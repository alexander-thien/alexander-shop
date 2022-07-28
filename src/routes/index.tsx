// type
import { OnlyHeader } from '../components/Layouts';
import Loading from '../components/Loading';
import { Props } from '../components/Types';

// Layouts

// Pages
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
interface RouteItem {
	path: string;
	component: JSX.Element;
	layout?: React.FC<Props> | null;
}

const publicRoutes: RouteItem[] = [
	{ path: '/', component: <Home /> },
	{ path: '/login', component: <Login />, layout: OnlyHeader },
	{ path: '/register', component: <Register />, layout: OnlyHeader },
	{ path: '/loading', component: <Loading />, layout: OnlyHeader },
];

export { publicRoutes };
