import { ROLES } from '../../config'
import { selectorAuth, isAuth, logout } from '../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const parseToken = (token) => {
	try {
		return JSON.parse(atob(token?.split('.')[1]))
	} catch (error) {
		return null
	}
}
const ProtectedRoutes = ({ allowedRoles }) => {
	const { auth, token, user } = useSelector(selectorAuth)
	const dispatch = useDispatch()
	useEffect(() => {
		const decodedToken = parseToken(token)
		if (decodedToken?.exp * 1000 < Date.now()) {
			dispatch(logout())
		}
	}, [auth])
	return auth ? (
		allowedRoles?.includes(user.roleId) ? (
			<Outlet />
		) : (
			<Navigate to='/unauthorized' replace></Navigate>
		)
	) : (
		<Navigate to='/login' replace></Navigate>
	)
}

export default ProtectedRoutes
