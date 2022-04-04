import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LayoutPublic from './components/LayoutPublic/LayoutPublic'
import HomePage from './pages/HomePage'
import { useState, useEffect } from 'react'
import { getOrganization } from './services/organizationsServices'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error404 from './pages/Error404'
import Error404Page from './pages/Error404'
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
			<Routes>
				<Route path='/' element={<Layout />}>
					{/* public routes */}
					<Route
						path='/home'
						element={<HomePage organization={organization}></HomePage>}
					/>
					<Route
						path='/login'
						element={<LoginPage organization={organization} />}
					/>
					<Route path='register' element={<RegisterPage />} />

					{/* we want to protect these routes */}
					{/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
						<Route path='/' element={<Home />} />
					</Route>

					<Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
						<Route path='editor' element={<Editor />} />
					</Route>

					<Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
						<Route path='admin' element={<Admin />} />
					</Route>

					<Route
						element={
							<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
						}>
						<Route path='lounge' element={<Lounge />} />
					</Route>
 */}
					{/* catch all */}
					<Route path='*' element={<Error404Page />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
