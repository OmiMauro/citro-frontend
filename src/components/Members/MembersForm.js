import React, { useState, useEffect } from 'react'
import { Container, Button, Spinner } from 'react-bootstrap'
import { faPhone, faImage, faFont } from '@fortawesome/free-solid-svg-icons'
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { STATUS } from '../../redux/constants/action-types'
import { TextInput, CustomButton } from '../Elements'
import { useSelector } from 'react-redux'
import { selectorMembers } from '../../redux/slices/members-slice'

const memberSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	lastname: Yup.string().required('Last name is required'),
	urlFacebook: Yup.string()
		.url('Enter a valid URL')
		.required('Facebook URL is required'),
	urlInstagram: Yup.string()
		.url('Enter a valid URL')
		.required('Instagram URL is required'),
	urlWhatsapp: Yup.string()
		.url('Enter a valid URL')
		.required('Whatsapp URL is required'),
	phone: Yup.string().required('Phone is required'),
	image: Yup.string().required('Image is required'),
})
const MembersForm = ({
	member = {},
	handleSubmit,
	handleUpdateImage,
	errors,
}) => {
	const initialValues = {
		name: member?.name ?? '',
		lastname: member?.lastname ?? '',
		urlFacebook: member?.urlFacebook ?? '',
		urlInstagram: member?.urlInstagram ?? '',
		urlWhatsapp: member?.urlWhatsapp ?? '',
		phone: member?.phone ?? '',
		image: null,
	}
	const { status, msg } = useSelector(selectorMembers)

	return (
		<Container>
			<h3 className=" fw-bold my-4">
				{member._id
					? 'Editar datos del organizador'
					: 'Crear un nuevo organizador'}
			</h3>
			<Formik
				initialValues={initialValues}
				validationSchema={memberSchema}
				onSubmit={() => {}}
			>
				{({ isSubmitting, setFieldValue }) => (
					<Form>
						<TextInput
							icon={faFont}
							label="Nombre"
							name="name"
							type="text"
							placeholder="Ingrese el nombre"
						/>

						<TextInput
							icon={faFont}
							label="Apellido"
							name="lastname"
							type="text"
							placeholder="Ingrese el apellido"
						/>

						<TextInput
							icon={faFacebook}
							label="Facebook"
							name="urlFacebook"
							type="text"
							placeholder="Ingrese el link de Facebook"
						/>

						<TextInput
							icon={faInstagram}
							label="Instagram"
							name="urlInstagram"
							type="text"
							placeholder="Ingrese el link de Instagram"
						/>

						<TextInput
							icon={faWhatsapp}
							label="Whatsapp"
							name="urlWhatsapp"
							type="text"
							placeholder="Ingrese el link de Whatsapp"
						/>

						<TextInput
							icon={faPhone}
							label="Teléfono"
							name="phone"
							type="text"
							placeholder="Ingrese el teléfono"
						/>

						<TextInput
							icon={faImage}
							label="Imagen"
							name="image"
							type="file"
							placeholder="Seleccione una imagen"
							handleChange={(event) => {
								setFieldValue('image', event.currentTarget.files[0])
							}}
						/>

						<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
							{status === STATUS.PENDING ? (
								<Spinner animation="border" variant="secondary" />
							) : (
								<CustomButton
									type="submit"
									className="btn btn-primary btn-lg"
									disabled={isSubmitting}
								>
									{member._id ? 'Editar' : 'Crear'}
								</CustomButton>
							)}
						</div>
					</Form>
				)}
			</Formik>
		</Container>
	)
}

export default MembersForm
