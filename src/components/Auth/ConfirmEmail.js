import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectorAuth, verifyEmail } from '../../redux/slices/auth-slice'
import { STATUS } from '../../redux/constants/action-types'
import { Link } from 'react-router-dom'
const ConfirmEmail = () => {
	const { token } = useParams()
	const { msg, status, errors } = useSelector(selectorAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		if (token) {
			dispatch(verifyEmail(token))
		}
	}, [dispatch])

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
										<div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
											<h1 className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
												Confirmar Cuenta
											</h1>

											<div className=' px-5 py-4 rounded-xl bg-white'>
												{status === STATUS.SUCCESSFUL && (
													<>
														<p className='text-center text-success m-2'>
															{msg}
														</p>
														<Link className='text-center my-3' to='/login'>
															Iniciar sesión
														</Link>
													</>
												)}
												{status === STATUS.PENDING && (
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
												)}
												{status === STATUS.FAILED &&
													errors?.map((err) => (
														<div className='text-danger text-center'>
															{err.msg}
														</div>
													))}
											</div>
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

export default ConfirmEmail
