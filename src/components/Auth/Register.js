import { Link } from 'react-router-dom'
import { selectorAuth, registered } from '../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import imageLogin from './image-login.jpg'

import './auth-styles.css'
import { STATUS } from '../../redux/constants/action-types'

const Register = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		lastname: '',
		name: '',
		phone: '',
		conditions: false
	})
	const {
		email,
		password,
		confirmPassword,
		lastname,
		name,
		phone,
		conditions
	} = values
	const { auth, user, errors, status } = useSelector(selectorAuth)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const body = {
			email,
			name,
			lastname,
			password,
			phone
		}
		dispatch(registered(body))
	}
	return (
		<>
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
													<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
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
															Nombre/s*
														</label>
														{errors?.map(
															(err) =>
																err.param == 'name' && (
																	<div className='text-danger'>{err.msg}</div>
																)
														)}
													</div>
												</div>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
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
															Apellido*
														</label>
														{errors?.map(
															(err) =>
																err.param == 'lastname' && (
																	<div className='text-danger'>{err.msg}</div>
																)
														)}
													</div>
												</div>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fa fa-long-arrow-right fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<input
															className='form-control'
															onChange={handleChange}
															id='phone'
															type='text'
															placeholder='Ingrese su nro de celular'
															value={phone}
															name='phone'
														/>
														<label htmlFor='phone' className='form-label'>
															Celular *
														</label>
														{errors?.map(
															(err) =>
																err.param == 'phone' && (
																	<div className='text-danger'>{err.msg}</div>
																)
														)}
													</div>
												</div>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fa fa-at fa-lg me-3 fa-fw'></i>
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
															Correo Electronico*
														</label>
														{errors?.map(
															(err) =>
																err.param == 'email' && (
																	<div className='text-danger'>{err.msg}</div>
																)
														)}
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
															Contraseña*
														</label>
														{errors?.map(
															(err) =>
																err.param == 'password' && (
																	<div className='text-danger'>{err.msg}</div>
																)
														)}
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
															Repetir la contraseña*
														</label>
														{errors?.map(
															(err) =>
																err.param == 'confirmPassword' && (
																	<div className='text-danger'>{err.msg}</div>
																)
														)}
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
												<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-danger'>
													{errors?.map(
														(err) =>
															err.msg &&
															!err.param && (
																<div className='text-danger'>{err.msg}</div>
															)
													)}
												</div>
												<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
													{status === STATUS.PENDING ? (
														<button
															class='btn btn-primary btn-lg '
															type='button'
															disabled>
															<span
																class='spinner-border spinner-border-sm'
																role='status'
																aria-hidden='true'></span>
															Loading...
														</button>
													) : (
														<button
															type='button'
															className='btn btn-primary btn-lg'
															onClick={handleSubmit}
															disabled={!conditions}>
															Registrarse
														</button>
													)}
												</div>
											</form>
											{status === STATUS.SUCCESSFUL && (
												<p className='text-success text-center'>
													Su cuenta fue creada con éxito
												</p>
											)}
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
