import { Link } from 'react-router-dom'
import { selectorAuth, registered } from '../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import imageLogin from './image-login.jpg'

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
			{/* <div id='layoutAuthentication'>
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
														
													</div>
												</div>
												<div className='col-md-6'>
													<div className='form-floating'>
														
													</div>
												</div>
											</div>
											<div className='form-floating mb-3'>
												
											
												</div>
											
												</div>
											</div>
											
												</div>
											</div>
										</form>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className='vh-90' style={{ 'background-color': '#eee' }}>
				<div className='container h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col-lg-12 col-xl-11'>
							<div
								className='card text-black'
								style={{ 'border-radius': '25px' }}>
								<div className='card-body p-md-5'>
									<div className='row justify-content-center'>
										<div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1'>
											<img
												src={imageLogin}
												className='img-fluid'
												alt='Sample image'
											/>
										</div>
										<div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
											<p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
												Crear una nueva cuenta
											</p>

											<form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i class='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<input
															className='form-control'
															onChange={handleChange}
															id='name'
															type='text'
															placeholder='Ingrese su nombre/s'
															value={name}
															name='name'
														/>
														<label htmlFor='name' className='form-label'>
															Nombre/s
														</label>
													</div>
												</div>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i class='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<input
															className='form-control'
															id='lastname'
															onChange={handleChange}
															value={lastname}
															type='text'
															placeholder='Ingrese su apellido'
															name='lastname'
														/>
														<label htmlFor='lastname' className='form-label'>
															Apellido
														</label>
													</div>
												</div>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i class='fa fa-at fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<input
															type='text'
															id='email'
															className='form-control'
															value={email}
															name='email'
															placeholder='correo@gmail.com'
															onChange={handleChange}
														/>
														<label className='form-label' htmlFor='email'>
															Correo Electronico
														</label>
													</div>
												</div>

												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fa fa-lock fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<input
															id='password'
															type='password'
															value={password}
															onChange={handleChange}
															placeholder='Contraseña'
															name='password'
															className='form-control'
														/>
														<label className='form-label' htmlFor='password'>
															Contraseña
														</label>
													</div>
												</div>

												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fa fa-lock fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<input
															id='confirmPassword'
															type='password'
															value={confirmPassword}
															placeholder='Confirmar contraseña'
															onChange={handleChange}
															name='confirmPassword'
															className='form-control'
														/>
														<label
															className='form-label'
															htmlFor='confirmPassword'>
															Repetir la contraseña
														</label>
													</div>
												</div>

												<div className='form-check d-flex justify-content-center mb-5'>
													<input
														className='form-check-input me-2'
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
															Terminos y Condicones
														</a>
													</label>
												</div>

												<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
													<button
														type='button'
														className='btn btn-primary btn-lg'
														onClick={handleSubmit}
														disabled={!conditions}>
														Registrarse
													</button>
												</div>
											</form>
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
