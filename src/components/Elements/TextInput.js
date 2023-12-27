import React from 'react'
import { ErrorMessage } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, Col, InputGroup } from 'react-bootstrap'
import './style.css'
const TextInput = ({
	icon,
	label,
	name,
	type,
	id,
	errors,
	placeholder,
	value,
	handleChange,
}) => {
	return (
		<Form.Group id={id || name} as={Col} className="mb-3">
			{label && (
				<Form.Label className="text-start d-flex justify-content-start align-items-center">
					{label}
				</Form.Label>
			)}

			<InputGroup className="mb-3">
				{icon && (
					<InputGroup.Text id={label}>
						<FontAwesomeIcon icon={icon} className="fa-icon" />
					</InputGroup.Text>
				)}
				<Form.Control
					name={name}
					type={type}
					as={Form.Control}
					className="text-start"
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
				/>
			</InputGroup>
		</Form.Group>
	)
}

export { TextInput }
