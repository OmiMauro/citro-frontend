import React from 'react'
import { Link } from 'react-router-dom'
import error401 from './error-401.png'

const Error401 = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="text-center mt-4">
						<h1 className="display-1">401</h1>
						<img className="mb-4 img-error" src={error401} />
						<p className="lead">No Autorizado</p>
						<p>
							No tienes los permisos necesarios para acceder a este recurso.
						</p>
						<Link to="/">
							<i className="fa fa-arrow-left me-1"></i>
							Volver al Incio
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Error401
