import React, { useEffect } from 'react'
import EventList from '../../components/Events/EventsList'
import { useDispatch, useSelector } from 'react-redux'
import Events from '../../components/Events/Events'
import { selectorEvent, fetchEvents } from '../../redux/slices/event-slice'

const EventsContainer = () => {
	const dispatch = useDispatch()
	const { events, errors } = useSelector(selectorEvent)

	useEffect(() => {
		dispatch(fetchEvents(null))
	}, [dispatch])

	return (
		<>
			<div className="container">
				<h3 className="text-uppercase text-center text-black-50">
					Próximos eventos
				</h3>
				<Events events={events} errors={errors} />
			</div>
		</>
	)
}

export default EventsContainer
