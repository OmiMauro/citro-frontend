import './auth-styles.css'

const Login = () => {
	return (
		<>
			<div id='layoutAuthentication'>
				<div id='layoutAuthentication_content'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-5'>
								<div className='card shadow-lg border-0 rounded-lg mt-5'>
									<div className='card-header'>
										<h3 className='text-center font-weight-light my-4'>
											Iniciar Sesion
										</h3>
									</div>
									<div className='card-body'>
										<form>
											<div className='form-floating mb-3'>
												<input
													className='form-control'
													id='inputEmail'
													type='email'
													placeholder='correo@ejemplo.com'
												/>
												<label for='inputEmail'>Correo electrónico</label>
											</div>
											<div className='form-floating mb-3'>
												<input
													className='form-control'
													id='inputPassword'
													type='password'
													placeholder='Contraseña'
												/>
												<label for='inputPassword'>Contraseña</label>
											</div>
											<div className='form-check mb-3'>
												<input
													className='form-check-input'
													id='inputRememberPassword'
													type='checkbox'
													value=''
												/>
												<label
													className='form-check-label'
													for='inputRememberPassword'>
													Recordar contraseña?
												</label>
											</div>
											<div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
												<a className='small' href='password.html'>
													Olvidó su contraseña?
												</a>
												<a className='btn btn-primary' href='index.html'>
													Iniciar sesion
												</a>
											</div>
										</form>
									</div>
									<div className='card-footer text-center py-3'>
										<div className='small'>
											<a>Necesitas una nueva cuenta? Registrarse</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Login
