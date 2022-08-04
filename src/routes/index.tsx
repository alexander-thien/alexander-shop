// type
import Loading from '../components/Loading';
import { Props } from '../components/Types';
import Product from '../page/Details/Product';

// Layouts
import { OnlyHeader } from '../components/Layouts';
import ManagerLayouts from '../components/Layouts/ManagerLayouts';
// Pages
import Home from '../page/Home';
import Login from '../page/Login';
import ProductManager from '../page/Manager/Products';
import Register from '../page/Register';

interface RouteItem {
	path: string;
	component: JSX.Element;
	layout?: React.FC<Props> | null;
}

const publicRoutes: RouteItem[] = [
	{ path: '/', component: <Home /> },
	{ path: '/product/:id', component: <Product /> },
	{ path: '/login', component: <Login />, layout: OnlyHeader },
	{ path: '/register', component: <Register />, layout: OnlyHeader },
	{
		path: '/manager/products',
		component: <ProductManager />,
		layout: ManagerLayouts,
	},
	{ path: '/loading', component: <Loading />, layout: OnlyHeader },
];

export { publicRoutes };
