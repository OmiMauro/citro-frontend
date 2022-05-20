import React from 'react'
import { Link } from 'react-router-dom'

const Error401 = () => {
	return (
		<div class='container'>
			<div class='row justify-content-center'>
				<div class='col-lg-6'>
					<div class='text-center mt-4'>
						<h1 class='display-1'>401</h1>
						<p class='lead'>No Autorizado</p>
						<p>
							No tienes los permisos necesarios para acceder a este recurso.
						</p>
						<Link to='/'>
							<i class='fas fa-arrow-left me-1'></i>
							Volver al Incio
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Error401
