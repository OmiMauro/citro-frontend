import './auth-styles.css'
import { selectorAuth, logged, clearState } from '../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import imageLogin from './image-login.jpg'
const Login = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		submitted: false
	})
	const { email, password, submitted } = values
	const { auth, user, status, errors } = useSelector(selectorAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	useEffect(() => {
		if (auth) {
			navigate('/backoffice')
		}
	}, [auth])
	useEffect(() => {
		dispatch(clearState())
	}, [])
	const handleSubmit = (e) => {
		e.preventDefault()
		const body = {
			email,
			password
		}
		dispatch(logged(body))
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
												Iniciar Sesión
											</p>
											<form className='mx-1 mx-md-4 ' onSubmit={handleSubmit}>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fa fa-at fa-lg me-3 fa-fw'></i>

													<div className='form-outline flex-fill mb-0'>
														<input
															type='email'
															id='email'
															className='form-control'
															value={email}
															name='email'
															placeholder='correo@ejemplo.com'
															onChange={handleChange}
														/>
														<label className='form-label' htmlFor='email'>
															Correo Electronico
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
															value={password}
															type='password'
															name='password'
															onChange={handleChange}
															placeholder='Contraseña'
															className='form-control'
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
												<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-danger'>
													<Link className='text-dark' to='/forgot-password'>
														Olvidó su contraseña?
													</Link>
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
															Iniciar sesion
														</button>
													)}
												</div>
											</form>
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
export default Login
