import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Row, Col, Alert } from 'react-bootstrap'
import { TextInput, CustomButton } from '../Elements'
import {
	faImage,
	faBuilding,
	faGlobe,
	faMapMarkedAlt,
	faCalendarAlt,
	faCalendarTimes,
	faInfoCircle,
	faUser,
	faUserTag,
	faUserTie,
	faUserGraduate,
	faMoneyBill,
	faMoneyCheckAlt,
	faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'
import { editorConfig } from '../../config'
const validationSchema = Yup.object({
	name: Yup.string().required('El nombre del evento es obligatorio'),
	image: Yup.mixed().required('La imagen del evento es obligatoria'),
	dates: Yup.date().required('La fecha del evento es obligatoria'),
	country: Yup.string().required('El país del evento es obligatorio'),
	province: Yup.string().required('La provincia del evento es obligatoria'),
	locality: Yup.string().required('La localidad del evento es obligatoria'),
	valid_until: Yup.date().required('La fecha de vencimiento es obligatoria'),
	description: Yup.string().required(
		'La descripción del evento es obligatoria'
	),

	is_public: Yup.boolean().required('La visibilidad del evento es obligatoria'),
})
const EventForm = ({ event, handleSubmit, errors, handleUpdateImage, msg }) => {
	const initialValues = {
		name: event?.name ?? '',
		image_url: event?.image_id?.url ?? '',
		price: '',
		valid_until: event?.valid_until ?? '',

		dates: event?.dates ?? '',
		country: event?.country ?? '',
		province: event?.province ?? '',
		locality: event?.locality ?? '',
		description: event?.description ?? '',
		is_public: event?.is_public ?? '',
	}
	const { id } = useParams()
	ClassicEditor.defaultConfig = editorConfig
	return (
		<Row className="my-md-4">
			<h4 className="text-uppercase ">
				<Link to="/backoffice/events" className="me-2">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Link>
				{id ? 'Editar evento' : 'Crear evento'}
			</h4>
			<Col xs={12} md={12} lg={12} className="mx-auto">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ values, handleChange, setFieldValue }) => (
						<Form>
							<Col xs={12} md={12} lg={12}>
								<TextInput
									label="Nombre del evento"
									icon={event?.name ? faInfoCircle : faBuilding}
									name="name"
									type="text"
									placeholder="Nombre del evento"
									value={values.name}
									handleChange={handleChange}
								/>
							</Col>

							<TextInput
								label="Fecha de vencimiento"
								icon={event?.name ? faCalendarTimes : faCalendarAlt}
								name="valid_until"
								type="date"
								placeholder="Fecha de vencimiento"
								value={values.valid_until}
								handleChange={handleChange}
							/>
							<TextInput
								label="Fecha"
								icon={event?.name ? faCalendarTimes : faCalendarAlt}
								name="dates"
								type="date"
								placeholder="Fecha"
								value={values.dates}
								handleChange={handleChange}
							/>
							<TextInput
								label="País"
								icon={event?.name ? faInfoCircle : faMapMarkedAlt || faGlobe}
								name="country"
								type="text"
								placeholder="País"
								value={values.country}
								handleChange={handleChange}
							/>
							<TextInput
								label="Provincia"
								icon={event?.name ? faInfoCircle : faMapMarkedAlt || faGlobe}
								name="province"
								type="text"
								placeholder="Provincia"
								value={values.province}
								handleChange={handleChange}
							/>
							<TextInput
								label="Localidad"
								icon={event?.name ? faInfoCircle : faMapMarkedAlt || faGlobe}
								name="locality"
								type="text"
								placeholder="Localidad"
								value={values.locality}
								handleChange={handleChange}
							/>
							<TextInput
								label="Precio"
								icon={event?.name ? faInfoCircle : faBuilding}
								name="price"
								type="text"
								placeholder="Precio"
								value={values.price}
								handleChange={handleChange}
							/>
							<TextInput
								label="Descripción"
								icon={id ? faInfoCircle : faUserTie || faUserGraduate}
								name="description"
								type="text"
								placeholder="Descripción"
								value={values.description}
								handleChange={handleChange}
							/>
							{/* <TextInput
								label="Visibilidad"
								icon={event?.name ? faInfoCircle : faGlobe}
								name="is_public"
								type="boolean"
								placeholder="Visibilidad"
								value={values.is_public}
								handleChange={handleChange}
							/> */}
							<TextInput
								label="Imagen"
								icon={event?.name ? faInfoCircle : faImage || faMapMarkedAlt}
								name="image"
								type="file"
								placeholder="Imagen"
								value={values.image}
								handleChange={(e) => {
									setFieldValue('image', e.target.files[0])
									handleUpdateImage(e)
								}}
							/>
							<Col xs={12} md={12} lg={12}>
								<CustomButton
									type="submit"
									variant="primary"
									className="text-uppercase w-100"
								>
									{event?.name ? 'Actualizar' : 'Crear'}
								</CustomButton>
							</Col>
						</Form>
					)}
				</Formik>
			</Col>
		</Row>
	)
}

export default EventForm
