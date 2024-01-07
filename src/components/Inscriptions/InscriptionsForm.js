import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowLeft,
	faBuilding,
	faUser,
	faPhone,
	faAt,
	faMapMarkedAlt,
	faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextInput, CustomButton } from '../Elements'
import { SelectInput } from '../Elements/SelectInput'

const InscriptionsForm = ({
	user,
	event,
	inscription,
	errors,
	handleSubmit,
	msg,
	provinces,
	localities,
	handleLocalities,
}) => {
	const initialValues = {
		_userId: user?._id ?? '',
		_eventId: event?._id ?? '',
		province: '',
		locality: '',
		_inscription: inscription._id ?? '',
	}

	const validationSchema = Yup.object().shape({
		province: Yup.string().required('La provincia es obligatoria'),
		locality: Yup.string().required('La localidad es obligatoria'),
	})
	return (
		<Row className="my-md-4">
			<Col xs={12} md={8} lg={12} className="d-flex justify-content-center">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched }) => (
						<Form className="w-100">
							<Col xs={12} md={6}>
								<SelectInput
									label="Provincia"
									name="province"
									type="text"
									placeholder="Ingrese la provincia"
									icon={faBuilding}
									errors={errors}
									touched={touched}
									options={provinces}
									onChange={handleLocalities}
								/>
							</Col>
							<Col xs={12} md={6}>
								<SelectInput
									label="Localidad"
									name="locality"
									type="text"
									placeholder="Ingrese la localidad"
									icon={faMapMarkedAlt}
									errors={errors}
									touched={touched}
									options={localities}
								/>
							</Col>

							<Col xs={12} md={6}>
								<TextInput
									label="Nombre"
									name="name"
									type="text"
									placeholder="Ingrese su nombre"
									icon={faUser}
									errors={errors}
									touched={touched}
								/>
							</Col>
							<Col xs={12} md={6}>
								<TextInput
									label="Apellido"
									name="surname"
									type="text"
									placeholder="Ingrese su apellido"
									icon={faUser}
									errors={errors}
									touched={touched}
								/>
							</Col>
							<Col xs={12} md={6}>
								<TextInput
									label="Email"
									name="email"
									type="email"
									placeholder="Ingrese su email"
									icon={faAt}
									errors={errors}
									touched={touched}
								/>
							</Col>
							<Col xs={12} md={6}>
								<TextInput
									label="Teléfono"
									name="phone"
									type="text"
									placeholder="Ingrese su teléfono"
									icon={faPhone}
									errors={errors}
									touched
								/>
							</Col>
							<Col xs={12} md={6}>
								<TextInput
									label="Fecha de nacimiento"
									name="birthdate"
									type="date"
									placeholder="Ingrese su fecha de nacimiento"
									icon={faCalendarAlt}
									errors={errors}
									touched={touched}
								/>
							</Col>
							<Col xs={12} md={6}>
								<TextInput
									label="DNI"
									name="dni"
									type="text"
									placeholder="Ingrese su DNI"
									icon={faUser}
									errors={errors}
									touched={touched}
								/>
							</Col>
							<Col xs={12} md={6}>
								<CustomButton type="submit" className="btn btn-primary  w-100">
									Enviar
								</CustomButton>
							</Col>
							<Row className="mb-3">
								<Col xs={12} md={12} className="d-flex justify-content-end">
									<Link
										to={`/events/${event?._id}`}
										className="btn btn-outline-warning"
									>
										<FontAwesomeIcon icon={faArrowLeft} />
										Volver
									</Link>
								</Col>
							</Row>
						</Form>
					)}
				</Formik>

				{inscription?.init_point &&
					window.location.replace(inscription?.init_point)}
			</Col>
		</Row>
	)
}

export default InscriptionsForm
