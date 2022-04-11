import { Link } from 'react-router-dom'
import { selectorAuth, registered } from '../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import './auth-styles.css'

const Register = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		lastname: '',
		name: '',
		image: '',
		conditions: false
	})
	const { email, password, confirmPassword, lastname, name, conditions } =
		values
	const { auth, user, isLoading } = useSelector(selectorAuth)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value)
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
		/* 	console.log(email, password, confirmPassword, lastname, name, conditions) */
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const body = {
			email,
			name,
			lastname,
			password
		}
		dispatch(registered(body))
	}
	return (
		<>
			<div id='layoutAuthentication'>
				<div id='layoutAuthentication_content'>
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
															onChange={handleChange}
															id='name'
															type='text'
															placeholder='Ingrese su nombre/s'
															value={name}
															name='name'
														/>
														<label htmlFor='name'>Nombre/s</label>
													</div>
												</div>
												<div className='col-md-6'>
													<div className='form-floating'>
														<input
															className='form-control'
															id='lastname'
															onChange={handleChange}
															value={lastname}
															type='text'
															placeholder='Ingrese su apellido'
															name='lastname'
														/>
														<label htmlFor='lastname'>Apellido</label>
													</div>
												</div>
											</div>
											<div className='form-floating mb-3'>
												<input
													className='form-control'
													id='email'
													type='email'
													onChange={handleChange}
													value={email}
													placeholder='name@example.com'
													name='email'
												/>
												<label htmlFor='email'>Correo Electrónico</label>
											</div>

											<div className='row mb-3'>
												<div className='col-md-6'>
													<div className='form-floating mb-3 mb-md-0'>
														<input
															className='form-control'
															id='password'
															type='password'
															value={password}
															onChange={handleChange}
															placeholder='Contraseña'
															name='password'
														/>
														<label htmlFor='password'>Contraseña</label>
													</div>
												</div>
												<div className='col-md-6'>
													<div className='form-floating mb-3 mb-md-0'>
														<input
															className='form-control'
															id='confirmPassword'
															type='password'
															value={confirmPassword}
															placeholder='Confirmar contraseña'
															onChange={handleChange}
															name='confirmPassword'
														/>
														<label htmlFor='confirmPassword'>
															Confirmar contraseña
														</label>
													</div>
												</div>
											</div>
											<div className='mt-2 mb-0'>
												<input
													className='form-check-input '
													type='checkbox'
													value={conditions}
													onChange={(e) =>
														setValues({
															...values,
															conditions: e.target.checked
														})
													}
													id='conditions'
												/>
												<label
													className='form-check-label'
													htmlFor='conditions'>
													He leído y acepto los{' '}
													<a
														href='terms_conditions.html'
														target='_blank'
														rel='noreferrer'>
														Términos y Condiciones
													</a>
												</label>
											</div>
											<div className='mt-4 mb-0'>
												<div className='d-grid'>
													<button
														className='btn btn-primary btn-block'
														onClick={handleSubmit}
														disabled={!conditions}>
														Crear cuenta
													</button>
												</div>
											</div>
										</form>
									</div>
									<div className='card-footer text-center py-3'>
										<div className='small'>
											<Link to='/login'>
												Ya tienes una cuenta? Iniciar sesión
											</Link>
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
export default Register
