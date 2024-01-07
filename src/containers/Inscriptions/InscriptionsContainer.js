import React, { useEffect, useState } from 'react'
import Inscriptions from '../../components/Inscriptions/Inscriptions'
import Pagination from '../../components/Pagination/Pagination'
import { Row, Col } from 'react-bootstrap'
import {
	fetchInscriptionsByEvent,
	selectorEvent,
} from '../../redux/slices/event-slice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const InscriptionsContainer = () => {
	const { eventId } = useParams()
	const { inscriptions, status, errors, msg } = useSelector(selectorEvent)
	const [values, setValues] = useState({
		page: 1,
		limit: 5,
	})
	const dispatch = useDispatch()
	const handlePageChange = (e) => {
		setValues({ ...values, page: e.selected + 1 })
	}
	useEffect(() => {
		if (eventId)
			dispatch(
				fetchInscriptionsByEvent({
					eventId,
					page: values.page,
					limit: values.limit,
				})
			)
	}, [dispatch, values])

	return (
		<Row>
			<Col>
				<Inscriptions
					inscriptions={inscriptions}
					status={status}
					errors={errors}
					msg={msg}
				/>
				<Pagination
					total={inscriptions.total}
					pages={inscriptions.pages}
					handlePageChange={handlePageChange}
				/>
			</Col>
		</Row>
	)
}

export default InscriptionsContainer
