import React from 'react'
import { Link } from 'react-router-dom'
import './events.css'
const Events = ({ events, errors }) => {
	return (
		<>
			<section className="row">
				{events?.map((event) => (
					<div className="col-md-12 col-lg-6 mx-auto" key={event?._id}>
						<div className="card-box">
							<div className="card-thumbnail d-flex justify-content-center">
								<img src={event?.image_id?.url} className="img-fluid " alt="" />
							</div>
							<h3 className="text-center mt-2 text-dark text-uppercase">
								{event?.name}
							</h3>
							<p className="text-secondary">{event?.description}</p>
							<div>
								<h6>
									Fecha:
									{event?.dates?.map((day, index) => {
										const date = new Date(day).toLocaleDateString()
										return <span key={index}> - {date}</span>
									})}
								</h6>
							</div>
							<Link
								to={`/events/${event._id}`}
								className="btn btn-sm btn-primary float-start"
							>
								Obtener Info
							</Link>
						</div>
					</div>
				))}
			</section>
		</>
	)
}

export default Events
