import React, { useState } from 'react'
import { CustomModal } from './CustomModal'

const ImageUpdateModal = ({ id, handleUpdateImage }) => {
	const [showModal, setShowModal] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		handleUpdateImage(formData)
		setShowModal(false)
	}

	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => setShowModal(true)}
			>
				Abrir Modal
			</button>

			<CustomModal
				show={showModal}
				handleClose={() => setShowModal(false)}
				title="Actualizar imagen"
				handleSubmit={handleSubmit}
			>
				<Form.Group controlId="image">
					<Form.Label>Imagen* {id}</Form.Label>
					<Form.Control type="file" name="image" />
				</Form.Group>
			</CustomModal>
		</>
	)
}

export { ImageUpdateModal }
