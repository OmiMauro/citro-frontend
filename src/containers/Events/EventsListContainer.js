import React, { useEffect } from 'react'
import EventList from '../../components/Events/EventsList'
import { useDispatch, useSelector } from 'react-redux'

import { selectorEvent, fetchEvents } from '../../redux/slices/event-slice'

const EventsListContainer = () => {
	const dispatch = useDispatch()
	const { events, errors, msg } = useSelector(selectorEvent)

	useEffect(() => {
		dispatch(fetchEvents(null))
	}, [dispatch])

	return (
		<>
			<div className="col">
				<EventList events={events} errors={errors} />
			</div>
		</>
	)
}

export default EventsListContainer
