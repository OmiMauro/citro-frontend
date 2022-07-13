import React, { useEffect } from 'react'
import Inscriptions from '../../components/Inscriptions/Inscriptions'
import {
	fetchInscriptionsByEvent,
	selectorInscriptions,
} from '../../redux/slices/inscriptions-slice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const InscriptionsContainer = () => {
	const { eventId } = useParams()
	const { inscriptions, status, errors, msg } =
		useSelector(selectorInscriptions)
	const dispatch = useDispatch()

	useEffect(() => {
		if (eventId) dispatch(fetchInscriptionsByEvent({ eventId }))
	}, [dispatch])

	return (
		<div className="col">
			<Inscriptions
				inscriptions={inscriptions}
				status={status}
				errors={errors}
				msg={msg}
			/>
		</div>
	)
}

export default InscriptionsContainer
