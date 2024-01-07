import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowLeft,
	faBackpack,
	faEdit,
	faFile,
	faLeft,
	faListOl,
	faPlus,
} from '@fortawesome/pro-regular-svg-icons'
import PropTypes from 'prop-types'
const SlidesList = ({ slides = [], handleDelete, msg }) => {
	return (
		<Row>
			<h3 className="fw-bold mb-5 mt-4 text-uppercase">
				<Link to={`/backoffice/`}>
					<FontAwesomeIcon icon={faArrowLeft} className="me-2" />
				</Link>
				Lista de Slides
				<Link to={`/backoffice/slides/create/`}>
					<FontAwesomeIcon icon={faPlus} className="mx-2" />
				</Link>
			</h3>

			<Row>
				{slides.map((slide) => (
					<Col md={12} key={slide._id} className="mb-3">
						<Card>
							<Card.Img
								variant="top"
								src={slide.image_id.url}
								alt={slide.text}
							/>
							<Card.Body className="d-flex justify-content-end">
								<Link
									to={`/backoffice/slides/edit/${slide._id}`}
									className="btn btn-outline-warning mx-s2"
								>
									<FontAwesomeIcon icon={faEdit} />
								</Link>
								{msg && <p>{msg}</p>}
								<Button
									variant="outline-dark"
									onClick={() => handleDelete(slide._id)}
								>
									Eliminar Slide
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Row>
	)
}
SlidesList.propTypes = {
	slides: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	msg: PropTypes.string,
}
export default SlidesList
