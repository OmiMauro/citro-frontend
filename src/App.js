import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LayoutPublic from './components/LayoutPublic/LayoutPublic'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error404 from './pages/Error404Page'
import Error404Page from './pages/Error404Page'
import BackofficePage from './pages/BackofficePage'

/* using redux */
import { useSelector, useDispatch } from 'react-redux'
/* import { setOrganization } from './redux/actions/organizations/organizationActions' */
import {
	selectorOrganization,
	fetchOrganization
} from './redux/slices/organization-slice'

const App = () => {
	const dispatch = useDispatch()
	const { organization, status } = useSelector(selectorOrganization)
	useEffect(() => {
		dispatch(fetchOrganization())
	}, [dispatch])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					{/* public routes */}
					<Route path='/' element={<HomePage></HomePage>} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/backoffice' element={<BackofficePage />} />

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
