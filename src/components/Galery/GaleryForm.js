import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Button, Spinner, Alert } from 'react-bootstrap'
import { faFont, faImage } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { TextInput } from '../Elements/TextInput'
const gallerySchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	image: Yup.string().required('Image is required'),
})

const GaleryForm = ({ galery, handleSubmit, errors, status, msg }) => {
	const initialValues = {
		name: '',
		image: '',
	}

	return (
		<div className="container">
			<h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
				Cargar Imágenes
			</h3>
			<Formik
				initialValues={initialValues}
				validationSchema={gallerySchema}
				onSubmit={(values) => {
					const formData = new FormData()
					formData.append('image', values.image)
					handleSubmit(formData)
				}}
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
							{status === 'PENDING' ? (
								<Spinner animation="border" variant="secondary" />
							) : (
								<Button
									type="submit"
									className="btn btn-primary btn-lg"
									disabled={isSubmitting}
								>
									Agregar Fotos
								</Button>
							)}
						</div>
						{msg && <Alert variant="success">{msg}</Alert>}
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default GaleryForm
