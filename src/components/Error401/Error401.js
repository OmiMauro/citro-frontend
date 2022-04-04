import React from 'react'

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
						<a href=''>
							<i class='fas fa-arrow-left me-1'></i>
							Volver al Incio
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Error401
