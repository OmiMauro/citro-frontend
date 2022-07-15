import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import UsersForm from '../../components/Users/UsersForm'
import { selectorUsers, fetchUserById } from '../../redux/slices/users-slice'

const UsersContainer = () => {
	const dispatch = useDispatch()
	const { user, errors, status } = useSelector(selectorUsers())
	const { id } = useParams()
	useEffect(() => {
		if (id) {
			dispatch(fetchUserById(id))
		}
	})
	const handleSubmit = (formData) => {}
	return (
		<>
			<UsersForm user={user} errors={errors} handleSubmit={handleSubmit} />
		</>
	)
}

export default UsersContainer
