import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
	selectorAuth,
	clearState,
	registered,
} from '../../redux/slices/auth-slice'
import { Row, Col, Card, Button, Spinner, Form } from 'react-bootstrap'
import { Formik } from 'formik'

import * as Yup from 'yup'
import imageLogin from './image-login.jpg'
import { TextInput } from '../Elements/TextInput'
import {
	faEnvelope,
	faLock,
	faUser,
	faPhone,
	faUsers,
	faLockKeyhole,
} from '@fortawesome/pro-regular-svg-icons'
import { STATUS } from '../../redux/constants/action-types'

const Register = () => {
	// dispatch(registered(body))
	const { auth, status } = useSelector(selectorAuth)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	useEffect(() => {
		if (auth) {
			navigate('/backoffice')
		}
		dispatch(clearState())
	}, [auth, dispatch, navigate])

	const initialValues = {
		name: '',
		lastname: '',
		phone: '',
		email: '',
		password: '',
		confirmPassword: '',
		conditions: false,
	}
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required name'),
		lastname: Yup.string().required('Required lastname'),
		phone: Yup.string().required('Required phone'),
		email: Yup.string()
			.email('Invalid email format')
			.required('Required email'),
		password: Yup.string().required('Required password'),
		confirmPassword: Yup.string()
			.required('Required password')
			.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		conditions: Yup.bool().oneOf([true], 'Required conditions'),
	})

	return (
		<Row className="d-flex align-items-center">
			<Col xs={12} lg={6} className="order-lg-1">
				<img
					src={imageLogin}
					className="w-100"
					style={{
						objectFit: 'cover',
						height: '100vh',
					}}
					alt="Register"
				/>
			</Col>
			<Col xs={12} lg={6} className="order-lg-2 px-lg-4">
				<Card
					className="text-black d-flex justify-content-center"
					style={{ borderRadius: '25px' }}
				>
					<Card.Body>
						<h1 className="text-center fw-bold mb-lg-2 ">Registrarse</h1>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={(values) => {
								dispatch(registered(values))
							}}
						>
							{({ errors: errFormik, values, handleChange }) => (
								<Form>
									<TextInput
										name="name"
										type="text"
										label="Nombre"
										value={values.name}
										errors={errFormik}
										icon={faUser}
										placeholder={'Nombre'}
										key={'name'}
										handleChange={handleChange}
										id="name"
									/>
									<TextInput
										name="lastname"
										type="text"
										label="Apellido"
										errors={errFormik}
										value={values.lastname}
										icon={faUsers}
										placeholder={'Apellido'}
										key={'lastname'}
										handleChange={handleChange}
										id="lastname"
									/>
									<TextInput
										name="phone"
										type="text"
										label="Telefono"
										errors={errFormik}
										icon={faPhone}
										value={values.phone}
										placeholder={'Telefono'}
										key={'phone'}
										handleChange={handleChange}
										id="phone"
									/>
									<TextInput
										name="email"
										type="email"
										label="Correo Electrónico"
										errors={errFormik}
										icon={faEnvelope}
										value={values.email}
										placeholder="name_user@gmail.com"
										key="email"
										handleChange={handleChange}
										id="email"
									/>
									<TextInput
										name="password"
										type="password"
										label="Contraseña"
										errors={errFormik}
										icon={faLock}
										placeholder={'********'}
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
										placeholder={'********'}
										key="confirmPassword"
										value={values.confirmPassword}
										handleChange={handleChange}
										id="confirmPassword"
									/>
									<Form.Group className="mb-3 d-flex justify-content-start">
										<Form.Check
											type="checkbox"
											name="conditions"
											label="Acepto los terminos y condiciones"
											errors={errFormik}
											value={values.conditions}
											onChange={handleChange}
											id="conditions"
										/>
									</Form.Group>
									<div className="d-flex justify-content-center">
										{status === STATUS.PENDING ? (
											<button
												className="btn btn-primary btn-lg "
												type="button"
												disabled
											>
												<span
													className="spinner-border spinner-border-sm"
													role="status"
													aria-hidden="true"
												></span>
												Loading...
											</button>
										) : (
											<Button
												type="submit"
												className="btn btn-primary w-100"
												disabled={!values.conditions}
											>
												Registrarse
											</Button>
										)}
									</div>
								</Form>
							)}
						</Formik>
						{/* redirect to signin */}
						<div className="d-flex justify-content-start my-2">
							¿Ya tienes una cuenta?{' '}
							<Link
								to="/login"
								className="text-primary ps-1"
								style={{ textDecoration: 'none' }}
							>
								Inicia sesión
							</Link>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}
export default Register
