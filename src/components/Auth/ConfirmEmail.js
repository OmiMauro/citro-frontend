import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectorAuth, verifyEmail } from '../../redux/slices/auth-slice'
import { STATUS } from '../../redux/constants/action-types'

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
			<div>
				<h1 className='text-indigo-600 font-black text-6xl'>
					Confirma tu Cuenta
				</h1>
			</div>

			<div className='mt-20 md:mt-5 shadow-lg px-5 py-4 rounded-xl bg-white'>
				{status === STATUS.SUCCESSFUL && (
					<>
						<p className='text-center text-success m-2'>{msg}</p>
						<Link className='text-center my-3' to='/login'>
							Iniciar sesión
						</Link>
					</>
				)}
				{status === STATUS.PENDING && (
					<button class='btn btn-primary btn-lg ' type='button' disabled>
						<span
							class='spinner-border spinner-border-sm'
							role='status'
							aria-hidden='true'></span>
						Por favor, espere...
					</button>
				)}
				{status === STATUS.FAILED &&
					errors?.map((err) => <div className='text-danger'>{err.msg}</div>)}
			</div>
		</>
	)
}

export default ConfirmEmail
