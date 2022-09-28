import React, { useEffect } from 'react'
import Inscription from '../../components/Inscription/Inscription'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchInscriptionById,
	selectorInscriptions,
} from '../../redux/slices/inscriptions-slice'
import { selectorUsers } from '../../redux/slices/users-slice'

const InscriptionContainer = () => {
	const { inscriptionId } = useParams()
	const { errors, inscription } = useSelector(selectorInscriptions)
	const dispatch = useDispatch()

	useEffect(() => {
		if (inscriptionId) {
			dispatch(fetchInscriptionById(inscriptionId))
		}
	}, [dispatch])

	return (
		<div className="col">
			<Inscription inscription={inscription} errors={errors} />
		</div>
	)
}

export default InscriptionContainer
