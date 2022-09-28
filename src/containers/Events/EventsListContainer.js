import React, { useEffect } from 'react'
import EventList from '../../components/Events/EventsList'
import { useDispatch, useSelector } from 'react-redux'
import { selectorAuth } from '../../redux/slices/auth-slice'

import { selectorEvent, fetchEvents } from '../../redux/slices/event-slice'

const EventsListContainer = () => {
	const dispatch = useDispatch()
	const { events, errors, msg } = useSelector(selectorEvent)
	const { user } = useSelector(selectorAuth)

	useEffect(() => {
		dispatch(fetchEvents(null))
	}, [dispatch])

	return (
		<>
			<div className="col">
				<EventList events={events} errors={errors} user={user} />
			</div>
		</>
	)
}

export default EventsListContainer
