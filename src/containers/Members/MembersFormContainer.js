import React, { useEffect } from 'react'
import MembersForm from '../../components/Members/MembersForm'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	selectorMembers,
	fetchMemberById,
	createMember,
	putMember,
	patchMemberImage,
} from '../../redux/slices/members-slice'
import { STATUS } from '../../redux/constants/action-types'
import { Col } from 'react-bootstrap'
const MembersFormContainer = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { member, errors, status, msg } = useSelector(selectorMembers)

	useEffect(() => {
		if (id) {
			dispatch(fetchMemberById(id))
		}
	}, [dispatch, id])

	const handleSubmit = (data) => {
		if (id) {
			data._id = id
			return dispatch(putMember(data))
		}
		dispatch(createMember(data))
	}
	const handleUpdateImage = (data) => {
		if (id) {
			dispatch(patchMemberImage({ data, id }))
		}
	}
	return (
		<Col>
			{status === STATUS.SUCCESSFUL && (
				<MembersForm
					handleSubmit={handleSubmit}
					handleUpdateImage={handleUpdateImage}
					member={member}
					errors={errors}
					msg={msg}
					title={
						id
							? 'Actualizar los datos del organizador'
							: 'Crear un nuevo organizador'
					}
				/>
			)}
			{status === STATUS.PENDING && (
				<div className="progress">
					<div
						className="progress-bar progress-bar-striped bg-success"
						role="progressbar"
						style={{ width: '25%' }}
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100"
					></div>
				</div>
			)}
		</Col>
	)
}

export default MembersFormContainer
