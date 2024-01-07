import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

const Events = ({ events, errors }) => {
	return (
		<Row className="mx-md-4">
			{events?.map((event) => (
				<Col md={12} lg={6} key={event?._id}>
					<Card className="card-box">
						<Card.Img variant="top" src={event?.image_id?.url} alt="" />
						<Card.Body>
							<Card.Title className="text-center mt-2 text-dark text-uppercase">
								{event?.name}
							</Card.Title>
							<Card.Text className="text-secondary">
								{event?.description}
							</Card.Text>
							<Card.Text>
								<strong>Fecha:</strong>
								{event?.dates?.map((day, index) => {
									const date = moment(day).format('DD-MM-YYYY')
									return <span key={index}> {date}</span>
								})}
							</Card.Text>
							<Link
								to={`/events/${event._id}`}
								className="d-flex justify-content-center"
							>
								<Button variant="primary" size="sm">
									<FontAwesomeIcon icon={faInfoCircle} /> Obtener Info
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default Events
