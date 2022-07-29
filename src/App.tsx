import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/Layouts';
import { Fragment } from 'react';
import { publicRoutes } from './routes';
import { Props } from './components/Types';
import NotificationComponent from './components/Notification';
function App() {
	return (
		<Router>
			<div className='App'>
				<NotificationComponent />
				<Routes>
					{publicRoutes.map((route, index) => {
						const Page: JSX.Element = route.component;
						let Layout: React.FC<Props> = DefaultLayout;

						if (route.layout === null) {
							Layout = Fragment;
						} else if (route.layout) {
							Layout = route.layout;
						}

						return (
							<Route
								key={index}
								path={route.path}
								element={<Layout> {Page} </Layout>}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
