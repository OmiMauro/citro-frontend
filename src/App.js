import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import LayoutPublic from './components/Layout/LayoutPublic'
import LayoutPrivate from './components/Layout/LayoutPrivate'
import ProtectedRoutes from './components/routes/ProtectedRoutes'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error404Page from './pages/Error404Page'
import Error401Page from './pages/Error401Page'

import {
	selectorOrganization,
	fetchOrganization
} from './redux/slices/organization-slice'

import { ROLES } from './config'

const App = () => {
	const dispatch = useDispatch()
	const { organization, status } = useSelector(selectorOrganization)
	useEffect(() => {
		dispatch(fetchOrganization())
	}, [dispatch])

	return (
		<>
			<Routes>
				<Route element={<LayoutPublic />}>
					{/* public routes */}
					<Route path='/' element={<HomePage></HomePage>} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Route>

				{/* protect these routes */}
				<Route element={<ProtectedRoutes />}>
					<Route path='/backoffice' element={<LayoutPrivate />}>
						<Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}>
							<Route path='organization'></Route>
						</Route>
						<Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}>
							<Route path='login' />
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
