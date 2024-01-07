import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap'
import { STATUS } from '../../redux/constants/action-types'
import { TextInput } from '../Elements'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faListOl } from '@fortawesome/pro-regular-svg-icons'

const validationSchema = Yup.object().shape({
	image: Yup.string().required('Image is required'),
	text: Yup.string().required('Description is required'),
	order: Yup.number().required('Order is required').positive().integer(),
})

const SlidesForm = ({ slide = {}, handleSubmit, status, msg }) => {
	const initialValues = {
		image: slide?.image ?? '',
		text: slide?.text ?? '',
		order: slide?.order ?? '',
	}

	return (
		<Row className="justify-content-center">
			<Col lg={12} xl={11}>
				<h3 className="text-center h3 m-3">Agregar un nuevo slide</h3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						handleSubmit(values)
					}}
				>
					{({ setFieldValue, isSubmitting, handleChange, errors, touched }) => (
						<Form>
							<TextInput
								label="Imagen"
								name="image"
								type="file"
								handleChange={(event) =>
									setFieldValue('image', event.currentTarget.files[0])
								}
								errors={errors.image}
								touched={touched}
								id={slide?._id}
								icon={faFile}
							/>

							<TextInput
								label="Descripción"
								name="text"
								type="text"
								errors={errors.text}
								handleChange={handleChange}
								touched={touched}
								id={slide?._id}
								icon={faListOl}
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
										<FontAwesomeIcon icon={faPlus} />
										Agregar
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

SlidesForm.propTypes = {
	slide: PropTypes.object,
	handleSubmit: PropTypes.func.isRequired,
	status: PropTypes.string,
	msg: PropTypes.string,
}

export default SlidesForm
