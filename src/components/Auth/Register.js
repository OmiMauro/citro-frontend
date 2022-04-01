import React from 'react'

const Register = () => {
	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-7'>
						<div className='card shadow-lg border-0 rounded-lg mt-5'>
							<div className='card-header'>
								<h3 className='text-center font-weight-light my-4'>
									Crear una nueva cuenta
								</h3>
							</div>
							<div className='card-body'>
								<form>
									<div className='row mb-3'>
										<div className='col-md-6'>
											<div className='form-floating mb-3 mb-md-0'>
												<input
													className='form-control'
													id='inputFirstName'
													type='text'
													placeholder='Ingrese su nombre/s'
												/>
												<label for='inputFirstName'>Nombre/s</label>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-floating'>
												<input
													className='form-control'
													id='inputLastName'
													type='text'
													placeholder='Ingrese su apellido'
												/>
												<label for='inputLastName'>Apellido</label>
											</div>
										</div>
									</div>
									<div className='form-floating mb-3'>
										<input
											className='form-control'
											id='inputEmail'
											type='email'
											placeholder='name@example.com'
										/>
										<label for='inputEmail'>Correo Electrónico</label>
									</div>
									<div className='row mb-3'>
										<div className='col-md-6'>
											<div className='form-floating mb-3 mb-md-0'>
												<input
													className='form-control'
													id='inputPassword'
													type='password'
													placeholder='Contraseña'
												/>
												<label for='inputPassword'>Contraseña</label>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-floating mb-3 mb-md-0'>
												<input
													className='form-control'
													id='inputPasswordConfirm'
													type='password'
													placeholder='Confirmar contraseña'
												/>
												<label for='inputPasswordConfirm'>
													Confirmar contraseña
												</label>
											</div>
										</div>
									</div>
									<div className='mt-4 mb-0'>
										<div className='d-grid'>
											<a
												className='btn btn-primary btn-block'
												href='login.html'>
												Crear cuenta
											</a>
										</div>
									</div>
								</form>
							</div>
							<div className='card-footer text-center py-3'>
								<div className='small'>
									<a>Ya tienes una cuenta? Login</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Register
