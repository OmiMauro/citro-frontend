import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	selectorAuth,
	verifyToken,
	resetPassword
} from '../../redux/slices/auth-slice'
import imageLogin from './image-login.jpg'

const ResetPassword = () => {
	const [values, setValues] = useState({
		password: '',
		confirmPassword: ''
	})
	const { password, confirmPassword } = values
	const dispatch = useDispatch()
	const { token } = useParams()
	const { errors, msg, status } = useSelector(selectorAuth)

	useEffect(() => {
		dispatch(verifyToken(token))
	}, [dispatch])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === confirmPassword) {
			dispatch(resetPassword({ token, data: password }))
		}
		msg = 'Las contraseñas no coinciden'
	}

	const handleChange = (e) => {
		const { value, name } = e.target
		setEmail({ ...values, [name]: value })
	}
	return (
		<>
			<div className='vh-90' style={{ backgroundColor: '#eee' }}>
				<div className='container h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col-lg-12 col-xl-11'>
							<div className='card text-black' style={{ borderRadius: '25px' }}>
								<div className='card-body p-md-5'>
									<div className='row justify-content-center'>
										<div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
											<p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
												Ingresá tú nueva contraseña
											</p>
											<form className='mx-1 mx-md-4 ' onSubmit={handleSubmit}>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fa fa-at fa-lg me-3 fa-fw'></i>

													<div className='form-outline flex-fill mb-0'>
														<input
															type='password'
															id='password'
															className='form-control'
															value={password}
															name='password'
															placeholder='correo@ejemplo.com'
															onChange={handleChange}
														/>
														<label className='form-label' htmlFor='password'>
															Contraseña
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
													<i className='fa fa-at fa-lg me-3 fa-fw'></i>

													<div className='form-outline flex-fill mb-0'>
														<input
															type='password'
															id='confirmPassword'
															className='form-control'
															value={confirmPassword}
															name='confirmPassword'
															placeholder='correo@ejemplo.com'
															onChange={handleChange}
														/>
														<label
															className='form-label'
															htmlFor='confirmPassword'>
															Repite la contraseña
														</label>
													</div>
												</div>
												<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
													{status === 'PENDING' ? (
														<button
															class='btn btn-primary btn-lg '
															type='button'
															disabled>
															<span
																class='spinner-border spinner-border-sm'
																role='status'
																aria-hidden='true'></span>
															Por favor, espere...
														</button>
													) : (
														<button
															type='button'
															className='btn btn-primary btn-lg col-10'
															onClick={handleSubmit}>
															Recuperar contraseña
														</button>
													)}
												</div>
											</form>
											{msg && <p className='text-center text-success'>{msg}</p>}
										</div>

										<div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
											<img
												src={imageLogin}
												className='img-fluid'
												height='100%'
												alt='Sample image'
											/>
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

export default ResetPassword
