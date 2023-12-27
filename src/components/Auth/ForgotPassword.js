import React, { useState, useEffect } from 'react'
import imageLogin from './image-login.jpg'

import { useDispatch, useSelector } from 'react-redux'
import {
	forgotPassword,
	selectorAuth,
	clearState,
} from '../../redux/slices/auth-slice'

import { Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { TextInput } from '../Elements/TextInput'
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
	const dispatch = useDispatch()
	const { errors, status } = useSelector(selectorAuth)

	useEffect(() => {
		dispatch(clearState())
	}, [])

	const initialValues = {
		email: '',
	}
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email format')
			.required('Required email'),
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
							Recuperar contraseña
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
										label="Email"
										name="email"
										type="email"
										icon={faEnvelope}
										errors={errFormik}
										placeholder="Email"
										value={values.email}
										handleChange={handleChange}
										key="email"
										id="email"
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
											'Recupera tu contraseña'
										)}
									</Button>
								</Form>
							)}
						</Formik>
						<div className="d-flex justify-content-start my-2">
							<Link to="/login" className="text-primary">
								Regresar al login
							</Link>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default ForgotPassword
