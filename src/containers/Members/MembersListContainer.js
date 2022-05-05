import React, { useEffect } from 'react'
import MembersList from '../../components/Members/MembersList'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectorMembers,
	fetchMembers,
	removeMember
} from '../../redux/slices/members-slice'

const MembersListContainer = () => {
	const { members, status, errors } = useSelector(selectorMembers)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchMembers())
	}, [dispatch])

	const handleDelete = (id) => {
		if (id) {
			dispatch(removeMember(id))
		}
	}
	return (
		<div className='col'>
			<h3 className='text-center fw-bold mb-5 mx-1 mx-md-4 mt-4'>
				Lista de los organizadores
			</h3>
			<MembersList members={members} handleDelete={handleDelete} />
		</div>
	)
}

export default MembersListContainer
