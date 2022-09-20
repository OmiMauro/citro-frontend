import { ROLES } from '../../config'
import { selectorAuth, isAuth, logout } from '../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const ProtectedRoutes = ({ allowedRoles }) => {
	const { auth, token, user } = useSelector(selectorAuth)
	const dispatch = useDispatch()
	const location = useLocation()
	useEffect(() => {
		if (token) {
			const decodedToken = jwt_decode(token)
			if (!(Date.now() <= decodedToken?.exp * 1000)) {
				dispatch(logout())
			}
		}
	}, [auth])
	return auth ? (
		allowedRoles?.includes(user?.roleId) ? (
			<Outlet />
		) : (
			<Navigate to="/unauthorized" state={{ location }} replace></Navigate>
		)
	) : (
		<Navigate to="login" replace state={{ location }}></Navigate>
	)
}

export default ProtectedRoutes
