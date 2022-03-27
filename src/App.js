import { Routes, Route } from 'react-router-dom';
import LayoutPublic from './components/LayoutPublic/LayoutPublic';
import publicRoute from './components/routes/publicRoutes';
import SuperRoute from './components/routes';
import HomePage from './pages/HomePage';
import React from 'react';

const App = () => {
	const publics = ['/', '/activities', '/login', '/register'];
	const privates = ['/backoffice', '/backofice/*'];
	return (
		<>
			<HomePage></HomePage>

			{/* 	<Routes>
				<Route exact path={publics}>
					<LayoutPublic></LayoutPublic>
					<LayoutPublic>
						<div className='container'>
							console.log(publicRoute);
							{publicRoute.map(({ path, component, exact }) => {
								return (
									<SuperRoute
										key={path}
										component={component}
										exact={exact}
										path={path}></SuperRoute>
								);
							})}
						</div>
					</LayoutPublic>
				</Route>
			</Routes> */}
		</>
	);
};

export default App;
