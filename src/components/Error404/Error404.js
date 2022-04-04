import React from 'react'
import Error404Image from './error-404.svg'
const Error404 = () => {
	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-lg-6'>
					<div className='text-center mt-4'>
						<img className='mb-4 img-error' src={Error404Image} />
						<p className='lead'>
							La URL ingresada no se encontró en el servidor.
						</p>
						<a href='index.html'>
							<i className='fas fa-arrow-left me-1'></i>
							Volver al Inicio
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Error404
