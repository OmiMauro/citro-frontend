import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CustomModal = ({ show, handleClose, title, children, handleSubmit }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					{children}
					<div className="d-flex justify-content-center m-2">
						<Button variant="primary" type="submit">
							Actualizar
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export { CustomModal }
