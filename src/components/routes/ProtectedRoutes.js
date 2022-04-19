import { ROLES } from '../../config'
import { selectorAuth } from '../../redux/slices/auth-slice'
import { useSelector } from 'react-redux'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const ProtectedRoutes = ({ allowedRoles }) => {
	const { auth, user } = useSelector(selectorAuth)
	//	const location = useLocation()
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
