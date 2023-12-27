import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	selectorAuth,
	verifyToken,
	resetPassword,
	clearState,
} from '../../redux/slices/auth-slice'
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import imageLogin from './image-login.jpg'
import { TextInput } from '../Elements/TextInput'
import { faLock, faLockKeyhole } from '@fortawesome/pro-regular-svg-icons'

const ResetPassword = () => {
	const dispatch = useDispatch()
	const { token } = useParams()
	const { status } = useSelector(selectorAuth)

	useEffect(() => {
		dispatch(clearState())
	}, [])

	useEffect(() => {
		dispatch(verifyToken(token))
	}, [dispatch])

	const initialValues = {
		password: '',
		confirmPassword: '',
	}
	const validationSchema = Yup.object().shape({
		password: Yup.string().required('Required password'),
		confirmPassword: Yup.string()
			.required('Required password')
			.oneOf([Yup.ref('password'), null], 'Passwords must match'),
	})

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
							Reset Password
						</h1>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={(values) => {
								dispatch(resetPassword({ token, data: values }))
							}}
						>
							{({ isSubmitting, errors: errFormik, values, handleChange }) => (
								<Form>
									<TextInput
										name="password"
										type="password"
										label="Contraseña"
										errors={errFormik}
										icon={faLock}
										placeholder="********"
										key="password"
										value={values.password}
										handleChange={handleChange}
										id="password"
									/>

									<TextInput
										name="confirmPassword"
										type="password"
										label="Confirmar Contraseña"
										errors={errFormik}
										icon={faLockKeyhole}
										placeholder="********"
										key="confirmPassword"
										value={values.confirmPassword}
										handleChange={handleChange}
										id="confirmPassword"
									/>
									<Button
										variant="primary"
										type="submit"
										className="w-100"
										disabled={isSubmitting || status === 'PENDING'}
									>
										{isSubmitting || status === 'PENDING' ? (
											<Spinner
												as="span"
												animation="border"
												size="sm"
												role="status"
												aria-hidden="true"
											/>
										) : (
											'Reset Password'
										)}
									</Button>
								</Form>
							)}
						</Formik>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}
export default ResetPassword
