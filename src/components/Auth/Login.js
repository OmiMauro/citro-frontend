import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectorAuth, logged, clearState } from '../../redux/slices/auth-slice'
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import imageLogin from './image-login.jpg'
import { faEnvelope, faLock } from '@fortawesome/pro-regular-svg-icons'
import { STATUS } from '../../redux/constants/action-types'
import { CustomButton, TextInput } from '../Elements'
const Login = () => {
	const { auth, status, errors } = useSelector(selectorAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(clearState())
	}, [])
	useEffect(() => {
		if (auth) {
			navigate('/backoffice')
		}
		dispatch(clearState())
	}, [auth, dispatch, navigate])

	const initialValues = {
		email: '',
		password: '',
	}
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email format')
			.required('Required email'),
		password: Yup.string().required('Required password'),
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
							Iniciar Sesión
						</h1>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={(values) => {
								dispatch(logged(values))
							}}
						>
							{({ isSubmitting, errors: errFormik, values, handleChange }) => (
								<Form>
									<TextInput
										name="email"
										type="email"
										label="Correo Electrónico"
										errors={errFormik}
										icon={faEnvelope}
										placeholder="name_user@gmail.com"
										key="email"
										value={values.email}
										handleChange={handleChange}
										id="email"
									/>

									<TextInput
										name="password"
										type="password"
										label="Contraseña"
										errors={errFormik}
										icon={faLock}
										placeholder="********"
										key="password"
										handleChange={handleChange}
										id="password"
										value={values.password}
									/>
									<div className="d-flex justify-content-start my-2">
										<Link to="/forgot-password">Olvidé mi contraseña</Link>
									</div>
									<CustomButton
										type="submit"
										variant="primary"
										className="w-100"
										disabled={status === STATUS.PENDING}
										loading={status === STATUS.PENDING}
										isLoading={status === STATUS.PENDING}
										spinnerSize="sm"
									>
										Iniciar sesión
									</CustomButton>
								</Form>
							)}
						</Formik>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default Login
