// type
import { OnlyHeader } from '../components/Layouts';

// Layouts
import { Props } from '../components/Layouts/Types';

// Pages
import Home from '../page/Home';
import Login from '../page/Login';
interface RouteItem {
	path: string;
	component: JSX.Element;
	layout?: React.FC<Props> | null;
}

const publicRoutes: RouteItem[] = [
	{ path: '/', component: <Home /> },
	{ path: '/login', component: <Login />, layout: OnlyHeader },
];

export { publicRoutes };
