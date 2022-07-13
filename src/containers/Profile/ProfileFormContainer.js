import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProfileForm from '../../components/Profile/ProfileForm'
import { selectorUsers, editUser } from '../../redux/slices/users-slice'

const ProfileFormContainer = () => {
	const { id } = useParams()
	const { user, errors, msg } = useSelector(selectorUsers)
	const dispatch = useDispatch()

	const handleSubmit = (data) => {
		if (id) dispatch(editUser({ id, data }))
	}
	const handleUpdateImage = async (data) => {
		if (id) dispatch()
	}
	return (
		<>
			<div className="col">
				<ProfileForm
					user={user}
					errors={errors}
					msg={msg}
					handleSubmit={handleSubmit}
					handleUpdateImage={handleUpdateImage}
				/>
			</div>
		</>
	)
}

export default ProfileFormContainer
