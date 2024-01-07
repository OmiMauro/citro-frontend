import React from 'react'
import { Link } from 'react-router-dom'
import { ROLES } from '../../redux/constants/action-types'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { CustomButton } from '../Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

const EventList = ({ events, user }) => {
	return (
		<>
			<h3 className="fw-bold text-uppercase my-3">
				<Link to={`/backoffice/`} className="btn btn-outline-warning">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Link>
				Próximos eventos
				{user.roleId === ROLES.ADMIN && (
					<Link to="create" className=" mx-2 ">
						<FontAwesomeIcon icon={faPlus} />
					</Link>
				)}
			</h3>

			<Row>
				{events?.map((event) => (
					<Col md={6} key={event._id}>
						<Card className="mt-2">
							<Card.Img variant="top" src={event?.image_id?.url} />
							<Card.Body>
								<Card.Title className="fw-bold text-uppercase">
									{event?.name}
								</Card.Title>
								<ul className="list-unstyled mb-0">
									<li>
										<strong>Precio: </strong>
										{event?.price}
									</li>
								</ul>
								<p>
									<strong>Lugar: </strong>
									{event?.locality}, {event?.province}, {event?.country}.
								</p>
								<p>
									<strong>Descripción: </strong> {event?.description}
								</p>
								<hr />
								<strong>Día/s:</strong>
								{event?.dates?.map((date) => {
									const dateTransformed = moment(date).format('DD-MM-YYYY')
									return <p key={dateTransformed}>{dateTransformed}</p>
								})}
							</Card.Body>
							<Card.Footer>
								<Link
									to={`${event._id}/inscriptions/create`}
									className="btn btn-outline-warning m-1"
								>
									Inscribirme
								</Link>
								{user.roleId === ROLES.ADMIN && (
									<>
										<Link
											to={`${event._id}/inscriptions`}
											className="btn btn-outline-warning m-1"
										>
											Ver inscripciones
										</Link>
										<Link
											to={`${event._id}/edit`}
											className="btn btn-outline-warning"
										>
											<FontAwesomeIcon icon={faEdit} />
										</Link>
									</>
								)}
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}

export default EventList
