import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import LayoutPublic from './components/Layout/LayoutPublic'
import LayoutPrivate from './components/Layout/LayoutPrivate'
import ProtectedRoutes from './components/routes/ProtectedRoutes'

import { routesPublics, routesPrivates } from './components/routes/routes'
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
				<Route path='/' element={<LayoutPublic />}>
					{routesPublics.map(({ path, element: Element }) => {
						return <Route key={path} path={path} element={<Element />}></Route>
					})}
				</Route>

				<Route
					element={
						<ProtectedRoutes allowedRoles={[ROLES.ADMIN, ROLES.CUSTOMER]} />
					}>
					<Route path='backoffice' element={<LayoutPrivate />}>
						{routesPrivates.map(({ path, element: Element, allowedRoles }) => {
							return (
								<Route
									key={path}
									element={<ProtectedRoutes allowedRoles={allowedRoles} />}>
									<Route path={path} element={<Element />}></Route>
								</Route>
							)
						})}
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
