import { Routes, Route } from 'react-router-dom'
import LayoutPublic from './components/LayoutPublic/LayoutPublic'
import publicRoute from './components/routes/publicRoutes'
import SuperRoute from './components/routes'
import HomePage from './pages/HomePage'
import { useState, useEffect } from 'react'
import { getOrganization } from './services/organizationsServices'
const App = () => {
	const publics = ['/', '/activities', '/login', '/register']
	const privates = ['/backoffice', '/backofice/*']

	const [organization, setOrganization] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getOrganization(null)
				setOrganization(response.data.data)
			} catch (error) {
				alert(error)
			}
		}
		fetchData()
	}, [])
	return (
		<>
			<HomePage organization={organization}></HomePage>

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
	)
}

export default App
