import React, { useEffect } from 'react'
import MembersForm from '../../components/Members/MembersForm'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	selectorMembers,
	fetchMemberById,
	createMember,
	putMember,
	removeMember,
	fetchMembers
} from '../../redux/slices/members-slice'

const MembersFormContainer = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { member, errors, status } = useSelector(selectorMembers)

	useEffect(() => {
		if (id) {
			dispatch(fetchMemberById(id))
		}
	}, [dispatch])

	const handleSubmit = (data) => {
		dispatch(createMember(data))
	}

	return (
		<>
			<div>
				<h3 className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
					Crear un nuevo organizador
				</h3>
				<MembersForm
					handleSubmit={handleSubmit}
					member={member}
					errors={errors}
				/>
			</div>
		</>
	)
}

export default MembersFormContainer
