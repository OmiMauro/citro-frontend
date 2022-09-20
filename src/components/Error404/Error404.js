import React from 'react'
import Error404Image from './error-404.svg'
import { Link } from 'react-router-dom'
const Error404 = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="text-center mt-4">
						<h1 className="display-1">404</h1>
						<img className="mb-4 img-error" src={Error404Image} />
						<p className="lead">
							La URL ingresada no se encontró en el servidor.
						</p>
						<Link to="/">
							<i className="fa fa-arrow-left me-1"></i>
							Volver al Inicio
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Error404
