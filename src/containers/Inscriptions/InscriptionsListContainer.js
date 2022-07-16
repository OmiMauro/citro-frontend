import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InscriptionsList from '../../components/Inscriptions/InscriptionsList'
import {
	selectorInscriptions,
	fetchInscriptions,
} from '../../redux/slices/inscriptions-slice'

const InscriptionsListContainer = () => {
	const dispatch = useDispatch()
	const { inscriptions, status, errors } = useSelector(selectorInscriptions)
	useEffect(() => {
		dispatch(fetchInscriptions())
	}, [dispatch])

	return (
		<>
			<div className="col">
				<InscriptionsList
					inscriptions={inscriptions}
					errors={errors}
					status={status}
				/>
			</div>
		</>
	)
}

export default InscriptionsListContainer
