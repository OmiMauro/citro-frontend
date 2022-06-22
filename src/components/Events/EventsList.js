import React from 'react'

const EventList = ({ events }) => {
	return (
		<section className="mx-auto" /* style={{ maxWidth: '23rem' }} */>
			{events?.map((event) => (
				<div className="card col-6 row" key={event._id}>
					<div
						className="bg-image hover-overlay ripple"
						data-mdb-ripple-color="light"
					>
						<img src={event?.image_id?.url} className="img-fluid" />
						<a href="#!">
							<div
								className="mask"
								style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
							></div>
						</a>
					</div>
					<div className="card-body">
						<h3 className="card-title font-weight-bold">{event?.name}</h3>
						<ul className="list-unstyled list-inline mb-0">
							<li className="list-inline-item me-0">
								{/* <i className="fa fa-star text-warning fa-xs"> </i> */}
								<strong>Precio: </strong>
								{event?.price}
							</li>
						</ul>
						<p className="mb-2">
							<strong>Lugar: </strong>
							{event?.locality}, {event?.province}, {event?.country}
						</p>
						<p className="card-text">
							<strong>Descripción: </strong> {event?.description}
						</p>
						<hr className="my-4" />
						Días:{' '}
						{event?.dates?.map((date) => {
							const dateTransformed = new Date(date)
							return (
								<strong>
									<p>
										{date},{dateTransformed.getFullYear()}-
										{dateTransformed.getMonth()}-{dateTransformed.getDate()}
									</p>{' '}
								</strong>
							)
						})}
						<div>
							<h4>Hoteles</h4>
							{/*   */}
							<ul className="row list-unstyled list-inline justify-content-center">
								{event?.hotels?.map((hotel) => (
									<li className="list-inline-item me-0 col-8 card text-start">
										<p className="m-0">
											<strong> Nombre:</strong> {hotel?.name}
										</p>
										<p className="m-0">
											<strong> Cel:</strong> {hotel?.phone}
										</p>
										<p className="m-0">
											<strong> URL:</strong>{' '}
											<a href={hotel?.url} target="_blank">
												{' '}
												{hotel?.url}
											</a>
										</p>
										<p className="m-0">
											<strong> Ubicacion:</strong> {hotel?.location}
										</p>
										<div className="mx-auto">
											<button className="btn btn-warning">Editar</button>
											<button className="btn btn-danger">Eliminar</button>
										</div>
									</li>
								))}
							</ul>
						</div>
						<ul className="list-unstyled list-inline d-flex justify-content-between">
							<li className="list-inline-item me-0">
								<div className="chip me-0">5:30PM</div>
							</li>
							<li className="list-inline-item me-0">
								<div className="chip bg-secondary text-white me-0">7:30PM</div>
							</li>
							<li className="list-inline-item me-0">
								<div className="chip me-0">8:00PM</div>
							</li>
							<li className="list-inline-item me-0">
								<div className="chip me-0">9:00PM</div>
							</li>
						</ul>
						<a href="#!" className="btn btn-link link-secondary p-md-1 mb-0">
							Button
						</a>
					</div>
				</div>
			))}
		</section>
	)
}

export default EventList
