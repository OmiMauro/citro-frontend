import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Spinner from '../Spinner/Spinner'

import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Alert } from 'react-bootstrap'
import { STATUS } from '../../redux/constants/action-types'
import { TextInput, CustomButton } from '../Elements'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFile,
	faPlus,
	faListOl,
	faUser,
	faPhone,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { editorConfig } from '../../config'
import { faArrowLeft, faSave } from '@fortawesome/pro-regular-svg-icons'
const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	image: Yup.string().required('Image is required'),
	phone: Yup.string().required('Phone is required'),
	email: Yup.string().required('Email is required'),

	urlFacebook: Yup.string().required('Facebook is required'),
	urlInstagram: Yup.string().required('Instagram is required'),
	urlWhatsapp: Yup.string().required('Whatsapp is required'),
	aboutUs: Yup.string().required('About us is required'),
	welcomeText: Yup.string().required('Welcome text is required'),
})

const OrganizationForm = ({
	organization,
	handleSubmit,
	errors,
	handleUpdateImage,
	msg,
	status,
}) => {
	const initialValues = {
		name: organization?.name ?? '',
		image: organization?.image_id?.url ?? '',
		phone: organization?.phone ?? '',
		email: organization?.email ?? '',
		urlFacebook: organization?.urlFacebook ?? '',
		urlInstagram: organization?.urlInstagram ?? '',
		urlWhatsapp: organization?.urlWhatsapp ?? '',
		aboutUs: organization?.aboutUs ?? '',
		welcomeText: organization?.welcomeText ?? '',
	}

	ClassicEditor.defaultConfig = editorConfig
	return (
		<Row className="justify-content-center">
			<Col lg={12} xl={12}>
				<h3 className=" fw-bold mb-4 mt-4">
					<FontAwesomeIcon icon={faArrowLeft} className="me-2" />
					Editar datos de la organización
				</h3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						handleSubmit(values)
						setSubmitting(false)
					}}
				>
					{({ setFieldValue, isSubmitting, handleChange, errors, touched }) => (
						<Form>
							<TextInput
								label="Nombre"
								name="name"
								type="text"
								errors={errors.name}
								handleChange={handleChange}
								touched={touched}
								id={organization?._id}
								icon={faUser}
							/>

							<TextInput
								label="Imagen"
								name="image"
								type="file"
								handleChange={(event) =>
									setFieldValue('image', event.currentTarget.files[0])
								}
								errors={errors.image}
								touched={touched}
								id={organization?._id}
								icon={faFile}
							/>

							<TextInput
								label="Celular"
								name="phone"
								type="text"
								errors={errors.phone}
								handleChange={handleChange}
								touched={touched}
								id={organization?._id}
								icon={faPhone}
							/>

							<TextInput
								label="Email"
								name="email"
								type="email"
								errors={errors.email}
								handleChange={handleChange}
								touched={touched}
								id={organization?._id}
								icon={faEnvelope}
							/>

							<TextInput
								label="Facebook"
								name="urlFacebook"
								type="text"
								errors={errors.urlFacebook}
								handleChange={handleChange}
								touched={touched}
								id={organization?._id}
								icon={faFacebook}
							/>

							<TextInput
								label="Instagram"
								name="urlInstagram"
								type="text"
								errors={errors.urlInstagram}
								handleChange={handleChange}
								touched={touched}
								id={organization?._id}
								icon={faInstagram}
							/>

							<TextInput
								label="Whatsapp"
								name="urlWhatsapp"
								type="text"
								errors={errors.urlWhatsapp}
								handleChange={handleChange}
								touched={touched}
								id={organization?._id}
								icon={faWhatsapp}
							/>

							<TextInput
								label="Texto de bienvenida"
								name="welcomeText"
								type="text"
								errors={errors.welcomeText}
								handleChange={handleChange}
								touched={touched}
								id={organization?._id}
								icon={faListOl}
							/>

							<CKEditor
								editor={ClassicEditor}
								data={initialValues.aboutUs}
								onChange={(event, editor) => {
									const data = editor.getData()
									setFieldValue('aboutUs', data)
								}}
								label="Sobre nosotros"
							/>

							<div className="text-center">
								{status === STATUS.PENDING ? (
									<Spinner animation="border" variant="secondary" />
								) : (
									<CustomButton
										type="submit"
										disabled={isSubmitting}
										className="mt-3"
									>
										<FontAwesomeIcon icon={faSave} className="mx-2" />
										Editar
									</CustomButton>
								)}
							</div>
							{msg && (
								<Alert variant="success" className="text-center mt-3">
									{msg}
								</Alert>
							)}
						</Form>
					)}
				</Formik>
			</Col>
		</Row>
	)
}

OrganizationForm.propTypes = {
	organization: PropTypes.object,
	handleSubmit: PropTypes.func.isRequired,
	status: PropTypes.string,
	msg: PropTypes.string,
}

export default OrganizationForm
