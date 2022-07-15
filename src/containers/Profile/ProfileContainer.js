import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Profile from '../../components/Profile/Profile'

import { selectorAuth } from '../../redux/slices/auth-slice'
import { fetchUserById, selectorUsers } from '../../redux/slices/users-slice'
const ProfileContainer = () => {
	const dispatch = useDispatch()
	const { user: userId } = useSelector(selectorAuth)
	const { user, msg, errors } = useSelector(selectorUsers)
	useEffect(() => {
		dispatch(fetchUserById(userId.userId))
	}, [dispatch])
	return (
		<>
			<div className="col">
				<Profile user={user} errors={errors} msg={msg} />
			</div>
		</>
	)
}

export default ProfileContainer
