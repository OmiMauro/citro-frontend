import { ROLES } from '../../config'
import { selectorAuth } from '../../redux/slices/auth-slice'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RequireAuth = ({ allowedRoles }) => {
	const { auth, user } = useSelector(selectorAuth)
	const location = useLocation()

	return allowedRoles?.includes(user.roleId) ? (
		<Outlet />
	) : auth?.user ? (
		<Navigate to='/unauthorized' state={{ from: location }} replace></Navigate>
	) : (
		<Navigate to='/login' state={{ from: location }} replace></Navigate>
	)
}

export default RequireAuth
