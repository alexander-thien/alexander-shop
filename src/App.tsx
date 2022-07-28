import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';
import { Props } from './components/Layouts/Types';
import { Fragment } from 'react';
function App() {
	return (
		<Router>
			<div className='App'>
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
