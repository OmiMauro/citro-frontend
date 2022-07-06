import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectorEvent, fetchEventsById } from '../../redux/slices/event-slice'
import Event from '../../components/Events/Event'
const EventContainer = () => {
	const dispatch = useDispatch()
	const { event, errors, status, msg } = useSelector(selectorEvent)
	const { id } = useParams()

	useEffect(() => {
		if (id) {
			dispatch(fetchEventsById(id))
		}
	}, [dispatch])

	return (
		<>
			<div className="container">
				<Event event={event} errors={errors} status={status} />
			</div>
		</>
	)
}

export default EventContainer
