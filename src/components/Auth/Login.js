import './auth-styles.css'
import { selectorAuth, logged } from '../../redux/slices/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
const Login = () => {
	const [values, setValues] = useState({
		email: '',
		password: ''
	})
	const { email, password, submitted } = values
	const { auth, user, isLoading } = useSelector(selectorAuth)
	const dispatch = useDispatch()
	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	useEffect(() => {}, [auth])
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
			<div id='layoutAuthentication'>
				<div id='layoutAuthentication_content'>
					<div className='container'>
						{isLoading ? (
							<Spinner></Spinner>
						) : (
							<div className='row justify-content-center'>
								<div className='col-lg-5'>
									<div className='card shadow-lg border-0 rounded-lg mt-5'>
										<div className='card-header'>
											<h3 className='text-center font-weight-light my-4'>
												Iniciar Sesion
											</h3>
										</div>
										<div className='card-body'>
											<form onSubmit={handleSubmit}>
												<div className='form-floating mb-3'>
													<input
														className='form-control'
														id='email'
														type='email'
														value={email}
														name='email'
														placeholder='correo@ejemplo.com'
														onChange={handleChange}
													/>
													<label htmlFor='email'>Correo electrónico</label>
												</div>
												<div className='form-floating mb-3'>
													<input
														className='form-control'
														id='password'
														value={password}
														type='password'
														name='password'
														onChange={handleChange}
														placeholder='Contraseña'
													/>
													<label htmlFor='password'>Contraseña</label>
												</div>

												<div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
													<Link className='small' to='/forgotPassword'>
														Olvidó su contraseña?
													</Link>
												</div>
												<button className='btn btn-primary'>
													Iniciar sesión
												</button>
											</form>
										</div>
										<div className='card-footer text-center py-3'>
											<div className='small'>
												<Link to='/register'>
													Necesitas una nueva cuenta? Registrarse
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
export default Login
