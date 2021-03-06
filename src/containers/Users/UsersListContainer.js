import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from '../../components/Users/UsersList'
import { selectorUsers, fetchUsers } from '../../redux/slices/users-slice'

const UsersListContainer = () => {
	const dispatch = useDispatch()
	const { users, errors } = useSelector(selectorUsers)

	useEffect(() => {
		dispatch(fetchUsers(null))
	}, [dispatch])

	return (
		<>
			<div className='col'>
				<UsersList users={users} errors={errors} />
			</div>
		</>
	)
}

export default UsersListContainer
