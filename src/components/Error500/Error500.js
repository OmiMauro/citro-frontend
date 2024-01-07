import React from 'react'
import Error404Image from './error-404.svg'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons'

const Error500 = () => {
	return (
		<Row className="d-flex justify-content-center">
			<Col xs={12} lg={6}>
				<div className="text-center mt-4">
					<h1 className="display-1">500</h1>
					<Image className="mb-4 img-error" src={Error404Image} fluid />
					<p className="lead">Error del Servidor</p>
					<p>Hubo un error en el servidor, por favor intenta nuevamente.</p>
					<Link to="/" className="btn btn-primary">
						<FontAwesomeIcon icon={faArrowLeft} /> Volver al Inicio
					</Link>
				</div>
			</Col>
		</Row>
	)
}

export default Error500
