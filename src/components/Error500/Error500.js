import React from 'react'

const Error500 = () => {
	return (
		<div class='container'>
			<div class='row justify-content-center'>
				<div class='col-lg-6'>
					<div class='text-center mt-4'>
						<h1 class='display-1'>500</h1>
						<p class='lead'>Error interno en el servidor</p>
						<p class='lead'>Por favor, intente nuevamente en unos instantes.</p>

						<a href=''>
							<i class='fas fa-arrow-left me-1'></i>
							Volver al Inicio
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Error500
