import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InscriptionsForm from '../../components/Inscriptions/InscriptionsForm'
import {
	selectorInscriptions,
	createInscription,
} from '../../redux/slices/inscriptions-slice'
import {
	fetchLocalities,
	fetchProvinces,
	selectorLocations,
} from '../../redux/slices/location-slice'
import { selectorUsers } from '../../redux/slices/users-slice'

const InscriptionsFormContainer = () => {
	const { eventId } = useParams()
	const { user } = useSelector(selectorUsers)
	const { inscription, status, msg, errors } = useSelector(selectorInscriptions)
	const { provinces, localities } = useSelector(selectorLocations)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProvinces({ campos: 'id,nombre' }))
	}, [])

	const handleLocalities = (province) => {
		dispatch(fetchLocalities({ provincia: province, campos: 'id,nombre' }))
	}
	const handleSubmit = (data) => {
		if (eventId) dispatch(createInscription({ _eventId: eventId, data }))
	}
	return (
		<>
			<div className="col">
				<InscriptionsForm
					user={user}
					inscription={inscription}
					status={status}
					msg={msg}
					errors={errors}
					provinces={provinces}
					localities={localities}
					handleLocalities={handleLocalities}
					handleSubmit={handleSubmit}
				/>
			</div>
		</>
	)
}

export default InscriptionsFormContainer
