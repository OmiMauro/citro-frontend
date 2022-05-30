import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProfileForm from '../../components/Profile/ProfileForm'
import { selectorUsers } from '../../redux/slices/users-slice'
const ProfileFormContainer = () => {
	const { id } = useParams()
	const { user, errors } = useSelector(selectorUsers)
	return (
		<>
			<div className='col'>
				<ProfileForm user={user} errors={errors} />
			</div>
		</>
	)
}

export default ProfileFormContainer
