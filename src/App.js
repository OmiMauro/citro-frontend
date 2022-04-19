import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LayoutPublic from './components/LayoutPublic/LayoutPublic'
import LayoutPrivate from './components/Layout/LayoutPrivate'
import { useEffect } from 'react'
/* import RequireAuth from './components/routes/RequireAuth'*/
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error404Page from './pages/Error404Page'
import BackofficePage from './pages/BackofficePage'
import { useSelector, useDispatch } from 'react-redux'

import Login from './components/Auth/Login'
import {
	selectorOrganization,
	fetchOrganization
} from './redux/slices/organization-slice'
import { ROLES } from './config'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Error401Page from './pages/Error401Page'
const App = () => {
	const dispatch = useDispatch()
	const { organization, status } = useSelector(selectorOrganization)

	useEffect(() => {
		dispatch(fetchOrganization())
	}, [dispatch])
	const privateRoutes = ['/backoffice', '/backoffice/*']
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					{/* public routes */}
					<Route path='/' element={<HomePage></HomePage>} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Route>

				{/* protect these routes */}
				<Route element={<ProtectedRoutes />}>
					<Route path='/backoffice' element={<LayoutPrivate />}>
						<Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}>
							<Route path='organization' element={<Login />}></Route>
						</Route>
						<Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}>
							<Route path='login' element={<Login />} />
						</Route>
					</Route>
				</Route>
				{/* catch all */}
				<Route path='/unauthorized' element={<Error401Page />} />

				<Route path='*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App
