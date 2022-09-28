import React, { useEffect } from 'react'
import MembersList from '../../components/Members/MembersList'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectorMembers,
	fetchMembers,
	removeMember,
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
		<div className="col">
			<MembersList members={members} handleDelete={handleDelete} />
		</div>
	)
}

export default MembersListContainer
