import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LayoutPublic from './components/LayoutPublic/LayoutPublic'
import { useEffect } from 'react'
import RequireAuth from './components/routes/RequireAuth'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error404 from './pages/Error404Page'
import Error404Page from './pages/Error404Page'
import BackofficePage from './pages/BackofficePage'
import { useSelector, useDispatch } from 'react-redux'
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
				<Route path='/' element={<Layout />}>
					{/* public routes */}
					<Route path='/' element={<HomePage></HomePage>} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					{/* 	<Route path='/backoffice' element={<BackofficePage />} /> */}

					{/* protect these routes */}
					<Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
						<Route path='/dashboard' element={<BackofficePage />} />
					</Route>

					{/* catch all */}
					<Route path='*' element={<Error404Page />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
