import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	selectorEvent,
	fetchEventsById,
	createEvent,
	updateEvent,
} from '../../redux/slices/event-slice'
import EventsForm from '../../components/Events/EventForm'
import { Col } from 'react-bootstrap'
const EventsFormContainer = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { event, errors, msg } = useSelector(selectorEvent)

	const handleSubmit = (data) => {
		if (id) return dispatch(updateEvent({ id, data }))
		dispatch(createEvent(data))
	}

	useEffect(() => {
		if (id) dispatch(fetchEventsById(id))
	}, [dispatch])

	return (
		<Col>
			<EventsForm
				event={event}
				errors={errors}
				msg={msg}
				handleSubmit={handleSubmit}
			/>
		</Col>
	)
}

export default EventsFormContainer
