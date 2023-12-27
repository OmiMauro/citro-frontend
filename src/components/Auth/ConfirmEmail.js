import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectorAuth, verifyEmail } from '../../redux/slices/auth-slice'
import { STATUS } from '../../redux/constants/action-types'
import { Link } from 'react-router-dom'

import { Row, Col, Card } from 'react-bootstrap'
import imageLogin from './image-login.jpg'
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
		<Row className="d-flex align-items-center">
			<Col xs={12} lg={6} className="order-lg-1">
				<img
					src={imageLogin}
					className="w-100"
					style={{
						objectFit: 'cover',
						height: '90vh',
					}}
					alt="Login"
				/>
			</Col>
			<Col xs={12} lg={6} className="order-lg-2 px-lg-4">
				<Card
					className="text-black d-flex justify-content-center"
					style={{ borderRadius: '25px' }}
				>
					<Card.Body>
						<h1 className="text-center fw-bold mb-5 border-danger">
							Confirmar Cuenta
						</h1>
						{status === STATUS.SUCCESSFUL && (
							<>
								<p className="text-center text-success m-2">{msg}</p>
								<Link className="text-center my-3" to="/login">
									Iniciar sesión
								</Link>
							</>
						)}
						{status === STATUS.PENDING && (
							<button class="btn btn-primary btn-lg " type="button" disabled>
								<span
									class="spinner-border spinner-border-sm"
									role="status"
									aria-hidden="true"
								></span>
								Por favor, espere...
							</button>
						)}
						{status === STATUS.FAILED &&
							errors?.map((err) => (
								<div className="text-danger text-center">{err.msg}</div>
							))}
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default ConfirmEmail
