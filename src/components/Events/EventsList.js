import React from 'react'
import { Link } from 'react-router-dom'

const EventList = ({ events }) => {
	return (
		<div className="mx-auto mt-5" /* style={{ maxWidth: '23rem' }} */>
			<h3 className="h3 fw-bold text-center text-uppercase">
				Próximos eventos
			</h3>
			{events?.map((event) => (
				<div className="card col-6" key={event._id}>
					<div
						className="bg-image hover-overlay ripple"
						data-mdb-ripple-color="light"
					>
						<img src={event?.image_id?.url} className="img-fluid" />
					</div>
					<div className="card-body">
						<h3 className="card-title fw-bold text-uppercase ">
							{event?.name}
						</h3>
						<ul className="list-unstyled list-inline mb-0">
							<li className="list-inline-item me-0">
								{/* <i className="fa fa-star text-warning fa-xs"> </i> */}
								<strong>Precio: </strong>
								{event?.price}
							</li>
						</ul>
						<p className="mb-2">
							<strong>Lugar: </strong>
							{event?.locality}, {event?.province}, {event?.country}.
						</p>
						<p className="card-text">
							<strong>Descripción: </strong> {event?.description}
						</p>
						<hr className="my-4" />
						<strong>Día/s:</strong>
						{event?.dates?.map((date) => {
							const dateTransformed = new Date(date)
							return <p>{dateTransformed.toLocaleDateString()}</p>
						})}
					</div>
					<div className="d-flex justify-content-start ">
						<Link
							to={`/events/${event._id}/inscriptions/create`}
							className="btn btn-outline-primary m-1"
						>
							Inscribirme
						</Link>
						<Link
							to={`${event._id}/inscriptions`}
							className="btn btn-outline-primary m-1"
						>
							Ver inscripciones
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default EventList
