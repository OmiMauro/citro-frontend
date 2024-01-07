import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import error401 from './error-401.png'

const Error401 = () => {
	return (
		<Row className="d-flex justify-content-center">
			<Col xs={12} lg={6}>
				<div className="text-center mt-4">
					<h1 className="display-1">401</h1>
					<Image className="mb-4 img-error" src={error401} fluid />
					<p className="lead">No Autorizado</p>
					<p>No tienes los permisos necesarios para acceder a este recurso.</p>
					<Link to="/" className="btn btn-primary">
						<i className="fa fa-arrow-left me-1"></i> Volver al Inicio
					</Link>
				</div>
			</Col>
		</Row>
	)
}

export default Error401
